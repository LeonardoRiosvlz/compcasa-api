import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { QuickParaclinicsEvaluationsEntity } from '../../../entities/quick-paraclinics-evaluations.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllQuickParaclinicsEvaluationsQuery extends GetAllQuery<QuickParaclinicsEvaluationsEntity>{
  constructor(public request: GetAllDto<QuickParaclinicsEvaluationsEntity>) {
    super(request)
  }
}
