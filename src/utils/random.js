export const toGetRandomHeadImage = () => {
  const requireContext = require.context(
    "../../content/assets/top_image/",
    true,
    /^\.\/.*\.png$/
  )
  const projectImgs = requireContext.keys().map(requireContext)
  const len = projectImgs.length
  return projectImgs[Math.floor(Math.random() * (len - 1))]
}
