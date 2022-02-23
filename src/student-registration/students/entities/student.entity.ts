import { User } from "src/student-registration/users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    department: string;

    @Column({nullable: true})
    matriculationNumber: string;

    @Column()
    modeOfEntry: string;

    @Column()
    programOfStudy: string;

    @Column()
    yearOfEntry: Date;

    @JoinColumn()
    @OneToOne(type => User, user => user.student, {cascade:true})
    user: User;
}
