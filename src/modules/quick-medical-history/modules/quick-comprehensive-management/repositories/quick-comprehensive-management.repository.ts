import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { QuickComprehensiveManagementEntity } from '../entities/quick-comprehensive-management.entity';

@Injectable()
export class QuickComprehensiveManagementRepository extends BaseRepository<QuickComprehensiveManagementEntity, FilterableFieldsType<QuickComprehensiveManagementEntity>> {
  constructor(
    @Inject(QuickComprehensiveManagementEntity.name) private readonly _quickComprehensiveManagementModel: Model<QuickComprehensiveManagementEntity>,
  ) {
    super(_quickComprehensiveManagementModel, QuickComprehensiveManagementRepository.name);
  }
}
