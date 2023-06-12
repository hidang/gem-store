// block npm
if (process.env.npm_execpath.indexOf('yarn') === -1) {
    console.error('You must use Yarn');
    process.exit(1);
}
// block yarn at folder root
if (process.env.npm_execpath.indexOf('yarn add') === -1) {
    console.error('DO NOT use "yarn install" or "yarn add " at place!!!');
    console.info('Using "yarn start" if you want install and run project');
    console.info('Please add dependencies at folders [client or server]');
    process.exit(1);
}
