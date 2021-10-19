import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { QuickComprehensiveManagementEntity } from '../../../entities/quick-comprehensive-management.entity';

@ObjectType()
export class QuickComprehensiveManagementFilter implements IEntityFilter<QuickComprehensiveManagementEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;
  @FilterableField(()=>String, { nullable: true}) description?: string;

  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const QuickComprehensiveManagementFilterInput = FilterType(QuickComprehensiveManagementFilter);