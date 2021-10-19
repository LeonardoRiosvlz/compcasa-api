import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { Gender } from 'src/shared/modules/user/entities/schemas/profile.schema';

export enum DocumentType{
  IDENTIFICATION_CARD ='IDENTIFICATION_CARD',
  FOREIGNER_ID ='FOREIGNER_ID',
  PASSPORT ='PASSPORT'
}

export enum MaritalStatus{
  SINGLE ='SINGLE',
  MARRIED ='MARRIED',
  FREE_UNION='FREE_UNION',
  WIDOWER ='WIDOWER',
}
export enum LinkedType{
  SUBSIDIZED ='SUBSIDIZED',
  LINKED ='LINKED',
  CONTRIBUTORY ='CONTRIBUTORY',
}
export enum AffiliateType{
  QUOTE ='QUOTE',
  BENEFICIARY ='BENEFICIARY',
  ADDITIONAL ='ADDITIONAL',
}
export enum InsuranceType{
  ARS ='ARS',
  EPS ='EPS',
  IPS ='IPS',
  ARL ='ARL',
}




@Schema({ ...SchemaConstants, collection: 'patient' })
export class PatientEntity extends PersistentEntity {
  @Prop() lastName: string;
  @Prop() firstName: string;
  @Prop() firstSurName: string;
  @Prop() lastSurName: string;
  @Prop() dateOfBirth: string;
  @Prop({type:String}) gender: Gender;
  @Prop({type:String}) documentType: DocumentType;
  @Prop() documentNumber: string;
  @Prop() placeOfBirth?: string;
  @Prop({type:String}) linkedType?: LinkedType;
  @Prop({type:String}) affiliateType?: AffiliateType;
  @Prop({type:String}) insuranceType?: InsuranceType;
  @Prop() insuranceName?: string;
  @Prop({type:String}) maritalStatus?: MaritalStatus;
  @Prop() homeAddress?: string;
  @Prop() neighborhood?: string;
  @Prop() municipality?: string;
  @Prop() homePhone?: string;
  @Prop() officePhone?: string;
  @Prop() occupation?: string;
  @Prop() email: string;
  
}

export const PatientSchema = SchemaFactory.createForClass(PatientEntity);

export const PatientFeature = {
  name: PatientEntity.name,
  schema: PatientSchema,
};
