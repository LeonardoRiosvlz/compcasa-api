import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { QuickParaclinicsEvaluationsEntity } from '../entities/quick-paraclinics-evaluations.entity';

@Injectable()
export class QuickParaclinicsEvaluationsRepository extends BaseRepository<QuickParaclinicsEvaluationsEntity, FilterableFieldsType<QuickParaclinicsEvaluationsEntity>> {
  constructor(
    @Inject(QuickParaclinicsEvaluationsEntity.name) private readonly _quickParaclinicsEvaluationsModel: Model<QuickParaclinicsEvaluationsEntity>,
  ) {
    super(_quickParaclinicsEvaluationsModel, QuickParaclinicsEvaluationsRepository.name);
  }
}
