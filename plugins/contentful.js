const contentfull = require('contentful')

const config = {
  space: 'fzfr204uubfs',
  accessToken:
    'e7f502aeff60edee7e8196530d537b5b313535fcf4bc91c7543cc7dafba8a133'
}

module.exports = contentfull.createClient(config)
