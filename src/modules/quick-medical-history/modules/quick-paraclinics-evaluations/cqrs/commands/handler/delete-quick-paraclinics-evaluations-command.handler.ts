import { CommandHandler } from '@nestjs/cqrs';
import { DeleteQuickParaclinicsEvaluationsCommand } from '../impl/delete-quick-paraclinics-evaluations.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { QuickParaclinicsEvaluationsEntity } from '../../../entities/quick-paraclinics-evaluations.entity';
import { QuickParaclinicsEvaluationsEntityService } from '../../../services/quick-paraclinics-evaluations-entity.service';

@CommandHandler(DeleteQuickParaclinicsEvaluationsCommand)
export class DeleteQuickParaclinicsEvaluationsCommandHandler extends DeleteCommandHandler<QuickParaclinicsEvaluationsEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, QuickParaclinicsEvaluationsEntityService.name)
  }
}
