(window["webpackJsonpno-pc-qr"]=window["webpackJsonpno-pc-qr"]||[]).push([[0],{149:function(e,t,r){e.exports=r(246)},245:function(e,t,r){},246:function(e,t,r){"use strict";r.r(t);r(150),r(176),r(178),r(179),r(181),r(182),r(183),r(184),r(185),r(186),r(187),r(188),r(190),r(191),r(192),r(193),r(194),r(195),r(196),r(197),r(198),r(199),r(201),r(202),r(203),r(204),r(205),r(206),r(207),r(208),r(209),r(210),r(211),r(212),r(213),r(214),r(215),r(216),r(217),r(218);var a=r(0),n=r.n(a),o=r(28),s=r.n(o),c=r(27),i=r.n(c),p=r(83),l=r(43),m=r(38),g=r(88),d=r(84),u=r(89),h=r(58),f=r(17),S=r(85),v=r.n(S),y=r(59),w=r.n(y),C=(r(243),r(86)),I=r.n(C),E=r(87),P=r.n(E),k=r(60),W=r.n(k);r(244),r(245);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(r,!0).forEach((function(t){Object(p.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H=function(e){function t(e){var r;return Object(l.a)(this,t),(r=Object(g.a)(this,Object(d.a)(t).call(this,e))).changeSelectedPhoto=function(e){var t=e.target;if(r.removeStopScrollWindow(),r.setState(O({},r.state,{},r.defaultState)),r.cropperHeight=0,t&&t.files&&t.files[0]){if(-1===["image/x-png","image/png","image/jpeg","image/jpg"].indexOf(t.files[0].type))return void r.setActiveSnack(r.snacks.errorImageLoading);var a=new FileReader;a.onload=function(e){r.setImage(e.target.result)},a.onerror=function(){console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c"),r.setActiveSnack(r.snacks.errorImageLoading)},a.readAsDataURL(t.files[0])}},r.resizeFunction=function(e){r.forceUpdate()},r.move=function(e,t,a){var n=r.state.currentPosCroppedX+e.shiftX,o=r.state.currentPosCroppedY+e.shiftY;n<0&&(n=0),o<0&&(o=0);var s=document.getElementById("opacity-image");s&&o+r.state.currentHeightCropper>s.offsetHeight&&(o=s.offsetHeight-r.state.currentHeightCropper),s&&n+r.state.currentWidthCropper>s.offsetWidth&&(n=s.offsetWidth-r.state.currentWidthCropper),r.currentPosCroppedX=n,r.currentPosCroppedY=o,r.setState({croppedImageStyles:O({},r.state.croppedImageStyles,{transform:"translateX(".concat(n,"px) translateY(").concat(o,"px)")}),croppedImageOverflowSyles:O({},r.state.croppedImageOverflowSyles,{transform:"translateX(".concat(-n+r.state.currentPosImageX,"px) translateY(").concat(-o+r.state.currentPosImageY,"px)")})})},r.stopScrollWindow=function(){"undefined"!==typeof window.orientation&&(r.lastScrollPos=window.scrollY,r.setState({wrapCropperStyles:O({},r.state.wrapCropperStyles,{overflow:"hidden",transform:"translateY(-".concat(window.scrollY,"px)")})}),document.body.classList.add("no-overflow"),document.getElementsByTagName("html")[0].classList.add("no-overflow"))},r.removeStopScrollWindow=function(){document.body.classList.remove("no-overflow"),document.getElementsByTagName("html")[0].classList.remove("no-overflow"),window.scrollTo(0,r.lastScrollPos),r.setState({wrapCropperStyles:O({},r.state.wrapCropperStyles,{overflow:"auto",transform:"none"})})},r.onEndCrop=function(){r.setState({currentPosCroppedX:r.currentPosCroppedX,currentPosCroppedY:r.currentPosCroppedY}),r.removeStopScrollWindow()},r.moveImage=function(e){var t=r.state.currentPosImageX+e.shiftX,a=r.state.currentPosImageY+e.shiftY;r.currentPosImageX=t,r.currentPosImageY=a,r.setState({imageStyles:O({},r.state.imageStyles,{transform:"translateX(".concat(t,"px) translateY(").concat(a,"px)")}),croppedImageOverflowSyles:O({},r.state.croppedImageOverflowSyles,{transform:"translateX(".concat(t-r.state.currentPosCroppedX,"px) translateY(").concat(a-r.state.currentPosCroppedY,"px)")})})},r.onEndImageMove=function(){r.setState({currentPosImageX:r.currentPosImageX,currentPosImageY:r.currentPosImageY})},r.scaleImagesMove=function(e){e.originalEvent.currentTarget;var t=r.state.currentWidthCropper+e.shiftX,a=r.state.currentHeightCropper+e.shiftY;t<a?a=t:t=a,r.currentWidthCropper=t,r.currentHeightCropper=a,r.setState({cropperImageStyles:O({},r.state.cropperStyles,{width:t,height:a}),croppedImageStyles:O({},r.state.croppedImageStyles,{width:t,height:a})})},r.onEndScaleImagesMove=function(e){r.setState({currentWidthCropper:r.currentWidthCropper,currentHeightCropper:r.currentHeightCropper}),r.removeStopScrollWindow()},r.getQrFromCrop=function(){var e=document.getElementById("opacity-image"),t=(document.getElementById("crop").getBoundingClientRect(),r.state.currentPosCroppedX),a=r.state.currentPosCroppedY,n=Math.floor(t*r.state.imageWidth/e.offsetWidth),o=Math.floor(a*r.state.imageHeight/e.offsetHeight),s=Math.floor(r.state.currentHeightCropper*r.state.imageHeight/e.offsetHeight),c=Math.floor(r.state.currentWidthCropper*r.state.imageWidth/e.offsetWidth),i=document.createElement("canvas");i.width=r.state.imageWidth,i.height=r.state.imageHeight;var p=i.getContext("2d"),l=new Image;l.onload=function(){p.drawImage(l,0,0);var e=p.getImageData(n,o,c,s);i.height=s,i.width=c,p.clearRect(0,0,i.width,i.height),p.putImageData(e,0,0),(l=new Image).onload=function(){r.getQRFromImage(l)},l.src=i.toDataURL()},l.src=r.state.image},r.setQrResult=function(e){r.setState({qrResult:e})},r.openThisImage=function(){i.a.send("VKWebAppShowImages",{images:[r.state.image]})},r.defaultState={image:"",cropperStyles:{},croppedImageStyles:{},cropperImageStyles:{},croppedImageOverflowSyles:{},currentPosCroppedX:0,currentPosCroppedY:0,currentPosImageX:0,currentPosImageY:0,currentHeightCropper:100,currentWidthCropper:100,wrapCropperStyles:{},wrapCropperContentStyles:{},qrResult:"",needUpdateCenteringCropper:!1,setuppedCropper:!1},r.state=O({},r.defaultState,{activeSnack:null}),r.currentCroppedX=r.state.currentPosCroppedX,r.currentCroppedY=r.state.currentCroppedY,r.currentPosImageX=r.state.currentPosImageX,r.currentPosImageY=r.state.currentPosImageY,r.currentHeightCropper=r.state.currentHeightCropper,r.currentWidthCropper=r.state.currentWidthCropper,r.lastScrollPos=0,r.snacks={qrDecodedSuccessfull:r.qrDecodedSnack(),qrDecodedError:r.qrDecodedSnack(!1),errorImageLoading:r.errorImageLoadingSnack()},h.a.WORKER_PATH="libs/qr-scanner/qr-scanner-worker.min.js",r}return Object(u.a)(t,e),Object(m.a)(t,[{key:"setImage",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=(!(arguments.length>1&&void 0!==arguments[1])||arguments[1],new Image);r.src=t,r.onload=function(){e.setState({image:t,imageWidth:r.width,imageHeight:r.height})}}},{key:"setActiveSnack",value:function(e){this.setState({activeSnack:e})}},{key:"qrDecodedSnack",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return n.a.createElement(f.g,{onClose:function(){return e.setActiveSnack(null)},before:t?n.a.createElement(P.a,{fill:"#16C60C"}):n.a.createElement(W.a,{fill:"#F44336"})},t?"\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b":"QR \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")}},{key:"errorImageLoadingSnack",value:function(){var e=this;return n.a.createElement(f.g,{onClose:function(){e.setActiveSnack(null)},before:n.a.createElement(W.a,{fill:"#F44336"})},"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435")}},{key:"componentDidUpdate",value:function(){if(this.state.image){var e=document.getElementById("opacity-image");window.innerWidth>=510&&e.offsetHeight+0>window.innerHeight&&this.setState({imageStyles:O({},this.state.imageStyles,{maxHeight:window.innerHeight-0,minWidth:"auto"}),croppedImageOverflowSyles:O({},this.state.croppedImageOverflowSyles,{minWidth:"auto"}),needUpdateCenteringCropper:!0});var t=document.getElementById("crop-image");if(this.state.needUpdateCenteringCropper||!this.state.setuppedCropper||t&&t.offsetWidth!==e.offsetWidth){var r=this.state.imageHeight*e.offsetWidth/this.state.imageWidth,a=e.offsetWidth/2-this.state.currentWidthCropper/2,n=r/2-this.state.currentHeightCropper/2;this.setState({currentPosCroppedX:a,currentPosCroppedY:n,croppedImageStyles:O({},this.state.croppedImageStyles,{transform:"translateX(".concat(a,"px) translateY(").concat(n,"px)")}),croppedImageOverflowSyles:O({},this.state.croppedImageOverflowSyles,{transform:"translateX(".concat(-a,"px) translateY(").concat(-n,"px)"),maxHeight:e.offsetHeight,maxWidth:e.offsetWidth,minWidth:e.offsetWidth}),needUpdateCenteringCropper:!1,setuppedCropper:!0})}else e&&this.cropperHeight!==e.offsetHeight&&(this.cropperHeight=e.offsetHeight,this.setState({cropperStyles:O({},this.state.cropperStyles,{height:e.height})}))}}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeFunction,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeFunction)}},{key:"getQRFromImage",value:function(e){var t=this;h.a.scanImage(e).then((function(e){t.setQrResult(e),t.setActiveSnack(t.snacks.qrDecodedSuccessfull)})).catch((function(e){t.setQrResult(""),t.setActiveSnack(t.snacks.qrDecodedError)}))}},{key:"render",value:function(){var e=this;return n.a.createElement(f.i,{activePanel:"main"},n.a.createElement(f.e,{id:"main",theme:"white",className:this.state.image?"":"centering-panel"},n.a.createElement(f.f,null,"QR \u0431\u0435\u0437 \u043a\u0430\u043c\u0435\u0440\u044b"),this.state.image&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"wrap-cropper",style:this.state.wrapCropperStyles},n.a.createElement("div",{className:"wrap-cropper-content",style:this.state.wrapCropperContentStyles},n.a.createElement("div",{className:"cropper",style:this.state.cropperStyles},n.a.createElement("div",{className:"crop",id:"crop",style:this.state.croppedImageStyles},["bottom-right"].map((function(t,r){return n.a.createElement(f.h,{key:"touch_"+r,onStart:e.stopScrollWindow,onMove:e.scaleImagesMove,onEnd:e.onEndScaleImagesMove},n.a.createElement("div",{className:"crop-controller "+t}))})),n.a.createElement(f.h,{onStart:this.stopScrollWindow,onMove:this.move,onEnd:this.onEndCrop},n.a.createElement("div",{className:"cropped-image",style:this.state.cropperImageStyles,onTouchStart:this.startTouch},n.a.createElement("img",{id:"crop-image",style:this.state.croppedImageOverflowSyles,src:this.state.image})))),n.a.createElement("div",{className:"opacity-image",onClick:this.openThisImage},n.a.createElement("img",{id:"opacity-image",style:this.state.imageStyles,src:this.state.image}))),n.a.createElement(f.b,null,this.state.qrResult&&n.a.createElement("div",{style:{wordBreak:"break-all",marginTop:8,marginBottom:24}},n.a.createElement(v.a,{componentDecorator:function(e,t,r){return n.a.createElement(f.d,{href:e,key:r,target:"_blank",rel:"noopener noreferrer"},t)}},this.state.qrResult.split("\n").map((function(t,r){return n.a.createElement("span",{key:"row_"+r},n.a.createElement("span",null,e.state.qrResult),n.a.createElement("br",null))})))),!this.state.qrResult&&n.a.createElement("div",{style:{wordBreak:"break-all",marginTop:8,marginBottom:24}},"\u0423\u0442\u043e\u0447\u043d\u0438\u0442\u0435 \u043e\u0431\u043b\u0430\u0441\u0442\u044c QR \u043a\u043e\u0434\u0430"),n.a.createElement(f.a,{onClick:this.getQrFromCrop,before:n.a.createElement(I.a,null),size:"xl",style:{marginBottom:8}},"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),n.a.createElement(f.c,{accept:"image/x-png,image/jpeg",onChange:this.changeSelectedPhoto,before:n.a.createElement(w.a,null),size:"xl",level:"secondary"},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),this.state.activeSnack)))),!this.state.image&&n.a.createElement(f.b,null,n.a.createElement("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR \u0431\u0435\u0437 \u043a\u0430\u043c\u0435\u0440\u044b, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442, \u0433\u0434\u0435 \u043e\u043d \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d"),n.a.createElement(f.c,{accept:"image/x-png,image/jpeg",onChange:this.changeSelectedPhoto,before:n.a.createElement(w.a,null),size:"l"},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442"),this.state.activeSnack)))}}]),t}(n.a.Component);i.a.send("VKWebAppInit"),s.a.render(n.a.createElement(H,null),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.bd4c1062.chunk.js.map