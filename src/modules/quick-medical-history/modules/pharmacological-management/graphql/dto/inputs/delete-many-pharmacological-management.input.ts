import { Field, InputType, ID } from '@nestjs/graphql';
import { PharmacologicalManagementFilter, PharmacologicalManagementFilterInput } from './pharmacological-management-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyPharmacologicalManagementInput {
  @Field(() => PharmacologicalManagementFilterInput, {nullable: true} )  where?: Filter<PharmacologicalManagementFilter>;
}
