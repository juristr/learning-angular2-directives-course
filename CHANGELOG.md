# Updates

This video has been published just before Angular hit RC.1. Unfortunately there might have been some breaking changes and thus some of the code shown in the video might no more be 100% accurate. But don't worry, I'm writing down all of the updates [in the changelog docs here](CHANGELOG.MD). 

You can obviously also ask me [here on the issue tracker of this repository](https://github.com/juristr/learning-angular2-directives-course/issues) or over on [on Twitter](https://twitter.com/juristr)!

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
