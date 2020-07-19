import {OneToMany, Entity, Unique, PrimaryGeneratedColumn, Column} from "typeorm";

import { Trans } from '../trans/trans-entities'

@Entity()
@Unique('acct_abbrev_key', ['abbrev'])
export class Acct {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  abbrev: string;

  @Column()
  name: string;

  @Column()
  created: Date;

  @Column()
  updated: Date;

  @Column({ default: true })
  liquidable: boolean;

  @OneToMany(type => Trans, trans => trans.acct)
  transs: Trans[]
}
