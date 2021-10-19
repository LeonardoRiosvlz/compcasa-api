import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllMedicalRecordsQuery } from '../impl/get-all-medical-records.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { MedicalRecordsEntity } from '../../../entities/medical-records.entity';
import { MedicalRecordsEntityService } from '../../../services/medical-records-entity.service';

@QueryHandler(GetAllMedicalRecordsQuery)
export class GetAllMedicalRecordsQueryHandler extends GetAllQueryHandler<MedicalRecordsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, MedicalRecordsEntityService.name)
  }

}
