import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{

    @ApiProperty({example: 'user@mail.ru', description: 'Email address'})
    readonly email : string;

    @ApiProperty({example: '12345678', description: 'Password'})
    readonly password: string;
}