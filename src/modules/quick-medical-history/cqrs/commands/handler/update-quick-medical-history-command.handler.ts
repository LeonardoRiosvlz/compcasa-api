import { CommandHandler } from '@nestjs/cqrs';
import { UpdateQuickMedicalHistoryCommand } from '../impl/update-quick-medical-history.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { QuickMedicalHistoryEntityService } from '../../../services/quick-medical-history-entity.service';
import { QuickMedicalHistoryEntity } from '../../../entities/quick-medical-history.entity';

@CommandHandler(UpdateQuickMedicalHistoryCommand)
export class UpdateQuickMedicalHistoryCommandHandler extends UpdateCommandHandler<QuickMedicalHistoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, QuickMedicalHistoryEntityService.name)
  }

}
