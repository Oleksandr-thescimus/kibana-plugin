import { PluginInitializerContext } from '../../../src/core/server';
import { KibanaPluginPlugin } from './plugin';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new KibanaPluginPlugin(initializerContext);
}

export type { KibanaPluginPluginSetup, KibanaPluginPluginStart } from './types';
