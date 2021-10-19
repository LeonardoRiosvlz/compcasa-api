import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyQuickComprehensiveManagementCommand } from '../impl/delete-many-quick-comprehensive-management.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { QuickComprehensiveManagementEntity } from '../../../entities/quick-comprehensive-management.entity';
import { QuickComprehensiveManagementEntityService } from '../../../services/quick-comprehensive-management-entity.service';

@CommandHandler(DeleteManyQuickComprehensiveManagementCommand)
export class DeleteManyQuickComprehensiveManagementCommandHandler extends DeleteManyCommandHandler<QuickComprehensiveManagementEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, QuickComprehensiveManagementEntityService.name)
  }

}
