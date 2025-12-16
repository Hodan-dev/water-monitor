import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorsModule } from './sensors/sensors.module';
import { ReadingsModule } from './readings/readings.module';
import { Sensor } from './sensors/entities/sensor.entity';
import { Reading } from './readings/entities/reading.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { ReportsModule } from './reports/reports.module';
import { Report } from './reports/entities/report.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Sensor, Reading, User, Report],
      synchronize: true, // Auto-create tables (dev only)
    }),
    SensorsModule,
    ReadingsModule,
    UsersModule,
    AuthModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
