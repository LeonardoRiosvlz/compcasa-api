import { CommandHandler } from '@nestjs/cqrs';

import { CreateQuickMedicalHistoryCommand } from '../impl/create-quick-medical-history.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { QuickMedicalHistoryEntity } from '../../../entities/quick-medical-history.entity';
import { QuickMedicalHistoryEntityService } from '../../../services/quick-medical-history-entity.service';

@CommandHandler(CreateQuickMedicalHistoryCommand)
export class CreateQuickMedicalHistoryCommandHandler extends CreateCommandHandler<QuickMedicalHistoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, QuickMedicalHistoryEntityService.name);
  }

}
