import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace PatientErrors {
  const _context = 'PatientErrors';
  const messagesProvider = {
    en, es,
  };

  export class PatientWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'PatientWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class PatientFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'PatientFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


