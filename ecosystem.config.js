module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: "levera-pay",
      script: "server.js",
      instances: 0,
      exec_mode: "cluster",
      env: {},
      env_production: { 
        NODE_ENV: "production"
      },
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: "cc",
      host: ["203.171.27.182"],
      ref: "origin/master",
      repo: "git@github.com:phongmh307/levera-pay.git",
      path: "/home/cc/levera-pay",
      "post-deploy": "cd fontend && yarn; yarn build"
    },
  },
};