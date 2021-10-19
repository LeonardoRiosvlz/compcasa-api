import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { MedicalRecordsEntity } from '../../../entities/medical-records.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllMedicalRecordsQuery extends GetAllQuery<MedicalRecordsEntity>{
  constructor(public request: GetAllDto<MedicalRecordsEntity>) {
    super(request)
  }
}
