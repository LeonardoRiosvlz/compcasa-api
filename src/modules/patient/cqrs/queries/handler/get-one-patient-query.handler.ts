import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOnePatientQuery } from '../impl/get-one-patient.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { PatientEntity } from '../../../entities/patient.entity';
import { PatientEntityService } from '../../../services/patient-entity.service';

@QueryHandler(GetOnePatientQuery)
export class GetOnePatientQueryHandler extends GetOneQueryHandler<PatientEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PatientEntityService.name)
  }
}

