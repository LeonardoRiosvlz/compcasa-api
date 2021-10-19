import { Field, InputType } from '@nestjs/graphql';
import { QuickMedicalHistoryFilter,QuickMedicalHistoryFilterInput } from './quick-medical-history-filter.input';
import { OrderByQuickMedicalHistoryInput } from './order-by-quick-medical-history.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedQuickMedicalHistoryInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => QuickMedicalHistoryFilterInput, {nullable: true} )  where?: Filter<QuickMedicalHistoryFilter>;
  @Field(() => OrderByQuickMedicalHistoryInput, {nullable: true} )  orderBy?: OrderByQuickMedicalHistoryInput;
}
