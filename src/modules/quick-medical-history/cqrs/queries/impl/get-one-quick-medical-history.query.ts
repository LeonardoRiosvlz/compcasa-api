import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { QuickMedicalHistoryEntity } from '../../../entities/quick-medical-history.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneQuickMedicalHistoryQuery extends GetOneQuery<QuickMedicalHistoryEntity>{
  constructor(public request: GetOneDto<QuickMedicalHistoryEntity>) {
    super(request)
  }
}
