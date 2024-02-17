import {
  httpGet, BaseHttpController, interfaces, controller,
} from 'inversify-express-utils';

import {
  version, author, name, license,
} from '../../../../../package.json';

@controller('/health-check')
export class HealthCheckController extends BaseHttpController implements interfaces.Controller {
  @httpGet('/')
  public index(): interfaces.IHttpActionResult {
    return this.ok({
      version,
      author,
      name,
      license,
    });
  }
}
