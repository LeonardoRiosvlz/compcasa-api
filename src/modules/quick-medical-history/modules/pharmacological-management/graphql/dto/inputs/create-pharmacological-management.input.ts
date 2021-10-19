import { Field, InputType, ID, Int} from '@nestjs/graphql';

@InputType()
export class CreatePharmacologicalManagementInput {
  @Field(() => ID, { nullable: true }) quickMedicalHistory: string;
  @Field(() => ID, { nullable: true }) patient: string;
  @Field(() => Int, )  item: number;
  @Field(() => String )  description: string;
}
