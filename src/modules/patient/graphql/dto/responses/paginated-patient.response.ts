import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { PatientResponse } from './patient.response';

@ObjectType()
export class PaginatedPatientResponse extends PaginatedFindResultResponse(PatientResponse) {
}

