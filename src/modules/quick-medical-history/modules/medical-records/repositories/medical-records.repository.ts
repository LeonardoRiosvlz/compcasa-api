import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { MedicalRecordsEntity } from '../entities/medical-records.entity';

@Injectable()
export class MedicalRecordsRepository extends BaseRepository<MedicalRecordsEntity, FilterableFieldsType<MedicalRecordsEntity>> {
  constructor(
    @Inject(MedicalRecordsEntity.name) private readonly _medicalRecordsModel: Model<MedicalRecordsEntity>,
  ) {
    super(_medicalRecordsModel, MedicalRecordsRepository.name);
  }
}
