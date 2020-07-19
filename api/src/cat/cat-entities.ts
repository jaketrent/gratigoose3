import {Entity, Unique, PrimaryGeneratedColumn, Column} from "typeorm";

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
}
