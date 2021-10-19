import { CommandHandler } from '@nestjs/cqrs';
import { UpdatePatientCommand } from '../impl/update-patient.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { PatientEntityService } from '../../../services/patient-entity.service';
import { PatientEntity } from '../../../entities/patient.entity';

@CommandHandler(UpdatePatientCommand)
export class UpdatePatientCommandHandler extends UpdateCommandHandler<PatientEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, PatientEntityService.name)
  }

}
