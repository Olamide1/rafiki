const userController = require('../controllers/userController')
const docController = require('../controllers/docController')

const routes = [
    {
        method: 'POST',
        url: '/api/createaccount',
        handler: userController.signup
    },
    {
        method: 'POST',
        url: '/api/login',
        handler: userController.login
    },
    {
        method: 'POST',
        url: '/api/update',
        handler: userController.updateUser
    },
    {
        method: 'POST',
        url: '/api/createdoc',
        handler: docController.createDoc
    },
    {
        method: 'POST',
        url: '/api/findone',
        handler: docController.findOneDoc
    },
    {
        method: 'POST',
        url: '/api/findall',
        handler: docController.findAllDoc
    },
    {
        method:'POST',
        url: '/api/updatedocument',
        handler: docController.updateDoc
    },
    {
        method: 'POST',
        url: '/api/deletedoc',
        handler: docController.deleteDoc
    }
]

module.exports = routes