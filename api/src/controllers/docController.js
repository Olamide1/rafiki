const boom = require('boom')

const Doc =  require('../models/Document')

exports.createDoc = async (req, reply) => {
    try {
         const docu = new Doc(req.body)
         return docu.save() 
    } catch (err) {
      throw boom.boomify(err)
    }
}

 exports.findAllDoc = async (req, reply) => {
    try {
        var mydocu = Doc.find({'creator': req.body.creator})
        return mydocu
        
    } catch (err) {
      throw boom.boomify(err)
    }
},
exports.findOneDoc = async (req, reply) => {
    try {
        var id = req.body.id
        var mydocu = Doc.findById(id)
        return mydocu
    } catch(err) {
        throw  boom.boomify(err)
    }
}
exports.updateDoc = async (req, reply) => {
    try {
      const id = req.body.id
      const docu = req.body
      const { ...updateData } = docu
      const update = await Doc.findByIdAndUpdate(id, updateData, { new: true })
      return update
    } catch (err) {
      throw boom.boomify(err)
    }
  }
  exports.deleteDoc = async (req, reply) => {
    try {
        var id = req.body.id
        var mydocu = await Doc.findByIdAndRemove(id)
        return mydocu
    } catch(err) {
        throw  boom.boomify(err)
    }
}