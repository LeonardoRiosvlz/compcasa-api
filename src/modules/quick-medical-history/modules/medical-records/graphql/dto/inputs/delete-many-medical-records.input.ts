import { Field, InputType, ID } from '@nestjs/graphql';
import { MedicalRecordsFilter, MedicalRecordsFilterInput } from './medical-records-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyMedicalRecordsInput {
  @Field(() => MedicalRecordsFilterInput, {nullable: true} )  where?: Filter<MedicalRecordsFilter>;
}
