import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdQuickPhysicalExamInput {
  @Field(() => ID, )  entity__Id: string;
}
