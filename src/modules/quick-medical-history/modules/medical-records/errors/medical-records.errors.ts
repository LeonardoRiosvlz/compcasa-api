import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace MedicalRecordsErrors {
  const _context = 'MedicalRecordsErrors';
  const messagesProvider = {
    en, es,
  };

  export class MedicalRecordsWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'MedicalRecordsWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class MedicalRecordsFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'MedicalRecordsFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


