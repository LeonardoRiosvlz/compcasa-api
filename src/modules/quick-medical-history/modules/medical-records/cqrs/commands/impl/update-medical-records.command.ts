import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { MedicalRecordsEntity } from '../../../entities/medical-records.entity';

export class UpdateMedicalRecordsCommand extends UpdateCommand<MedicalRecordsEntity> {
  constructor(public entityId: string, update: Partial<MedicalRecordsEntity>) {
    super({entityId, update});
  }
}
