const {body, query} = require('express-validator');

exports.logInValidation = () => {
    return[
        query().custom((value, { req }) => {
            if (Object.keys(req.query).length > 0) {
                throw new Error('Query parameters not allowed');
            }
            return true;
        }),

        body("email")
        .exists().withMessage("username is required in the body")
        .isEmail().withMessage("email must be a valid email"),

        body("password")
        .exists().withMessage("password is required")
        .isString().withMessage("password must be a string")
    ]
}