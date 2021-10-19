import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { PatientEntity } from '../../../entities/patient.entity';

export class UpdatePatientCommand extends UpdateCommand<PatientEntity> {
  constructor(public entityId: string, update: Partial<PatientEntity>) {
    super({entityId, update});
  }
}
