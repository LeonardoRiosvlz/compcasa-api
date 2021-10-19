import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { QuickParaclinicsEvaluationsEntity } from '../entities/quick-paraclinics-evaluations.entity';
import { QuickParaclinicsEvaluationsRepository } from '../repositories/quick-paraclinics-evaluations.repository';


@Injectable()
export class QuickParaclinicsEvaluationsEntityService extends BaseEntityService<QuickParaclinicsEvaluationsEntity> {
  constructor(private readonly _quickParaclinicsEvaluationsRepo: QuickParaclinicsEvaluationsRepository) {
    super(_quickParaclinicsEvaluationsRepo, QuickParaclinicsEvaluationsEntity.name);
  }




}
