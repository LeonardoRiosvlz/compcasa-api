import { CreateQuickParaclinicsEvaluationsCommandHandler } from './handler/create-quick-paraclinics-evaluations-command.handler';
import { DeleteQuickParaclinicsEvaluationsCommandHandler } from './handler/delete-quick-paraclinics-evaluations-command.handler';
import { UpdateQuickParaclinicsEvaluationsCommandHandler } from './handler/update-quick-paraclinics-evaluations-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyQuickParaclinicsEvaluationsCommandHandler } from './handler/delete-many-quick-paraclinics-evaluations-command.handler';

export const QuickParaclinicsEvaluationsCommandHandlers: Array<Provider> = [
  CreateQuickParaclinicsEvaluationsCommandHandler,
  DeleteQuickParaclinicsEvaluationsCommandHandler,
  UpdateQuickParaclinicsEvaluationsCommandHandler,
  DeleteManyQuickParaclinicsEvaluationsCommandHandler
];
