import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { QuickMedicalHistoryEntity } from '../entities/quick-medical-history.entity';
import { QuickMedicalHistoryRepository } from '../repositories/quick-medical-history.repository';
import { QuickParaclinicsEvaluationsErrors } from '../modules/quick-paraclinics-evaluations/errors/quick-paraclinics-evaluations.errors';

@Injectable()
export class QuickMedicalHistoryEntityService extends BaseEntityService<QuickMedicalHistoryEntity> {
  constructor(private readonly _quickMedicalHistoryRepo: QuickMedicalHistoryRepository) {
    super(_quickMedicalHistoryRepo, QuickMedicalHistoryEntity.name);
  }

  async create(entity: QuickMedicalHistoryEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ quickMedicalHistoryType: { eq: entity.quickMedicalHistoryType } });

      if (exists) {
        return Result.Fail(new QuickParaclinicsEvaluationsErrors.QuickParaclinicsEvaluationsFieldUsed('quickMedicalHistoryType', entity.quickMedicalHistoryType));
      }
      await super.create(entity);
      return Result.Ok();

    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}
