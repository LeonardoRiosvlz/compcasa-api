import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { QuickMedicalHistoryEntity } from '../../../entities/quick-medical-history.entity';

export class CreateQuickMedicalHistoryCommand extends CreateCommand<QuickMedicalHistoryEntity> {
  constructor(public request: QuickMedicalHistoryEntity) {
    super(request);
  }
}
