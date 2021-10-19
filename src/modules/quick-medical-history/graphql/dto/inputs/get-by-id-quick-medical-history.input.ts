import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdQuickMedicalHistoryInput {
  @Field(() => ID, )  entity__Id: string;
}
