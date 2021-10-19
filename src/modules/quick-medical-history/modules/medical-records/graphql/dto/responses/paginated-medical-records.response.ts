import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { MedicalRecordsResponse } from './medical-records.response';

@ObjectType()
export class PaginatedMedicalRecordsResponse extends PaginatedFindResultResponse(MedicalRecordsResponse) {
}

