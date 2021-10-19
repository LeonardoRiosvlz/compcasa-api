import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { PharmacologicalManagementEntity } from '../entities/pharmacological-management.entity';
import { PharmacologicalManagementRepository } from '../repositories/pharmacological-management.repository';
import { PharmacologicalManagementErrors } from '../errors/pharmacological-management.errors';

@Injectable()
export class PharmacologicalManagementEntityService extends BaseEntityService<PharmacologicalManagementEntity> {
  constructor(private readonly _pharmacologicalManagementRepo: PharmacologicalManagementRepository) {
    super(_pharmacologicalManagementRepo, PharmacologicalManagementEntity.name);
  }

  async create(entity: PharmacologicalManagementEntity): Promise<Result<void>> {

    try {
      if (entity.item<1||entity.item>20) {
        return Result.Fail(new PharmacologicalManagementErrors.PharmacologicalManagementFieldInvalid('item', entity.item.toString()));
      }

      const exists = await this._pharmacologicalManagementRepo.findOne({
        quickMedicalHistory: { eq: entity.quickMedicalHistory }, 
        item: { eq: entity.item } 
      });
      if (exists) {
        return Result.Fail(new PharmacologicalManagementErrors.PharmacologicalManagementFieldUsed('item', entity.item.toString()));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }



}
