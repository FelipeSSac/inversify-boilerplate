import { ioc } from '@shared/common/config/ioc';
import { HttpServer } from './app';

(async () => {
  const server = new HttpServer(ioc);

  await server.bootstrap();
})();
