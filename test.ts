import { from } from 'rxjs';

const array$ = from([10, 20, 30]);
array$.subscribe(value => console.log(value));