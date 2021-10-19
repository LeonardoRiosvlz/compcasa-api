import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllPatientQuery } from '../impl/get-all-patient.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { PatientEntity } from '../../../entities/patient.entity';
import { PatientEntityService } from '../../../services/patient-entity.service';

@QueryHandler(GetAllPatientQuery)
export class GetAllPatientQueryHandler extends GetAllQueryHandler<PatientEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PatientEntityService.name)
  }

}
