import { CommandHandler } from '@nestjs/cqrs';
import { UpdateQuickComprehensiveManagementCommand } from '../impl/update-quick-comprehensive-management.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { QuickComprehensiveManagementEntityService } from '../../../services/quick-comprehensive-management-entity.service';
import { QuickComprehensiveManagementEntity } from '../../../entities/quick-comprehensive-management.entity';

@CommandHandler(UpdateQuickComprehensiveManagementCommand)
export class UpdateQuickComprehensiveManagementCommandHandler extends UpdateCommandHandler<QuickComprehensiveManagementEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, QuickComprehensiveManagementEntityService.name)
  }

}
