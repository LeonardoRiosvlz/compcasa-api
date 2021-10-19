import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { QuickComprehensiveManagementEntity } from '../../../entities/quick-comprehensive-management.entity';

export class CreateQuickComprehensiveManagementCommand extends CreateCommand<QuickComprehensiveManagementEntity> {
  constructor(public request: QuickComprehensiveManagementEntity) {
    super(request);
  }
}
