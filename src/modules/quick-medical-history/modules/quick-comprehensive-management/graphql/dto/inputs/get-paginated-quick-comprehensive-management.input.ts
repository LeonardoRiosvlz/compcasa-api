import { Field, InputType } from '@nestjs/graphql';
import { QuickComprehensiveManagementFilter,QuickComprehensiveManagementFilterInput } from './quick-comprehensive-management-filter.input';
import { OrderByQuickComprehensiveManagementInput } from './order-by-quick-comprehensive-management.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedQuickComprehensiveManagementInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => QuickComprehensiveManagementFilterInput, {nullable: true} )  where?: Filter<QuickComprehensiveManagementFilter>;
  @Field(() => OrderByQuickComprehensiveManagementInput, {nullable: true} )  orderBy?: OrderByQuickComprehensiveManagementInput;
}
