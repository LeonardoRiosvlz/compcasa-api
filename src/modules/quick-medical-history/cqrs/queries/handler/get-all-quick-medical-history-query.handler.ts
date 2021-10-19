import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllQuickMedicalHistoryQuery } from '../impl/get-all-quick-medical-history.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { QuickMedicalHistoryEntity } from '../../../entities/quick-medical-history.entity';
import { QuickMedicalHistoryEntityService } from '../../../services/quick-medical-history-entity.service';

@QueryHandler(GetAllQuickMedicalHistoryQuery)
export class GetAllQuickMedicalHistoryQueryHandler extends GetAllQueryHandler<QuickMedicalHistoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, QuickMedicalHistoryEntityService.name)
  }

}
