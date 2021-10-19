import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace QuickParaclinicsEvaluationsErrors {
  const _context = 'QuickParaclinicsEvaluationsErrors';
  const messagesProvider = {
    en, es,
  };

  export class QuickParaclinicsEvaluationsWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'QuickParaclinicsEvaluationsWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class QuickParaclinicsEvaluationsFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'QuickParaclinicsEvaluationsFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


