import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { MedicalRecordsEntity } from '../../../entities/medical-records.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyMedicalRecordsCommand extends DeleteManyCommand<MedicalRecordsEntity>{
  constructor(public request: GetOneDto<MedicalRecordsEntity>) {
    super(request)
  }
}
