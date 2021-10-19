import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { QuickComprehensiveManagementEntity } from '../../../entities/quick-comprehensive-management.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyQuickComprehensiveManagementCommand extends DeleteManyCommand<QuickComprehensiveManagementEntity>{
  constructor(public request: GetOneDto<QuickComprehensiveManagementEntity>) {
    super(request)
  }
}
