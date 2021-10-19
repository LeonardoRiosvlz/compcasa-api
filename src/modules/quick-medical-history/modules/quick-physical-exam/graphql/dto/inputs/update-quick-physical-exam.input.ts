import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateQuickPhysicalExamInput } from './create-quick-physical-exam.input';


@InputType()
export class PartialQuickPhysicalExamInput extends PartialType(CreateQuickPhysicalExamInput) {}

@InputType()
export class UpdateQuickPhysicalExamInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialQuickPhysicalExamInput)  update: PartialQuickPhysicalExamInput;

}
