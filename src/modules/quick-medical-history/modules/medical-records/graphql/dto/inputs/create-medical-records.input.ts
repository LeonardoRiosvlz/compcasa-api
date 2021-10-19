import { Field, InputType, ID } from '@nestjs/graphql';
import { MedicalRecordType } from '../../../entities/medical-records.entity';

@InputType()
export class CreateMedicalRecordsInput {
  @Field(() => ID, { nullable: true }) quickMedicalHistory: string;
  @Field(() => ID, { nullable: true }) patient: string;
  @Field(() => MedicalRecordType, {nullable: true} )  medicalRecordType: MedicalRecordType;
  @Field(() => String, )  description: string;
}
