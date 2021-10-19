import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneQuickPhysicalExamQuery } from '../impl/get-one-quick-physical-exam.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { QuickPhysicalExamEntity } from '../../../entities/quick-physical-exam.entity';
import { QuickPhysicalExamEntityService } from '../../../services/quick-physical-exam-entity.service';

@QueryHandler(GetOneQuickPhysicalExamQuery)
export class GetOneQuickPhysicalExamQueryHandler extends GetOneQueryHandler<QuickPhysicalExamEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, QuickPhysicalExamEntityService.name)
  }
}

