/**
 * Created by alex on 27/01/2017.
 */

module.exports=function (level,currentExperience) {
   var levelArray=[{level:1,nextLevel:300},{level:2,nextLevel:300},{level:3,nextLevel:1000},{level:4,nextLevel:1900},{level:5,nextLevel:2220},{level:6,nextLevel:2300},{level:7,nextLevel:2400},{level:8,nextLevel:2500}]



   var levelInfo={level:level,currentExperience:currentExperience};
    if (levelInfo.currentExperience>levelArray[level-1].nextLevel){
        levelInfo.level++;
        levelInfo.currentExperience=levelInfo.currentExperience-levelArray[level-1].nextLevel;
    }
    return levelInfo;

}