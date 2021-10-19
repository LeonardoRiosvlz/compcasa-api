import { GetAllQuickParaclinicsEvaluationsQueryHandler } from './handler/get-all-quick-paraclinics-evaluations-query.handler';
import { GetPaginatedQuickParaclinicsEvaluationsQueryHandler } from './handler/get-paginated-quick-paraclinics-evaluations-query.handler';
import { GetOneQuickParaclinicsEvaluationsQueryHandler } from './handler/get-one-quick-paraclinics-evaluations-query.handler';
import { Provider } from '@nestjs/common';

export const QuickParaclinicsEvaluationsQueryHandlers:Array<Provider> = [
  GetAllQuickParaclinicsEvaluationsQueryHandler,
  GetPaginatedQuickParaclinicsEvaluationsQueryHandler,
  GetOneQuickParaclinicsEvaluationsQueryHandler,
];
