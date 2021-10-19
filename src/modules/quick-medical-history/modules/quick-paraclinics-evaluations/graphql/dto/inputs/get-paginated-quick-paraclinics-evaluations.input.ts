import { Field, InputType } from '@nestjs/graphql';
import { QuickParaclinicsEvaluationsFilter,QuickParaclinicsEvaluationsFilterInput } from './quick-paraclinics-evaluations-filter.input';
import { OrderByQuickParaclinicsEvaluationsInput } from './order-by-quick-paraclinics-evaluations.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedQuickParaclinicsEvaluationsInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => QuickParaclinicsEvaluationsFilterInput, {nullable: true} )  where?: Filter<QuickParaclinicsEvaluationsFilter>;
  @Field(() => OrderByQuickParaclinicsEvaluationsInput, {nullable: true} )  orderBy?: OrderByQuickParaclinicsEvaluationsInput;
}
