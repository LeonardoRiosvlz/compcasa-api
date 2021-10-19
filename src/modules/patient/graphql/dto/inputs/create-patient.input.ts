import { Field, InputType, ID } from '@nestjs/graphql';
import { Gender } from 'src/shared/modules/user/entities/schemas/profile.schema';
import { InsuranceType,AffiliateType,LinkedType,DocumentType,MaritalStatus } from 'src/modules/patient/entities/patient.entity';

@InputType()
export class CreatePatientInput {
  @Field(() => String, {nullable: true} ) lastName: string;
  @Field(() => String, {nullable: true} ) firstName: string;
  @Field(() => String, {nullable: true} ) firstSurName: string;
  @Field(() => String, {nullable: true} ) lastSurName: string;
  @Field(() => String, {nullable: true} ) dateOfBirth: string;
  @Field(() => Gender, {nullable: true} ) gender: Gender;
  @Field(() => DocumentType, )  documentType: DocumentType;
  @Field(() => String, )  documentNumber: string;
  @Field(() => LinkedType, {nullable: true} ) linkedType?: LinkedType;
  @Field(() => MaritalStatus, {nullable: true} ) maritalStatus?: MaritalStatus;
  @Field(() => AffiliateType, {nullable: true} ) affiliateType?: AffiliateType;
  @Field(() => InsuranceType, {nullable: true} ) insuranceType?: InsuranceType;
  @Field(() => String, {nullable: true} ) insuranceName?: string;
  @Field(() => String, {nullable: true} ) homeAddress?: string;
  @Field(() => String, {nullable: true} ) neighborhood?: string;
  @Field(() => String, {nullable: true} ) municipality?: string;
  @Field(() => String, {nullable: true} ) homePhone?: string;
  @Field(() => String, {nullable: true} ) officePhone?: string;
  @Field(() => String, {nullable: true} ) occupation?: string;
  @Field(() => String, {nullable: true} ) email: string;
}
