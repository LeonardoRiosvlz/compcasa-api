import { CommandHandler } from '@nestjs/cqrs';
import { DeletePharmacologicalManagementCommand } from '../impl/delete-pharmacological-management.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { PharmacologicalManagementEntity } from '../../../entities/pharmacological-management.entity';
import { PharmacologicalManagementEntityService } from '../../../services/pharmacological-management-entity.service';

@CommandHandler(DeletePharmacologicalManagementCommand)
export class DeletePharmacologicalManagementCommandHandler extends DeleteCommandHandler<PharmacologicalManagementEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, PharmacologicalManagementEntityService.name)
  }
}
