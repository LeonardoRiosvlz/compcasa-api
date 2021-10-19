import { CommandHandler } from '@nestjs/cqrs';

import { CreatePharmacologicalManagementCommand } from '../impl/create-pharmacological-management.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { PharmacologicalManagementEntity } from '../../../entities/pharmacological-management.entity';
import { PharmacologicalManagementEntityService } from '../../../services/pharmacological-management-entity.service';

@CommandHandler(CreatePharmacologicalManagementCommand)
export class CreatePharmacologicalManagementCommandHandler extends CreateCommandHandler<PharmacologicalManagementEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, PharmacologicalManagementEntityService.name);
  }

}
