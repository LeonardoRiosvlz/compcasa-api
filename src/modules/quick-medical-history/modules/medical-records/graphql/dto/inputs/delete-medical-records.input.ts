import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteMedicalRecordsInput {
  @Field(() => ID, )  entityId: string;
}
