# Black_Jack
BlackJack game written in Typescript and Javascript for desktop use
For install on Windows run the next commands
npx nodegui-packer --init MyAppName
cd MyAppName
npm run build
npx nodegui-packer --pack ./dist
pkg dist\nodegui_core-3adbbaeeeb2020b63878cdf3a3f4b618.node -t node14-win-x64
