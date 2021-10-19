import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByQuickParaclinicsEvaluationsInput } from './order-by-quick-paraclinics-evaluations.input';
import { QuickParaclinicsEvaluationsFilter, QuickParaclinicsEvaluationsFilterInput } from './quick-paraclinics-evaluations-filter.input';

@InputType()
export class GetAllQuickParaclinicsEvaluationsInput {
  @Field(() => QuickParaclinicsEvaluationsFilterInput, {nullable: true} )  where?: Filter<QuickParaclinicsEvaluationsFilter>;
  @Field(() => OrderByQuickParaclinicsEvaluationsInput, {nullable: true} )  orderBy?: OrderByQuickParaclinicsEvaluationsInput;
}
