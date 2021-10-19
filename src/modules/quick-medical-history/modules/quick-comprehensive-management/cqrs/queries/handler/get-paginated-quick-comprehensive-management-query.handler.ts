import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedQuickComprehensiveManagementQuery } from '../impl/get-paginated-quick-comprehensive-management.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { QuickComprehensiveManagementEntity } from '../../../entities/quick-comprehensive-management.entity';
import { QuickComprehensiveManagementEntityService } from '../../../services/quick-comprehensive-management-entity.service';

@QueryHandler(GetPaginatedQuickComprehensiveManagementQuery)
export class GetPaginatedQuickComprehensiveManagementQueryHandler extends GetPaginatedQueryHandler<QuickComprehensiveManagementEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, QuickComprehensiveManagementEntityService.name)
  }

}
