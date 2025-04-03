import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Must match pgAdmin
      port: 5432, // Default PostgreSQL port
      username: 'postgres', // Default username
      password: 'Powerds1234!', // <<< MOST IMPORTANT!
      database: 'school_db', // Must exist in pgAdmin
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class AppModule {}
