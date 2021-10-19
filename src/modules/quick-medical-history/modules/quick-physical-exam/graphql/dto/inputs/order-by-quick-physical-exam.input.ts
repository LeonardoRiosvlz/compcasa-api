import { Field, InputType } from '@nestjs/graphql';
import { OrderByType } from 'src/shared/modules/graphql/dto/input/orderby-enum.input';


@InputType()
export class OrderByQuickPhysicalExamInput {
  @Field(() => OrderByType, { nullable: true })  bloodPressure?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  heartRate?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  breathingFrequency?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  oxygenSaturation?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  temperature?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  glucometry?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  description?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  clinicalAnalysis?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  diagnosticImpression?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  createdAt?: OrderByType;
}
