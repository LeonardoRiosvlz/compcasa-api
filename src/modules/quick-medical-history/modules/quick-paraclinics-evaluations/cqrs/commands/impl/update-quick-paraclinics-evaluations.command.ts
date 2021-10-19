import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { QuickParaclinicsEvaluationsEntity } from '../../../entities/quick-paraclinics-evaluations.entity';

export class UpdateQuickParaclinicsEvaluationsCommand extends UpdateCommand<QuickParaclinicsEvaluationsEntity> {
  constructor(public entityId: string, update: Partial<QuickParaclinicsEvaluationsEntity>) {
    super({entityId, update});
  }
}
