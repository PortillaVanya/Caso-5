import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Department } from '../departments/department.entity';
import { Task } from '../tasks/task.entity';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido: string;

  @Column({ length: 150, unique: true })
  email: string;

  @Column({ length: 100 })
  cargo: string;

  @Column()
  departmentId: number;

  @ManyToOne(() => Department, (department) => department.employees)
  @JoinColumn({ name: 'departmentId' })
  department: Department;

  @OneToMany(() => Task, (task) => task.assignedEmployee)
  tasks: Task[];
}
