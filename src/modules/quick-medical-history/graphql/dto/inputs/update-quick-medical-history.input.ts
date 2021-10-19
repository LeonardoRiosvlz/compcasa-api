import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateQuickMedicalHistoryInput } from './create-quick-medical-history.input';


@InputType()
export class PartialQuickMedicalHistoryInput extends PartialType(CreateQuickMedicalHistoryInput) {}

@InputType()
export class UpdateQuickMedicalHistoryInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialQuickMedicalHistoryInput)  update: PartialQuickMedicalHistoryInput;

}
