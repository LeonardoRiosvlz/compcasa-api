import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { MedicalRecordsEntity } from '../../../entities/medical-records.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedMedicalRecordsQuery extends GetPaginatedQuery<MedicalRecordsEntity>{
  constructor(public request: GetPaginatedDto<MedicalRecordsEntity>) {
    super(request)
  }
}
