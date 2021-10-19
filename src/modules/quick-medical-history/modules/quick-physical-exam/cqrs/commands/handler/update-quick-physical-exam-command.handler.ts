import { CommandHandler } from '@nestjs/cqrs';
import { UpdateQuickPhysicalExamCommand } from '../impl/update-quick-physical-exam.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { QuickPhysicalExamEntityService } from '../../../services/quick-physical-exam-entity.service';
import { QuickPhysicalExamEntity } from '../../../entities/quick-physical-exam.entity';

@CommandHandler(UpdateQuickPhysicalExamCommand)
export class UpdateQuickPhysicalExamCommandHandler extends UpdateCommandHandler<QuickPhysicalExamEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, QuickPhysicalExamEntityService.name)
  }

}
