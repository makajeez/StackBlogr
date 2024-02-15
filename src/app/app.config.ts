import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule, provideStore } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { postReducer } from './store/post/post.reducer';
import { PostEffects } from './store/post/post.effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule, provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoadingInterceptor } from './shared/loading-indicator/loading-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideRouter(routes),
    provideRouterStore(),
    provideAnimationsAsync(),
    importProvidersFrom(
        RouterModule.forRoot(routes),
        HttpClientModule, 
        EffectsModule.forRoot([PostEffects]),
        StoreModule.forRoot({
            Posts: postReducer
        }), 
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: !isDevMode(),
            autoPause: true
        }), 
    ),
    {
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingInterceptor,
        multi: true,
    },
]
};
