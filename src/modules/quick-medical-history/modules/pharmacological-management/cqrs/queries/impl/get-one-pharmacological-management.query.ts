import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { PharmacologicalManagementEntity } from '../../../entities/pharmacological-management.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOnePharmacologicalManagementQuery extends GetOneQuery<PharmacologicalManagementEntity>{
  constructor(public request: GetOneDto<PharmacologicalManagementEntity>) {
    super(request)
  }
}
