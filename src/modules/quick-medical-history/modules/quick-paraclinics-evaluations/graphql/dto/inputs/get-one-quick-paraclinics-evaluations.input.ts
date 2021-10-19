import { Field, InputType } from '@nestjs/graphql';
import { QuickParaclinicsEvaluationsFilter, QuickParaclinicsEvaluationsFilterInput } from './quick-paraclinics-evaluations-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneQuickParaclinicsEvaluationsInput {
  @Field(() => QuickParaclinicsEvaluationsFilterInput, {nullable: true} )  where?: Filter<QuickParaclinicsEvaluationsFilter>;
}
