import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { PatientEntity } from '../../../entities/patient.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedPatientQuery extends GetPaginatedQuery<PatientEntity>{
  constructor(public request: GetPaginatedDto<PatientEntity>) {
    super(request)
  }
}
