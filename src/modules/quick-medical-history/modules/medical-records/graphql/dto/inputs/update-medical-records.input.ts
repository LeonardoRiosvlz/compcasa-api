import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateMedicalRecordsInput } from './create-medical-records.input';


@InputType()
export class PartialMedicalRecordsInput extends PartialType(CreateMedicalRecordsInput) {}

@InputType()
export class UpdateMedicalRecordsInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialMedicalRecordsInput)  update: PartialMedicalRecordsInput;

}
