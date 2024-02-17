import 'reflect-metadata';
import 'dotenv/config';
import * as bodyParser from 'body-parser';

import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

import '@module/system/entrypoint/controller';
import { COMMON } from '@shared/common/config/signature';
import { Config } from '@shared/common/config/interface/config';

export abstract class Application {
  private container: Container;

  private server: InversifyExpressServer;

  constructor(
    bind: (container: Container) => void,
  ) {
    this.container = new Container();

    bind(this.container);
  }

  protected async boot() {
    try {
      this.server = new InversifyExpressServer(this.container);

      this.server.setConfig((app) => {
        app.use(bodyParser.urlencoded({
          extended: true,
        }));
        app.use(bodyParser.json());
      });

      const app = this.server.build();

      const config = this.container.get<Config>(COMMON.config);

      app.listen(config.port);

      console.log(`Server started at http://localhost:${config.port}`);
    } catch (error) {
      console.error(`Unable to start server! ${error}`);
    }
  }
}
