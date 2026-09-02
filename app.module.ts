import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './departments/department.entity';
import { Employee } from './employees/employee.entity';
import { Project } from './projects/project.entity';
import { Task } from './tasks/task.entity';
import { DepartmentsModule } from './departments/departments.module';

@Module({
  imports: [
    DepartmentsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [Department, Employee, Project, Task],
        synchronize: true,
      }),
    }),
  ],
})
export class AppModule {}
