import {join} from 'path';
import {SeedConfig} from './seed.config';
import {InjectableDependency} from './seed.config.interfaces';

export class ProjectConfig extends SeedConfig {
  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    this.APP_TITLE = 'Learning Angular 2 directives';
    let additional_deps: InjectableDependency[] = [
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    //   {src: '/lodash.min.js', inject: 'libs'},
    ];

    const seedDependencies = this.NPM_DEPENDENCIES;

    this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps);

    this.APP_ASSETS = [
      // {src: `${this.ASSETS_SRC}/css/toastr.min.css`, inject: true},
      // {src: `${this.APP_DEST}/assets/scss/global.css`, inject: true},
      { src: `${this.PROJECT_ROOT}/node_modules/material-design-lite/material.min.css`, inject: true },
      { src: `${this.ASSETS_SRC}/css/styles.css`, inject: true }
    ];
  }
}
