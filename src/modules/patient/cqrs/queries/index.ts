import { GetAllPatientQueryHandler } from './handler/get-all-patient-query.handler';
import { GetPaginatedPatientQueryHandler } from './handler/get-paginated-patient-query.handler';
import { GetOnePatientQueryHandler } from './handler/get-one-patient-query.handler';
import { Provider } from '@nestjs/common';

export const PatientQueryHandlers:Array<Provider> = [
  GetAllPatientQueryHandler,
  GetPaginatedPatientQueryHandler,
  GetOnePatientQueryHandler,
];
