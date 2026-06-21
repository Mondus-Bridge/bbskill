require('dotenv').config();
import { test as setup } from '@playwright/test';
import PomManager from "./tests/pages/app/PomManager";
import AdminPomManager from "./tests/pages/admin/AdminPomManager";
import { loadEnv } from './tests/utils/envLoader';
import fs from 'fs';
loadEnv();

type Account = {
    name: string;
    email: string;
    password: string;
    loginUrl: string;
    authPath: string;
    source: 'app' | 'admin';
};

const accounts: Account[] = [
    { 
        name: "User1", 
        email: process.env.USER_1_EMAIL ?? '', 
        password: process.env.PASSWORD ?? '', 
        loginUrl: `${process.env.BASE_URL ?? ''}${process.env.LOGIN_URL ?? ''}`, 
        authPath: "./auth/User1Auth.json", 
        source: "app" 
    },
    { 
        name: "Admin", 
        email: process.env.FULL_ADMIN ?? '', 
        password: process.env.PASSWORD ?? '', 
        loginUrl: process.env.BASE_ADMIN_PANEL ?? '', 
        authPath: "./auth/AdminLoginAuth.json", 
        source: "admin" 
    },
    { 
        name: "OwnerBB", 
        email: process.env.BB_OWNER ?? '', 
        password: process.env.PASSWORD ?? '', 
        loginUrl: process.env.BASE_ADMIN_PANEL ?? '', 
        authPath: "./auth/OwnerLoginAuth.json", 
        source: "admin" 
    },
    { 
        name: "SuperAdmin", 
        email: process.env.BB_SUPER ?? '', 
        password: process.env.PASSWORD ?? '', 
        loginUrl: process.env.BASE_ADMIN_PANEL ?? '', 
        authPath: "./auth/SuperLoginAuth.json", 
        source: "admin" 
    },
    {
        name: "CorpIP2", 
        email: process.env.CORP_IP ?? '', 
        password: process.env.PASSWORD ?? '', 
        loginUrl: `${process.env.BASE_URL ?? ''}${process.env.LOGIN_URL ?? ''}`, 
        authPath: "./auth/CorpIP2Auth.json", 
        source: "app" 
    },
    { 
        name: "ApiUser1", 
        email: process.env.USER_1_EMAIL ?? '', 
        password: process.env.PASSWORD ?? '', 
        authPath: "./auth/ApiUser1Auth.json", 
        loginUrl: `${process.env.API_BASE_URL ?? ''}${process.env.API_LOGIN_URL ?? ''}`, 
        source: "app" 
    },
    { 
        name: "ApiAdmin", 
        email: process.env.FULL_ADMIN ?? '', 
        password: process.env.PASSWORD ?? '', 
        loginUrl: `${process.env.API_BASE_URL ?? ''}${process.env.API_ADMIN_LOGIN_URL ?? ''}`, 
        authPath: "./auth/ApiAdminLoginAuth.json", 
        source: "admin" 
    },
    { 
        name: "AdminApp", 
        email: process.env.FULL_ADMIN ?? '', 
        password: process.env.PASSWORD ?? '', 
        loginUrl: `${process.env.API_BASE_URL ?? ''}${process.env.API_ADMIN_LOGIN_URL ?? ''}`, 
        authPath: "./auth/AppAdminLoginAuth.json", 
        source: "app" 
    },
    { 
        name: "OverdraftUser", 
        email: process.env.OVERDRAFT_USER ?? '', 
        password: process.env.PASSWORD ?? '', 
        loginUrl: `${process.env.API_BASE_URL ?? ''}${process.env.API_LOGIN_URL ?? ''}`, 
        authPath: "./auth/OverdraftGroupAuth.json", 
        source: "app" 
    },
    { 
        name: "ApiCardsUser", 
        email: process.env.API_CARDS_EMAIL ?? '', 
        password: process.env.PASSWORD ?? '', 
        authPath: "./auth/ApiCardUserAuth.json", 
        loginUrl: `${process.env.API_BASE_URL ?? ''}${process.env.API_LOGIN_URL ?? ''}`, 
        source: "app" 
    },
    { 
        name: "Partner1", 
        email: process.env.PARTNER_EMAIL ?? '', 
        password: process.env.PASSWORD ?? '', 
        loginUrl: `${process.env.API_BASE_URL ?? ''}${process.env.API_LOGIN_URL ?? ''}`, 
        authPath: "./auth/ApiPartnerAuth.json", 
        source: "app" 
    },
    { 
        name: "ApiSuperAdmin", 
        email: process.env.BB_SUPER ?? '', 
        password: process.env.PASSWORD ?? '', 
        loginUrl: `${process.env.API_BASE_URL ?? ''}${process.env.API_ADMIN_LOGIN_URL ?? ''}`,
        authPath: "./auth/ApiSuperLoginAuth.json", 
        source: "admin" 
    },
    { 
        name: "ApiReadAdmin", 
        email: process.env.READ_ADMIN ?? '', 
        password: process.env.PASSWORD ?? '', 
        authPath: "./auth/ApiReadAdminAuth.json", 
        loginUrl: `${process.env.API_BASE_URL ?? ''}${process.env.API_ADMIN_LOGIN_URL ?? ''}`, 
        source: "admin" 
    },
];
const SINGLE_LOGIN_ACCOUNT = process.env.SINGLE_LOGIN_ACCOUNT;
const method = process.env.method || 'browser'; // 'browser' or 'api'

setup("User and Admin Login", async ({ browser, request}) => {
    setup.setTimeout(60000);
    const selectedAccounts = SINGLE_LOGIN_ACCOUNT 
        ? accounts.filter(account => account.name === SINGLE_LOGIN_ACCOUNT)
        : accounts; 
        if (method === 'api') {
            for (const account of selectedAccounts) {
                if (account.source === "app" || account.source === "admin") {
                    const response = await request.post(account.loginUrl, {
                        data: JSON.stringify({ email: account.email, password: account.password }),
                    });
                    const responseText = await response.text();
                    const responseBody = JSON.parse(responseText);
                    const authData = { token: responseBody.id_token };
                    fs.mkdirSync('./auth', { recursive: true });
                    fs.writeFileSync(account.authPath, JSON.stringify(authData, null, 2));
                }
            }
        } else if (method === 'browser') {
            // Browser Authentication (E2E tests)
    for (const account of selectedAccounts) {
        // Create a new browser context for each login session
        const context = await browser.newContext();
        const page = await context.newPage();

        if (account.source === "admin") {
            const pm = new AdminPomManager(page);
            await pm.loginPage.goto(account.loginUrl);
            await pm.loginPage.login(account.email, account.password);
            await pm.panelPage.assertLoggedInAdmin(); // Admin-specific assertion
        } else {
            const pm = new PomManager(page);
            await pm.loginPage.goto(account.loginUrl);
            await pm.loginPage.login(account.email, account.password);
            // app and prod use the same post-login flow
            await pm.mainPage.page.waitForTimeout(5000);
            await pm.mainPage.chooseLanguage();
        }

        // Save the auth state and close the context to free up resources
        await context.storageState({ path: account.authPath });
        await context.close();
    }}
});