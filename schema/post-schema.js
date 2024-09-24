import Joi from "joi";

export const addPostSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "Title must be a string",
    "string.required": "Title is required",
  }),
  description: Joi.string().required().messages({
    "string.base": "Body must be a string",
    "string.required": "Body is required",
  }),
  level: Joi.string()
    .required()
    .valid("easy", "medium", "hard")
    .messages({
      "string.base": "Title must be a string",
      "string.required": "Level is required",
      "string.only": 'Level must be one of easy, medium and hard',
    }),
});

export const editPostSchema = Joi.object({
  title: Joi.string().messages({ "string.base": "Title must be a string" }),
  description: Joi.string().messages({ "string.base": "Body must be a string" }),
  level: Joi.string().valid("easy", "medium", "hard").messages({
    "string.base": "Title must be a string",
    "string.valid": 'Level must be one of easy, medium and hard',
  }),
});
