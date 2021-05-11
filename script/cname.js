const fs = require("fs")

fs.writeFile("./public/CNAME", "omg.byeguo.cn", function(err) {
  if (err) {
    throw err
  }
})
