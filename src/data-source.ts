import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Department } from './departments/department.entity';
import { Employee } from './employees/employee.entity';
import { Project } from './projects/project.entity';
import { Task } from './tasks/task.entity';

config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Department, Employee, Project, Task],
  synchronize: true,
  logging: false,
});

if (require.main === module) {
  AppDataSource.initialize()
    .then(() => {
      console.log('Base de datos conectada y esquema sincronizado.');
      return AppDataSource.destroy();
    })
    .catch((err) => {
      console.error('Error conectando a la base de datos:', err);
      process.exit(1);
    });
}
