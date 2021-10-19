import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace QuickComprehensiveManagementErrors {
  const _context = 'QuickComprehensiveManagementErrors';
  const messagesProvider = {
    en, es,
  };

  export class QuickComprehensiveManagementWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'QuickComprehensiveManagementWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class QuickComprehensiveManagementFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'QuickComprehensiveManagementFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


