import { CreateUserDto } from "src/student-registration/users/dto/create-user.dto";

export class CreateStudentDto {
    readonly department: string;
    readonly matriculationNumber: string;
    readonly modeOfEntry: string;
    readonly programOfStudy: string;
    readonly yearOfEntry: Date;
    readonly user: CreateUserDto;
}

