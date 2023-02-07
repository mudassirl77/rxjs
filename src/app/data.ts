export const operatorData: OperatorData[] = [
  { title: 'of', text: 'Each argument becomes a next notification.' },
  { title: 'from', text: 'Converts almost anything to an Observable.' },
  { title: 'fromEvent', text: 'Creates an Observable from DOM events, or Node.js EventEmitter events or others.' },
  { title: 'map', text: 'Like Array.prototype.map(), it passes each source value through a transformation function to get corresponding output values.' },
  { title: 'filter', text: 'Like Array.prototype.filter(), it only emits a value from the source if it passes a criterion function.' },
  { title: 'tap', text: 'Used when you want to affect outside state with a notification without altering the notification' },
  { title: 'take', text: 'Takes the first count values from the source, then completes.' },
  { title: 'takeUntil', text: 'Lets values pass until a second Observable, notifier, emits a value. Then, it completes.' },
  { title: 'switchMap', text: 'Maps each value to an Observable, then flattens all of these inner Observables.' },
  { title: 'concatMap', text: 'Maps each value to an Observable, then flattens all of these inner Observables using concatAll.' },
  { title: 'mergeMap', text: 'Maps each value to an Observable, then flattens all of these inner Observables using mergeAll.' },
  // { title: 'combineLatest', text: 'Whenever any input Observable emits a value, it computes a formula using the latest values from all the inputs, then emits the output of that formula.' },
  // { title: 'withLatestFrom', text: 'Whenever the source Observable emits a value, it computes a formula using that value plus the latest values from other input Observables, then emits the output of that formula.' },
  // { title: 'startWith', text: 'First emits its arguments in order, and then any emissions from the source.' },
  // { title: 'debounceTime', text: 'Similar to delay, but passes only the most recent notification from each burst of emissions.' },
  { title: 'catchError', text: 'It only listens to the error channel and ignores notifications. Handles errors from the source observable, and maps them to a new observable. The error may also be rethrown, or a new error can be thrown to emit an error from the result.' },
];

export interface OperatorData {
  title: string;
  text: string;
  notes?: string;
}
