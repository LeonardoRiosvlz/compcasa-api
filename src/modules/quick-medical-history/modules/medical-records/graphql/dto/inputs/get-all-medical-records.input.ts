import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByMedicalRecordsInput } from './order-by-medical-records.input';
import { MedicalRecordsFilter, MedicalRecordsFilterInput } from './medical-records-filter.input';

@InputType()
export class GetAllMedicalRecordsInput {
  @Field(() => MedicalRecordsFilterInput, {nullable: true} )  where?: Filter<MedicalRecordsFilter>;
  @Field(() => OrderByMedicalRecordsInput, {nullable: true} )  orderBy?: OrderByMedicalRecordsInput;
}
