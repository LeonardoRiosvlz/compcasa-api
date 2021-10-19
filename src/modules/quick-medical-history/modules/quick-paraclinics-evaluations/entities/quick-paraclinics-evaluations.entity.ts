import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PatientEntity } from 'src/modules/patient/entities/patient.entity';
import { Schema as MSchema } from 'mongoose';
import { QuickMedicalHistoryEntity } from 'src/modules/quick-medical-history/entities/quick-medical-history.entity';


@Schema({ ...SchemaConstants, collection: 'quick-paraclinics-evaluations' })
export class QuickParaclinicsEvaluationsEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => QuickMedicalHistoryEntity}) quickMedicalHistory: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => PatientEntity}) patient: string;
  @Prop() paraclinics?: string;
  @Prop() evaluations?: string;
}

export const QuickParaclinicsEvaluationsSchema = SchemaFactory.createForClass(QuickParaclinicsEvaluationsEntity);

export const QuickParaclinicsEvaluationsFeature = {
  name: QuickParaclinicsEvaluationsEntity.name,
  schema: QuickParaclinicsEvaluationsSchema,
};
