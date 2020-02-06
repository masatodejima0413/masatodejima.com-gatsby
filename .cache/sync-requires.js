const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/masatodejima/program/privete/project-name/.cache/dev-404-page.js"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/masatodejima/program/privete/project-name/src/pages/index.tsx")))
}

