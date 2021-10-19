import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeletePatientInput {
  @Field(() => ID, )  entityId: string;
}
