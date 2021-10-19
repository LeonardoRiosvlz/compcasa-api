import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdPatientInput {
  @Field(() => ID, )  entity__Id: string;
}
