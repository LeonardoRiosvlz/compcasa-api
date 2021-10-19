import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByPharmacologicalManagementInput } from './order-by-pharmacological-management.input';
import { PharmacologicalManagementFilter, PharmacologicalManagementFilterInput } from './pharmacological-management-filter.input';

@InputType()
export class GetAllPharmacologicalManagementInput {
  @Field(() => PharmacologicalManagementFilterInput, {nullable: true} )  where?: Filter<PharmacologicalManagementFilter>;
  @Field(() => OrderByPharmacologicalManagementInput, {nullable: true} )  orderBy?: OrderByPharmacologicalManagementInput;
}
