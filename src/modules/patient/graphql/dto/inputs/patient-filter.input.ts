import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { PatientEntity } from '../../../entities/patient.entity';

@ObjectType()
export class PatientFilter implements IEntityFilter<PatientEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) lastName?: string;
  @FilterableField(()=>String, { nullable: true }) firstName?: string;
  @FilterableField(()=>String, { nullable: true }) firstSurName?: string;
  @FilterableField(()=>String, { nullable: true }) lastSurName?: string;
  @FilterableField(()=>String, { nullable: true }) documentNumber?: string;
  @FilterableField(()=>String, { nullable: true }) insuranceName?: string;
  @FilterableField(()=>String, { nullable: true }) placeOfBirth?: string;
  @FilterableField(()=>String, { nullable: true }) email?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const PatientFilterInput = FilterType(PatientFilter);