import { Field, InputType } from '@nestjs/graphql';
import { PatientFilter,PatientFilterInput } from './patient-filter.input';
import { OrderByPatientInput } from './order-by-patient.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedPatientInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => PatientFilterInput, {nullable: true} )  where?: Filter<PatientFilter>;
  @Field(() => OrderByPatientInput, {nullable: true} )  orderBy?: OrderByPatientInput;
}
