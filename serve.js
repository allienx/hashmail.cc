const fs = require('fs')
const path = require('path')

const dotenv = require('dotenv')
const express = require('express')
const morgan = require('morgan')
const sirv = require('sirv')

const env = getEnv()

serve(env)

function serve(config) {
  express()
    .use(morgan('dev'))
    .use(sirv(config.STATIC_CONTENT_DIR, { single: true }))
    .listen(config.PORT, (err) => {
      if (err) {
        throw err
      }

      console.log(`\nRunning on http://localhost:${config.PORT} 🏃💨\n`)
    })
}

function getEnv() {
  return {
    STATIC_CONTENT_DIR: 'build',
    PORT: 5678,
    ...parseEnvFile('.env-cmd.local'),
  }
}

function parseEnvFile(filename) {
  const fullPath = path.join(__dirname, filename)

  try {
    const contents = fs.readFileSync(fullPath, 'utf-8')

    return dotenv.parse(contents)
  } catch (err) {
    return {}
  }
}
