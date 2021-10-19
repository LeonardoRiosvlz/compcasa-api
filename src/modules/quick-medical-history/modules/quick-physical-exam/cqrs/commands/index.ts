import { CreateQuickPhysicalExamCommandHandler } from './handler/create-quick-physical-exam-command.handler';
import { DeleteQuickPhysicalExamCommandHandler } from './handler/delete-quick-physical-exam-command.handler';
import { UpdateQuickPhysicalExamCommandHandler } from './handler/update-quick-physical-exam-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyQuickPhysicalExamCommandHandler } from './handler/delete-many-quick-physical-exam-command.handler';

export const QuickPhysicalExamCommandHandlers: Array<Provider> = [
  CreateQuickPhysicalExamCommandHandler,
  DeleteQuickPhysicalExamCommandHandler,
  UpdateQuickPhysicalExamCommandHandler,
  DeleteManyQuickPhysicalExamCommandHandler
];
