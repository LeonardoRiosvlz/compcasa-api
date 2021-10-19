import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { QuickMedicalHistoryEntity } from '../../../entities/quick-medical-history.entity';

export class UpdateQuickMedicalHistoryCommand extends UpdateCommand<QuickMedicalHistoryEntity> {
  constructor(public entityId: string, update: Partial<QuickMedicalHistoryEntity>) {
    super({entityId, update});
  }
}
