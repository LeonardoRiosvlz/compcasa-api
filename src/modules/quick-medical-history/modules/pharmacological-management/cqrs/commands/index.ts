import { CreatePharmacologicalManagementCommandHandler } from './handler/create-pharmacological-management-command.handler';
import { DeletePharmacologicalManagementCommandHandler } from './handler/delete-pharmacological-management-command.handler';
import { UpdatePharmacologicalManagementCommandHandler } from './handler/update-pharmacological-management-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyPharmacologicalManagementCommandHandler } from './handler/delete-many-pharmacological-management-command.handler';

export const PharmacologicalManagementCommandHandlers: Array<Provider> = [
  CreatePharmacologicalManagementCommandHandler,
  DeletePharmacologicalManagementCommandHandler,
  UpdatePharmacologicalManagementCommandHandler,
  DeleteManyPharmacologicalManagementCommandHandler
];
