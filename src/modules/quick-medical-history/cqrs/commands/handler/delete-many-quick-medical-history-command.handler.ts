import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyQuickMedicalHistoryCommand } from '../impl/delete-many-quick-medical-history.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { QuickMedicalHistoryEntity } from '../../../entities/quick-medical-history.entity';
import { QuickMedicalHistoryEntityService } from '../../../services/quick-medical-history-entity.service';

@CommandHandler(DeleteManyQuickMedicalHistoryCommand)
export class DeleteManyQuickMedicalHistoryCommandHandler extends DeleteManyCommandHandler<QuickMedicalHistoryEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, QuickMedicalHistoryEntityService.name)
  }

}
