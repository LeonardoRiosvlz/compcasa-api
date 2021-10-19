import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { PharmacologicalManagementResponse } from './pharmacological-management.response';

@ObjectType()
export class PaginatedPharmacologicalManagementResponse extends PaginatedFindResultResponse(PharmacologicalManagementResponse) {
}

