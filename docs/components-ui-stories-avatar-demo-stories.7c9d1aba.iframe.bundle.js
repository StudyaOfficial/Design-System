"use strict";(self.webpackChunk_studyaofficial_studya_design_system=self.webpackChunk_studyaofficial_studya_design_system||[]).push([[459],{"./node_modules/@radix-ui/react-avatar/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ee:()=>$cddcb0b647441e34$export$3e431a229df88919,NY:()=>$cddcb0b647441e34$export$fb8d7f40caaeea67,fC:()=>$cddcb0b647441e34$export$be92b6f5f03c0fe9});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs");const[$cddcb0b647441e34$var$createAvatarContext,$cddcb0b647441e34$export$90370d16b488820f]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)("Avatar"),[$cddcb0b647441e34$var$AvatarProvider,$cddcb0b647441e34$var$useAvatarContext]=$cddcb0b647441e34$var$createAvatarContext("Avatar"),$cddcb0b647441e34$export$e2255cf6045e8d47=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeAvatar,...avatarProps}=props,[imageLoadingStatus,setImageLoadingStatus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle");return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($cddcb0b647441e34$var$AvatarProvider,{scope:__scopeAvatar,imageLoadingStatus,onImageLoadingStatusChange:setImageLoadingStatus},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.WV.span,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},avatarProps,{ref:forwardedRef})))})),$cddcb0b647441e34$export$2cd8ae1985206fe8=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeAvatar,src,onLoadingStatusChange=()=>{},...imageProps}=props,context=$cddcb0b647441e34$var$useAvatarContext("AvatarImage",__scopeAvatar),imageLoadingStatus=function $cddcb0b647441e34$var$useImageLoadingStatus(src){const[loadingStatus,setLoadingStatus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle");return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__.b)((()=>{if(!src)return void setLoadingStatus("error");let isMounted=!0;const image=new window.Image,updateStatus=status=>()=>{isMounted&&setLoadingStatus(status)};return setLoadingStatus("loading"),image.onload=updateStatus("loaded"),image.onerror=updateStatus("error"),image.src=src,()=>{isMounted=!1}}),[src]),loadingStatus}(src),handleLoadingStatusChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__.W)((status=>{onLoadingStatusChange(status),context.onImageLoadingStatusChange(status)}));return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__.b)((()=>{"idle"!==imageLoadingStatus&&handleLoadingStatusChange(imageLoadingStatus)}),[imageLoadingStatus,handleLoadingStatusChange]),"loaded"===imageLoadingStatus?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.WV.img,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},imageProps,{ref:forwardedRef,src})):null})),$cddcb0b647441e34$export$69fffb6a9571fbfe=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeAvatar,delayMs,...fallbackProps}=props,context=$cddcb0b647441e34$var$useAvatarContext("AvatarFallback",__scopeAvatar),[canRender,setCanRender]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0===delayMs);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(void 0!==delayMs){const timerId=window.setTimeout((()=>setCanRender(!0)),delayMs);return()=>window.clearTimeout(timerId)}}),[delayMs]),canRender&&"loaded"!==context.imageLoadingStatus?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.WV.span,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},fallbackProps,{ref:forwardedRef})):null}));const $cddcb0b647441e34$export$be92b6f5f03c0fe9=$cddcb0b647441e34$export$e2255cf6045e8d47,$cddcb0b647441e34$export$3e431a229df88919=$cddcb0b647441e34$export$2cd8ae1985206fe8,$cddcb0b647441e34$export$fb8d7f40caaeea67=$cddcb0b647441e34$export$69fffb6a9571fbfe},"./src/components/ui/stories/avatar-demo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarWithFallback:()=>AvatarWithFallback,AvatarWithImage:()=>AvatarWithImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _AvatarWithImage$para,_AvatarWithImage$para2,_AvatarWithFallback$p,_AvatarWithFallback$p2,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_avatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/avatar.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Shadcn/avatar",render:function render(args){return __jsx(_avatar__WEBPACK_IMPORTED_MODULE_2__.qE,null,__jsx(_avatar__WEBPACK_IMPORTED_MODULE_2__.F$,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),__jsx(_avatar__WEBPACK_IMPORTED_MODULE_2__.Q5,null,"Shadcn"))},tags:["autodocs"],parameters:{layout:"centered"}};var AvatarWithImage={args:{},render:function render(args){return __jsx(_avatar__WEBPACK_IMPORTED_MODULE_2__.qE,null,__jsx(_avatar__WEBPACK_IMPORTED_MODULE_2__.F$,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),__jsx(_avatar__WEBPACK_IMPORTED_MODULE_2__.Q5,null,"Shadcn"))}},AvatarWithFallback={args:{},render:function render(args){return __jsx(_avatar__WEBPACK_IMPORTED_MODULE_2__.qE,null,__jsx(_avatar__WEBPACK_IMPORTED_MODULE_2__.F$,{src:"",alt:"@shadcn"}),__jsx(_avatar__WEBPACK_IMPORTED_MODULE_2__.Q5,null,"CN"))}};AvatarWithImage.parameters=_objectSpread(_objectSpread({},AvatarWithImage.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AvatarWithImage$para=AvatarWithImage.parameters)||void 0===_AvatarWithImage$para?void 0:_AvatarWithImage$para.docs),{},{source:_objectSpread({originalSource:'{\n  args: {},\n  render: args => <Avatar>\n            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />\n            <AvatarFallback>Shadcn</AvatarFallback>\n        </Avatar>\n}'},null===(_AvatarWithImage$para2=AvatarWithImage.parameters)||void 0===_AvatarWithImage$para2||null===(_AvatarWithImage$para2=_AvatarWithImage$para2.docs)||void 0===_AvatarWithImage$para2?void 0:_AvatarWithImage$para2.source)})}),AvatarWithFallback.parameters=_objectSpread(_objectSpread({},AvatarWithFallback.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AvatarWithFallback$p=AvatarWithFallback.parameters)||void 0===_AvatarWithFallback$p?void 0:_AvatarWithFallback$p.docs),{},{source:_objectSpread({originalSource:'{\n  args: {},\n  render: args => <Avatar>\n            <AvatarImage src="" alt="@shadcn" />\n            <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n}'},null===(_AvatarWithFallback$p2=AvatarWithFallback.parameters)||void 0===_AvatarWithFallback$p2||null===(_AvatarWithFallback$p2=_AvatarWithFallback$p2.docs)||void 0===_AvatarWithFallback$p2?void 0:_AvatarWithFallback$p2.source)})});const __namedExportsOrder=["AvatarWithImage","AvatarWithFallback"]},"./src/components/ui/avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F$:()=>AvatarImage,Q5:()=>AvatarFallback,qE:()=>Avatar});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-avatar/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className"],_excluded2=["className"],_excluded3=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Avatar=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.fC,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",className)},props))}));Avatar.displayName=_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.fC.displayName;var AvatarImage=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref2,_excluded2);return __jsx(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.Ee,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("aspect-square h-full w-full",className)},props))}));AvatarImage.displayName=_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.Ee.displayName;var AvatarFallback=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref3,ref){var className=_ref3.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref3,_excluded3);return __jsx(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.NY,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",className)},props))}));AvatarFallback.displayName=_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.NY.displayName;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/ui/avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}try{AvatarFallback.displayName="AvatarFallback",AvatarFallback.__docgenInfo={description:"",displayName:"AvatarFallback",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/avatar.tsx#AvatarFallback"]={docgenInfo:AvatarFallback.__docgenInfo,name:"AvatarFallback",path:"src/components/ui/avatar.tsx#AvatarFallback"})}catch(__react_docgen_typescript_loader_error){}try{AvatarImage.displayName="AvatarImage",AvatarImage.__docgenInfo={description:"",displayName:"AvatarImage",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/avatar.tsx#AvatarImage"]={docgenInfo:AvatarImage.__docgenInfo,name:"AvatarImage",path:"src/components/ui/avatar.tsx#AvatarImage"})}catch(__react_docgen_typescript_loader_error){}}}]);