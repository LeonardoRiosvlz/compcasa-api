import { Field, ID,  ObjectType, Int } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class PharmacologicalManagementResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) quickMedicalHistory: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) patient : SolvedEntityResponse;
  @Field(() => Int) item: number;
  @Field() description: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
