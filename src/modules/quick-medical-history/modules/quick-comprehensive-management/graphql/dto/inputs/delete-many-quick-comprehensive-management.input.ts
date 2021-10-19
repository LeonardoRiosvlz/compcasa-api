import { Field, InputType, ID } from '@nestjs/graphql';
import { QuickComprehensiveManagementFilter, QuickComprehensiveManagementFilterInput } from './quick-comprehensive-management-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyQuickComprehensiveManagementInput {
  @Field(() => QuickComprehensiveManagementFilterInput, {nullable: true} )  where?: Filter<QuickComprehensiveManagementFilter>;
}
