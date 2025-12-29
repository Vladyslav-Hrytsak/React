import * as Joi from "joi"; // імпортую joi

export const userValidator = Joi.object({ //створюю обʼєкт для валідації полів форми
    username: Joi.string().pattern(new RegExp('^[a-zA-Zа]{1,20}$')).messages({
        "string.pattern.base": "Your username value didnt match pattern",
    }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Zа]{1,20}$')).messages({
        "string.pattern.base": "Your password value didnt match pattern",
    }),
})