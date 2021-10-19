import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdPharmacologicalManagementInput {
  @Field(() => ID, )  entity__Id: string;
}
