const boom = require('boom')

const User = require('../models/User')


// Add a new car
exports.signup = async (req, reply) => {
    try {
        var check = User.find({'email': req.body.email})
        if ((await check).length === 0) {
            const user = new User(req.body)
            return user.save()
        } else {
            return {"message": "User's email exist"}
        }
    } catch (err) {
      throw boom.boomify(err)
    }
}

exports.login = async (req, reply) => {
    try {
        var email = req.body.email
        var password = req.body.password
        const users = User.find({
            $and: [
                {'email': email, 'password': password}
            ]
        })
        return users
    } catch(err) {
        throw boom.boomify(err)
    }
}

exports.updateUser = async (req, reply) => {
    try {
      const id = req.params.id
      const users = req.body
      const { ...updateData } = users
      const update = await User.findByIdAndUpdate(id, updateData, { new: true })
      return update
    } catch (err) {
      throw boom.boomify(err)
    }
  }