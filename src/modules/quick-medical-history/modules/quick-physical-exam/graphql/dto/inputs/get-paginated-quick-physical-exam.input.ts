import { Field, InputType } from '@nestjs/graphql';
import { QuickPhysicalExamFilter,QuickPhysicalExamFilterInput } from './quick-physical-exam-filter.input';
import { OrderByQuickPhysicalExamInput } from './order-by-quick-physical-exam.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedQuickPhysicalExamInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => QuickPhysicalExamFilterInput, {nullable: true} )  where?: Filter<QuickPhysicalExamFilter>;
  @Field(() => OrderByQuickPhysicalExamInput, {nullable: true} )  orderBy?: OrderByQuickPhysicalExamInput;
}
