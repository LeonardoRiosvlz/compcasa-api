import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PatientEntity } from 'src/modules/patient/entities/patient.entity';
import { Schema as MSchema } from 'mongoose';
import { QuickMedicalHistoryEntity } from 'src/modules/quick-medical-history/entities/quick-medical-history.entity';

@Schema({ ...SchemaConstants, collection: 'quick-comprehensive-management' })
export class QuickComprehensiveManagementEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => QuickMedicalHistoryEntity}) quickMedicalHistory: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => PatientEntity}) patient: string;
  @Prop() physicalTherapy: string;
  @Prop() occupationalTherapy: string;
  @Prop() nutrition: string;
  @Prop() psychology: string;
  @Prop() languageTherapy: string;
  @Prop() respiratoryTherapy: string;
  @Prop() socialWork: string;
  @Prop() nursingAssistant: string;
}

export const QuickComprehensiveManagementSchema = SchemaFactory.createForClass(QuickComprehensiveManagementEntity);

export const QuickComprehensiveManagementFeature = {
  name: QuickComprehensiveManagementEntity.name,
  schema: QuickComprehensiveManagementSchema,
};
