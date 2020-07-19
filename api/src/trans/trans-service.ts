import { getRepository } from 'typeorm'

import { Trans } from './trans-entities'

export async function findAll(): Promise<Trans[]> {
  const transs = await getRepository(Trans).find()

  return transs
}
