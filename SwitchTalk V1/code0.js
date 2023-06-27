gdjs.StartCode = {};
gdjs.StartCode.GDTitleObjects1= [];
gdjs.StartCode.GDTitleObjects2= [];
gdjs.StartCode.GDConnectObjects1= [];
gdjs.StartCode.GDConnectObjects2= [];
gdjs.StartCode.GDHostObjects1= [];
gdjs.StartCode.GDHostObjects2= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Host"), gdjs.StartCode.GDHostObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDHostObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDHostObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDHostObjects1[k] = gdjs.StartCode.GDHostObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDHostObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Host", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Connect"), gdjs.StartCode.GDConnectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDConnectObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDConnectObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDConnectObjects1[k] = gdjs.StartCode.GDConnectObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDConnectObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Join", false);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDTitleObjects1.length = 0;
gdjs.StartCode.GDTitleObjects2.length = 0;
gdjs.StartCode.GDConnectObjects1.length = 0;
gdjs.StartCode.GDConnectObjects2.length = 0;
gdjs.StartCode.GDHostObjects1.length = 0;
gdjs.StartCode.GDHostObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);

return;

}

gdjs['StartCode'] = gdjs.StartCode;
