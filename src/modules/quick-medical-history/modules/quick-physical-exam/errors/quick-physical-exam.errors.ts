import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace QuickPhysicalExamErrors {
  const _context = 'QuickPhysicalExamErrors';
  const messagesProvider = {
    en, es,
  };

  export class QuickPhysicalExamWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'QuickPhysicalExamWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class QuickPhysicalExamFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'QuickPhysicalExamFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


