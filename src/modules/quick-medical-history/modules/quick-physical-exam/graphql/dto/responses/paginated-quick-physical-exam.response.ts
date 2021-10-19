import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { QuickPhysicalExamResponse } from './quick-physical-exam.response';

@ObjectType()
export class PaginatedQuickPhysicalExamResponse extends PaginatedFindResultResponse(QuickPhysicalExamResponse) {
}

