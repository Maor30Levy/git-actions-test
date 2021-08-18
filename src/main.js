const core = require('@actions/core');
// const github = require('@actions/github');
try{
    const mainTime = parseInt(process.argv[2])
    const devTime = parseInt(process.argv[3])
    const allowedGap = parseInt(process.argv[4)
    const gapSec = mainTime-devTime;
    const gapHour = gapSec/3600;
    const result = gapHour>=allowedGap
    // console.log(mainTime,devTime, mainTime-devTime)
    core.setOutput("isExceededGap", result);

}catch (e) {
    console.log(e)
}
