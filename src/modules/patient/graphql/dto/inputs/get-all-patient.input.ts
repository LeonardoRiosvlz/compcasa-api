import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByPatientInput } from './order-by-patient.input';
import { PatientFilter, PatientFilterInput } from './patient-filter.input';

@InputType()
export class GetAllPatientInput {
  @Field(() => PatientFilterInput, {nullable: true} )  where?: Filter<PatientFilter>;
  @Field(() => OrderByPatientInput, {nullable: true} )  orderBy?: OrderByPatientInput;
}
