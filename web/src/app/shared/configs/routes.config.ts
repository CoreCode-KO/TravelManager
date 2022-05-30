import { InjectionToken } from '@angular/core';

export const ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths = {
    auth: 'auth',
    admin: 'admin',
    main: 'main',
    panel: 'panel',
    root: 'root',
};

const routesNames = {
    landing: 'landing',
    auth: {
        signUp: 'sign-up',
        signIn: 'sign-in',
    },
    admin: {
        dashboard: 'dashboard',
        reports: 'reports',
        users: 'users',
    },
    main: {
        tickets: 'tickets',
        transport: 'transport',
        events: 'events',
        hotels: 'hotels',
        explore: 'explore',
        payments: 'payments',
    },
    panel: {
        dashboard: 'dashboard',
        statistics: 'statistics',
        editor: 'editor',
        events: 'events',
        users: 'users',
        settings: 'settings',
        support: 'support',
    }
};

export const RoutesConfig: any = {
    basePaths,
    routesNames,
    routes: {
        landing: `/${routesNames.landing}`,
        auth: {
            signUp: `/${basePaths.auth}/${routesNames.auth.signUp}`,
            logIn: `/${basePaths.auth}/${routesNames.auth.signIn}`,
        },
        admin: {
            dashboard: `/${basePaths.admin}/${routesNames.admin.dashboard}`,
            reports: `/${basePaths.admin}/${routesNames.admin.reports}`,
            users: `/${basePaths.admin}/${routesNames.admin.users}`,
        },
        main: {
            tickets: `/${basePaths.main}/${routesNames.main.tickets}`,
            transport: `/${basePaths.main}/${routesNames.main.transport}`,
            events: `/${basePaths.main}/${routesNames.main.events}`,
            hotels: `/${basePaths.main}/${routesNames.main.hotels}`,
            explore: `/${basePaths.main}/${routesNames.main.explore}`,
            payments: `/${basePaths.main}/${routesNames.main.payments}`,
        },
        panel: {
            dashboard: `/${basePaths.panel}/${routesNames.panel.dashboard}`,
            statistics: `/${basePaths.panel}/${routesNames.panel.statistics}`,
            editor: `/${basePaths.panel}/${routesNames.panel.editor}`,
            events: `/${basePaths.panel}/${routesNames.panel.events}`,
            users: `/${basePaths.panel}/${routesNames.panel.users}`,
            settings: `/${basePaths.panel}/${routesNames.panel.settings}`,
            support: `/${basePaths.panel}/${routesNames.panel.support}`,
        },
    },
};
