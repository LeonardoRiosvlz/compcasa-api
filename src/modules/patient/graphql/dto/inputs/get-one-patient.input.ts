import { Field, InputType } from '@nestjs/graphql';
import { PatientFilter, PatientFilterInput } from './patient-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOnePatientInput {
  @Field(() => PatientFilterInput, {nullable: true} )  where?: Filter<PatientFilter>;
}
