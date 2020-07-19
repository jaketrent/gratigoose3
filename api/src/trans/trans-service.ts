import { getRepository } from 'typeorm'

import { Trans } from './trans-entities'

export async function findAll(): Promise<Trans[]> {
  const transs = await getRepository(Trans).find()

  return transs
}

export async function findOne(id: string): Promise<Trans> {
  const trans = await getRepository(Trans).findOne(id)

  return trans
}

export async function create(trans: Partial<Trans>): Promise<Trans> {
  const savedTrans = await getRepository(Trans).save(trans)

  console.log('saved', savedTrans )

  return savedTrans
}
