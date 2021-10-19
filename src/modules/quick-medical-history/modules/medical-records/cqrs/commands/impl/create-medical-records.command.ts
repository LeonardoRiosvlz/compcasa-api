import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { MedicalRecordsEntity } from '../../../entities/medical-records.entity';

export class CreateMedicalRecordsCommand extends CreateCommand<MedicalRecordsEntity> {
  constructor(public request: MedicalRecordsEntity) {
    super(request);
  }
}
