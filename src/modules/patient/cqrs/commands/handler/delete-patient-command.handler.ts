import { CommandHandler } from '@nestjs/cqrs';
import { DeletePatientCommand } from '../impl/delete-patient.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { PatientEntity } from '../../../entities/patient.entity';
import { PatientEntityService } from '../../../services/patient-entity.service';

@CommandHandler(DeletePatientCommand)
export class DeletePatientCommandHandler extends DeleteCommandHandler<PatientEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, PatientEntityService.name)
  }
}
