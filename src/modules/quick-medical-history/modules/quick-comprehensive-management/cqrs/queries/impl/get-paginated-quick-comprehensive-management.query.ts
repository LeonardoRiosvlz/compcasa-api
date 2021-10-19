import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { QuickComprehensiveManagementEntity } from '../../../entities/quick-comprehensive-management.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedQuickComprehensiveManagementQuery extends GetPaginatedQuery<QuickComprehensiveManagementEntity>{
  constructor(public request: GetPaginatedDto<QuickComprehensiveManagementEntity>) {
    super(request)
  }
}
