import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdQuickComprehensiveManagementInput {
  @Field(() => ID, )  entity__Id: string;
}
