import path from 'path'
import { ConnectionOptions, createConnection } from 'typeorm'

import { getConfig } from './config'


export async function connect() {
  await createConnection(getOpts())
}

function getOpts() {

const config = getConfig()

const opts: ConnectionOptions = {
  name: 'default',
  type: 'postgres' as 'postgres',
  url: config.databaseUrl,

  entities: [path.resolve(__dirname, '..', '**/*-entities{.ts,.js}')],

  migrations: [path.resolve(__dirname, 'migrations', '**/*{.ts,.js}')],

  migrationsTableName: 'migrations',

  /* cli: { */
  /*   migrationsDir: 'src/db/migrations' */
  /* }, */
}
return opts 
}
