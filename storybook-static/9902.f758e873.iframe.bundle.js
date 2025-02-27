"use strict";(self.webpackChunkstudya_design_system=self.webpackChunkstudya_design_system||[]).push([[9902],{"./node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ee:()=>$d08ef79370b62062$export$a98f0dcb43a68a25,Rk:()=>$d08ef79370b62062$export$371ab307eab489c0,Tr:()=>$d08ef79370b62062$export$d7a01e11500dfb6f,Uv:()=>$d08ef79370b62062$export$602eac185826482c,VY:()=>$d08ef79370b62062$export$7c6e2c02157bb7d2,Z0:()=>$d08ef79370b62062$export$1ff3c3f08ae963c0,ZA:()=>$d08ef79370b62062$export$eb2fcfdbd7ba97d4,__:()=>$d08ef79370b62062$export$b04be29aa201d4f5,ck:()=>$d08ef79370b62062$export$6d08773d2e66f8f2,fC:()=>$d08ef79370b62062$export$be92b6f5f03c0fe9,fF:()=>$d08ef79370b62062$export$2ea8a7a591ac5eac,oC:()=>$d08ef79370b62062$export$16ce288f89fa631c,tu:()=>$d08ef79370b62062$export$6d4de93b380beddf,wU:()=>$d08ef79370b62062$export$c3468e2714d175fa,xz:()=>$d08ef79370b62062$export$41fb9f06171c75f4});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-menu/dist/index.mjs"),_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-id/dist/index.mjs");const[$d08ef79370b62062$var$createDropdownMenuContext,$d08ef79370b62062$export$c0623cd925aeb687]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)("DropdownMenu",[_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Wf]),$d08ef79370b62062$var$useMenuScope=(0,_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Wf)(),[$d08ef79370b62062$var$DropdownMenuProvider,$d08ef79370b62062$var$useDropdownMenuContext]=$d08ef79370b62062$var$createDropdownMenuContext("DropdownMenu"),$d08ef79370b62062$export$e44a253a59704894=props=>{const{__scopeDropdownMenu,children,dir,open:openProp,defaultOpen,onOpenChange,modal=!0}=props,menuScope=$d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu),triggerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[open=!1,setOpen]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__.T)({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange});return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($d08ef79370b62062$var$DropdownMenuProvider,{scope:__scopeDropdownMenu,triggerId:(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__.M)(),triggerRef,contentId:(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__.M)(),open,onOpenChange:setOpen,onOpenToggle:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>setOpen((prevOpen=>!prevOpen))),[setOpen]),modal},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.fC,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},menuScope,{open,onOpenChange:setOpen,dir,modal}),children))},$d08ef79370b62062$export$d2469213b3befba9=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDropdownMenu,disabled=!1,...triggerProps}=props,context=$d08ef79370b62062$var$useDropdownMenuContext("DropdownMenuTrigger",__scopeDropdownMenu),menuScope=$d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.ee,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({asChild:!0},menuScope),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.WV.button,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({type:"button",id:context.triggerId,"aria-haspopup":"menu","aria-expanded":context.open,"aria-controls":context.open?context.contentId:void 0,"data-state":context.open?"open":"closed","data-disabled":disabled?"":void 0,disabled},triggerProps,{ref:(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_7__.F)(forwardedRef,context.triggerRef),onPointerDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(props.onPointerDown,(event=>{disabled||0!==event.button||!1!==event.ctrlKey||(context.onOpenToggle(),context.open||event.preventDefault())})),onKeyDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(props.onKeyDown,(event=>{disabled||(["Enter"," "].includes(event.key)&&context.onOpenToggle(),"ArrowDown"===event.key&&context.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(event.key)&&event.preventDefault())}))})))})),$d08ef79370b62062$export$cd369b4d4d54efc9=props=>{const{__scopeDropdownMenu,...portalProps}=props,menuScope=$d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.h_,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},menuScope,portalProps))},$d08ef79370b62062$export$6e76d93a37c01248=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDropdownMenu,...contentProps}=props,context=$d08ef79370b62062$var$useDropdownMenuContext("DropdownMenuContent",__scopeDropdownMenu),menuScope=$d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu),hasInteractedOutsideRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.VY,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({id:context.contentId,"aria-labelledby":context.triggerId},menuScope,contentProps,{ref:forwardedRef,onCloseAutoFocus:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(props.onCloseAutoFocus,(event=>{var _context$triggerRef$c;hasInteractedOutsideRef.current||null===(_context$triggerRef$c=context.triggerRef.current)||void 0===_context$triggerRef$c||_context$triggerRef$c.focus(),hasInteractedOutsideRef.current=!1,event.preventDefault()})),onInteractOutside:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(props.onInteractOutside,(event=>{const originalEvent=event.detail.originalEvent,ctrlLeftClick=0===originalEvent.button&&!0===originalEvent.ctrlKey,isRightClick=2===originalEvent.button||ctrlLeftClick;context.modal&&!isRightClick||(hasInteractedOutsideRef.current=!0)})),style:{...props.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))})),$d08ef79370b62062$export$246bebaba3a2f70e=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDropdownMenu,...groupProps}=props,menuScope=$d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.ZA,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},menuScope,groupProps,{ref:forwardedRef}))})),$d08ef79370b62062$export$76e48c5b57f24495=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDropdownMenu,...labelProps}=props,menuScope=$d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.__,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},menuScope,labelProps,{ref:forwardedRef}))})),$d08ef79370b62062$export$ed97964d1871885d=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDropdownMenu,...itemProps}=props,menuScope=$d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.ck,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},menuScope,itemProps,{ref:forwardedRef}))})),$d08ef79370b62062$export$53a69729da201fa9=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDropdownMenu,...checkboxItemProps}=props,menuScope=$d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.oC,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},menuScope,checkboxItemProps,{ref:forwardedRef}))})),$d08ef79370b62062$export$3323ad73d55f587e=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDropdownMenu,...radioGroupProps}=props,menuScope=$d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Ee,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},menuScope,radioGroupProps,{ref:forwardedRef}))})),$d08ef79370b62062$export$e4f69b41b1637536=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDropdownMenu,...radioItemProps}=props,menuScope=$d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Rk,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},menuScope,radioItemProps,{ref:forwardedRef}))})),$d08ef79370b62062$export$42355ae145153fb6=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDropdownMenu,...itemIndicatorProps}=props,menuScope=$d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.wU,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},menuScope,itemIndicatorProps,{ref:forwardedRef}))})),$d08ef79370b62062$export$da160178fd3bc7e9=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDropdownMenu,...separatorProps}=props,menuScope=$d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Z0,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},menuScope,separatorProps,{ref:forwardedRef}))})),$d08ef79370b62062$export$21dcb7ec56f874cf=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDropdownMenu,...subTriggerProps}=props,menuScope=$d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.fF,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},menuScope,subTriggerProps,{ref:forwardedRef}))})),$d08ef79370b62062$export$f34ec8bc2482cc5f=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDropdownMenu,...subContentProps}=props,menuScope=$d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.tu,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},menuScope,subContentProps,{ref:forwardedRef,style:{...props.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))})),$d08ef79370b62062$export$be92b6f5f03c0fe9=$d08ef79370b62062$export$e44a253a59704894,$d08ef79370b62062$export$41fb9f06171c75f4=$d08ef79370b62062$export$d2469213b3befba9,$d08ef79370b62062$export$602eac185826482c=$d08ef79370b62062$export$cd369b4d4d54efc9,$d08ef79370b62062$export$7c6e2c02157bb7d2=$d08ef79370b62062$export$6e76d93a37c01248,$d08ef79370b62062$export$eb2fcfdbd7ba97d4=$d08ef79370b62062$export$246bebaba3a2f70e,$d08ef79370b62062$export$b04be29aa201d4f5=$d08ef79370b62062$export$76e48c5b57f24495,$d08ef79370b62062$export$6d08773d2e66f8f2=$d08ef79370b62062$export$ed97964d1871885d,$d08ef79370b62062$export$16ce288f89fa631c=$d08ef79370b62062$export$53a69729da201fa9,$d08ef79370b62062$export$a98f0dcb43a68a25=$d08ef79370b62062$export$3323ad73d55f587e,$d08ef79370b62062$export$371ab307eab489c0=$d08ef79370b62062$export$e4f69b41b1637536,$d08ef79370b62062$export$c3468e2714d175fa=$d08ef79370b62062$export$42355ae145153fb6,$d08ef79370b62062$export$1ff3c3f08ae963c0=$d08ef79370b62062$export$da160178fd3bc7e9,$d08ef79370b62062$export$d7a01e11500dfb6f=props=>{const{__scopeDropdownMenu,children,open:openProp,onOpenChange,defaultOpen}=props,menuScope=$d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu),[open=!1,setOpen]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__.T)({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange});return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Tr,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},menuScope,{open,onOpenChange:setOpen}),children)},$d08ef79370b62062$export$2ea8a7a591ac5eac=$d08ef79370b62062$export$21dcb7ec56f874cf,$d08ef79370b62062$export$6d4de93b380beddf=$d08ef79370b62062$export$f34ec8bc2482cc5f}}]);