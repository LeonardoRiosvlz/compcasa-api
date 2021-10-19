import { CommandHandler } from '@nestjs/cqrs';
import { DeleteQuickMedicalHistoryCommand } from '../impl/delete-quick-medical-history.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { QuickMedicalHistoryEntity } from '../../../entities/quick-medical-history.entity';
import { QuickMedicalHistoryEntityService } from '../../../services/quick-medical-history-entity.service';

@CommandHandler(DeleteQuickMedicalHistoryCommand)
export class DeleteQuickMedicalHistoryCommandHandler extends DeleteCommandHandler<QuickMedicalHistoryEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, QuickMedicalHistoryEntityService.name)
  }
}
