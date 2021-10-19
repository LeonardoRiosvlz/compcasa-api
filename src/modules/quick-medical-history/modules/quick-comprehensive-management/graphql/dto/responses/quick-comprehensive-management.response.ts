import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class QuickComprehensiveManagementResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) quickMedicalHistory: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) patient : SolvedEntityResponse;
  @Field({nullable: true})physicalTherapy: string;
  @Field({nullable: true})occupationalTherapy: string;
  @Field({nullable: true})nutrition: string;
  @Field({nullable: true})psychology: string;
  @Field({nullable: true})languageTherapy: string;
  @Field({nullable: true})respiratoryTherapy: string;
  @Field({nullable: true})socialWork: string;
  @Field({nullable: true})nursingAssistant: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
