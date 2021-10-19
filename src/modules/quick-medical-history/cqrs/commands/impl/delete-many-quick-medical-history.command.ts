import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { QuickMedicalHistoryEntity } from '../../../entities/quick-medical-history.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyQuickMedicalHistoryCommand extends DeleteManyCommand<QuickMedicalHistoryEntity>{
  constructor(public request: GetOneDto<QuickMedicalHistoryEntity>) {
    super(request)
  }
}
