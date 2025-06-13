import { Module } from "@nestjs/common";
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";


@Module({
    controllers: [],
    providers: [],
    imports: [
    ConfigModule.forRoot({
        envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.HOST_DB,
      port: Number(process.env.PORT_DB),
      username: process.env.USERNAME_DB,
      password: process.env.PASSWORD_DB,
      database: process.env.DATABASE_DB,
      models: [User],
      autoLoadModels: true,
    }),  
        UsersModule
    ],
})
export class AppModule{}