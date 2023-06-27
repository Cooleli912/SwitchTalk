gdjs.JoinCode = {};
gdjs.JoinCode.GDTitleObjects1= [];
gdjs.JoinCode.GDTitleObjects2= [];
gdjs.JoinCode.GDInfoObjects1= [];
gdjs.JoinCode.GDInfoObjects2= [];
gdjs.JoinCode.GDIDEntryObjects1= [];
gdjs.JoinCode.GDIDEntryObjects2= [];
gdjs.JoinCode.GDConfirmObjects1= [];
gdjs.JoinCode.GDConfirmObjects2= [];


gdjs.JoinCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Confirm"), gdjs.JoinCode.GDConfirmObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JoinCode.GDConfirmObjects1.length;i<l;++i) {
    if ( gdjs.JoinCode.GDConfirmObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.JoinCode.GDConfirmObjects1[k] = gdjs.JoinCode.GDConfirmObjects1[i];
        ++k;
    }
}
gdjs.JoinCode.GDConfirmObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IDEntry"), gdjs.JoinCode.GDIDEntryObjects1);
{gdjs.evtTools.p2p.connect((( gdjs.JoinCode.GDIDEntryObjects1.length === 0 ) ? "" :gdjs.JoinCode.GDIDEntryObjects1[0].getString()));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("BeginChat", false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Chat", false);
}}

}


};

gdjs.JoinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JoinCode.GDTitleObjects1.length = 0;
gdjs.JoinCode.GDTitleObjects2.length = 0;
gdjs.JoinCode.GDInfoObjects1.length = 0;
gdjs.JoinCode.GDInfoObjects2.length = 0;
gdjs.JoinCode.GDIDEntryObjects1.length = 0;
gdjs.JoinCode.GDIDEntryObjects2.length = 0;
gdjs.JoinCode.GDConfirmObjects1.length = 0;
gdjs.JoinCode.GDConfirmObjects2.length = 0;

gdjs.JoinCode.eventsList0(runtimeScene);

return;

}

gdjs['JoinCode'] = gdjs.JoinCode;
