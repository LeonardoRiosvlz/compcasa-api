import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedQuickPhysicalExamQuery } from '../impl/get-paginated-quick-physical-exam.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { QuickPhysicalExamEntity } from '../../../entities/quick-physical-exam.entity';
import { QuickPhysicalExamEntityService } from '../../../services/quick-physical-exam-entity.service';

@QueryHandler(GetPaginatedQuickPhysicalExamQuery)
export class GetPaginatedQuickPhysicalExamQueryHandler extends GetPaginatedQueryHandler<QuickPhysicalExamEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, QuickPhysicalExamEntityService.name)
  }

}
