import { Container } from 'inversify';

import { Application } from '@shared/infrastructure/http/app';

export class HttpServer extends Application {
  constructor(bind: (container: Container) => void) {
    super(bind);
  }

  public async bootstrap() {
    await this.boot();
  }
}
