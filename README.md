# Patient Zero Coding Challenge

## Backend

To run the backend, navigate to the backend directory:

```bash
cd ../repo/backend
```

Then start the backend using dotnet

```bash
dotnet start --project CheeseriaApi/
```

## Frontend

To run the frontend, navigate to the frontend directory on a new terminal:

```bash
cd .../repo/frontend
npm start
```

## Error Fixes

### ErrorOr Library Installation:

You may need to install the ErrorOr library, which is used for error handling in the backend. You can find it [here](https://www.nuget.org/packages/ErrorOr/).

### CORS Disabling:

CORS might need to be disabled on the browser you are running in. In a bash terminal, you can disable CORS for Google Chrome with the following command:

```bash
google-chrome --disable-web-security --user-data-dir="~/chromeTemp"
```

### Other Issues

If you're having any other issues using the repository please let me know via email I'll try and get back with fixes ASAP.
