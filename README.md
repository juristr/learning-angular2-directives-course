<p align="center">
  <a href="https://goo.gl/iJKPUi">
    <img src="https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/bookretailers/9781785884702.jpg" alt="Video Course: Learning Angular 2 directives" />
  </a>
  <br />
  <a href="https://goo.gl/iJKPUi" style="font-size:24px;font-weight:bold">Add to cart</a>
</p>

# Video Course: Learning Angular 2 directives

[by Juri Strumpflohner](https://twitter.com/juristr)

_Learn how to build efficient Angular 2 directives with this fast and interactive guide_

---

This is the code repository for the [Learning Angular 2 Directives](https://goo.gl/iJKPUi) video course. The code
samples for each video can be found in the corresponding branches:

- **Section 1: Getting Started**
  - The Course Overview
  - [Project Setup](https://github.com/juristr/learning-angular2-directives-course/tree/1.2-project-setup)
  - All about Components
    - [components with jQuery](https://github.com/juristr/learning-angular2-directives-course/tree/1.3.1-jquery-component)
    - [web components](https://github.com/juristr/learning-angular2-directives-course/tree/1.3.2-vanilla-components)
- **Section 2: Angular 2 - Scratching the surface**
  - [Upgrading from Angular 1.x](https://github.com/juristr/learning-angular2-directives-course/tree/2.1-upgrade-ng-1)
  - [Hello Angular 2!](https://github.com/juristr/learning-angular2-directives-course/tree/2.2-hello-angular2)
  - [Feeding OUr Component with Data](https://github.com/juristr/learning-angular2-directives-course/tree/2.3-feeding-with-data)
- **Section 3: HomeAuto - First Screens**
  - [Decomposing and Building Application Foundation](https://github.com/juristr/learning-angular2-directives-course/tree/3.1-decompose-app-foundation-v2)
  - [Scanning for New Sensors](https://github.com/juristr/learning-angular2-directives-course/tree/3.2-scanning-new-sensors-v2)
  - [Creating a General Purpose Filter](https://github.com/juristr/learning-angular2-directives-course/tree/3.3-general-purpose-filter-v2)
- **Section 4: Building Reusable Modals**
  - [Selecting and Configuring a New Sensor](https://github.com/juristr/learning-angular2-directives-course/tree/4.1-configure-sensor-v2)
  - [Making the Modal Generally Reusable](https://github.com/juristr/learning-angular2-directives-course/tree/4.2-modal-reusable-v2)
  - [Attribute Directives to the Help](https://github.com/juristr/learning-angular2-directives-course/tree/4.3-attribute-directives-v2)
- **Section 5: Building up our Dashboard**
  - [Creating a Dashboard Widget](https://github.com/juristr/learning-angular2-directives-course/tree/5.1-create-dashboard-widget-v2)
  - [Integrating an External Library - Data Visualization with d3](https://github.com/juristr/learning-angular2-directives-course/tree/5.2-integrate-d3-v2)
  - [Ready for production - Bundling and Minification](https://github.com/juristr/learning-angular2-directives-course/tree/5.3-ready-for-production-v2)
- **Section 6: Maintaining Components**
  - [Unit Testing Angular 2 Components](https://github.com/juristr/learning-angular2-directives-course/tree/6.1-unittesting-v2)
  - [Debugging (with Batarangle)](https://github.com/juristr/learning-angular2-directives-course/tree/6.2-debugging-v2)
  - [e2e Testing Angular 2 Components](https://github.com/juristr/learning-angular2-directives-course/tree/6.3-ui-testing-protractor-v2)
- **Section 7: Show me more!**
  - [Angular 2 Goes Mobile with Ionic 2](https://github.com/juristr/learning-angular2-directives-course/tree/7.1-ionic)
  - [Going Universal with Angular 2](https://github.com/juristr/learning-angular2-directives-course/tree/7.2-angular-universal-v2)


## Updates

### 25th May 2016: Upgrade to RC.1

With the release of Angular 2 RC.1, the team decided to split the library up into independent packages. Thus the dependency specification in the `package.json` varies as well as the SystemJS configuration. [Here's an example of that](https://github.com/juristr/learning-angular2-directives-course/commit/61db60ed69a40ffdd5f6aa49397f0c80fb9a195a).

Also the imports of the various modules changed:

```javascript
// before
import { Component } from 'angular2/core';

// now
import { Component } from '@angular/core';
```

Besides the changes in dependencies and imports, the `@View` decorator is now deprecated, so simply use the `@Component` decorator. 

Also the **bootstraping of the application changed**:

```javascript
// before
import {bootstrap} from '@angular/platform/browser';

// now
import { bootstrap } from '@angular/platform-browser-dynamic';
```

[Look at the diff for details](https://github.com/juristr/learning-angular2-directives-course/commit/a71c67da74a91f8cfdd0da5c8da53dbb87b9e689)

**The original router has been deprecated** and is now available under `@angular/router-deprecated` until the new redesign one is stable enough. Also, some imports which have previously been exported by `angular2/router` like `LocationStrategy` etc are now exported by `@angular/common`. [See here](https://github.com/juristr/learning-angular2-directives-course/blob/3.2-scanning-new-sensors-v2/app/main.ts#L4).

**The *ngFor loop syntax** has changed to use `let` rather than `#` for the loop variable. [See here](https://github.com/juristr/learning-angular2-directives-course/commit/c14147cbf35e8d90cf65f9033c89b3fdb502f454).

```html
<!-- before -->
<tr *ngFor="#item of sensors">
  ...
</tr>

<!-- now -->
<tr *ngFor="let item of sensors">
  ...
</tr>
```

**Pipes now don't take an array** any more, but rather a param list.

```javascript
// before
@Pipe({
  ...
})
export class FilterSensor {
  transform(value, [category]:string[]) {
    ...
  }
}

// now
@Pipe({
  ...
})
export class FilterSensor {
  transform(value, category:string) {
    ...
  }
}
```

**_(upgraded section 1 to 4 so far. Remaining sections will be upgraded soon)_**

### Breaking changes in `ngFor` - Angular 2.0.0-beta.17 release

As [per the official changelog](https://github.com/angular/angular/blob/master/CHANGELOG.md#200-beta17-2016-04-28) this leads to a couple of breaking changes, mainly for `ngFor` loop.

**Before**

```html
<div ngFor="#item of items">
  {{ item.name }}
</div>
```

**After**

```html
<div ngFor="let item of items">
  {{ item.name }}
</div>
```

I'll update the according section code examples as soon as possible.

### Breaking changes in `async` and `fakeAsync` for unit tests - Angular 2.0.0-beta.16 release

Check the [official breaking change docs](https://github.com/angular/angular/blob/master/CHANGELOG.md#breaking-changes-1). I'll update the section code examples as soon as possible.

Also, follow me [on Twitter](https://twitter.com/juristr) for news and updates around Angular 2 and this video course!

## Questions?

Feel free to simply [open an issue](https://github.com/juristr/learning-angular2-directives-course/issues) on this repo here :smiley:
