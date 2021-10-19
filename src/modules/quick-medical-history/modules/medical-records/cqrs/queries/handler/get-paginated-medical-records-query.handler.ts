import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedMedicalRecordsQuery } from '../impl/get-paginated-medical-records.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { MedicalRecordsEntity } from '../../../entities/medical-records.entity';
import { MedicalRecordsEntityService } from '../../../services/medical-records-entity.service';

@QueryHandler(GetPaginatedMedicalRecordsQuery)
export class GetPaginatedMedicalRecordsQueryHandler extends GetPaginatedQueryHandler<MedicalRecordsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, MedicalRecordsEntityService.name)
  }

}
