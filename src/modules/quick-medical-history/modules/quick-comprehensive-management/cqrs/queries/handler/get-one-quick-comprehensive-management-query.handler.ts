import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneQuickComprehensiveManagementQuery } from '../impl/get-one-quick-comprehensive-management.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { QuickComprehensiveManagementEntity } from '../../../entities/quick-comprehensive-management.entity';
import { QuickComprehensiveManagementEntityService } from '../../../services/quick-comprehensive-management-entity.service';

@QueryHandler(GetOneQuickComprehensiveManagementQuery)
export class GetOneQuickComprehensiveManagementQueryHandler extends GetOneQueryHandler<QuickComprehensiveManagementEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, QuickComprehensiveManagementEntityService.name)
  }
}

