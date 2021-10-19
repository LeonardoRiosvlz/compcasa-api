import { CommandHandler } from '@nestjs/cqrs';

import { CreateQuickParaclinicsEvaluationsCommand } from '../impl/create-quick-paraclinics-evaluations.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { QuickParaclinicsEvaluationsEntity } from '../../../entities/quick-paraclinics-evaluations.entity';
import { QuickParaclinicsEvaluationsEntityService } from '../../../services/quick-paraclinics-evaluations-entity.service';

@CommandHandler(CreateQuickParaclinicsEvaluationsCommand)
export class CreateQuickParaclinicsEvaluationsCommandHandler extends CreateCommandHandler<QuickParaclinicsEvaluationsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, QuickParaclinicsEvaluationsEntityService.name);
  }

}
