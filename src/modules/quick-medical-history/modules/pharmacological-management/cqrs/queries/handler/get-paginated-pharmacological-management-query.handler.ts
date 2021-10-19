import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedPharmacologicalManagementQuery } from '../impl/get-paginated-pharmacological-management.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { PharmacologicalManagementEntity } from '../../../entities/pharmacological-management.entity';
import { PharmacologicalManagementEntityService } from '../../../services/pharmacological-management-entity.service';

@QueryHandler(GetPaginatedPharmacologicalManagementQuery)
export class GetPaginatedPharmacologicalManagementQueryHandler extends GetPaginatedQueryHandler<PharmacologicalManagementEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PharmacologicalManagementEntityService.name)
  }

}
