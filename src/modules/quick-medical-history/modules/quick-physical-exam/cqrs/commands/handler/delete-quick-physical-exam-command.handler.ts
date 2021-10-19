import { CommandHandler } from '@nestjs/cqrs';
import { DeleteQuickPhysicalExamCommand } from '../impl/delete-quick-physical-exam.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { QuickPhysicalExamEntity } from '../../../entities/quick-physical-exam.entity';
import { QuickPhysicalExamEntityService } from '../../../services/quick-physical-exam-entity.service';

@CommandHandler(DeleteQuickPhysicalExamCommand)
export class DeleteQuickPhysicalExamCommandHandler extends DeleteCommandHandler<QuickPhysicalExamEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, QuickPhysicalExamEntityService.name)
  }
}
