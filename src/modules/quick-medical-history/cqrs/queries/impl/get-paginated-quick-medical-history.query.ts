import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { QuickMedicalHistoryEntity } from '../../../entities/quick-medical-history.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedQuickMedicalHistoryQuery extends GetPaginatedQuery<QuickMedicalHistoryEntity>{
  constructor(public request: GetPaginatedDto<QuickMedicalHistoryEntity>) {
    super(request)
  }
}
