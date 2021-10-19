import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace QuickMedicalHistoryErrors {
  const _context = 'QuickMedicalHistoryErrors';
  const messagesProvider = {
    en, es,
  };

  export class QuickMedicalHistoryWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'QuickMedicalHistoryWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class QuickMedicalHistoryFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'QuickMedicalHistoryFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


