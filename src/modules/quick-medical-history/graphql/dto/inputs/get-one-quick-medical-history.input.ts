import { Field, InputType } from '@nestjs/graphql';
import { QuickMedicalHistoryFilter, QuickMedicalHistoryFilterInput } from './quick-medical-history-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneQuickMedicalHistoryInput {
  @Field(() => QuickMedicalHistoryFilterInput, {nullable: true} )  where?: Filter<QuickMedicalHistoryFilter>;
}
