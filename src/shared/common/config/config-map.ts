import { Config } from '@shared/common/config/interface/config';
import { Env } from '@shared/common/config/interface/env';

export function configMap(envs: Env): Config {
  return {
    port: Number(envs.PORT) || 3000,
  };
}
