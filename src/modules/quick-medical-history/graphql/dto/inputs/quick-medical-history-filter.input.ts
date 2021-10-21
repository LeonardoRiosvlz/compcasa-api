import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { QuickMedicalHistoryEntity } from '../../../entities/quick-medical-history.entity';

@ObjectType()
export class QuickMedicalHistoryFilter implements IEntityFilter<QuickMedicalHistoryEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) quickMedicalHistoryType?: string;
  @FilterableField(()=>String, { nullable: true}) companionsName?: string;
  @FilterableField(()=>String, { nullable: true}) companionsPhoneNumber?: string;
  @FilterableField(()=>String, { nullable: true}) companionsType?: string;
  @FilterableField(()=>String, { nullable: true}) responsiblePhoneNumber?: string;
  @FilterableField(()=>String, { nullable: true}) responsibleOfficeNumber?: string;
  @FilterableField(()=>Date ,{ nullable: true }) reasonForConsultation?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) relationship?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) currentIllness?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const QuickMedicalHistoryFilterInput = FilterType(QuickMedicalHistoryFilter);