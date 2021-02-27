gdjs.PlayAreaCode = {};
gdjs.PlayAreaCode.forEachIndex2 = 0;

gdjs.PlayAreaCode.forEachObjects2 = [];

gdjs.PlayAreaCode.forEachTemporary2 = null;

gdjs.PlayAreaCode.forEachTotalCount2 = 0;

gdjs.PlayAreaCode.GDPlayerObjects1= [];
gdjs.PlayAreaCode.GDPlayerObjects2= [];
gdjs.PlayAreaCode.GDPlayerObjects3= [];
gdjs.PlayAreaCode.GDEnemyBulletObjects1= [];
gdjs.PlayAreaCode.GDEnemyBulletObjects2= [];
gdjs.PlayAreaCode.GDEnemyBulletObjects3= [];
gdjs.PlayAreaCode.GDBulletObjects1= [];
gdjs.PlayAreaCode.GDBulletObjects2= [];
gdjs.PlayAreaCode.GDBulletObjects3= [];
gdjs.PlayAreaCode.GDDebugPanelObjects1= [];
gdjs.PlayAreaCode.GDDebugPanelObjects2= [];
gdjs.PlayAreaCode.GDDebugPanelObjects3= [];
gdjs.PlayAreaCode.GDHeartObjects1= [];
gdjs.PlayAreaCode.GDHeartObjects2= [];
gdjs.PlayAreaCode.GDHeartObjects3= [];
gdjs.PlayAreaCode.GDEnemyObjects1= [];
gdjs.PlayAreaCode.GDEnemyObjects2= [];
gdjs.PlayAreaCode.GDEnemyObjects3= [];

gdjs.PlayAreaCode.conditionTrue_0 = {val:false};
gdjs.PlayAreaCode.condition0IsTrue_0 = {val:false};
gdjs.PlayAreaCode.condition1IsTrue_0 = {val:false};
gdjs.PlayAreaCode.condition2IsTrue_0 = {val:false};
gdjs.PlayAreaCode.condition3IsTrue_0 = {val:false};
gdjs.PlayAreaCode.conditionTrue_1 = {val:false};
gdjs.PlayAreaCode.condition0IsTrue_1 = {val:false};
gdjs.PlayAreaCode.condition1IsTrue_1 = {val:false};
gdjs.PlayAreaCode.condition2IsTrue_1 = {val:false};
gdjs.PlayAreaCode.condition3IsTrue_1 = {val:false};


