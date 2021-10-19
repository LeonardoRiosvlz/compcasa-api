import { Field, ID,  ObjectType, registerEnumType } from '@nestjs/graphql';
import { Gender } from 'src/shared/modules/user/entities/schemas/profile.schema';
import { InsuranceType,AffiliateType,LinkedType,DocumentType,MaritalStatus } from 'src/modules/patient/entities/patient.entity';

registerEnumType(DocumentType, { name: 'DocumentType' });
registerEnumType(MaritalStatus, { name: 'MaritalStatus' });
registerEnumType(InsuranceType, { name: 'InsuranceType' });
registerEnumType(AffiliateType, { name: 'AffiliateType' });
registerEnumType(LinkedType, { name: 'LinkedType' });

@ObjectType()
export class PatientResponse{
  @Field(() => ID) id: string;
  @Field(() => String, {nullable: true} ) lastName: string;
  @Field(() => String, {nullable: true} ) firstName: string;
  @Field(() => String, {nullable: true} ) dateOfBirth: string;
  @Field(() => Gender, {nullable: true} ) gender: Gender;
  @Field(()=>DocumentType,{nullable: true}) documentType: DocumentType;
  @Field({nullable: true}) documentNumber: string;
  @Field(() => MaritalStatus, {nullable: true} ) maritalStatus?: MaritalStatus;
  @Field(() => InsuranceType, {nullable: true} ) insuranceType?: InsuranceType;
  @Field(() => AffiliateType, {nullable: true} ) affiliateType?: AffiliateType;
  @Field(() => LinkedType, {nullable: true} ) linkedType?: LinkedType;
  @Field(() => String, {nullable: true} ) insuranceName?: string;
  @Field(() => String, {nullable: true} ) homeAddress?: string;
  @Field(() => String, {nullable: true} ) neighborhood?: string;
  @Field(() => String, {nullable: true} ) municipality?: string;
  @Field(() => String, {nullable: true} ) homePhone?: string;
  @Field(() => String, {nullable: true} ) officePhone?: string;
  @Field(() => String, {nullable: true} ) occupation?: string;
  @Field(() => String, {nullable: true} ) email: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
