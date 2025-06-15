import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table,Model } from "sequelize-typescript";


interface UserCreationAttrs{
    email:string;
    password:string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{

    @ApiProperty({example: 1, description: 'Unique identifier'})
    @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true, unique: true})
    declare  id :number;

    @ApiProperty({example: 'user@email.ru', description: 'Email address'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '12345678', description: 'Password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Is user banned'})
    @Column({type:DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'For bad behavior', description: 'Reason for ban'})
    @Column({type: DataType.STRING, allowNull: true})
    bannedReason: string;
}