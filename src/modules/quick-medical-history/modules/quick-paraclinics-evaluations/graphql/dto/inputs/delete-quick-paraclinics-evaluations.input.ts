import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteQuickParaclinicsEvaluationsInput {
  @Field(() => ID, )  entityId: string;
}
