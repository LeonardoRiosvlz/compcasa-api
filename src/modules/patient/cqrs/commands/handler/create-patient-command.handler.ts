import { CommandHandler } from '@nestjs/cqrs';

import { CreatePatientCommand } from '../impl/create-patient.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { PatientEntity } from '../../../entities/patient.entity';
import { PatientEntityService } from '../../../services/patient-entity.service';

@CommandHandler(CreatePatientCommand)
export class CreatePatientCommandHandler extends CreateCommandHandler<PatientEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, PatientEntityService.name);
  }

}
