import { Field, InputType, ID } from '@nestjs/graphql';
import { QuickParaclinicsEvaluationsFilter, QuickParaclinicsEvaluationsFilterInput } from './quick-paraclinics-evaluations-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyQuickParaclinicsEvaluationsInput {
  @Field(() => QuickParaclinicsEvaluationsFilterInput, {nullable: true} )  where?: Filter<QuickParaclinicsEvaluationsFilter>;
}
