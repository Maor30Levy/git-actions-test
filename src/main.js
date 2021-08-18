const core = require('@actions/core');
// const github = require('@actions/github');
try{
    const currentTime = (new Date()).getTime();
    const mainTime = parseInt(process.argv[2]);
    const devTime = parseInt(process.argv[3]);
    const allowedGap = parseInt(process.argv[4]);
    const commitGapByHour = (mainTime-devTime)/3600;
    const currentGapByHour = (currentTime-devTime)/3600;
    const result = commitGapByHour>=allowedGap && currentGapByHour>=allowedGap;
    core.setOutput("isExceededGap", result);

}catch (e) {
    console.log(e)
}
