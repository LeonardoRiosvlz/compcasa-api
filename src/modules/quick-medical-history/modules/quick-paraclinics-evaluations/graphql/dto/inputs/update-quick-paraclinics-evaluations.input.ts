import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateQuickParaclinicsEvaluationsInput } from './create-quick-paraclinics-evaluations.input';


@InputType()
export class PartialQuickParaclinicsEvaluationsInput extends PartialType(CreateQuickParaclinicsEvaluationsInput) {}

@InputType()
export class UpdateQuickParaclinicsEvaluationsInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialQuickParaclinicsEvaluationsInput)  update: PartialQuickParaclinicsEvaluationsInput;

}
