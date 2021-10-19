import { CommandHandler } from '@nestjs/cqrs';
import { DeleteQuickComprehensiveManagementCommand } from '../impl/delete-quick-comprehensive-management.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { QuickComprehensiveManagementEntity } from '../../../entities/quick-comprehensive-management.entity';
import { QuickComprehensiveManagementEntityService } from '../../../services/quick-comprehensive-management-entity.service';

@CommandHandler(DeleteQuickComprehensiveManagementCommand)
export class DeleteQuickComprehensiveManagementCommandHandler extends DeleteCommandHandler<QuickComprehensiveManagementEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, QuickComprehensiveManagementEntityService.name)
  }
}
