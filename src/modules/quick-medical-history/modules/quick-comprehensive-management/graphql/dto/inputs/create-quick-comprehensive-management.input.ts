import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateQuickComprehensiveManagementInput {
  @Field(() => ID, { nullable: true }) quickMedicalHistory: string;
  @Field(() => ID, { nullable: true }) patient: string;
  @Field(() => String, )physicalTherapy: string;
  @Field(() => String, )occupationalTherapy: string;
  @Field(() => String, )nutrition: string;
  @Field(() => String, )psychology: string;
  @Field(() => String, )languageTherapy: string;
  @Field(() => String, )respiratoryTherapy: string;
  @Field(() => String, )socialWork: string;
  @Field(() => String, )nursingAssistant: string;
}
