import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { QuickPhysicalExamEntity } from '../../../entities/quick-physical-exam.entity';

@ObjectType()
export class QuickPhysicalExamFilter implements IEntityFilter<QuickPhysicalExamEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) bloodPressure?: string;
  @FilterableField(()=>String, { nullable: true }) heartRate?: string;
  @FilterableField(()=>String, { nullable: true }) breathingFrequency?: string;
  @FilterableField(()=>String, { nullable: true }) oxygenSaturation?: string;
  @FilterableField(()=>String, { nullable: true }) temperature?: string;
  @FilterableField(()=>String, { nullable: true }) glucometry?: string;
  @FilterableField(()=>String, { nullable: true }) description?: string;
  @FilterableField(()=>String, { nullable: true }) clinicalAnalysis?: string;
  @FilterableField(()=>String, { nullable: true}) diagnosticImpression?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const QuickPhysicalExamFilterInput = FilterType(QuickPhysicalExamFilter);