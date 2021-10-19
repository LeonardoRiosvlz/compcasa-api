import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { QuickParaclinicsEvaluationsEntity } from '../../../entities/quick-paraclinics-evaluations.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedQuickParaclinicsEvaluationsQuery extends GetPaginatedQuery<QuickParaclinicsEvaluationsEntity>{
  constructor(public request: GetPaginatedDto<QuickParaclinicsEvaluationsEntity>) {
    super(request)
  }
}
