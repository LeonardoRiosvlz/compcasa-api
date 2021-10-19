import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { QuickComprehensiveManagementEntity } from '../../../entities/quick-comprehensive-management.entity';

export class UpdateQuickComprehensiveManagementCommand extends UpdateCommand<QuickComprehensiveManagementEntity> {
  constructor(public entityId: string, update: Partial<QuickComprehensiveManagementEntity>) {
    super({entityId, update});
  }
}
