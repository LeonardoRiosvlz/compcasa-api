import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { PatientEntity } from '../../../entities/patient.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOnePatientQuery extends GetOneQuery<PatientEntity>{
  constructor(public request: GetOneDto<PatientEntity>) {
    super(request)
  }
}
