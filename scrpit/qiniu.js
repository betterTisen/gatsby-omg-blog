const qiniu = require("qiniu")

const path = require("path")
const fs = require("fs")

const basePath = "../content/blog/2020_07_13_mzsf_5/"

const accessKey = ""
const secretKey = ""
const bucket = "byeguo"

function mapDir(dir) {
  const dirfile = fs.readdirSync(dir)
  return dirfile.filter(item =>
    [".gif", ".jpg", ".jpeg", ".png"].includes(path.extname(item))
  )
}

function QNupload(basePath, fileName) {
  const key = `gzh/blog/${path.basename(basePath)}/${fileName}` //上传到服务器的名称
  const localFile = basePath + fileName // 本地文件路径

  var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
  var options = {
    scope: bucket,
  }
  var putPolicy = new qiniu.rs.PutPolicy(options)
  var uploadToken = putPolicy.uploadToken(mac)

  var config = new qiniu.conf.Config()
  config.zone = qiniu.zone.Zone_z3 // 空间对应的机房
  var formUploader = new qiniu.form_up.FormUploader(config)
  var putExtra = new qiniu.form_up.PutExtra()

  formUploader.putFile(uploadToken, key, localFile, putExtra, function(
    respErr,
    respBody,
    respInfo
  ) {
    if (respErr) {
      throw respErr
    }
    if (respInfo.statusCode == 200) {
      console.log("https://cdn.byeguo.cn/" + respBody.key)
    } else {
      console.log(respInfo.statusCode)
      console.log(respBody)
    }
  })
}

const dirfile = mapDir(basePath)

dirfile.forEach(filename => {
  QNupload(basePath, filename)
})
