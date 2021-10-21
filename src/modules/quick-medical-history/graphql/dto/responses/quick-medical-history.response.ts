import { Field, ID,  ObjectType , registerEnumType} from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { QuickMedicalHistoryType } from 'src/modules/quick-medical-history/entities/quick-medical-history.entity';

registerEnumType(QuickMedicalHistoryType, { name: 'QuickMedicalHistoryType' });

@ObjectType()
export class QuickMedicalHistoryResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse,{nullable: true}) patient: SolvedEntityResponse;
  @Field(()=>QuickMedicalHistoryType,{nullable: true}) quickMedicalHistoryType: QuickMedicalHistoryType;
  @Field({nullable: true}) companionsName?: string;
  @Field({nullable: true}) companionsPhoneNumber?: string;
  @Field({nullable: true}) companionsType?: string;
  @Field({nullable: true}) responsibleName?: string;
  @Field({nullable: true}) responsiblePhoneNumber?: string;
  @Field({nullable: true}) responsibleOfficeNumber?: string;
  @Field({nullable: true}) reasonForConsultation?: string;
  @Field({nullable: true}) relationship?: string;
  @Field({nullable: true}) currentIllness?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
