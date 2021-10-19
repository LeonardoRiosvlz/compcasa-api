import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { PharmacologicalManagementEntity } from '../entities/pharmacological-management.entity';

@Injectable()
export class PharmacologicalManagementRepository extends BaseRepository<PharmacologicalManagementEntity, FilterableFieldsType<PharmacologicalManagementEntity>> {
  constructor(
    @Inject(PharmacologicalManagementEntity.name) private readonly _pharmacologicalManagementModel: Model<PharmacologicalManagementEntity>,
  ) {
    super(_pharmacologicalManagementModel, PharmacologicalManagementRepository.name);
  }
}
