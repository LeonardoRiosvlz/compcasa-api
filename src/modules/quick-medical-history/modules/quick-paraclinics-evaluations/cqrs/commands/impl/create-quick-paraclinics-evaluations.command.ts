import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { QuickParaclinicsEvaluationsEntity } from '../../../entities/quick-paraclinics-evaluations.entity';

export class CreateQuickParaclinicsEvaluationsCommand extends CreateCommand<QuickParaclinicsEvaluationsEntity> {
  constructor(public request: QuickParaclinicsEvaluationsEntity) {
    super(request);
  }
}
