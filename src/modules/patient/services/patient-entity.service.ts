import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { PatientEntity } from '../entities/patient.entity';
import { PatientRepository } from '../repositories/patient.repository';
import { PatientErrors } from '../errors/patient.errors';

@Injectable()
export class PatientEntityService extends BaseEntityService<PatientEntity> {
  constructor(private readonly _patientRepo: PatientRepository) {
    super(_patientRepo, PatientEntity.name);
  }


  async create(entity: PatientEntity): Promise<Result<void>> {

    try {
      const exists_email =await this.repo.exist({ email: { eq: entity.email } });

      if (exists_email) {
        return Result.Fail(new PatientErrors.PatientFieldUsed('email', entity.email));
      }
      const exists_document =await this.repo.exist({ documentNumber: { eq: entity.documentNumber } });

      if (exists_document) {
        return Result.Fail(new PatientErrors.PatientFieldUsed('documentNumber', entity.documentNumber));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }

}
