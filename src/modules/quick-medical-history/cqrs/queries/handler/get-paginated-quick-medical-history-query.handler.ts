import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedQuickMedicalHistoryQuery } from '../impl/get-paginated-quick-medical-history.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { QuickMedicalHistoryEntity } from '../../../entities/quick-medical-history.entity';
import { QuickMedicalHistoryEntityService } from '../../../services/quick-medical-history-entity.service';

@QueryHandler(GetPaginatedQuickMedicalHistoryQuery)
export class GetPaginatedQuickMedicalHistoryQueryHandler extends GetPaginatedQueryHandler<QuickMedicalHistoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, QuickMedicalHistoryEntityService.name)
  }

}
