import { CreateQuickMedicalHistoryCommandHandler } from './handler/create-quick-medical-history-command.handler';
import { DeleteQuickMedicalHistoryCommandHandler } from './handler/delete-quick-medical-history-command.handler';
import { UpdateQuickMedicalHistoryCommandHandler } from './handler/update-quick-medical-history-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyQuickMedicalHistoryCommandHandler } from './handler/delete-many-quick-medical-history-command.handler';

export const QuickMedicalHistoryCommandHandlers: Array<Provider> = [
  CreateQuickMedicalHistoryCommandHandler,
  DeleteQuickMedicalHistoryCommandHandler,
  UpdateQuickMedicalHistoryCommandHandler,
  DeleteManyQuickMedicalHistoryCommandHandler
];
