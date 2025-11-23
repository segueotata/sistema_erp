import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ unique: true, length: 50, nullable: false })
  username: string;

  @Column({ unique: true, length: 100, nullable: false })
  email: string;

  @Column({ length: 255, nullable: false })
  hashed_password: string;

  @Column({ nullable: false })
  permission: string;
}
