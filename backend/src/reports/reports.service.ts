import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report } from './entities/report.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private reportsRepository: Repository<Report>,
  ) { }

  create(createReportDto: CreateReportDto, userId?: number) {
    const report = this.reportsRepository.create({
      ...createReportDto,
      reportedBy: userId ? { id: userId } as any : undefined,
    });

    return this.reportsRepository.save(report);
  }

  findAll() {
    return this.reportsRepository.find({ relations: ['reportedBy'] });
  }

  findOne(id: number) {
    return this.reportsRepository.findOne({ where: { id }, relations: ['reportedBy'] });
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return this.reportsRepository.update(id, updateReportDto);
  }

  remove(id: number) {
    return this.reportsRepository.delete(id);
  }
}

