import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllPharmacologicalManagementQuery } from '../impl/get-all-pharmacological-management.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { PharmacologicalManagementEntity } from '../../../entities/pharmacological-management.entity';
import { PharmacologicalManagementEntityService } from '../../../services/pharmacological-management-entity.service';

@QueryHandler(GetAllPharmacologicalManagementQuery)
export class GetAllPharmacologicalManagementQueryHandler extends GetAllQueryHandler<PharmacologicalManagementEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PharmacologicalManagementEntityService.name)
  }

}
