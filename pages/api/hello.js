import { validationResult } from 'express-validator';
import { userValidationRules } from 'middleware/validtor'

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await userValidationRules(req, res)
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
      }

      nextFunction(req, res)

      break;
      default:
      res.status(404).json({ message: "Request HTTP Method Incorrect." })
      break;
  }
}