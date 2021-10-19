import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { QuickComprehensiveManagementEntity } from '../../../entities/quick-comprehensive-management.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllQuickComprehensiveManagementQuery extends GetAllQuery<QuickComprehensiveManagementEntity>{
  constructor(public request: GetAllDto<QuickComprehensiveManagementEntity>) {
    super(request)
  }
}
