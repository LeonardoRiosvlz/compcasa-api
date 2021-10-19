import { QuickParaclinicsEvaluationsEntity } from '../entities/quick-paraclinics-evaluations.entity';

import { Injectable } from '@nestjs/common';
import { QuickParaclinicsEvaluationsResponse } from '../graphql/dto/responses/quick-paraclinics-evaluations.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateQuickParaclinicsEvaluationsInput } from '../graphql/dto/inputs/create-quick-paraclinics-evaluations.input';

@Injectable()
export class QuickParaclinicsEvaluationsMapper implements BaseMapper<QuickParaclinicsEvaluationsEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateQuickParaclinicsEvaluationsInput>(dto: CreateQuickParaclinicsEvaluationsInput): QuickParaclinicsEvaluationsEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = QuickParaclinicsEvaluationsResponse>(dto: QuickParaclinicsEvaluationsResponse): QuickParaclinicsEvaluationsEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: QuickParaclinicsEvaluationsEntity): QuickParaclinicsEvaluationsResponse {
    return {
      ...persistentEntity,
      quickMedicalHistory: persistentEntity?.quickMedicalHistory ? { id: persistentEntity.quickMedicalHistory } : undefined,
      patient: persistentEntity?.patient ? { id: persistentEntity.patient } : undefined,
    };
  }

}
