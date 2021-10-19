import { GetAllPharmacologicalManagementQueryHandler } from './handler/get-all-pharmacological-management-query.handler';
import { GetPaginatedPharmacologicalManagementQueryHandler } from './handler/get-paginated-pharmacological-management-query.handler';
import { GetOnePharmacologicalManagementQueryHandler } from './handler/get-one-pharmacological-management-query.handler';
import { Provider } from '@nestjs/common';

export const PharmacologicalManagementQueryHandlers:Array<Provider> = [
  GetAllPharmacologicalManagementQueryHandler,
  GetPaginatedPharmacologicalManagementQueryHandler,
  GetOnePharmacologicalManagementQueryHandler,
];
