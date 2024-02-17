import { configMap } from '@shared/common/config/config-map';
import { Config } from '@shared/common/config/interface/config';
import { Env } from '@shared/common/config/interface/env';

export function getConfig(): Config {
  const envs = process.env as Env;

  const config = configMap(envs);

  return config;
}
