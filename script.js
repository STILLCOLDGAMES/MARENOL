const _0x2adb7c=_0x3396;(function(_0x5a6096,_0x357a8b){const _0x5840a7=_0x3396,_0x567cf4=_0x5a6096();while(!![]){try{const _0x28a5f2=parseInt(_0x5840a7(0x124))/0x1+parseInt(_0x5840a7(0x127))/0x2*(-parseInt(_0x5840a7(0x126))/0x3)+-parseInt(_0x5840a7(0x121))/0x4*(-parseInt(_0x5840a7(0x119))/0x5)+-parseInt(_0x5840a7(0x114))/0x6*(parseInt(_0x5840a7(0x11d))/0x7)+-parseInt(_0x5840a7(0x120))/0x8+parseInt(_0x5840a7(0x123))/0x9*(parseInt(_0x5840a7(0x116))/0xa)+parseInt(_0x5840a7(0x11b))/0xb;if(_0x28a5f2===_0x357a8b)break;else _0x567cf4['push'](_0x567cf4['shift']());}catch(_0x5bfdbc){_0x567cf4['push'](_0x567cf4['shift']());}}}(_0x1739,0xbb6d1));let hashInput=document[_0x2adb7c(0x11a)]('HashInput'),deHashInput=document[_0x2adb7c(0x11a)](_0x2adb7c(0x118)),textRes=document[_0x2adb7c(0x11a)](_0x2adb7c(0x113)),hashStr='🩸',hashStr2=_0x2adb7c(0x11c);const encryptionMap={'А':'✈','Б':'🌆','В':'🌇','Г':'❤','Д':'💛','Е':'🥺','Ё':'💤','Ж':'💚','З':'🤩','И':'🦷','Й':'♻','К':'🀄','Л':'🔔','М':'👁','Н':'👻','О':'👽','П':'🛑','Р':'🖤','С':'🔈','Т':'🥶','У':'🎃','Ф':'👾','Х':'🤑','Ц':'🔱','Ч':'<','Ш':'>','Щ':'🧳','Ъ':'☢','Ы':'💍','Ь':'🐳','Э':'𐊵','Ю':'❎','Я':'🎵','а':'🧠','б':'🧶','в':'👓','г':'🥽','д':'🎓','е':'😀','ё':'🌤','ж':'🈶','з':'🈚','и':'🈸','й':'🈺','к':'🈷','л':'✴','м':'🆚','н':'🕐','о':'🕑','п':'🕗','р':'🕒','с':'🕕','т':'↖','у':'✠','ф':'✟','х':'✚','ц':'☧','ч':'𒀭','ш':'★','щ':'⟣','ъ':'⁎','ы':'᪥','ь':'▮','э':'◉','ю':'👜','я':'●'};function _0x3396(_0x2db1bd,_0x3be642){const _0x17397b=_0x1739();return _0x3396=function(_0x339642,_0x24036d){_0x339642=_0x339642-0x113;let _0x637ae1=_0x17397b[_0x339642];return _0x637ae1;},_0x3396(_0x2db1bd,_0x3be642);}function _0x1739(){const _0x37f7eb=['replaceAll','DeHashInput','1171460yAjKNc','getElementById','19494156HDQWDk','-+}{','2883321KBvPCa','innerText','toLowerCase','6000976cuLwNd','4tKTmeT','floor','6348285choFwu','716078kPFzxR','clipboard','2223IBSMOf','2932lxfkNy','TextRes','12NSaPWy','value','10KuKbmd'];_0x1739=function(){return _0x37f7eb;};return _0x1739();}function encrypt(){const _0x269ebb=_0x2adb7c;deHashInput[_0x269ebb(0x115)]='';let _0x1e3ed2=hashInput[_0x269ebb(0x115)],_0x2e6b22='';for(let _0x2b7208 of _0x1e3ed2){encryptionMap[_0x2b7208]?(console['log'](getRandomInt(0x5)),_0x2e6b22+=(getRandomInt(0x5)>=0x3?encryptionMap[_0x2b7208[_0x269ebb(0x11f)]()]:encryptionMap[_0x2b7208['toUpperCase']()])+(getRandomInt(0x5)>=0x3?hashStr:hashStr2)):_0x2e6b22+=_0x2b7208;}textRes['innerText']=_0x2e6b22,navigator[_0x269ebb(0x125)]['writeText'](_0x2e6b22);}function decrypt(){const _0x366639=_0x2adb7c;hashInput[_0x366639(0x115)]='';let _0x3c0a24=deHashInput[_0x366639(0x115)],_0x4edccc='';for(let _0x2047ee of _0x3c0a24){let _0x19bdf2=![];for(let _0x1257dc in encryptionMap){if(encryptionMap[_0x1257dc]===_0x2047ee){_0x4edccc+=_0x1257dc,_0x19bdf2=!![];break;}}!_0x19bdf2&&(_0x4edccc+=_0x2047ee);}_0x4edccc=_0x4edccc[_0x366639(0x117)](hashStr,'')['replaceAll'](hashStr2,''),textRes[_0x366639(0x11e)]=_0x4edccc;}function getRandomInt(_0x385d5f){const _0x1de9de=_0x2adb7c;return Math[_0x1de9de(0x122)](Math['random']()*_0x385d5f);}
