import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { PatientEntity } from '../../../entities/patient.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyPatientCommand extends DeleteManyCommand<PatientEntity>{
  constructor(public request: GetOneDto<PatientEntity>) {
    super(request)
  }
}
