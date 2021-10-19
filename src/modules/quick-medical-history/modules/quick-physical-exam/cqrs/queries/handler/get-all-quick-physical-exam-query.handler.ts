import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllQuickPhysicalExamQuery } from '../impl/get-all-quick-physical-exam.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { QuickPhysicalExamEntity } from '../../../entities/quick-physical-exam.entity';
import { QuickPhysicalExamEntityService } from '../../../services/quick-physical-exam-entity.service';

@QueryHandler(GetAllQuickPhysicalExamQuery)
export class GetAllQuickPhysicalExamQueryHandler extends GetAllQueryHandler<QuickPhysicalExamEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, QuickPhysicalExamEntityService.name)
  }

}
