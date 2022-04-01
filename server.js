const next = require("next");
const express = require("express");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const jwtDecode = require("jwt-decode");
const { json, urlencoded } = require("body-parser");
const { createServer } = require("http");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const middlewares = (server) => {
  server.use(cookieParser());
  server.use(json());
  server.use(urlencoded({ extended: true }));
  server.use(compression());
};

const checkAuthRoutes = ["/account", "/portal", "/manage", "/purchase", "/manage-account"];

const checkAccessToken = (req) => {
  const accessToken = req.cookies.lp_jwt;
  const user = (req.user = jwtDecode(accessToken));
  req.user.accessToken = accessToken;
  const validateSite = !req.url.includes("admin") || user.role != "USER";
  return user.exp * 1000 > Date.now() && validateSite;
};

const checkAuth = (req, res, next) => {
  if (req.cookies && req.cookies.lp_jwt) {
    if (checkAccessToken(req)) return next();
    else return res.redirect("/logout");
  }

  res.redirect("/");
};

const cachingMiddleware = (req, res, next) => {
  res.setHeader("Cache-Control", "public, max-age=315360000");
  next();
};

const getCookieDomainBy = (hostname) => {
  if (dev) return hostname.replace(":4008", "");
  return `.${hostname}`;
};

const routes = (server) => {
  server.get(/admin/, checkAuth, handle);
  server.get(/user/, checkAuth, handle);
  checkAuthRoutes.forEach((route) => server.get(route, checkAuth, handle));

  server.get(
    "/",
    (req, res, next) => {
      if (req.cookies.lp_jwt) {
        const user = jwtDecode(req.cookies.lp_jwt);
        const url = user.role == "ADMIN" ? "/admin/portal" : "/user/purchase";
        return res.redirect(url)
      } else {
        return next();
      }
    },
    handle
  );

  server.get("/logout", (req, res) => {
    res.clearCookie("lp_jwt", { domain: getCookieDomainBy(req.headers.host) });
    return res.redirect("/");
  });

  server.get(
    /^\/.*\.(png|svg|css|ttf|jpg|ico|mp3)$/,
    cachingMiddleware,
    handle
  );

  server.get("*", handle);
};

app.prepare().then(() => {
  const server = express();

  middlewares(server);
  routes(server);

  createServer(server).listen(4008, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:4008");
  });
});
