import { MedicalRecordsEntity } from '../entities/medical-records.entity';

import { Injectable } from '@nestjs/common';
import { MedicalRecordsResponse } from '../graphql/dto/responses/medical-records.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateMedicalRecordsInput } from '../graphql/dto/inputs/create-medical-records.input';

@Injectable()
export class MedicalRecordsMapper implements BaseMapper<MedicalRecordsEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateMedicalRecordsInput>(dto: CreateMedicalRecordsInput): MedicalRecordsEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = MedicalRecordsResponse>(dto: MedicalRecordsResponse): MedicalRecordsEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: MedicalRecordsEntity): MedicalRecordsResponse {
    return {
      ...persistentEntity,
      quickMedicalHistory: persistentEntity?.quickMedicalHistory ? { id: persistentEntity.quickMedicalHistory } : undefined,
      patient: persistentEntity?.patient ? { id: persistentEntity.patient } : undefined,
    };
  }

}
