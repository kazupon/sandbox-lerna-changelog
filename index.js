const { diff } = require('semver')

const items = [
  ['0.0.2', '0.0.1']
]
items.forEach(function (item) {
  console.log(item)
  const v1 = item[0]
  const v2 = item[1]
  console.log(v1, v2, diff(v1, v2))
})