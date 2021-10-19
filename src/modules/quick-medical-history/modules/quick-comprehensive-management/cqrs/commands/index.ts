import { CreateQuickComprehensiveManagementCommandHandler } from './handler/create-quick-comprehensive-management-command.handler';
import { DeleteQuickComprehensiveManagementCommandHandler } from './handler/delete-quick-comprehensive-management-command.handler';
import { UpdateQuickComprehensiveManagementCommandHandler } from './handler/update-quick-comprehensive-management-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyQuickComprehensiveManagementCommandHandler } from './handler/delete-many-quick-comprehensive-management-command.handler';

export const QuickComprehensiveManagementCommandHandlers: Array<Provider> = [
  CreateQuickComprehensiveManagementCommandHandler,
  DeleteQuickComprehensiveManagementCommandHandler,
  UpdateQuickComprehensiveManagementCommandHandler,
  DeleteManyQuickComprehensiveManagementCommandHandler
];
