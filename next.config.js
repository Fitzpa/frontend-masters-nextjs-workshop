const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

// using nextjs plugins
const withNextEnv = nextEnv()
module.exports = withNextEnv()