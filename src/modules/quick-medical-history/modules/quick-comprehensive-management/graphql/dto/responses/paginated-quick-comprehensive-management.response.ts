import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { QuickComprehensiveManagementResponse } from './quick-comprehensive-management.response';

@ObjectType()
export class PaginatedQuickComprehensiveManagementResponse extends PaginatedFindResultResponse(QuickComprehensiveManagementResponse) {
}

