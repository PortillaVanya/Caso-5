import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Project } from '../projects/project.entity';
import { Employee } from '../employees/employee.entity';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  titulo: string;

  @Column({ length: 255, nullable: true })
  descripcion: string;

  @Column({ length: 50, default: 'Pendiente' })
  estado: string;

  @Column({ type: 'date', nullable: true })
  fechaVencimiento: string;

  @Column()
  projectId: number;

  @Column()
  assignedEmployeeId: number;

  @ManyToOne(() => Project, (project) => project.tasks)
  @JoinColumn({ name: 'projectId' })
  project: Project;

  @ManyToOne(() => Employee, (employee) => employee.tasks)
  @JoinColumn({ name: 'assignedEmployeeId' })
  assignedEmployee: Employee;
}
