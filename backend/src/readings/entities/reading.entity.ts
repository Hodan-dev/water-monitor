import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Sensor } from '../../sensors/entities/sensor.entity';

@Entity()
export class Reading {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('float')
    value: number;

    @CreateDateColumn()
    timestamp: Date;

    @ManyToOne(() => Sensor, (sensor) => sensor.readings, { onDelete: 'CASCADE' })
    sensor: Sensor;
}

