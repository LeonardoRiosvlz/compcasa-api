import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneMedicalRecordsQuery } from '../impl/get-one-medical-records.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { MedicalRecordsEntity } from '../../../entities/medical-records.entity';
import { MedicalRecordsEntityService } from '../../../services/medical-records-entity.service';

@QueryHandler(GetOneMedicalRecordsQuery)
export class GetOneMedicalRecordsQueryHandler extends GetOneQueryHandler<MedicalRecordsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, MedicalRecordsEntityService.name)
  }
}

