import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace PharmacologicalManagementErrors {
  const _context = 'PharmacologicalManagementErrors';
  const messagesProvider = {
    en, es,
  };

  export class PharmacologicalManagementWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'PharmacologicalManagementWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class PharmacologicalManagementFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'PharmacologicalManagementFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

  export class PharmacologicalManagementFieldInvalid extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'PharmacologicalManagementFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


