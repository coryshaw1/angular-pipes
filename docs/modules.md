# Modules

Angular rc.5 comes with `NgModule`.

Since version `2.2.0` you can take advantage of these modules.

Each category of pipes has an exported module. And one module imports all these modules.

* Ng2ArrayPipesModule
* Ng2MathPipesModule
* Ng2BooleanPipesModule
* Ng2StringPipesModule
* Ng2ObjectPipesModule
* Ng2AggregatePipesModule
* Ng2PipesModule (imports all the module above)


## Example

```typescript
import { NgModule } from '@angular/core';

import { Ng2ArrayPipesModule, Ng2StringPipesModule } from 'angular-pipes';

@NgModule({
    imports: [
        Ng2ArrayPipesModule,
        Ng2StringPipesModule
    ]
})
export class MyApplicationModule {}

```