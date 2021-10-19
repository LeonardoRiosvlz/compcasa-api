import { QuickPhysicalExamEntity } from '../entities/quick-physical-exam.entity';

import { Injectable } from '@nestjs/common';
import { QuickPhysicalExamResponse } from '../graphql/dto/responses/quick-physical-exam.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateQuickPhysicalExamInput } from '../graphql/dto/inputs/create-quick-physical-exam.input';

@Injectable()
export class QuickPhysicalExamMapper implements BaseMapper<QuickPhysicalExamEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateQuickPhysicalExamInput>(dto: CreateQuickPhysicalExamInput): QuickPhysicalExamEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = QuickPhysicalExamResponse>(dto: QuickPhysicalExamResponse): QuickPhysicalExamEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: QuickPhysicalExamEntity): QuickPhysicalExamResponse {
    return {
      ...persistentEntity,
      quickMedicalHistory: persistentEntity?.quickMedicalHistory ? { id: persistentEntity.quickMedicalHistory } : undefined,
      patient: persistentEntity?.patient ? { id: persistentEntity.patient } : undefined,
    };
  }

}
