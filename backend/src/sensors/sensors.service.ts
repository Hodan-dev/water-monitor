import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { Sensor } from './entities/sensor.entity';

@Injectable()
export class SensorsService {
  constructor(
    @InjectRepository(Sensor)
    private sensorsRepository: Repository<Sensor>,
  ) { }

  create(createSensorDto: CreateSensorDto) {
    const sensor = this.sensorsRepository.create(createSensorDto);
    return this.sensorsRepository.save(sensor);
  }

  findAll() {
    return this.sensorsRepository.find();
  }

  findOne(id: number) {
    return this.sensorsRepository.findOneBy({ id });
  }

  update(id: number, updateSensorDto: UpdateSensorDto) {
    return this.sensorsRepository.update(id, updateSensorDto);
  }

  remove(id: number) {
    return this.sensorsRepository.delete(id);
  }
}

