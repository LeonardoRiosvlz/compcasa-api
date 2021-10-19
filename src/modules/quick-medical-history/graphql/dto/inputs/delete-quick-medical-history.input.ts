import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteQuickMedicalHistoryInput {
  @Field(() => ID, )  entityId: string;
}
