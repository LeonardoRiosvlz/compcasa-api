import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateQuickParaclinicsEvaluationsInput {
  @Field(() => ID, { nullable: true }) quickMedicalHistory: string;
  @Field(() => ID, { nullable: true }) patient: string;
  @Field(() => String )  paraclinics?: string;
  @Field(() => String )  evaluations?: string;
}
