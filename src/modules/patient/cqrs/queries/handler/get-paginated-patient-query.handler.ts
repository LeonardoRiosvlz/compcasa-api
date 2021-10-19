import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedPatientQuery } from '../impl/get-paginated-patient.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { PatientEntity } from '../../../entities/patient.entity';
import { PatientEntityService } from '../../../services/patient-entity.service';

@QueryHandler(GetPaginatedPatientQuery)
export class GetPaginatedPatientQueryHandler extends GetPaginatedQueryHandler<PatientEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PatientEntityService.name)
  }

}
