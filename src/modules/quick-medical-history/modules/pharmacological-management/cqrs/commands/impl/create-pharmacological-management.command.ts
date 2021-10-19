import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { PharmacologicalManagementEntity } from '../../../entities/pharmacological-management.entity';

export class CreatePharmacologicalManagementCommand extends CreateCommand<PharmacologicalManagementEntity> {
  constructor(public request: PharmacologicalManagementEntity) {
    super(request);
  }
}
