import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { QuickPhysicalExamEntity } from '../../../entities/quick-physical-exam.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedQuickPhysicalExamQuery extends GetPaginatedQuery<QuickPhysicalExamEntity>{
  constructor(public request: GetPaginatedDto<QuickPhysicalExamEntity>) {
    super(request)
  }
}
