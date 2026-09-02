# TaskFlow Enterprise - Sistema de Gestión de Proyectos

API REST para una agencia de desarrollo de software. Permite gestionar departamentos, empleados, proyectos y tareas, con cálculo automático del progreso de cada proyecto.

## Stack Tecnológico

- **Framework**: NestJS
- **Persistencia**: TypeORM + MySQL
- **Configuración**: Variables de entorno (`.env`)
- **Validación**: DTOs con `class-validator` + `ValidationPipe` global

## Estructura del proyecto

```
src/
├── main.ts                    # Bootstrap + ValidationPipe global + prefijo /api
├── app.module.ts              # ConfigModule + TypeOrmModule (lectura del .env)
├── data-source.ts             # Configuración de conexión (TypeORM DataSource)
├── config/
│   └── database.config.ts     # Registro de configuración de BD
├── departments/
│   └── department.entity.ts   # ENTIDAD (base para Persona 2)
├── employees/
│   └── employee.entity.ts     # ENTIDAD (base para Persona 3)
├── projects/
│   └── project.entity.ts      # ENTIDAD (base para Persona 4)
└── tasks/
    └── task.entity.ts         # ENTIDAD (base para Persona 5)
```

## Entidades y Relaciones

```
Department ──< Employee   (un empleado pertenece a un departamento)
Department ──< Project    (un proyecto pertenece a un departamento)
Project ────< Task        (un proyecto tiene muchas tareas)
Employee ───< Task        (un empleado tiene muchas tareas asignadas)
```

## Configuración

1. Crear la base de datos en MySQL:
   ```sql
   CREATE DATABASE taskflow_enterprise;
   ```

2. Configurar el archivo `.env` con tus credenciales:
   ```
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=taskflow_enterprise
   PORT=3000
   ```

3. Sincronizar el esquema (crea las tablas automáticamente):
   ```
   npm run schema:sync
   ```

## Ejecución del servidor

```
npm run start:dev
```

La API queda disponible en `http://localhost:3000/api`

## Reparto de trabajo en el grupo

- **Persona 1 (base)**: Configuración del proyecto, conexión BD, entidades. ✅ Hecho
- **Persona 2**: Módulo de Departamentos (CRUD).
- **Persona 3**: Módulo de Empleados (CRUD vinculado a departamento).
- **Persona 4**: Módulo de Proyectos (CRUD vinculado a departamento).
- **Persona 5**: Módulo de Tareas + cálculo de progreso + endpoint de detalle avanzado.
