import * as dotenv from 'dotenv'

type Cache = {
  databaseUrl: string

  port: number
}

let cache: Cache

const defaults: Partial<Cache> = {
  port: 3000,
}

;(function loadFromEnv(seed?: Partial<Cache>): Cache {
  dotenv.config()

  const parsedEnsuredDefaulted = {
    databaseUrl: ensureVar('DATABASE_URL'),

    port: parseInt(process.env.PORT, 10) || defaults.port,
  }

  const config = {
    ...parsedEnsuredDefaulted,
    ...seed
  }

  cache = config

  return config
})()

export function getConfig(): Cache {
  return cache
}

function ensureVar(name: string) {
  if (!process.env[name]) throw new Error(`process.env.${name} required`)

  return process.env[name]
}

