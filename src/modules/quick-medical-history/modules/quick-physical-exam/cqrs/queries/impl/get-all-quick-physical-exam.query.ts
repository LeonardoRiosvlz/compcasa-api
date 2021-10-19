import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { QuickPhysicalExamEntity } from '../../../entities/quick-physical-exam.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllQuickPhysicalExamQuery extends GetAllQuery<QuickPhysicalExamEntity>{
  constructor(public request: GetAllDto<QuickPhysicalExamEntity>) {
    super(request)
  }
}
