import { Field, InputType, ID } from '@nestjs/graphql';
import { PatientFilter, PatientFilterInput } from './patient-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyPatientInput {
  @Field(() => PatientFilterInput, {nullable: true} )  where?: Filter<PatientFilter>;
}
