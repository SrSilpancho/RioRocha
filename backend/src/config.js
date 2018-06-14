import nconf from 'nconf';
import Joi from 'joi';

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production'])
    .default('development'),
  PORT: Joi.number()
    .default(3003),
  MONGOOSE_DEBUG: Joi.boolean()
    .when('NODE_ENV', {
      is: Joi.string().equal('development'),
      then: Joi.boolean().default(true),
      otherwise: Joi.boolean().default(false),
    }),
  LOG_FORMAT: Joi.string()
    .when('NODE_ENV', {
      is: Joi.string().equal('production'),
      then: Joi.string().default('combined'),
      otherwise: Joi.string().default('dev'),
    }),
  JWT_SECRET: Joi.string()
    // .required()
    .description('JWT Secret'),
  MONGO_URI: Joi.string()
    // .required()
    .description('Mongo DB URI'),
}).unknown().required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

nconf
  // 1. Command-line arguments
  .argv()
  // 2. Environment variables
  .env([
    'NODE_ENV',
    'PORT',
    'JWT_SECRET',
    'MONGO_URI',
  ])
  // 4. Defaults variables
  .defaults(envVars);

export default nconf;
