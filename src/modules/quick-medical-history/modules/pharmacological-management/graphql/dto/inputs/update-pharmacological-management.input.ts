import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreatePharmacologicalManagementInput } from './create-pharmacological-management.input';


@InputType()
export class PartialPharmacologicalManagementInput extends PartialType(CreatePharmacologicalManagementInput) {}

@InputType()
export class UpdatePharmacologicalManagementInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialPharmacologicalManagementInput)  update: PartialPharmacologicalManagementInput;

}
