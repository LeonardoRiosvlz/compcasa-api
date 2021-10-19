import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateQuickPhysicalExamInput {
  @Field(() => ID, { nullable: true }) quickMedicalHistory: string;
  @Field(() => ID, { nullable: true }) patient: string;
  @Field(() => String, )  bloodPressure?: string;
  @Field(() => String, )  heartRate?: string;
  @Field(() => String, )  breathingFrequency?: string;
  @Field(() => String, )  oxygenSaturation?: string;
  @Field(() => String, )  temperature?: string;
  @Field(() => String, )  glucometry?: string;
  @Field(() => String, )  description?: string;
  @Field(() => String, )  clinicalAnalysis?: string;
  @Field(() => String, )  diagnosticImpression?: string;
}
