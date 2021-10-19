import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyQuickParaclinicsEvaluationsCommand } from '../impl/delete-many-quick-paraclinics-evaluations.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { QuickParaclinicsEvaluationsEntity } from '../../../entities/quick-paraclinics-evaluations.entity';
import { QuickParaclinicsEvaluationsEntityService } from '../../../services/quick-paraclinics-evaluations-entity.service';

@CommandHandler(DeleteManyQuickParaclinicsEvaluationsCommand)
export class DeleteManyQuickParaclinicsEvaluationsCommandHandler extends DeleteManyCommandHandler<QuickParaclinicsEvaluationsEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, QuickParaclinicsEvaluationsEntityService.name)
  }

}
