import { CommandHandler } from '@nestjs/cqrs';
import { DeleteMedicalRecordsCommand } from '../impl/delete-medical-records.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { MedicalRecordsEntity } from '../../../entities/medical-records.entity';
import { MedicalRecordsEntityService } from '../../../services/medical-records-entity.service';

@CommandHandler(DeleteMedicalRecordsCommand)
export class DeleteMedicalRecordsCommandHandler extends DeleteCommandHandler<MedicalRecordsEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, MedicalRecordsEntityService.name)
  }
}
