import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { QuickComprehensiveManagementEntity } from '../../../entities/quick-comprehensive-management.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneQuickComprehensiveManagementQuery extends GetOneQuery<QuickComprehensiveManagementEntity>{
  constructor(public request: GetOneDto<QuickComprehensiveManagementEntity>) {
    super(request)
  }
}
