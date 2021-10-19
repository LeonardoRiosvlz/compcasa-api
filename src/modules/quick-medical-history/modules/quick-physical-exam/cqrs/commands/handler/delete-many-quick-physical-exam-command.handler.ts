import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyQuickPhysicalExamCommand } from '../impl/delete-many-quick-physical-exam.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { QuickPhysicalExamEntity } from '../../../entities/quick-physical-exam.entity';
import { QuickPhysicalExamEntityService } from '../../../services/quick-physical-exam-entity.service';

@CommandHandler(DeleteManyQuickPhysicalExamCommand)
export class DeleteManyQuickPhysicalExamCommandHandler extends DeleteManyCommandHandler<QuickPhysicalExamEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, QuickPhysicalExamEntityService.name)
  }

}
