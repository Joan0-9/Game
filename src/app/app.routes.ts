import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { GameComponent } from './components/game/game.component';
import { TreasureComponent } from './components/treasure/treasure.component';

export const routes: Routes = [

{path: 'app-landing-page',component: LandingPageComponent},
{path: 'app-game',component: GameComponent},
{path: 'app-treasure',component: TreasureComponent},
{path: '**', redirectTo: 'app-landing-page', pathMatch: 'full'},




];
