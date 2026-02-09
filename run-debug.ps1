$ErrorActionPreference = "Continue"
$ENV:NODE_ENV="development"
npx tsx server/index.ts 2>&1 | Tee-Object -FilePath error-output.txt
