import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { PharmacologicalManagementEntity } from '../../../entities/pharmacological-management.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllPharmacologicalManagementQuery extends GetAllQuery<PharmacologicalManagementEntity>{
  constructor(public request: GetAllDto<PharmacologicalManagementEntity>) {
    super(request)
  }
}
