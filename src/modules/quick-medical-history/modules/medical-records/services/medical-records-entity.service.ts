import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { MedicalRecordsEntity } from '../entities/medical-records.entity';
import { MedicalRecordsRepository } from '../repositories/medical-records.repository';


@Injectable()
export class MedicalRecordsEntityService extends BaseEntityService<MedicalRecordsEntity> {
  constructor(private readonly _medicalRecordsRepo: MedicalRecordsRepository) {
    super(_medicalRecordsRepo, MedicalRecordsEntity.name);
  }




}
