import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ReportStatus } from '../entities/report.entity';

export class CreateReportDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    location: string;

    // Optional userId if we want to manually set it, though usually taken from JWT
    @IsOptional()
    userId?: number;
}

