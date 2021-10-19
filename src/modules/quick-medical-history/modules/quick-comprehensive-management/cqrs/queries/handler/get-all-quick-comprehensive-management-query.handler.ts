import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllQuickComprehensiveManagementQuery } from '../impl/get-all-quick-comprehensive-management.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { QuickComprehensiveManagementEntity } from '../../../entities/quick-comprehensive-management.entity';
import { QuickComprehensiveManagementEntityService } from '../../../services/quick-comprehensive-management-entity.service';

@QueryHandler(GetAllQuickComprehensiveManagementQuery)
export class GetAllQuickComprehensiveManagementQueryHandler extends GetAllQueryHandler<QuickComprehensiveManagementEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, QuickComprehensiveManagementEntityService.name)
  }

}
