import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IEntityHooks } from 'src/shared/core/interfaces/IEntityHooks';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { PatientEntity } from '../entities/patient.entity';
import { QuickMedicalHistoryRepository } from 'src/modules/quick-medical-history/repositories/quick-medical-history.repository';

@Injectable()
export class PatientRepository extends BaseRepository<PatientEntity, FilterableFieldsType<PatientEntity>> implements Partial<IEntityHooks<PatientEntity>> {
  constructor( private _quickMedicalHistoryRepository:QuickMedicalHistoryRepository,
    @Inject(PatientEntity.name) private readonly _patientModel: Model<PatientEntity>,
  ) {
    super(_patientModel, PatientRepository.name,{
      afterDelete: (e) => this.afterDelete(e)
    });
  }
  async afterDelete(patient: PatientEntity): Promise<void> {
    await this._quickMedicalHistoryRepository.deleteMany({ patient: { eq: patient.id } });
  }
}
