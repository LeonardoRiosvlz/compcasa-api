import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { QuickMedicalHistoryResponse } from './quick-medical-history.response';

@ObjectType()
export class PaginatedQuickMedicalHistoryResponse extends PaginatedFindResultResponse(QuickMedicalHistoryResponse) {
}

