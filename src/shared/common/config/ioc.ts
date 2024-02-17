import { Container } from 'inversify';

import { COMMON } from './signature';

import { getConfig } from './get-config';
import { Config } from './interface/config';

export function ioc(container: Container) {
  container.bind<Config>(COMMON.config).toDynamicValue(getConfig);
}
