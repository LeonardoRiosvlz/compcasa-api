import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByQuickMedicalHistoryInput } from './order-by-quick-medical-history.input';
import { QuickMedicalHistoryFilter, QuickMedicalHistoryFilterInput } from './quick-medical-history-filter.input';

@InputType()
export class GetAllQuickMedicalHistoryInput {
  @Field(() => QuickMedicalHistoryFilterInput, {nullable: true} )  where?: Filter<QuickMedicalHistoryFilter>;
  @Field(() => OrderByQuickMedicalHistoryInput, {nullable: true} )  orderBy?: OrderByQuickMedicalHistoryInput;
}
