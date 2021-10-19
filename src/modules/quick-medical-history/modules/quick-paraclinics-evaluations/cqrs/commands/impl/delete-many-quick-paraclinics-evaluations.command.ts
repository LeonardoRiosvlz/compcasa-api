import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { QuickParaclinicsEvaluationsEntity } from '../../../entities/quick-paraclinics-evaluations.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyQuickParaclinicsEvaluationsCommand extends DeleteManyCommand<QuickParaclinicsEvaluationsEntity>{
  constructor(public request: GetOneDto<QuickParaclinicsEvaluationsEntity>) {
    super(request)
  }
}
