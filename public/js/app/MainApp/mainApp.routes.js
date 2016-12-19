import { ArenaComponent } from "./arena/arena.component";
/**
 * Created by alex on 05/10/2016.
 */
export var QUESTION_ROUTES = [
    { path: '', redirectTo: 'arena', pathMatch: 'full' },
    { path: 'arena', component: ArenaComponent },
];