gdjs.PlayAreaCode.eventsList0 = function(runtimeScene) {

};gdjs.PlayAreaCode.eventsList1 = function(runtimeScene) {

};gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.PlayAreaCode.GDBulletObjects1});gdjs.PlayAreaCode.eventsList2 = function(runtimeScene) {

};gdjs.PlayAreaCode.eventsList3 = function(runtimeScene) {

};gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.PlayAreaCode.GDBulletObjects1});gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.PlayAreaCode.GDPlayerObjects1});gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects1Objects = Hashtable.newFrom({"EnemyBullet": gdjs.PlayAreaCode.GDEnemyBulletObjects1});gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.PlayAreaCode.GDPlayerObjects1});gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.PlayAreaCode.GDBulletObjects1});gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.PlayAreaCode.GDEnemyObjects1});gdjs.PlayAreaCode.eventsList4 = function(runtimeScene) {

};gdjs.PlayAreaCode.eventsList5 = function(runtimeScene) {

};gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects2Objects = Hashtable.newFrom({"EnemyBullet": gdjs.PlayAreaCode.GDEnemyBulletObjects2});gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects2Objects = Hashtable.newFrom({"EnemyBullet": gdjs.PlayAreaCode.GDEnemyBulletObjects2});gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects2Objects = Hashtable.newFrom({"EnemyBullet": gdjs.PlayAreaCode.GDEnemyBulletObjects2});gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects2Objects = Hashtable.newFrom({"EnemyBullet": gdjs.PlayAreaCode.GDEnemyBulletObjects2});gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects2Objects = Hashtable.newFrom({"EnemyBullet": gdjs.PlayAreaCode.GDEnemyBulletObjects2});gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects2Objects = Hashtable.newFrom({"EnemyBullet": gdjs.PlayAreaCode.GDEnemyBulletObjects2});gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects2Objects = Hashtable.newFrom({"EnemyBullet": gdjs.PlayAreaCode.GDEnemyBulletObjects2});gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects1Objects = Hashtable.newFrom({"EnemyBullet": gdjs.PlayAreaCode.GDEnemyBulletObjects1});gdjs.PlayAreaCode.eventsList6 = function(runtimeScene) {

{


{
gdjs.copyArray(gdjs.PlayAreaCode.GDEnemyObjects1, gdjs.PlayAreaCode.GDEnemyObjects2);

gdjs.PlayAreaCode.GDEnemyBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects2Objects, (( gdjs.PlayAreaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDEnemyObjects2[0].getPointX("")), (( gdjs.PlayAreaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDEnemyObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects2[i].addPolarForce(0, 60, 1);
}
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects2[i].rotateTowardAngle(0, 0, runtimeScene);
}
}}

}


{


{
gdjs.copyArray(gdjs.PlayAreaCode.GDEnemyObjects1, gdjs.PlayAreaCode.GDEnemyObjects2);

gdjs.PlayAreaCode.GDEnemyBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects2Objects, (( gdjs.PlayAreaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDEnemyObjects2[0].getPointX("")), (( gdjs.PlayAreaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDEnemyObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects2[i].addPolarForce(45, 60, 1);
}
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects2[i].rotateTowardAngle(45, 0, runtimeScene);
}
}}

}


{


{
gdjs.copyArray(gdjs.PlayAreaCode.GDEnemyObjects1, gdjs.PlayAreaCode.GDEnemyObjects2);

gdjs.PlayAreaCode.GDEnemyBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects2Objects, (( gdjs.PlayAreaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDEnemyObjects2[0].getPointX("")), (( gdjs.PlayAreaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDEnemyObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects2[i].addPolarForce(90, 60, 1);
}
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects2[i].rotateTowardAngle(90, 0, runtimeScene);
}
}}

}


{


{
gdjs.copyArray(gdjs.PlayAreaCode.GDEnemyObjects1, gdjs.PlayAreaCode.GDEnemyObjects2);

gdjs.PlayAreaCode.GDEnemyBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects2Objects, (( gdjs.PlayAreaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDEnemyObjects2[0].getPointX("")), (( gdjs.PlayAreaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDEnemyObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects2[i].addPolarForce(135, 60, 1);
}
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects2[i].rotateTowardAngle(135, 0, runtimeScene);
}
}}

}


{


{
gdjs.copyArray(gdjs.PlayAreaCode.GDEnemyObjects1, gdjs.PlayAreaCode.GDEnemyObjects2);

gdjs.PlayAreaCode.GDEnemyBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects2Objects, (( gdjs.PlayAreaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDEnemyObjects2[0].getPointX("")), (( gdjs.PlayAreaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDEnemyObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects2[i].addPolarForce(180, 60, 1);
}
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects2[i].rotateTowardAngle(180, 0, runtimeScene);
}
}}

}


{


{
gdjs.copyArray(gdjs.PlayAreaCode.GDEnemyObjects1, gdjs.PlayAreaCode.GDEnemyObjects2);

gdjs.PlayAreaCode.GDEnemyBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects2Objects, (( gdjs.PlayAreaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDEnemyObjects2[0].getPointX("")), (( gdjs.PlayAreaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDEnemyObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects2[i].addPolarForce(225, 60, 1);
}
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects2[i].rotateTowardAngle(225, 0, runtimeScene);
}
}}

}


{


{
gdjs.copyArray(gdjs.PlayAreaCode.GDEnemyObjects1, gdjs.PlayAreaCode.GDEnemyObjects2);

gdjs.PlayAreaCode.GDEnemyBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects2Objects, (( gdjs.PlayAreaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDEnemyObjects2[0].getPointX("")), (( gdjs.PlayAreaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDEnemyObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects2[i].addPolarForce(270, 60, 1);
}
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects2[i].rotateTowardAngle(270, 0, runtimeScene);
}
}}

}


{


{
/* Reuse gdjs.PlayAreaCode.GDEnemyObjects1 */
gdjs.PlayAreaCode.GDEnemyBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects1Objects, (( gdjs.PlayAreaCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDEnemyObjects1[0].getPointX("")), (( gdjs.PlayAreaCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDEnemyObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects1[i].addPolarForce(315, 60, 1);
}
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects1[i].rotateTowardAngle(315, 0, runtimeScene);
}
}}

}


};gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.PlayAreaCode.GDEnemyObjects1});gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.PlayAreaCode.GDPlayerObjects1});gdjs.PlayAreaCode.userFunc0x789cc0 = function(runtimeScene) {
"use strict";
// SPAWN
if(runtimeScene.getVariables().get("spawnEnemy").getAsNumber() !== 1){
    return
}

const spawnChance = 0.0085

const random = Math.random()

if(random < spawnChance){
    const newEnemy = runtimeScene.createObject("Enemy")
    newEnemy.setX(Math.random() * 1920)
    newEnemy.setWidth(84)
    newEnemy.setHeight(117)
}
};
gdjs.PlayAreaCode.eventsList7 = function(runtimeScene) {

};gdjs.PlayAreaCode.userFunc0x78a528 = function(runtimeScene) {
"use strict";
// Just toggle
var debugMode = runtimeScene.getVariables().get("DebugMode");

if(!!debugMode.getAsNumber()){
    debugMode.setNumber(0);
}else{
    debugMode.setNumber(1);
}
};
gdjs.PlayAreaCode.eventsList8 = function(runtimeScene) {

{


gdjs.PlayAreaCode.userFunc0x78a528(runtimeScene);

}


};gdjs.PlayAreaCode.userFunc0x6f41c0 = function(runtimeScene) {
"use strict";
const toToggle = runtimeScene.getVariables().get("vulnerable");
!!toToggle.getAsNumber() ? toToggle.setNumber(0) : toToggle.setNumber(1);
};
gdjs.PlayAreaCode.eventsList9 = function(runtimeScene) {

{


gdjs.PlayAreaCode.userFunc0x6f41c0(runtimeScene);

}


};gdjs.PlayAreaCode.userFunc0x6f45c0 = function(runtimeScene) {
"use strict";
const toToggle = runtimeScene.getVariables().get("enemyShoot");
!!toToggle.getAsNumber() ? toToggle.setNumber(0) : toToggle.setNumber(1);
};
gdjs.PlayAreaCode.eventsList10 = function(runtimeScene) {

{


gdjs.PlayAreaCode.userFunc0x6f45c0(runtimeScene);

}


};gdjs.PlayAreaCode.userFunc0x6f4a08 = function(runtimeScene) {
"use strict";
const toToggle = runtimeScene.getVariables().get("spawnEnemy");
!!toToggle.getAsNumber() ? toToggle.setNumber(0) : toToggle.setNumber(1);
};
gdjs.PlayAreaCode.eventsList11 = function(runtimeScene) {

{


gdjs.PlayAreaCode.userFunc0x6f4a08(runtimeScene);

}


};gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.PlayAreaCode.GDEnemyObjects1});gdjs.PlayAreaCode.eventsList12 = function(runtimeScene) {

};gdjs.PlayAreaCode.userFunc0x709bc8 = function(runtimeScene) {
"use strict";
// Generate hearts UI
const health = runtimeScene.getObjects("Player")[0].getBehavior("Health").Health()
const allHearts = runtimeScene.getObjects("Heart")
if(allHearts.length !== health){
    if(allHearts.length < health){
        // Add new hearts
        const newObj = runtimeScene.createObject("Heart")
        newObj.setZOrder(1000)
        newObj.setWidth(56)
        newObj.setHeight(49)
        newObj.setPosition(68 + (60 * (allHearts.length - 1)), 39)
    }else{
        // Remove existing ones
        allHearts[allHearts.length - 1].deleteFromScene(runtimeScene)
    }
}
};
gdjs.PlayAreaCode.eventsList13 = function(runtimeScene) {

};gdjs.PlayAreaCode.eventsList14 = function(runtimeScene) {

{


gdjs.PlayAreaCode.eventsList0(runtimeScene);
}


{


gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
{
{gdjs.PlayAreaCode.conditionTrue_1 = gdjs.PlayAreaCode.condition0IsTrue_0;
gdjs.PlayAreaCode.condition0IsTrue_1.val = false;
gdjs.PlayAreaCode.condition1IsTrue_1.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.PlayAreaCode.condition0IsTrue_1.val ) {
    gdjs.PlayAreaCode.conditionTrue_1.val = true;
}
}
{
gdjs.PlayAreaCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.PlayAreaCode.condition1IsTrue_1.val ) {
    gdjs.PlayAreaCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.PlayAreaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PlayAreaCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.PlayAreaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
{
{gdjs.PlayAreaCode.conditionTrue_1 = gdjs.PlayAreaCode.condition0IsTrue_0;
gdjs.PlayAreaCode.condition0IsTrue_1.val = false;
gdjs.PlayAreaCode.condition1IsTrue_1.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if( gdjs.PlayAreaCode.condition0IsTrue_1.val ) {
    gdjs.PlayAreaCode.conditionTrue_1.val = true;
}
}
{
gdjs.PlayAreaCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if( gdjs.PlayAreaCode.condition1IsTrue_1.val ) {
    gdjs.PlayAreaCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.PlayAreaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PlayAreaCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.PlayAreaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{


gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
{
{gdjs.PlayAreaCode.conditionTrue_1 = gdjs.PlayAreaCode.condition0IsTrue_0;
gdjs.PlayAreaCode.condition0IsTrue_1.val = false;
gdjs.PlayAreaCode.condition1IsTrue_1.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.PlayAreaCode.condition0IsTrue_1.val ) {
    gdjs.PlayAreaCode.conditionTrue_1.val = true;
}
}
{
gdjs.PlayAreaCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.PlayAreaCode.condition1IsTrue_1.val ) {
    gdjs.PlayAreaCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.PlayAreaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PlayAreaCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.PlayAreaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{


gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
{
{gdjs.PlayAreaCode.conditionTrue_1 = gdjs.PlayAreaCode.condition0IsTrue_0;
gdjs.PlayAreaCode.condition0IsTrue_1.val = false;
gdjs.PlayAreaCode.condition1IsTrue_1.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.PlayAreaCode.condition0IsTrue_1.val ) {
    gdjs.PlayAreaCode.conditionTrue_1.val = true;
}
}
{
gdjs.PlayAreaCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.PlayAreaCode.condition1IsTrue_1.val ) {
    gdjs.PlayAreaCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.PlayAreaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PlayAreaCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.PlayAreaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{


gdjs.PlayAreaCode.eventsList1(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PlayAreaCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.PlayAreaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDPlayerObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}}

}


{


gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.PlayAreaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.PlayAreaCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PlayAreaCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.PlayAreaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.PlayAreaCode.GDPlayerObjects1[i].getPointX("")) + Math.cos(gdjs.toRad((gdjs.PlayAreaCode.GDPlayerObjects1[i].getAngle()))) * 80, (gdjs.PlayAreaCode.GDPlayerObjects1[i].getPointY("")) + Math.sin(gdjs.toRad((gdjs.PlayAreaCode.GDPlayerObjects1[i].getAngle()))) * 80, gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDBulletObjects1Objects, (gdjs.PlayAreaCode.GDPlayerObjects1[i].getAngle()), 60, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PlayAreaCode.GDPlayerObjects1);

gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayAreaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.PlayAreaCode.GDPlayerObjects1[i].getBehavior("FireBullet").HasJustFired((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.PlayAreaCode.condition0IsTrue_0.val = true;
        gdjs.PlayAreaCode.GDPlayerObjects1[k] = gdjs.PlayAreaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.PlayAreaCode.GDPlayerObjects1.length = k;}if (gdjs.PlayAreaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/test2.wav", false, 5, 1);
}}

}


{


gdjs.PlayAreaCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.PlayAreaCode.GDBulletObjects1);

for(gdjs.PlayAreaCode.forEachIndex2 = 0;gdjs.PlayAreaCode.forEachIndex2 < gdjs.PlayAreaCode.GDBulletObjects1.length;++gdjs.PlayAreaCode.forEachIndex2) {
gdjs.PlayAreaCode.GDBulletObjects2.length = 0;


gdjs.PlayAreaCode.forEachTemporary2 = gdjs.PlayAreaCode.GDBulletObjects1[gdjs.PlayAreaCode.forEachIndex2];
gdjs.PlayAreaCode.GDBulletObjects2.push(gdjs.PlayAreaCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.PlayAreaCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDBulletObjects2[i].returnVariable(gdjs.PlayAreaCode.GDBulletObjects2[i].getVariables().get("bulletLifespan")).add(1);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.PlayAreaCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PlayAreaCode.GDPlayerObjects1);

gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
{
{gdjs.PlayAreaCode.conditionTrue_1 = gdjs.PlayAreaCode.condition0IsTrue_0;
gdjs.PlayAreaCode.condition0IsTrue_1.val = false;
gdjs.PlayAreaCode.condition1IsTrue_1.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDBulletObjects1Objects, gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDPlayerObjects1Objects, false, runtimeScene, true);
}if ( gdjs.PlayAreaCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayAreaCode.GDBulletObjects1.length;i<l;++i) {
    if ( gdjs.PlayAreaCode.GDBulletObjects1[i].getVariableNumber(gdjs.PlayAreaCode.GDBulletObjects1[i].getVariables().get("bulletLifespan")) > 20 ) {
        gdjs.PlayAreaCode.condition1IsTrue_1.val = true;
        gdjs.PlayAreaCode.GDBulletObjects1[k] = gdjs.PlayAreaCode.GDBulletObjects1[i];
        ++k;
    }
}
gdjs.PlayAreaCode.GDBulletObjects1.length = k;}}
gdjs.PlayAreaCode.conditionTrue_1.val = true && gdjs.PlayAreaCode.condition0IsTrue_1.val && gdjs.PlayAreaCode.condition1IsTrue_1.val;
}
}if (gdjs.PlayAreaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayAreaCode.GDBulletObjects1 */
/* Reuse gdjs.PlayAreaCode.GDPlayerObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/hurt.wav", false, 10, 1);
}{for(var i = 0, len = gdjs.PlayAreaCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.PlayAreaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDPlayerObjects1[i].getBehavior("Health").Hit(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyBullet"), gdjs.PlayAreaCode.GDEnemyBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PlayAreaCode.GDPlayerObjects1);

gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyBulletObjects1Objects, gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDPlayerObjects1Objects, false, runtimeScene, true);
}if (gdjs.PlayAreaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayAreaCode.GDEnemyBulletObjects1 */
/* Reuse gdjs.PlayAreaCode.GDPlayerObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/hurt.wav", false, 10, 1);
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyBulletObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.PlayAreaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDPlayerObjects1[i].getBehavior("Health").Hit(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.PlayAreaCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.PlayAreaCode.GDEnemyObjects1);

gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
{
{gdjs.PlayAreaCode.conditionTrue_1 = gdjs.PlayAreaCode.condition0IsTrue_0;
gdjs.PlayAreaCode.condition0IsTrue_1.val = false;
gdjs.PlayAreaCode.condition1IsTrue_1.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDBulletObjects1Objects, gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyObjects1Objects, false, runtimeScene, true);
}if ( gdjs.PlayAreaCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayAreaCode.GDBulletObjects1.length;i<l;++i) {
    if ( gdjs.PlayAreaCode.GDBulletObjects1[i].getVariableNumber(gdjs.PlayAreaCode.GDBulletObjects1[i].getVariables().get("bulletLifespan")) > 20 ) {
        gdjs.PlayAreaCode.condition1IsTrue_1.val = true;
        gdjs.PlayAreaCode.GDBulletObjects1[k] = gdjs.PlayAreaCode.GDBulletObjects1[i];
        ++k;
    }
}
gdjs.PlayAreaCode.GDBulletObjects1.length = k;}}
gdjs.PlayAreaCode.conditionTrue_1.val = true && gdjs.PlayAreaCode.condition0IsTrue_1.val && gdjs.PlayAreaCode.condition1IsTrue_1.val;
}
}if (gdjs.PlayAreaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayAreaCode.GDBulletObjects1 */
/* Reuse gdjs.PlayAreaCode.GDEnemyObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/hurt.wav", false, 10, 1);
}{for(var i = 0, len = gdjs.PlayAreaCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.PlayAreaCode.eventsList4(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.PlayAreaCode.GDEnemyObjects1);

for(gdjs.PlayAreaCode.forEachIndex2 = 0;gdjs.PlayAreaCode.forEachIndex2 < gdjs.PlayAreaCode.GDEnemyObjects1.length;++gdjs.PlayAreaCode.forEachIndex2) {
gdjs.PlayAreaCode.GDEnemyObjects2.length = 0;


gdjs.PlayAreaCode.forEachTemporary2 = gdjs.PlayAreaCode.GDEnemyObjects1[gdjs.PlayAreaCode.forEachIndex2];
gdjs.PlayAreaCode.GDEnemyObjects2.push(gdjs.PlayAreaCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyObjects2[i].returnVariable(gdjs.PlayAreaCode.GDEnemyObjects2[i].getVariables().getFromIndex(0)).sub(1);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.PlayAreaCode.GDEnemyObjects1);

gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
gdjs.PlayAreaCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayAreaCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.PlayAreaCode.GDEnemyObjects1[i].getVariableNumber(gdjs.PlayAreaCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)) < 0 ) {
        gdjs.PlayAreaCode.condition0IsTrue_0.val = true;
        gdjs.PlayAreaCode.GDEnemyObjects1[k] = gdjs.PlayAreaCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.PlayAreaCode.GDEnemyObjects1.length = k;}if ( gdjs.PlayAreaCode.condition0IsTrue_0.val ) {
{
gdjs.PlayAreaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}}
if (gdjs.PlayAreaCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayAreaCode.GDEnemyObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/test2.wav", false, 10, 1);
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyObjects1[i].returnVariable(gdjs.PlayAreaCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
{ //Subevents
gdjs.PlayAreaCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.PlayAreaCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PlayAreaCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.PlayAreaCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.PlayAreaCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.PlayAreaCode.GDPlayerObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.PlayAreaCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PlayAreaCode.GDPlayerObjects1);

gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyObjects1Objects, gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDPlayerObjects1Objects, false, runtimeScene, true);
}if (gdjs.PlayAreaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayAreaCode.GDEnemyObjects1 */
/* Reuse gdjs.PlayAreaCode.GDPlayerObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/hurt.wav", false, 10, 1);
}{for(var i = 0, len = gdjs.PlayAreaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDPlayerObjects1[i].getBehavior("Health").Hit(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.PlayAreaCode.userFunc0x789cc0(runtimeScene);

}


{


gdjs.PlayAreaCode.eventsList7(runtimeScene);
}


{


gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.PlayAreaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DebugPanel"), gdjs.PlayAreaCode.GDDebugPanelObjects1);
{for(var i = 0, len = gdjs.PlayAreaCode.GDDebugPanelObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDDebugPanelObjects1[i].hide();
}
}}

}


{


gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.PlayAreaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DebugPanel"), gdjs.PlayAreaCode.GDDebugPanelObjects1);
{for(var i = 0, len = gdjs.PlayAreaCode.GDDebugPanelObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDDebugPanelObjects1[i].hide(false);
}
}}

}


{


gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
gdjs.PlayAreaCode.condition1IsTrue_0.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "F8");
}if ( gdjs.PlayAreaCode.condition0IsTrue_0.val ) {
{
{gdjs.PlayAreaCode.conditionTrue_1 = gdjs.PlayAreaCode.condition1IsTrue_0;
gdjs.PlayAreaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8176620);
}
}}
if (gdjs.PlayAreaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/debug.wav", false, 10, 1);
}
{ //Subevents
gdjs.PlayAreaCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
gdjs.PlayAreaCode.condition1IsTrue_0.val = false;
gdjs.PlayAreaCode.condition2IsTrue_0.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.PlayAreaCode.condition0IsTrue_0.val ) {
{
gdjs.PlayAreaCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if ( gdjs.PlayAreaCode.condition1IsTrue_0.val ) {
{
{gdjs.PlayAreaCode.conditionTrue_1 = gdjs.PlayAreaCode.condition2IsTrue_0;
gdjs.PlayAreaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8168348);
}
}}
}
if (gdjs.PlayAreaCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/debug.wav", false, 10, 1);
}
{ //Subevents
gdjs.PlayAreaCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
gdjs.PlayAreaCode.condition1IsTrue_0.val = false;
gdjs.PlayAreaCode.condition2IsTrue_0.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.PlayAreaCode.condition0IsTrue_0.val ) {
{
gdjs.PlayAreaCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "o");
}if ( gdjs.PlayAreaCode.condition1IsTrue_0.val ) {
{
{gdjs.PlayAreaCode.conditionTrue_1 = gdjs.PlayAreaCode.condition2IsTrue_0;
gdjs.PlayAreaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8172700);
}
}}
}
if (gdjs.PlayAreaCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/debug.wav", false, 10, 1);
}
{ //Subevents
gdjs.PlayAreaCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
gdjs.PlayAreaCode.condition1IsTrue_0.val = false;
gdjs.PlayAreaCode.condition2IsTrue_0.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.PlayAreaCode.condition0IsTrue_0.val ) {
{
gdjs.PlayAreaCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
}if ( gdjs.PlayAreaCode.condition1IsTrue_0.val ) {
{
{gdjs.PlayAreaCode.conditionTrue_1 = gdjs.PlayAreaCode.condition2IsTrue_0;
gdjs.PlayAreaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8181500);
}
}}
}
if (gdjs.PlayAreaCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/debug.wav", false, 10, 1);
}
{ //Subevents
gdjs.PlayAreaCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
gdjs.PlayAreaCode.condition1IsTrue_0.val = false;
gdjs.PlayAreaCode.condition2IsTrue_0.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.PlayAreaCode.condition0IsTrue_0.val ) {
{
gdjs.PlayAreaCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
}if ( gdjs.PlayAreaCode.condition1IsTrue_0.val ) {
{
{gdjs.PlayAreaCode.conditionTrue_1 = gdjs.PlayAreaCode.condition2IsTrue_0;
gdjs.PlayAreaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8158084);
}
}}
}
if (gdjs.PlayAreaCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PlayAreaCode.GDPlayerObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/debug.wav", false, 10, 1);
}{for(var i = 0, len = gdjs.PlayAreaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDPlayerObjects1[i].getBehavior("Health").Heal(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
gdjs.PlayAreaCode.condition1IsTrue_0.val = false;
gdjs.PlayAreaCode.condition2IsTrue_0.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.PlayAreaCode.condition0IsTrue_0.val ) {
{
gdjs.PlayAreaCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if ( gdjs.PlayAreaCode.condition1IsTrue_0.val ) {
{
{gdjs.PlayAreaCode.conditionTrue_1 = gdjs.PlayAreaCode.condition2IsTrue_0;
gdjs.PlayAreaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8154964);
}
}}
}
if (gdjs.PlayAreaCode.condition2IsTrue_0.val) {
gdjs.PlayAreaCode.GDEnemyObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "assets/debug.wav", false, 10, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayAreaCode.mapOfGDgdjs_46PlayAreaCode_46GDEnemyObjects1Objects, gdjs.random(1920), 0, "");
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyObjects1[i].setWidth(84);
}
}{for(var i = 0, len = gdjs.PlayAreaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.PlayAreaCode.GDEnemyObjects1[i].setHeight(117);
}
}}

}


{


gdjs.PlayAreaCode.eventsList12(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PlayAreaCode.GDPlayerObjects1);

gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayAreaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.PlayAreaCode.GDPlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.PlayAreaCode.condition0IsTrue_0.val = true;
        gdjs.PlayAreaCode.GDPlayerObjects1[k] = gdjs.PlayAreaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.PlayAreaCode.GDPlayerObjects1.length = k;}if (gdjs.PlayAreaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", true);
}}

}


{


gdjs.PlayAreaCode.userFunc0x709bc8(runtimeScene);

}


{


gdjs.PlayAreaCode.eventsList13(runtimeScene);
}


{


gdjs.PlayAreaCode.condition0IsTrue_0.val = false;
{
gdjs.PlayAreaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlayAreaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets/maintheme.mp3", true, 5, 1);
}}

}


};

gdjs.PlayAreaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlayAreaCode.GDPlayerObjects1.length = 0;
gdjs.PlayAreaCode.GDPlayerObjects2.length = 0;
gdjs.PlayAreaCode.GDPlayerObjects3.length = 0;
gdjs.PlayAreaCode.GDEnemyBulletObjects1.length = 0;
gdjs.PlayAreaCode.GDEnemyBulletObjects2.length = 0;
gdjs.PlayAreaCode.GDEnemyBulletObjects3.length = 0;
gdjs.PlayAreaCode.GDBulletObjects1.length = 0;
gdjs.PlayAreaCode.GDBulletObjects2.length = 0;
gdjs.PlayAreaCode.GDBulletObjects3.length = 0;
gdjs.PlayAreaCode.GDDebugPanelObjects1.length = 0;
gdjs.PlayAreaCode.GDDebugPanelObjects2.length = 0;
gdjs.PlayAreaCode.GDDebugPanelObjects3.length = 0;
gdjs.PlayAreaCode.GDHeartObjects1.length = 0;
gdjs.PlayAreaCode.GDHeartObjects2.length = 0;
gdjs.PlayAreaCode.GDHeartObjects3.length = 0;
gdjs.PlayAreaCode.GDEnemyObjects1.length = 0;
gdjs.PlayAreaCode.GDEnemyObjects2.length = 0;
gdjs.PlayAreaCode.GDEnemyObjects3.length = 0;

gdjs.PlayAreaCode.eventsList14(runtimeScene);
return;

}

gdjs['PlayAreaCode'] = gdjs.PlayAreaCode;
