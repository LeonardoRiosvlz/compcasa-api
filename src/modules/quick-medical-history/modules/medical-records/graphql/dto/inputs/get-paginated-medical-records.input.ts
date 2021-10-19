import { Field, InputType } from '@nestjs/graphql';
import { MedicalRecordsFilter,MedicalRecordsFilterInput } from './medical-records-filter.input';
import { OrderByMedicalRecordsInput } from './order-by-medical-records.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedMedicalRecordsInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => MedicalRecordsFilterInput, {nullable: true} )  where?: Filter<MedicalRecordsFilter>;
  @Field(() => OrderByMedicalRecordsInput, {nullable: true} )  orderBy?: OrderByMedicalRecordsInput;
}
