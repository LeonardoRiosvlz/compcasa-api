import { Field, InputType } from '@nestjs/graphql';
import { PharmacologicalManagementFilter,PharmacologicalManagementFilterInput } from './pharmacological-management-filter.input';
import { OrderByPharmacologicalManagementInput } from './order-by-pharmacological-management.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedPharmacologicalManagementInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => PharmacologicalManagementFilterInput, {nullable: true} )  where?: Filter<PharmacologicalManagementFilter>;
  @Field(() => OrderByPharmacologicalManagementInput, {nullable: true} )  orderBy?: OrderByPharmacologicalManagementInput;
}
