import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';


@ObjectType()
export class QuickPhysicalExamResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) quickMedicalHistory: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) patient : SolvedEntityResponse;
  @Field({nullable: true}) bloodPressure?: string;
  @Field({nullable: true}) heartRate?: string;
  @Field({nullable: true}) breathingFrequency?: string;
  @Field({nullable: true}) oxygenSaturation?: string;
  @Field({nullable: true}) temperature?: string;
  @Field({nullable: true}) glucometry?: string;
  @Field({nullable: true}) description?: string;
  @Field({nullable: true}) clinicalAnalysis?: string;
  @Field({nullable: true}) diagnosticImpression?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
