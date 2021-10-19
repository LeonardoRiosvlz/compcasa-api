import { GetAllQuickComprehensiveManagementQueryHandler } from './handler/get-all-quick-comprehensive-management-query.handler';
import { GetPaginatedQuickComprehensiveManagementQueryHandler } from './handler/get-paginated-quick-comprehensive-management-query.handler';
import { GetOneQuickComprehensiveManagementQueryHandler } from './handler/get-one-quick-comprehensive-management-query.handler';
import { Provider } from '@nestjs/common';

export const QuickComprehensiveManagementQueryHandlers:Array<Provider> = [
  GetAllQuickComprehensiveManagementQueryHandler,
  GetPaginatedQuickComprehensiveManagementQueryHandler,
  GetOneQuickComprehensiveManagementQueryHandler,
];
