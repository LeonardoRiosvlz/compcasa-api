import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { PharmacologicalManagementEntity } from '../../../entities/pharmacological-management.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedPharmacologicalManagementQuery extends GetPaginatedQuery<PharmacologicalManagementEntity>{
  constructor(public request: GetPaginatedDto<PharmacologicalManagementEntity>) {
    super(request)
  }
}
