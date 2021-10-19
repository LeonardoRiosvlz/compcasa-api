import { CommandHandler } from '@nestjs/cqrs';

import { CreateQuickPhysicalExamCommand } from '../impl/create-quick-physical-exam.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { QuickPhysicalExamEntity } from '../../../entities/quick-physical-exam.entity';
import { QuickPhysicalExamEntityService } from '../../../services/quick-physical-exam-entity.service';

@CommandHandler(CreateQuickPhysicalExamCommand)
export class CreateQuickPhysicalExamCommandHandler extends CreateCommandHandler<QuickPhysicalExamEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, QuickPhysicalExamEntityService.name);
  }

}
