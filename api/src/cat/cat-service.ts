import { getRepository } from 'typeorm'

import { Cat } from './cat-entities'

export async function findAll(): Promise<Cat[]> {
  const cats = await getRepository(Cat).find()

  return cats
}

export async function findOne(id): Promise<Cat> {
  const cat = await getRepository(Cat).findOne(id)

  return cat
}
