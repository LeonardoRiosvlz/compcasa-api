import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllQuickParaclinicsEvaluationsQuery } from '../impl/get-all-quick-paraclinics-evaluations.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { QuickParaclinicsEvaluationsEntity } from '../../../entities/quick-paraclinics-evaluations.entity';
import { QuickParaclinicsEvaluationsEntityService } from '../../../services/quick-paraclinics-evaluations-entity.service';

@QueryHandler(GetAllQuickParaclinicsEvaluationsQuery)
export class GetAllQuickParaclinicsEvaluationsQueryHandler extends GetAllQueryHandler<QuickParaclinicsEvaluationsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, QuickParaclinicsEvaluationsEntityService.name)
  }

}
