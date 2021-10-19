import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { QuickPhysicalExamEntity } from '../../../entities/quick-physical-exam.entity';

export class CreateQuickPhysicalExamCommand extends CreateCommand<QuickPhysicalExamEntity> {
  constructor(public request: QuickPhysicalExamEntity) {
    super(request);
  }
}
