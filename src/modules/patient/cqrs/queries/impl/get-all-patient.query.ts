import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { PatientEntity } from '../../../entities/patient.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllPatientQuery extends GetAllQuery<PatientEntity>{
  constructor(public request: GetAllDto<PatientEntity>) {
    super(request)
  }
}
