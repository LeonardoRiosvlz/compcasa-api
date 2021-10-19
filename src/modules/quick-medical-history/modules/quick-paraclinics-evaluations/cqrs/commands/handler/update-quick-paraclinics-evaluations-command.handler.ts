import { CommandHandler } from '@nestjs/cqrs';
import { UpdateQuickParaclinicsEvaluationsCommand } from '../impl/update-quick-paraclinics-evaluations.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { QuickParaclinicsEvaluationsEntityService } from '../../../services/quick-paraclinics-evaluations-entity.service';
import { QuickParaclinicsEvaluationsEntity } from '../../../entities/quick-paraclinics-evaluations.entity';

@CommandHandler(UpdateQuickParaclinicsEvaluationsCommand)
export class UpdateQuickParaclinicsEvaluationsCommandHandler extends UpdateCommandHandler<QuickParaclinicsEvaluationsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, QuickParaclinicsEvaluationsEntityService.name)
  }

}
