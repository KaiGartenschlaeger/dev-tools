import { LogLevel } from 'src/app/modules/shared/services/logging.service';
import { Environment } from 'src/environments/environment.interface';

export const environment: Environment = {
    production: false,
    minLogLevel: LogLevel.debug
};
