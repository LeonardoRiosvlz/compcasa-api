import { PharmacologicalManagementEntity } from '../entities/pharmacological-management.entity';

import { Injectable } from '@nestjs/common';
import { PharmacologicalManagementResponse } from '../graphql/dto/responses/pharmacological-management.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreatePharmacologicalManagementInput } from '../graphql/dto/inputs/create-pharmacological-management.input';

@Injectable()
export class PharmacologicalManagementMapper implements BaseMapper<PharmacologicalManagementEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreatePharmacologicalManagementInput>(dto: CreatePharmacologicalManagementInput): PharmacologicalManagementEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = PharmacologicalManagementResponse>(dto: PharmacologicalManagementResponse): PharmacologicalManagementEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: PharmacologicalManagementEntity): PharmacologicalManagementResponse {
    return {
      ...persistentEntity,
      quickMedicalHistory: persistentEntity?.quickMedicalHistory ? { id: persistentEntity.quickMedicalHistory } : undefined,
      patient: persistentEntity?.patient ? { id: persistentEntity.patient } : undefined,
    };
  }

}
