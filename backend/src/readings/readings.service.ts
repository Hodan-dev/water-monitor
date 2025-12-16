import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReadingDto } from './dto/create-reading.dto';
import { UpdateReadingDto } from './dto/update-reading.dto';
import { Reading } from './entities/reading.entity';

@Injectable()
export class ReadingsService {
  constructor(
    @InjectRepository(Reading)
    private readingsRepository: Repository<Reading>,
  ) { }

  create(createReadingDto: CreateReadingDto) {
    // We handle the relation by passing the ID directly if the entity supports it, 
    // or we construct the object. TypeORM often allows passing object with ID for relation.
    const reading = this.readingsRepository.create({
      value: createReadingDto.value,
      sensor: { id: createReadingDto.sensorId }
    });
    return this.readingsRepository.save(reading);
  }

  findAll() {
    return this.readingsRepository.find({ relations: ['sensor'] });
  }

  findOne(id: number) {
    return this.readingsRepository.findOne({ where: { id }, relations: ['sensor'] });
  }

  update(id: number, updateReadingDto: UpdateReadingDto) {
    return this.readingsRepository.update(id, updateReadingDto);
  }

  remove(id: number) {
    return this.readingsRepository.delete(id);
  }
}

