import { GetAllQuickPhysicalExamQueryHandler } from './handler/get-all-quick-physical-exam-query.handler';
import { GetPaginatedQuickPhysicalExamQueryHandler } from './handler/get-paginated-quick-physical-exam-query.handler';
import { GetOneQuickPhysicalExamQueryHandler } from './handler/get-one-quick-physical-exam-query.handler';
import { Provider } from '@nestjs/common';

export const QuickPhysicalExamQueryHandlers:Array<Provider> = [
  GetAllQuickPhysicalExamQueryHandler,
  GetPaginatedQuickPhysicalExamQueryHandler,
  GetOneQuickPhysicalExamQueryHandler,
];
