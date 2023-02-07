import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OperatorsComponent } from './operators/operators.component';
import { OperatorCardComponent } from './operator-card/operator-card.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { AppRoutingModule } from './app-routing.module';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';
import { StartWithComponent } from './start-with/start-with.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { OfComponent } from './of/of.component';
import { FromEventComponent } from './from-event/from-event.component';
import { OperatorContentComponent } from './operator-content/operator-content.component';
import { TakeComponent } from './take/take.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { FromComponent } from './from/from.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorsComponent,
    OperatorCardComponent,
    MapComponent,
    FilterComponent,
    TapComponent,
    SwitchMapComponent,
    ConcatMapComponent,
    MergeMapComponent,
    CombineLatestComponent,
    WithLatestFromComponent,
    StartWithComponent,
    DebounceTimeComponent,
    CatchErrorComponent,
    OfComponent,
    FromEventComponent,
    OperatorContentComponent,
    TakeComponent,
    TakeUntilComponent,
    FromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
