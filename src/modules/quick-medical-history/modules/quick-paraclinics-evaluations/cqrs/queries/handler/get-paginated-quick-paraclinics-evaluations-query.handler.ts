import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedQuickParaclinicsEvaluationsQuery } from '../impl/get-paginated-quick-paraclinics-evaluations.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { QuickParaclinicsEvaluationsEntity } from '../../../entities/quick-paraclinics-evaluations.entity';
import { QuickParaclinicsEvaluationsEntityService } from '../../../services/quick-paraclinics-evaluations-entity.service';

@QueryHandler(GetPaginatedQuickParaclinicsEvaluationsQuery)
export class GetPaginatedQuickParaclinicsEvaluationsQueryHandler extends GetPaginatedQueryHandler<QuickParaclinicsEvaluationsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, QuickParaclinicsEvaluationsEntityService.name)
  }

}
