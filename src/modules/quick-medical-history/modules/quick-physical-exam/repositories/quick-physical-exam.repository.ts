import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { QuickPhysicalExamEntity } from '../entities/quick-physical-exam.entity';

@Injectable()
export class QuickPhysicalExamRepository extends BaseRepository<QuickPhysicalExamEntity, FilterableFieldsType<QuickPhysicalExamEntity>> {
  constructor(
    @Inject(QuickPhysicalExamEntity.name) private readonly _quickPhysicalExamModel: Model<QuickPhysicalExamEntity>,
  ) {
    super(_quickPhysicalExamModel, QuickPhysicalExamRepository.name);
  }
}
