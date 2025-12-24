import * as Joi from "joi";

export const userValidator = Joi.object({
    username: Joi.string().pattern(/w{4,}/).required().messages({
        "string.pattern.base": "nfvjdnvskjsvn"
    }),
    password: Joi.string().min(3).max(10).required(),
    age: Joi.number().min(1).max(100).required(),
})