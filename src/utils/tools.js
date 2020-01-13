class Tools {
  // 动态加载script
  static asyncLoadScript(url, callback) {
    let old_script = document.getElementById(url)
    if (old_script) {
      if (old_script.ready === true) {
        callback()
        return
      } else {
        document.body.removeChild(old_script)
      }
    }
    let script = document.createElement("script")
    script.id = url
    script.src = url
    script.async = true
    script.setAttribute("SameSite", "None")
    script.setAttribute("Secure", true)
    script.onload = script.onreadystatechange = function() {
      if (script.ready) {
        return false
      }
      if (
        !script.readyState ||
        script.readyState === "loaded" ||
        script.readyState === "complete"
      ) {
        script.ready = true
        callback()
      }
    }
    document.body.appendChild(script)
  }

  // 生成随即图片
  static toGetRandomHeadImage = () => {
    const requireContext = require.context(
      "../../content/assets/top_image/",
      true,
      /^\.\/.*\.png$/
    )
    const projectImgs = requireContext.keys().map(requireContext)
    const len = projectImgs.length
    return projectImgs[Math.floor(Math.random() * (len - 1))]
  }
}

export default Tools
