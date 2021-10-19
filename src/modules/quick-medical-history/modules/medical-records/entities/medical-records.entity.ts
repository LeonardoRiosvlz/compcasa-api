import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PatientEntity } from 'src/modules/patient/entities/patient.entity';
import { Schema as MSchema } from 'mongoose';
import { QuickMedicalHistoryEntity } from 'src/modules/quick-medical-history/entities/quick-medical-history.entity';


export enum MedicalRecordType{
  PATHOLOGICAL='PATHOLOGICAL',
  SURGICAL='SURGICAL',
  PHARMACOLOGICAL='PHARMACOLOGICAL',
  ALLERGIC_TOXIC='ALLERGIC_TOXIC',
  TRAUMATIC='TRAUMATIC',
  FAMILY='FAMILY',
  TRANSFUSIONALS='TRANSFUSIONALS',
  GYNECOLOGICAL='GYNECOLOGICAL',
  EXPOSITIONAL='EXPOSITIONAL',
  OTHERS='OTHERS'
}

@Schema({ ...SchemaConstants, collection: 'medical-records' })
export class MedicalRecordsEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => QuickMedicalHistoryEntity}) quickMedicalHistory: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => PatientEntity}) patient: string;
  @Prop({type:String}) medicalRecordType: MedicalRecordType;
  @Prop() description: string;
}

export const MedicalRecordsSchema = SchemaFactory.createForClass(MedicalRecordsEntity);

export const MedicalRecordsFeature = {
  name: MedicalRecordsEntity.name,
  schema: MedicalRecordsSchema,
};
