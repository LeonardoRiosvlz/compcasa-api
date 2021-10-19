import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MSchema } from 'mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PatientEntity } from 'src/modules/patient/entities/patient.entity';

export enum QuickMedicalHistoryType{
  ACUTE_HOSPITAL_EXTENSION ='ACUTE_HOSPITAL_EXTENSION',
  ACUTE_HEALTH_AT_HOME ='ACUTE_HEALTH_AT_HOME',
  CHRONIC_WITHOUT_NURSING ='CHRONIC_WITHOUT_NURSING',
  CHRONIC_WITH_NURSING ='CHRONIC_WITH_NURSING'
}

@Schema({ ...SchemaConstants, collection: 'quick-medical-history' })
export class QuickMedicalHistoryEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => PatientEntity}) patient: string;
  @Prop({type:String}) quickMedicalHistoryType: QuickMedicalHistoryType;
  @Prop() companionsName?: string;
  @Prop() companionsPhoneNumber?: string;
  @Prop() companionsType?: string;
  @Prop() responsableName?: string;
  @Prop() responsablePhoneNumber?: string;
  @Prop() responsableOfficeNumber?: string;
  @Prop() reasonForConsultation?: string;
  @Prop() relationship?: string;
  @Prop() currentIllness?: string;
}

export const QuickMedicalHistorySchema = SchemaFactory.createForClass(QuickMedicalHistoryEntity);

export const QuickMedicalHistoryFeature = {
  name: QuickMedicalHistoryEntity.name,
  schema: QuickMedicalHistorySchema,
};
