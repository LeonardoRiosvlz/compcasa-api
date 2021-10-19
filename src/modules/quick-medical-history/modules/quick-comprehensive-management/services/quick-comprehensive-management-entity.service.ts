import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { QuickComprehensiveManagementEntity } from '../entities/quick-comprehensive-management.entity';
import { QuickComprehensiveManagementRepository } from '../repositories/quick-comprehensive-management.repository';
import { QuickComprehensiveManagementErrors } from '../errors/quick-comprehensive-management.errors';

@Injectable()
export class QuickComprehensiveManagementEntityService extends BaseEntityService<QuickComprehensiveManagementEntity> {
  constructor(private readonly _quickComprehensiveManagementRepo: QuickComprehensiveManagementRepository) {
    super(_quickComprehensiveManagementRepo, QuickComprehensiveManagementEntity.name);
  }

  async create(entity: QuickComprehensiveManagementEntity): Promise<Result<void>> {

    try {
      const exists = await this._quickComprehensiveManagementRepo.findOne({
        quickMedicalHistory: { eq: entity.quickMedicalHistory }
      });
      if (exists) {
        return Result.Fail(new QuickComprehensiveManagementErrors.QuickComprehensiveManagementFieldUsed('quickMedicalHistory', entity.quickMedicalHistory));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }



}
