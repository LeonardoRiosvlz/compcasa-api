import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneQuickMedicalHistoryQuery } from '../impl/get-one-quick-medical-history.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { QuickMedicalHistoryEntity } from '../../../entities/quick-medical-history.entity';
import { QuickMedicalHistoryEntityService } from '../../../services/quick-medical-history-entity.service';

@QueryHandler(GetOneQuickMedicalHistoryQuery)
export class GetOneQuickMedicalHistoryQueryHandler extends GetOneQueryHandler<QuickMedicalHistoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, QuickMedicalHistoryEntityService.name)
  }
}

