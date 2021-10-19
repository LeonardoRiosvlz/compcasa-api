import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByQuickComprehensiveManagementInput } from './order-by-quick-comprehensive-management.input';
import { QuickComprehensiveManagementFilter, QuickComprehensiveManagementFilterInput } from './quick-comprehensive-management-filter.input';

@InputType()
export class GetAllQuickComprehensiveManagementInput {
  @Field(() => QuickComprehensiveManagementFilterInput, {nullable: true} )  where?: Filter<QuickComprehensiveManagementFilter>;
  @Field(() => OrderByQuickComprehensiveManagementInput, {nullable: true} )  orderBy?: OrderByQuickComprehensiveManagementInput;
}
