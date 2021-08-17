const core = require('@actions/core');
// const github = require('@actions/github');
try{
    const mainTime = parseInt(process.argv[2])
    const devTime = parseInt(process.argv[3])
    // console.log(mainTime,devTime, mainTime-devTime)
    core.setOutput("gap", mainTime-devTime);

}catch (e) {
    console.log(e)
}
