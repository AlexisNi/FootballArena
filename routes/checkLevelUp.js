/**
 * Created by alex on 27/01/2017.
 */

module.exports=function (level,currentExperience) {
   var levelArray=[{level:1,nextLevel:300},{level:2,nextLevel:600},{level:3,nextLevel:900},{level:4,nextLevel:1200},{level:5,nextLevel:1500},{level:6,nextLevel:1800},{level:7,nextLevel:2100},{level:8,nextLevel:2400}]



   var levelInfo={level:level,currentExperience:currentExperience};
    if (levelInfo.currentExperience>levelArray[level-1].nextLevel){
        levelInfo.level++;
        levelInfo.currentExperience=levelInfo.currentExperience-levelArray[level-1].nextLevel;
    }
    return levelInfo;

}