import { GetAllMedicalRecordsQueryHandler } from './handler/get-all-medical-records-query.handler';
import { GetPaginatedMedicalRecordsQueryHandler } from './handler/get-paginated-medical-records-query.handler';
import { GetOneMedicalRecordsQueryHandler } from './handler/get-one-medical-records-query.handler';
import { Provider } from '@nestjs/common';

export const MedicalRecordsQueryHandlers:Array<Provider> = [
  GetAllMedicalRecordsQueryHandler,
  GetPaginatedMedicalRecordsQueryHandler,
  GetOneMedicalRecordsQueryHandler,
];
