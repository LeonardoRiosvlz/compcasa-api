import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { QuickPhysicalExamEntity } from '../../../entities/quick-physical-exam.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyQuickPhysicalExamCommand extends DeleteManyCommand<QuickPhysicalExamEntity>{
  constructor(public request: GetOneDto<QuickPhysicalExamEntity>) {
    super(request)
  }
}
