import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PatientEntity } from 'src/modules/patient/entities/patient.entity';
import { Schema as MSchema } from 'mongoose';
import { QuickMedicalHistoryEntity } from 'src/modules/quick-medical-history/entities/quick-medical-history.entity';

@Schema({ ...SchemaConstants, collection: 'quick-physical-exam' })
export class QuickPhysicalExamEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => QuickMedicalHistoryEntity}) quickMedicalHistory: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => PatientEntity}) patient: string;
  @Prop() bloodPressure?: string;
  @Prop() heartRate?: string;
  @Prop() breathingFrequency?: string;
  @Prop() oxygenSaturation?: string;
  @Prop() temperature?: string;
  @Prop() glucometry?: string;
  @Prop() description?: string;
  @Prop() clinicalAnalysis?: string;
  @Prop() diagnosticImpression?: string;
  
}

export const QuickPhysicalExamSchema = SchemaFactory.createForClass(QuickPhysicalExamEntity);

export const QuickPhysicalExamFeature = {
  name: QuickPhysicalExamEntity.name,
  schema: QuickPhysicalExamSchema,
};
