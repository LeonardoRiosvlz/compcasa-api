import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { MedicalRecordsEntity } from '../../../entities/medical-records.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneMedicalRecordsQuery extends GetOneQuery<MedicalRecordsEntity>{
  constructor(public request: GetOneDto<MedicalRecordsEntity>) {
    super(request)
  }
}
