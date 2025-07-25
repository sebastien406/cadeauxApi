const Joi = require('joi');

//TODO: completer ici le schema
const giftSchema = Joi.object({
    title: Joi.string().trim().min(3).required(),
    description: Joi.string().optional(),
    price: Joi.number().min(0).required(),
    reserved: Joi.boolean().optional()
});

module.exports = giftSchema;
