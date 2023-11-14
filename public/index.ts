import './index.scss';

import { KibanaPluginPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new KibanaPluginPlugin();
}
export type { KibanaPluginPluginSetup, KibanaPluginPluginStart } from './types';
