import { CommandHandler } from '@nestjs/cqrs';
import { UpdateMedicalRecordsCommand } from '../impl/update-medical-records.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { MedicalRecordsEntityService } from '../../../services/medical-records-entity.service';
import { MedicalRecordsEntity } from '../../../entities/medical-records.entity';

@CommandHandler(UpdateMedicalRecordsCommand)
export class UpdateMedicalRecordsCommandHandler extends UpdateCommandHandler<MedicalRecordsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, MedicalRecordsEntityService.name)
  }

}
