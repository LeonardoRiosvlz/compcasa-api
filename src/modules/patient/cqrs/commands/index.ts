import { CreatePatientCommandHandler } from './handler/create-patient-command.handler';
import { DeletePatientCommandHandler } from './handler/delete-patient-command.handler';
import { UpdatePatientCommandHandler } from './handler/update-patient-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyPatientCommandHandler } from './handler/delete-many-patient-command.handler';

export const PatientCommandHandlers: Array<Provider> = [
  CreatePatientCommandHandler,
  DeletePatientCommandHandler,
  UpdatePatientCommandHandler,
  DeleteManyPatientCommandHandler
];
