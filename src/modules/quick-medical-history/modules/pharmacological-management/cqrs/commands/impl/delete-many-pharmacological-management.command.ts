import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { PharmacologicalManagementEntity } from '../../../entities/pharmacological-management.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyPharmacologicalManagementCommand extends DeleteManyCommand<PharmacologicalManagementEntity>{
  constructor(public request: GetOneDto<PharmacologicalManagementEntity>) {
    super(request)
  }
}
