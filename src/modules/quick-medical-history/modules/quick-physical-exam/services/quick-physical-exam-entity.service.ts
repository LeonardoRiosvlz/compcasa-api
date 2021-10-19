import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { QuickPhysicalExamEntity } from '../entities/quick-physical-exam.entity';
import { QuickPhysicalExamRepository } from '../repositories/quick-physical-exam.repository';


@Injectable()
export class QuickPhysicalExamEntityService extends BaseEntityService<QuickPhysicalExamEntity> {
  constructor(private readonly _quickPhysicalExamRepo: QuickPhysicalExamRepository) {
    super(_quickPhysicalExamRepo, QuickPhysicalExamEntity.name);
  }




}
