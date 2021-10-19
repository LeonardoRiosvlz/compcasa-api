import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { QuickMedicalHistoryEntity } from '../../../entities/quick-medical-history.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllQuickMedicalHistoryQuery extends GetAllQuery<QuickMedicalHistoryEntity>{
  constructor(public request: GetAllDto<QuickMedicalHistoryEntity>) {
    super(request)
  }
}
