import { PatientEntity } from '../entities/patient.entity';

import { Injectable } from '@nestjs/common';
import { PatientResponse } from '../graphql/dto/responses/patient.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreatePatientInput } from '../graphql/dto/inputs/create-patient.input';

@Injectable()
export class PatientMapper implements BaseMapper<PatientEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreatePatientInput>(dto: CreatePatientInput): PatientEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = PatientResponse>(dto: PatientResponse): PatientEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: PatientEntity): PatientResponse {
    return {
      ...persistentEntity,
    };
  }

}
