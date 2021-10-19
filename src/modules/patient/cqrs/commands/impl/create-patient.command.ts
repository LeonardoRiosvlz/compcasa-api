import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { PatientEntity } from '../../../entities/patient.entity';

export class CreatePatientCommand extends CreateCommand<PatientEntity> {
  constructor(public request: PatientEntity) {
    super(request);
  }
}
