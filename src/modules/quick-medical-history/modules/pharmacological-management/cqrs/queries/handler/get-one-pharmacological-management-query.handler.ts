import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOnePharmacologicalManagementQuery } from '../impl/get-one-pharmacological-management.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { PharmacologicalManagementEntity } from '../../../entities/pharmacological-management.entity';
import { PharmacologicalManagementEntityService } from '../../../services/pharmacological-management-entity.service';

@QueryHandler(GetOnePharmacologicalManagementQuery)
export class GetOnePharmacologicalManagementQueryHandler extends GetOneQueryHandler<PharmacologicalManagementEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PharmacologicalManagementEntityService.name)
  }
}

