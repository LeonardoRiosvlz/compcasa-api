import { Field, ID,  ObjectType, registerEnumType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { MedicalRecordType } from '../../../entities/medical-records.entity';

registerEnumType(MedicalRecordType, { name: 'MedicalRecordType' });

@ObjectType()
export class MedicalRecordsResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) quickMedicalHistory: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) patient : SolvedEntityResponse;
  @Field(() => MedicalRecordType, {nullable: true} ) medicalRecordType: MedicalRecordType;
  @Field({nullable: true}) description: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
