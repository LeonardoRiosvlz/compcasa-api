import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByQuickPhysicalExamInput } from './order-by-quick-physical-exam.input';
import { QuickPhysicalExamFilter, QuickPhysicalExamFilterInput } from './quick-physical-exam-filter.input';

@InputType()
export class GetAllQuickPhysicalExamInput {
  @Field(() => QuickPhysicalExamFilterInput, {nullable: true} )  where?: Filter<QuickPhysicalExamFilter>;
  @Field(() => OrderByQuickPhysicalExamInput, {nullable: true} )  orderBy?: OrderByQuickPhysicalExamInput;
}
