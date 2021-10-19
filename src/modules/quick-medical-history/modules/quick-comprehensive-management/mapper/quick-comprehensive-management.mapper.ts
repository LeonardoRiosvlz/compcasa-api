import { QuickComprehensiveManagementEntity } from '../entities/quick-comprehensive-management.entity';

import { Injectable } from '@nestjs/common';
import { QuickComprehensiveManagementResponse } from '../graphql/dto/responses/quick-comprehensive-management.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateQuickComprehensiveManagementInput } from '../graphql/dto/inputs/create-quick-comprehensive-management.input';

@Injectable()
export class QuickComprehensiveManagementMapper implements BaseMapper<QuickComprehensiveManagementEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateQuickComprehensiveManagementInput>(dto: CreateQuickComprehensiveManagementInput): QuickComprehensiveManagementEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = QuickComprehensiveManagementResponse>(dto: QuickComprehensiveManagementResponse): QuickComprehensiveManagementEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: QuickComprehensiveManagementEntity): QuickComprehensiveManagementResponse {
    return {
      ...persistentEntity,
      quickMedicalHistory: persistentEntity?.quickMedicalHistory ? { id: persistentEntity.quickMedicalHistory } : undefined,
      patient: persistentEntity?.patient ? { id: persistentEntity.patient } : undefined,
    };
  }

}
