import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyPatientCommand } from '../impl/delete-many-patient.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { PatientEntity } from '../../../entities/patient.entity';
import { PatientEntityService } from '../../../services/patient-entity.service';

@CommandHandler(DeleteManyPatientCommand)
export class DeleteManyPatientCommandHandler extends DeleteManyCommandHandler<PatientEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, PatientEntityService.name)
  }

}
