import { CommandHandler } from '@nestjs/cqrs';

import { CreateQuickComprehensiveManagementCommand } from '../impl/create-quick-comprehensive-management.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { QuickComprehensiveManagementEntity } from '../../../entities/quick-comprehensive-management.entity';
import { QuickComprehensiveManagementEntityService } from '../../../services/quick-comprehensive-management-entity.service';

@CommandHandler(CreateQuickComprehensiveManagementCommand)
export class CreateQuickComprehensiveManagementCommandHandler extends CreateCommandHandler<QuickComprehensiveManagementEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, QuickComprehensiveManagementEntityService.name);
  }

}
