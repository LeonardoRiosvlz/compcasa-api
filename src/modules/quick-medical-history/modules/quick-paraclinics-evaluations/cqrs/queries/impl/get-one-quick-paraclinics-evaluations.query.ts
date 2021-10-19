import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { QuickParaclinicsEvaluationsEntity } from '../../../entities/quick-paraclinics-evaluations.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneQuickParaclinicsEvaluationsQuery extends GetOneQuery<QuickParaclinicsEvaluationsEntity>{
  constructor(public request: GetOneDto<QuickParaclinicsEvaluationsEntity>) {
    super(request)
  }
}
