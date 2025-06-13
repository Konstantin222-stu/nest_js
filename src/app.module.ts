import { Module } from "@nestjs/common";
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
    controllers: [UsersController],
    providers: [],
    imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'QAZWSXEDC',
      database: 'nestjs',
    autoLoadModels: true,
      models: [],
    }),  
        UsersModule
    ],
})
export class AppModule{}