import { getRepository } from 'typeorm'

import { Acct } from './acct-entities'

export async function findAll(): Promise<Acct[]> {
  const accts = await getRepository(Acct).find()

  return accts
}

export async function findOne(id: number): Promise<Acct> {
  const acct = await getRepository(Acct).findOne(id)

  return acct
}
