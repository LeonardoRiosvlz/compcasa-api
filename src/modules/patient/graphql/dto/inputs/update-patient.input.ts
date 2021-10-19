import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreatePatientInput } from './create-patient.input';


@InputType()
export class PartialPatientInput extends PartialType(CreatePatientInput) {}

@InputType()
export class UpdatePatientInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialPatientInput)  update: PartialPatientInput;

}
