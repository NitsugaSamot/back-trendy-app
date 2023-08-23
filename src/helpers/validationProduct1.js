const validationProduct1 = (form) => {
  let errors = {};

  if (!form.price) errors.price = "Insert a price";

  if (form.price.length < 3|| form.price.length >= 5) errors.price = "The price must be between 100 and 10000";
  
  if (typeof !form.price === 'number') errors.price = "Should be number";
  
  if (!form.description) errors.description = "You must write a description";
  
  if (form.description.length < 10 || form.description.length > 700)
    errors.description = "The description must have between 10 and 700 characters";

  return errors;
};
  
  
  module.exports = validationProduct1;