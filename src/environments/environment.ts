// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDuP3ZLZAMmQ-mi-dlrLmmS2BljOo_Mn8Q",
    authDomain: "github-marketplace-test.firebaseapp.com",
    databaseURL: "https://github-marketplace-test.firebaseio.com",
    projectId: "github-marketplace-test",
    storageBucket: "github-marketplace-test.appspot.com",
    messagingSenderId: "939709018589"
  }
};
