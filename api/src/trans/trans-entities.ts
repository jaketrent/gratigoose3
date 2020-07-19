import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Trans {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string | null;

  @Column()
  amt: number;

}
