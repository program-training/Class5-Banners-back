import Joi from "joi";
import { UserInterface } from "../interface/userInterface";
import { emailRegex } from "./regex";

const userValidation = (user: UserInterface) => {
  const schema = Joi.object({
    email: Joi.string()
      .ruleset.pattern(emailRegex)
      .rule({ message: 'user "mail" must be a valid mail' })
      .required(),

    password: Joi.string()
      .ruleset.regex(/^[a-zA-Z0-9]{8,20}$/)
      .rule({
        message:
          'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
      })
      .required(),
  });
  return schema.validate(user);
};

export default userValidation;
