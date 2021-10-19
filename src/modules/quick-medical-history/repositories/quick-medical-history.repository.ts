import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IEntityHooks } from 'src/shared/core/interfaces/IEntityHooks';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { QuickMedicalHistoryEntity } from '../entities/quick-medical-history.entity';
import { MedicalRecordsRepository } from '../modules/medical-records/repositories/medical-records.repository';
import { QuickPhysicalExamRepository } from '../modules/quick-physical-exam/repositories/quick-physical-exam.repository';
import { PharmacologicalManagementRepository } from '../modules/pharmacological-management/repositories/pharmacological-management.repository';
import { QuickComprehensiveManagementRepository } from '../modules/quick-comprehensive-management/repositories/quick-comprehensive-management.repository';
import { QuickParaclinicsEvaluationsRepository } from '../modules/quick-paraclinics-evaluations/repositories/quick-paraclinics-evaluations.repository';


@Injectable()
export class QuickMedicalHistoryRepository extends BaseRepository<QuickMedicalHistoryEntity, FilterableFieldsType<QuickMedicalHistoryEntity>> implements Partial<IEntityHooks<QuickMedicalHistoryEntity>> {
  constructor(private _medicalRecordsRepository:MedicalRecordsRepository,
              private _quickPhysicalExamRepository:QuickPhysicalExamRepository,
              private _pharmacologicalManagementRepository:PharmacologicalManagementRepository,
              private _quickComprehensiveManagementRepository:QuickComprehensiveManagementRepository,
              private _quickParaclinicsEvaluationsRepository:QuickParaclinicsEvaluationsRepository,
    @Inject(QuickMedicalHistoryEntity.name) private readonly _quickMedicalHistoryModel: Model<QuickMedicalHistoryEntity>,
  ) {
    super(_quickMedicalHistoryModel, QuickMedicalHistoryRepository.name,{
      afterDelete: (e) => this.afterDelete(e)
    });
  }
  async afterDelete(quickMedicalHistory: QuickMedicalHistoryEntity): Promise<void> {
    await this._medicalRecordsRepository.deleteMany({ quickMedicalHistory: { eq: quickMedicalHistory.id } });
    await this._quickPhysicalExamRepository.deleteMany({ quickMedicalHistory: { eq: quickMedicalHistory.id } });
    await this._pharmacologicalManagementRepository.deleteMany({ quickMedicalHistory: { eq: quickMedicalHistory.id } });
    await this._quickComprehensiveManagementRepository.deleteOne({ quickMedicalHistory: { eq: quickMedicalHistory.id } });
    await this._quickParaclinicsEvaluationsRepository.deleteOne({ quickMedicalHistory: { eq: quickMedicalHistory.id } });
  }
}
