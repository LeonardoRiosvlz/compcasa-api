import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PatientEntity } from 'src/modules/patient/entities/patient.entity';
import { Schema as MSchema } from 'mongoose';
import { QuickMedicalHistoryEntity } from 'src/modules/quick-medical-history/entities/quick-medical-history.entity';

@Schema({ ...SchemaConstants, collection: 'pharmacological-management' })
export class PharmacologicalManagementEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => QuickMedicalHistoryEntity}) quickMedicalHistory: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => PatientEntity}) patient: string;
  @Prop() item: number;
  @Prop() description: string;
}

export const PharmacologicalManagementSchema = SchemaFactory.createForClass(PharmacologicalManagementEntity);

export const PharmacologicalManagementFeature = {
  name: PharmacologicalManagementEntity.name,
  schema: PharmacologicalManagementSchema,
};
