import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './operators/operators.component';
import { RouterModule, Routes } from '@angular/router';
import { OfComponent } from './of/of.component';
import { FromEventComponent } from './from-event/from-event.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';
import { StartWithComponent } from './start-with/start-with.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { TakeComponent } from './take/take.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { FromComponent } from './from/from.component';

const routes: Routes = [
  { path: 'operators', component: OperatorsComponent },
  { path: 'operators/of', component: OfComponent },
  { path: 'operators/from', component: FromComponent },
  { path: 'operators/fromEvent', component: FromEventComponent },
  { path: 'operators/map', component: MapComponent },
  { path: 'operators/filter', component: FilterComponent },
  { path: 'operators/tap', component: TapComponent },
  { path: 'operators/take', component: TakeComponent },
  { path: 'operators/takeUntil', component: TakeUntilComponent },
  { path: 'operators/switchMap', component: SwitchMapComponent },
  { path: 'operators/concatMap', component: ConcatMapComponent },
  { path: 'operators/mergeMap', component: MergeMapComponent },
  { path: 'operators/combineLatest', component: CombineLatestComponent },
  { path: 'operators/withLatestFrom', component: WithLatestFromComponent },
  { path: 'operators/startWith', component: StartWithComponent },
  { path: 'operators/debounceTime', component: DebounceTimeComponent },
  { path: 'operators/catchError', component: CatchErrorComponent },
  {
    path: '**', redirectTo: '/operators', pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
