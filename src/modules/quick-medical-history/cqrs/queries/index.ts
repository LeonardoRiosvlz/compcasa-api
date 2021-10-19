import { GetAllQuickMedicalHistoryQueryHandler } from './handler/get-all-quick-medical-history-query.handler';
import { GetPaginatedQuickMedicalHistoryQueryHandler } from './handler/get-paginated-quick-medical-history-query.handler';
import { GetOneQuickMedicalHistoryQueryHandler } from './handler/get-one-quick-medical-history-query.handler';
import { Provider } from '@nestjs/common';

export const QuickMedicalHistoryQueryHandlers:Array<Provider> = [
  GetAllQuickMedicalHistoryQueryHandler,
  GetPaginatedQuickMedicalHistoryQueryHandler,
  GetOneQuickMedicalHistoryQueryHandler,
];
