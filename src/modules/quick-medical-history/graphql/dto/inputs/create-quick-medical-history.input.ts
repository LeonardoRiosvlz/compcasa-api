import { Field, InputType, ID } from '@nestjs/graphql';
import { QuickMedicalHistoryType } from 'src/modules/quick-medical-history/entities/quick-medical-history.entity';


@InputType()
export class CreateQuickMedicalHistoryInput {
  @Field(() => ID, {nullable: true} )  patient: string;
  @Field(() => QuickMedicalHistoryType,{nullable: true} )  quickMedicalHistoryType: QuickMedicalHistoryType;
  @Field(() => String,{nullable: true} )  companionsName?: string;
  @Field(() => String,{nullable: true} )  companionsPhoneNumber?: string;
  @Field(() => String,{nullable: true} )  companionsType?: string;
  @Field(() => String,{nullable: true} )  responsableName?: string;
  @Field(() => String,{nullable: true} )  responsablePhoneNumber?: string;
  @Field(() => String,{nullable: true} )  responsableOfficeNumber?: string;
  @Field(() => String,{nullable: true} )  reasonForConsultation?: string;
  @Field(() => String,{nullable: true} )  relationship?: string;
  @Field(() => String,{nullable: true} )  currentIllness?: string;
  @Field(() => String,{nullable: true} )  description?: string;
}
