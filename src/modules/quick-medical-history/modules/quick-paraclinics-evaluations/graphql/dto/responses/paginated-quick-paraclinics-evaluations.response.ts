import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { QuickParaclinicsEvaluationsResponse } from './quick-paraclinics-evaluations.response';

@ObjectType()
export class PaginatedQuickParaclinicsEvaluationsResponse extends PaginatedFindResultResponse(QuickParaclinicsEvaluationsResponse) {
}

