import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdMedicalRecordsInput {
  @Field(() => ID, )  entity__Id: string;
}
