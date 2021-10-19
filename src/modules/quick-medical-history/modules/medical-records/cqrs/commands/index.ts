import { CreateMedicalRecordsCommandHandler } from './handler/create-medical-records-command.handler';
import { DeleteMedicalRecordsCommandHandler } from './handler/delete-medical-records-command.handler';
import { UpdateMedicalRecordsCommandHandler } from './handler/update-medical-records-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyMedicalRecordsCommandHandler } from './handler/delete-many-medical-records-command.handler';

export const MedicalRecordsCommandHandlers: Array<Provider> = [
  CreateMedicalRecordsCommandHandler,
  DeleteMedicalRecordsCommandHandler,
  UpdateMedicalRecordsCommandHandler,
  DeleteManyMedicalRecordsCommandHandler
];
