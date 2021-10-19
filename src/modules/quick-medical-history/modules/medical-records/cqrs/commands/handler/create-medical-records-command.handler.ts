import { CommandHandler } from '@nestjs/cqrs';

import { CreateMedicalRecordsCommand } from '../impl/create-medical-records.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { MedicalRecordsEntity } from '../../../entities/medical-records.entity';
import { MedicalRecordsEntityService } from '../../../services/medical-records-entity.service';

@CommandHandler(CreateMedicalRecordsCommand)
export class CreateMedicalRecordsCommandHandler extends CreateCommandHandler<MedicalRecordsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, MedicalRecordsEntityService.name);
  }

}
