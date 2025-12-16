import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Reading } from '../../readings/entities/reading.entity';

@Entity()
export class Sensor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column({ nullable: true })
  location: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Reading, (reading) => reading.sensor)
  readings: Reading[];
}

