import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { PharmacologicalManagementEntity } from '../../../entities/pharmacological-management.entity';

export class UpdatePharmacologicalManagementCommand extends UpdateCommand<PharmacologicalManagementEntity> {
  constructor(public entityId: string, update: Partial<PharmacologicalManagementEntity>) {
    super({entityId, update});
  }
}
