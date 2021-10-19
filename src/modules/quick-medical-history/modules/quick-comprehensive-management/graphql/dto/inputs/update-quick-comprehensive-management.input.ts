import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateQuickComprehensiveManagementInput } from './create-quick-comprehensive-management.input';


@InputType()
export class PartialQuickComprehensiveManagementInput extends PartialType(CreateQuickComprehensiveManagementInput) {}

@InputType()
export class UpdateQuickComprehensiveManagementInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialQuickComprehensiveManagementInput)  update: PartialQuickComprehensiveManagementInput;

}
