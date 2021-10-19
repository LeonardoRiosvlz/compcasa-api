import { CommandHandler } from '@nestjs/cqrs';
import { UpdatePharmacologicalManagementCommand } from '../impl/update-pharmacological-management.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { PharmacologicalManagementEntityService } from '../../../services/pharmacological-management-entity.service';
import { PharmacologicalManagementEntity } from '../../../entities/pharmacological-management.entity';

@CommandHandler(UpdatePharmacologicalManagementCommand)
export class UpdatePharmacologicalManagementCommandHandler extends UpdateCommandHandler<PharmacologicalManagementEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, PharmacologicalManagementEntityService.name)
  }

}
