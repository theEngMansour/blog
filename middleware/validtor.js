import initMiddleware from 'middleware/init-middleware';
import validateMiddleware from 'middleware/validate-middleware';
import langs from 'site-settings/site-translations';
import { check, validationResult } from 'express-validator';

export const userValidationRules = initMiddleware(
  validateMiddleware([
    check('name').notEmpty().withMessage(langs.ar.nameNotEmpty),
    check('email').notEmpty().withMessage(langs.ar.emailNotEmpty),
    check('password').notEmpty().withMessage(langs.ar.passwordNotEmpty),
    check('password').isLength({ min: 5 }).withMessage(langs.ar.passwordIsLength),
  ], validationResult)
)

/*     
check('day').isInt({ min: 1, max: 31}),
check('gender').isIn(['male','female']),
check('mobile_phone').isMobilePhone(['th-TH']),
check('boolean').isBoolean(), 
*/