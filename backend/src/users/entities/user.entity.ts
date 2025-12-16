import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum UserRole {
    ADMIN = 'ADMIN',
    OFFICER = 'OFFICER', // Field officer who submits reports
    VIEWER = 'VIEWER',   // NGO/Gov who views reports
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        type: 'simple-enum',
        enum: UserRole,
        default: UserRole.OFFICER,
    })
    role: UserRole;

    @Column({ nullable: true })
    organization: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

