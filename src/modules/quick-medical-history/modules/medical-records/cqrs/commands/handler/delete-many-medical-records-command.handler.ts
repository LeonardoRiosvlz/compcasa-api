import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyMedicalRecordsCommand } from '../impl/delete-many-medical-records.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { MedicalRecordsEntity } from '../../../entities/medical-records.entity';
import { MedicalRecordsEntityService } from '../../../services/medical-records-entity.service';

@CommandHandler(DeleteManyMedicalRecordsCommand)
export class DeleteManyMedicalRecordsCommandHandler extends DeleteManyCommandHandler<MedicalRecordsEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, MedicalRecordsEntityService.name)
  }

}
