import {OneToMany, Entity, Unique, PrimaryGeneratedColumn, Column} from "typeorm";

import { Trans } from '../trans/trans-entities'

@Entity()
@Unique('cat_abbrev_key', ['abbrev'])
export class Cat {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  abbrev: string;

  @Column()
  name: string;

  @Column()
  description: string | null;

  @Column()
  created: Date;

  @Column()
  updated: Date;

  @OneToMany(type => Trans, trans => trans.cat)
  transs: Trans[]
}
