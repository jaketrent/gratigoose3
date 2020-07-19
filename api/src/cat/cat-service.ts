import { getRepository } from 'typeorm'

import { Cat } from './cat-entities'

export async function findAll(): Promise<Cat[]> {
  const cats = await getRepository(Cat).find()

  return cats
}
