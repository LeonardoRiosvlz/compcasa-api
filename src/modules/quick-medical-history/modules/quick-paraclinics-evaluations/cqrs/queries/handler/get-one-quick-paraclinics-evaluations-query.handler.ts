import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneQuickParaclinicsEvaluationsQuery } from '../impl/get-one-quick-paraclinics-evaluations.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { QuickParaclinicsEvaluationsEntity } from '../../../entities/quick-paraclinics-evaluations.entity';
import { QuickParaclinicsEvaluationsEntityService } from '../../../services/quick-paraclinics-evaluations-entity.service';

@QueryHandler(GetOneQuickParaclinicsEvaluationsQuery)
export class GetOneQuickParaclinicsEvaluationsQueryHandler extends GetOneQueryHandler<QuickParaclinicsEvaluationsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, QuickParaclinicsEvaluationsEntityService.name)
  }
}

