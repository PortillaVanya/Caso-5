import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Department } from '../departments/department.entity';
import { Task } from '../tasks/task.entity';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  nombre: string;

  @Column({ type: 'date' })
  fechaInicio: string;

  @Column({ length: 255, nullable: true })
  descripcion: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  progreso: number;

  @Column()
  departmentId: number;

  @ManyToOne(() => Department, (department) => department.projects)
  @JoinColumn({ name: 'departmentId' })
  department: Department;

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];
}
