import http from 'http'
import app from './app.js'

//設定預設埠號為6001，要不然就用系統預設
//改成3000是因為我們這組的規定
const port = process.env.port || 8000

//建立伺服器
const server = http.createServer(app)
server.listen(port)
