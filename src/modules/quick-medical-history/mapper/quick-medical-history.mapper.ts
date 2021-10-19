import { QuickMedicalHistoryEntity } from '../entities/quick-medical-history.entity';

import { Injectable } from '@nestjs/common';
import { QuickMedicalHistoryResponse } from '../graphql/dto/responses/quick-medical-history.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateQuickMedicalHistoryInput } from '../graphql/dto/inputs/create-quick-medical-history.input';

@Injectable()
export class QuickMedicalHistoryMapper implements BaseMapper<QuickMedicalHistoryEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateQuickMedicalHistoryInput>(dto: CreateQuickMedicalHistoryInput): QuickMedicalHistoryEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = QuickMedicalHistoryResponse>(dto: QuickMedicalHistoryResponse): QuickMedicalHistoryEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: QuickMedicalHistoryEntity): QuickMedicalHistoryResponse {
    return {
      ...persistentEntity,
      patient: persistentEntity?.patient ? { id: persistentEntity.patient } : undefined,
    };
  }

}
