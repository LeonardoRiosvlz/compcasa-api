import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { QuickPhysicalExamEntity } from '../../../entities/quick-physical-exam.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneQuickPhysicalExamQuery extends GetOneQuery<QuickPhysicalExamEntity>{
  constructor(public request: GetOneDto<QuickPhysicalExamEntity>) {
    super(request)
  }
}
