gdjs.ChatCode = {};
gdjs.ChatCode.GDTitleObjects1= [];
gdjs.ChatCode.GDTitleObjects2= [];
gdjs.ChatCode.GDChatTextObjects1= [];
gdjs.ChatCode.GDChatTextObjects2= [];
gdjs.ChatCode.GDChatInputObjects1= [];
gdjs.ChatCode.GDChatInputObjects2= [];
gdjs.ChatCode.GDSubmitObjects1= [];
gdjs.ChatCode.GDSubmitObjects2= [];


gdjs.ChatCode.mapOfGDgdjs_46ChatCode_46GDChatTextObjects1Objects = Hashtable.newFrom({"ChatText": gdjs.ChatCode.GDChatTextObjects1});
gdjs.ChatCode.mapOfGDgdjs_46ChatCode_46GDChatTextObjects1Objects = Hashtable.newFrom({"ChatText": gdjs.ChatCode.GDChatTextObjects1});
gdjs.ChatCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.ChatCode.GDSubmitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChatCode.GDSubmitObjects1.length;i<l;++i) {
    if ( gdjs.ChatCode.GDSubmitObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ChatCode.GDSubmitObjects1[k] = gdjs.ChatCode.GDSubmitObjects1[i];
        ++k;
    }
}
gdjs.ChatCode.GDSubmitObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ChatInput"), gdjs.ChatCode.GDChatInputObjects1);
gdjs.ChatCode.GDChatTextObjects1.length = 0;

{gdjs.evtTools.p2p.sendDataToAll("ChatMSG", (( gdjs.ChatCode.GDChatInputObjects1.length === 0 ) ? "" :gdjs.ChatCode.GDChatInputObjects1[0].getString()));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ChatCode.mapOfGDgdjs_46ChatCode_46GDChatTextObjects1Objects, 43, 136, "");
}{for(var i = 0, len = gdjs.ChatCode.GDChatTextObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDChatTextObjects1[i].setString((( gdjs.ChatCode.GDChatInputObjects1.length === 0 ) ? "" :gdjs.ChatCode.GDChatInputObjects1[0].getString()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("ChatMSG", false);
if (isConditionTrue_0) {
gdjs.ChatCode.GDChatTextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ChatCode.mapOfGDgdjs_46ChatCode_46GDChatTextObjects1Objects, 43, 136, "");
}{for(var i = 0, len = gdjs.ChatCode.GDChatTextObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDChatTextObjects1[i].setString(gdjs.evtTools.p2p.getEventData("ChatMSG"));
}
}}

}


};

gdjs.ChatCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ChatCode.GDTitleObjects1.length = 0;
gdjs.ChatCode.GDTitleObjects2.length = 0;
gdjs.ChatCode.GDChatTextObjects1.length = 0;
gdjs.ChatCode.GDChatTextObjects2.length = 0;
gdjs.ChatCode.GDChatInputObjects1.length = 0;
gdjs.ChatCode.GDChatInputObjects2.length = 0;
gdjs.ChatCode.GDSubmitObjects1.length = 0;
gdjs.ChatCode.GDSubmitObjects2.length = 0;

gdjs.ChatCode.eventsList0(runtimeScene);

return;

}

gdjs['ChatCode'] = gdjs.ChatCode;
