import { Field, InputType } from '@nestjs/graphql';
import { QuickPhysicalExamFilter, QuickPhysicalExamFilterInput } from './quick-physical-exam-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneQuickPhysicalExamInput {
  @Field(() => QuickPhysicalExamFilterInput, {nullable: true} )  where?: Filter<QuickPhysicalExamFilter>;
}
