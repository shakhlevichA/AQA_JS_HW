import { BaseForm } from '../../framework/helpers/baseForm';


export abstract class DefaultPage extends BaseForm {

  constructor(pageLocator: string) {
    super(pageLocator);
  }
}