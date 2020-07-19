import {JoinColumn, ManyToOne, Entity, PrimaryGeneratedColumn, Column} from "typeorm";

import { Acct } from '../acct/acct-entities'
import { Cat } from '../cat/cat-entities'

@Entity()
export class Trans {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string | null;

  @Column()
  amt: number;

  @ManyToOne(type => Cat, cat => cat.transs)
  @JoinColumn({ name: 'cat_id' })
  cat: Cat

  @ManyToOne(type => Acct, acct => acct.transs)
  @JoinColumn({ name: 'acct_id' })
  acct: Acct
}
