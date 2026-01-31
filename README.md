
## Repository Link
https://github.com/JaniduVirunaka/IT23343948-ITPM-Assignment-1.git

## Setup environment
#Install Dependencies
```bash
npm install
```
#Install playwright browser
```bash
npx playwright install chromium
```

## Running Tests
#Run all tests - properly tested only for this command

#Running this command initially will result in more failed tests, 
but once its being run for about 3 times the correct results can be achieved
```bash
npx playwright test --project=chromium
```

#Run Tests in Headed Mode (visible browser)
```bash
npm run test:headed
```

#Run Tests with UI Mode (interactive)
```bash
npm run test:ui
```

## View Test Report
```bash
npm run report
```

