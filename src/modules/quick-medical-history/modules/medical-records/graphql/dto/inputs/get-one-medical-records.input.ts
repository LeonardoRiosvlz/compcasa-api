import { Field, InputType } from '@nestjs/graphql';
import { MedicalRecordsFilter, MedicalRecordsFilterInput } from './medical-records-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneMedicalRecordsInput {
  @Field(() => MedicalRecordsFilterInput, {nullable: true} )  where?: Filter<MedicalRecordsFilter>;
}
