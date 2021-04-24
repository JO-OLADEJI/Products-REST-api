const Joi = require('joi');

const validateProduct = (product) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().optional(),
    price: Joi.number().min(0).required(),
    category: Joi.string().min(3).required()
  });
  const result = schema.validate(product);
  return result;
}





module.exports = validateProduct;