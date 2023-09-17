const {Realtor: RealtorModel} = require('../models/Realtor')

const RealtorController = {
  create: async(req, res) => {
    try{
      const Realtor = {
        name: req.body.name,
        crc: req.body.crc,
        image: req.body.image,
        password: req.body.password,
        offer: req.body.offer
      };

      const response = await ServiceModel.create(service);
      
      res.status(201).json({response, message: "Usuario criado com sucesso!"});
    }catch(err){
      console.log(err)
    }
  }
};

module.exports = RealtorController;