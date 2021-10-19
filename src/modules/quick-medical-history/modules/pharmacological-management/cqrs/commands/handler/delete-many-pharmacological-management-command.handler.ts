import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyPharmacologicalManagementCommand } from '../impl/delete-many-pharmacological-management.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { PharmacologicalManagementEntity } from '../../../entities/pharmacological-management.entity';
import { PharmacologicalManagementEntityService } from '../../../services/pharmacological-management-entity.service';

@CommandHandler(DeleteManyPharmacologicalManagementCommand)
export class DeleteManyPharmacologicalManagementCommandHandler extends DeleteManyCommandHandler<PharmacologicalManagementEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, PharmacologicalManagementEntityService.name)
  }

}
