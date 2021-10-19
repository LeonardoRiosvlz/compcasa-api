import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteQuickComprehensiveManagementInput {
  @Field(() => ID, )  entityId: string;
}
