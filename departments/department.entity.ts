import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Employee } from '../employees/employee.entity';
import { Project } from '../projects/project.entity';

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 255, nullable: true })
  descripcion: string;

  @OneToMany(() => Employee, (employee) => employee.department)
  employees: Employee[];

  @OneToMany(() => Project, (project) => project.department)
  projects: Project[];
}
