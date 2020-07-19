import {JoinColumn, ManyToOne, Entity, PrimaryGeneratedColumn, Column} from "typeorm";

import { Acct } from '../acct/acct-entities'
import { Cat } from '../cat/cat-entities'

@Entity()
export class Trans {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'trans_date' })
  transDate: Date

  @Column({ name: 'cleared_date' })
  clearedDate: Date

  @Column()
  description: string | null;

  @Column()
  amt: number;

  @Column({ name: 'cat_id' })
  catId: number

  @ManyToOne(type => Cat, cat => cat.transs)
  @JoinColumn({ name: 'cat_id' })
  cat: Cat

  @Column({ name: 'acct_id' })
  acctId: number

  @ManyToOne(type => Acct, acct => acct.transs)
  @JoinColumn({ name: 'acct_id' })
  acct: Acct

  @Column({ name: 'check_num' })
  checkNum: number

  @Column()
  location: string

  @Column()
  year: number

  @Column()
  month: number

  @Column()
  day: number

  @Column()
  created: Date

  @Column()
  updated: Date
}
