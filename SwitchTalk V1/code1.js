gdjs.HostCode = {};
gdjs.HostCode.GDTitleObjects1= [];
gdjs.HostCode.GDTitleObjects2= [];
gdjs.HostCode.GDIDInfoObjects1= [];
gdjs.HostCode.GDIDInfoObjects2= [];
gdjs.HostCode.GDIDObjects1= [];
gdjs.HostCode.GDIDObjects2= [];


gdjs.HostCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ID"), gdjs.HostCode.GDIDObjects1);
{for(var i = 0, len = gdjs.HostCode.GDIDObjects1.length ;i < len;++i) {
    gdjs.HostCode.GDIDObjects1[i].setString(gdjs.evtTools.p2p.getCurrentId());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onConnection();
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.sendDataToAll("BeginChat", "");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Chat", false);
}}

}


};

gdjs.HostCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HostCode.GDTitleObjects1.length = 0;
gdjs.HostCode.GDTitleObjects2.length = 0;
gdjs.HostCode.GDIDInfoObjects1.length = 0;
gdjs.HostCode.GDIDInfoObjects2.length = 0;
gdjs.HostCode.GDIDObjects1.length = 0;
gdjs.HostCode.GDIDObjects2.length = 0;

gdjs.HostCode.eventsList0(runtimeScene);

return;

}

gdjs['HostCode'] = gdjs.HostCode;
