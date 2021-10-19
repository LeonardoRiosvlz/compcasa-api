import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
@ObjectType()
export class QuickParaclinicsEvaluationsResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) quickMedicalHistory: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) patient : SolvedEntityResponse;
  @Field({nullable: true}) paraclinics?: string;
  @Field({nullable: true}) evaluations?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
