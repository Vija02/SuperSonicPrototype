gdjs.MenuCode = {};
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDInstructionTextObjects1= [];
gdjs.MenuCode.GDInstructionTextObjects2= [];
gdjs.MenuCode.GDSurviveTextObjects1= [];
gdjs.MenuCode.GDSurviveTextObjects2= [];
gdjs.MenuCode.GDMoreTextObjects1= [];
gdjs.MenuCode.GDMoreTextObjects2= [];
gdjs.MenuCode.GDWhiteObjects1= [];
gdjs.MenuCode.GDWhiteObjects2= [];
gdjs.MenuCode.GDStartButtonObjects1= [];
gdjs.MenuCode.GDStartButtonObjects2= [];
gdjs.MenuCode.GDwasdObjects1= [];
gdjs.MenuCode.GDwasdObjects2= [];
gdjs.MenuCode.GDMouseObjects1= [];
gdjs.MenuCode.GDMouseObjects2= [];
gdjs.MenuCode.GDNewObjectObjects1= [];
gdjs.MenuCode.GDNewObjectObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.MenuCode.GDStartButtonObjects1});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MenuCode.GDStartButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PlayArea", true);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDInstructionTextObjects1.length = 0;
gdjs.MenuCode.GDInstructionTextObjects2.length = 0;
gdjs.MenuCode.GDSurviveTextObjects1.length = 0;
gdjs.MenuCode.GDSurviveTextObjects2.length = 0;
gdjs.MenuCode.GDMoreTextObjects1.length = 0;
gdjs.MenuCode.GDMoreTextObjects2.length = 0;
gdjs.MenuCode.GDWhiteObjects1.length = 0;
gdjs.MenuCode.GDWhiteObjects2.length = 0;
gdjs.MenuCode.GDStartButtonObjects1.length = 0;
gdjs.MenuCode.GDStartButtonObjects2.length = 0;
gdjs.MenuCode.GDwasdObjects1.length = 0;
gdjs.MenuCode.GDwasdObjects2.length = 0;
gdjs.MenuCode.GDMouseObjects1.length = 0;
gdjs.MenuCode.GDMouseObjects2.length = 0;
gdjs.MenuCode.GDNewObjectObjects1.length = 0;
gdjs.MenuCode.GDNewObjectObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
