const path = require('path')
const fsExtra = require('fs-extra')

fsExtra.copySync(
  path.join(process.cwd(), '.cache/package.json.bk'),
  path.join(process.cwd(), 'package.json'),
  { overwrite: true }
)

fsExtra.removeSync(path.join(process.cwd(), '.cache/package.json.bk'))
