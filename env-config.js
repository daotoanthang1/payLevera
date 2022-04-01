const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  APP_ID: dev ? '226eb5dba26c4e7b986794dc7f6c284c' : '9049a567ff334bfc93a625effdce2485',
  API_BASE: dev ? 'http://localhost:2099/api' : 'https://pay.levera.vn/api'
}