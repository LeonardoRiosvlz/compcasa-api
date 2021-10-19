import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { QuickPhysicalExamEntity } from '../../../entities/quick-physical-exam.entity';

export class UpdateQuickPhysicalExamCommand extends UpdateCommand<QuickPhysicalExamEntity> {
  constructor(public entityId: string, update: Partial<QuickPhysicalExamEntity>) {
    super({entityId, update});
  }
}
