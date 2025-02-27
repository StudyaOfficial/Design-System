/*! For license information please see 7694.39f832ac.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstudya_design_system=self.webpackChunkstudya_design_system||[]).push([[7694],{"./node_modules/@radix-ui/react-direction/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gm:()=>$f631663db3294ace$export$b39126d51d94e6f3});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const $f631663db3294ace$var$DirectionContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);function $f631663db3294ace$export$b39126d51d94e6f3(localDir){const globalDir=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f631663db3294ace$var$DirectionContext);return localDir||globalDir||"ltr"}},"./node_modules/@radix-ui/react-id/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{M:()=>$1746a345f3d73bb7$export$f680877a34711e37});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const $1746a345f3d73bb7$var$useReactId=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)))["useId".toString()]||(()=>{});let $1746a345f3d73bb7$var$count=0;function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId){const[id,setId]=react__WEBPACK_IMPORTED_MODULE_0__.useState($1746a345f3d73bb7$var$useReactId());return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)((()=>{deterministicId||setId((reactId=>null!=reactId?reactId:String($1746a345f3d73bb7$var$count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}},"./node_modules/@radix-ui/react-navigation-menu/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{VY:()=>$322c88a641701f3b$export$7c6e2c02157bb7d2,aV:()=>$322c88a641701f3b$export$54c2e3dc7acea9f5,ck:()=>$322c88a641701f3b$export$6d08773d2e66f8f2,fC:()=>$322c88a641701f3b$export$be92b6f5f03c0fe9,l_:()=>$322c88a641701f3b$export$d5c6c08dc2d3ca7,rU:()=>$322c88a641701f3b$export$a6c7ac8248d6e38a,xz:()=>$322c88a641701f3b$export$41fb9f06171c75f4,z$:()=>$322c88a641701f3b$export$adb584737d712b70});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@radix-ui/react-direction/dist/index.mjs"),_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@radix-ui/react-presence/dist/index.mjs"),_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@radix-ui/react-id/dist/index.mjs"),_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-collection/dist/index.mjs"),_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs"),_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@radix-ui/react-use-previous/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),_radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@radix-ui/react-visually-hidden/dist/index.mjs");const[$322c88a641701f3b$var$Collection,$322c88a641701f3b$var$useCollection,$322c88a641701f3b$var$createCollectionScope]=(0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__.B)("NavigationMenu"),[$322c88a641701f3b$var$FocusGroupCollection,$322c88a641701f3b$var$useFocusGroupCollection,$322c88a641701f3b$var$createFocusGroupCollectionScope]=(0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__.B)("NavigationMenu"),[$322c88a641701f3b$var$createNavigationMenuContext,$322c88a641701f3b$export$fb8ea5af8c9fcdf0]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__.b)("NavigationMenu",[$322c88a641701f3b$var$createCollectionScope,$322c88a641701f3b$var$createFocusGroupCollectionScope]),[$322c88a641701f3b$var$NavigationMenuProviderImpl,$322c88a641701f3b$var$useNavigationMenuContext]=$322c88a641701f3b$var$createNavigationMenuContext("NavigationMenu"),[$322c88a641701f3b$var$ViewportContentProvider,$322c88a641701f3b$var$useViewportContentContext]=$322c88a641701f3b$var$createNavigationMenuContext("NavigationMenu"),$322c88a641701f3b$export$5b2278cf1e8bcae2=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeNavigationMenu,value:valueProp,onValueChange,defaultValue,delayDuration=200,skipDelayDuration=300,orientation="horizontal",dir,...NavigationMenuProps}=props,[navigationMenu,setNavigationMenu]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),composedRef=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.e)(forwardedRef,(node=>setNavigationMenu(node))),direction=(0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__.gm)(dir),openTimerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),closeTimerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),skipDelayTimerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),[isOpenDelayed,setIsOpenDelayed]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),[value1="",setValue]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__.T)({prop:valueProp,onChange:value=>{const hasSkipDelayDuration=skipDelayDuration>0;""!==value?(window.clearTimeout(skipDelayTimerRef.current),hasSkipDelayDuration&&setIsOpenDelayed(!1)):(window.clearTimeout(skipDelayTimerRef.current),skipDelayTimerRef.current=window.setTimeout((()=>setIsOpenDelayed(!0)),skipDelayDuration)),null==onValueChange||onValueChange(value)},defaultProp:defaultValue}),startCloseTimer=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{window.clearTimeout(closeTimerRef.current),closeTimerRef.current=window.setTimeout((()=>setValue("")),150)}),[setValue]),handleOpen=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((itemValue=>{window.clearTimeout(closeTimerRef.current),setValue(itemValue)}),[setValue]),handleDelayedOpen=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((itemValue=>{value1===itemValue?window.clearTimeout(closeTimerRef.current):openTimerRef.current=window.setTimeout((()=>{window.clearTimeout(closeTimerRef.current),setValue(itemValue)}),delayDuration)}),[value1,setValue,delayDuration]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>{window.clearTimeout(openTimerRef.current),window.clearTimeout(closeTimerRef.current),window.clearTimeout(skipDelayTimerRef.current)}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuProvider,{scope:__scopeNavigationMenu,isRootMenu:!0,value:value1,dir:direction,orientation,rootNavigationMenu:navigationMenu,onTriggerEnter:itemValue=>{window.clearTimeout(openTimerRef.current),isOpenDelayed?handleDelayedOpen(itemValue):handleOpen(itemValue)},onTriggerLeave:()=>{window.clearTimeout(openTimerRef.current),startCloseTimer()},onContentEnter:()=>window.clearTimeout(closeTimerRef.current),onContentLeave:startCloseTimer,onItemSelect:itemValue=>{setValue((prevValue=>prevValue===itemValue?"":itemValue))},onItemDismiss:()=>setValue("")},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.WV.nav,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({"aria-label":"Main","data-orientation":orientation,dir:direction},NavigationMenuProps,{ref:composedRef})))})),$322c88a641701f3b$var$NavigationMenuProvider=props=>{const{scope,isRootMenu,rootNavigationMenu,dir,orientation,children,value,onItemSelect,onItemDismiss,onTriggerEnter,onTriggerLeave,onContentEnter,onContentLeave}=props,[viewport,setViewport]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[viewportContent,setViewportContent]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Map),[indicatorTrack,setIndicatorTrack]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuProviderImpl,{scope,isRootMenu,rootNavigationMenu,value,previousValue:(0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_9__.D)(value),baseId:(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__.M)(),dir,orientation,viewport,onViewportChange:setViewport,indicatorTrack,onIndicatorTrackChange:setIndicatorTrack,onTriggerEnter:(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.W)(onTriggerEnter),onTriggerLeave:(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.W)(onTriggerLeave),onContentEnter:(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.W)(onContentEnter),onContentLeave:(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.W)(onContentLeave),onItemSelect:(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.W)(onItemSelect),onItemDismiss:(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.W)(onItemDismiss),onViewportContentChange:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((contentValue,contentData)=>{setViewportContent((prevContent=>(prevContent.set(contentValue,contentData),new Map(prevContent))))}),[]),onViewportContentRemove:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((contentValue=>{setViewportContent((prevContent=>prevContent.has(contentValue)?(prevContent.delete(contentValue),new Map(prevContent)):prevContent))}),[])},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$Collection.Provider,{scope},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$ViewportContentProvider,{scope,items:viewportContent},children)))},$322c88a641701f3b$export$c361068a95fd2286=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeNavigationMenu,...listProps}=props,context=$322c88a641701f3b$var$useNavigationMenuContext("NavigationMenuList",__scopeNavigationMenu),list=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.WV.ul,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({"data-orientation":context.orientation},listProps,{ref:forwardedRef}));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.WV.div,{style:{position:"relative"},ref:context.onIndicatorTrackChange},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$Collection.Slot,{scope:__scopeNavigationMenu},context.isRootMenu?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$FocusGroup,{asChild:!0},list):list))})),[$322c88a641701f3b$var$NavigationMenuItemContextProvider,$322c88a641701f3b$var$useNavigationMenuItemContext]=$322c88a641701f3b$var$createNavigationMenuContext("NavigationMenuItem"),$322c88a641701f3b$export$ffdbb83a2de845c2=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeNavigationMenu,value:valueProp,...itemProps}=props,autoValue=(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__.M)(),value=valueProp||autoValue||"LEGACY_REACT_AUTO_VALUE",contentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),triggerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),focusProxyRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),restoreContentTabOrderRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((()=>{})),wasEscapeCloseRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),handleContentEntry=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((side="start")=>{if(contentRef.current){restoreContentTabOrderRef.current();const candidates=$322c88a641701f3b$var$getTabbableCandidates(contentRef.current);candidates.length&&$322c88a641701f3b$var$focusFirst("start"===side?candidates:candidates.reverse())}}),[]),handleContentExit=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{if(contentRef.current){const candidates=$322c88a641701f3b$var$getTabbableCandidates(contentRef.current);candidates.length&&(restoreContentTabOrderRef.current=function $322c88a641701f3b$var$removeFromTabOrder(candidates){return candidates.forEach((candidate=>{candidate.dataset.tabindex=candidate.getAttribute("tabindex")||"",candidate.setAttribute("tabindex","-1")})),()=>{candidates.forEach((candidate=>{const prevTabIndex=candidate.dataset.tabindex;candidate.setAttribute("tabindex",prevTabIndex)}))}}(candidates))}}),[]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuItemContextProvider,{scope:__scopeNavigationMenu,value,triggerRef,contentRef,focusProxyRef,wasEscapeCloseRef,onEntryKeyDown:handleContentEntry,onFocusProxyEnter:handleContentEntry,onRootContentClose:handleContentExit,onContentFocusOutside:handleContentExit},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.WV.li,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({},itemProps,{ref:forwardedRef})))})),$322c88a641701f3b$export$37fe8002734d8f2=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeNavigationMenu,disabled,...triggerProps}=props,context=$322c88a641701f3b$var$useNavigationMenuContext("NavigationMenuTrigger",props.__scopeNavigationMenu),itemContext=$322c88a641701f3b$var$useNavigationMenuItemContext("NavigationMenuTrigger",props.__scopeNavigationMenu),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.e)(ref,itemContext.triggerRef,forwardedRef),triggerId=$322c88a641701f3b$var$makeTriggerId(context.baseId,itemContext.value),contentId=$322c88a641701f3b$var$makeContentId(context.baseId,itemContext.value),hasPointerMoveOpenedRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),wasClickCloseRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),open=itemContext.value===context.value;return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$Collection.ItemSlot,{scope:__scopeNavigationMenu,value:itemContext.value},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$FocusGroupItem,{asChild:!0},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.WV.button,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({id:triggerId,disabled,"data-disabled":disabled?"":void 0,"data-state":$322c88a641701f3b$var$getOpenState(open),"aria-expanded":open,"aria-controls":contentId},triggerProps,{ref:composedRefs,onPointerEnter:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.M)(props.onPointerEnter,(()=>{wasClickCloseRef.current=!1,itemContext.wasEscapeCloseRef.current=!1})),onPointerMove:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.M)(props.onPointerMove,$322c88a641701f3b$var$whenMouse((()=>{disabled||wasClickCloseRef.current||itemContext.wasEscapeCloseRef.current||hasPointerMoveOpenedRef.current||(context.onTriggerEnter(itemContext.value),hasPointerMoveOpenedRef.current=!0)}))),onPointerLeave:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.M)(props.onPointerLeave,$322c88a641701f3b$var$whenMouse((()=>{disabled||(context.onTriggerLeave(),hasPointerMoveOpenedRef.current=!1)}))),onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.M)(props.onClick,(()=>{context.onItemSelect(itemContext.value),wasClickCloseRef.current=open})),onKeyDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.M)(props.onKeyDown,(event=>{const entryKey={horizontal:"ArrowDown",vertical:"rtl"===context.dir?"ArrowLeft":"ArrowRight"}[context.orientation];open&&event.key===entryKey&&(itemContext.onEntryKeyDown(),event.preventDefault())}))})))),open&&(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_13__.f,{"aria-hidden":!0,tabIndex:0,ref:itemContext.focusProxyRef,onFocus:event=>{const content=itemContext.contentRef.current,prevFocusedElement=event.relatedTarget,wasTriggerFocused=prevFocusedElement===ref.current,wasFocusFromContent=null==content?void 0:content.contains(prevFocusedElement);!wasTriggerFocused&&wasFocusFromContent||itemContext.onFocusProxyEnter(wasTriggerFocused?"start":"end")}}),context.viewport&&(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span",{"aria-owns":contentId})))})),$322c88a641701f3b$export$6893bf21536567da=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeNavigationMenu,active,onSelect,...linkProps}=props;return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$FocusGroupItem,{asChild:!0},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.WV.a,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({"data-active":active?"":void 0,"aria-current":active?"page":void 0},linkProps,{ref:forwardedRef,onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.M)(props.onClick,(event1=>{const target=event1.target,linkSelectEvent=new CustomEvent("navigationMenu.linkSelect",{bubbles:!0,cancelable:!0});if(target.addEventListener("navigationMenu.linkSelect",(event=>null==onSelect?void 0:onSelect(event)),{once:!0}),(0,_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.jH)(target,linkSelectEvent),!linkSelectEvent.defaultPrevented&&!event1.metaKey){const rootContentDismissEvent=new CustomEvent($322c88a641701f3b$var$ROOT_CONTENT_DISMISS,{bubbles:!0,cancelable:!0});(0,_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.jH)(target,rootContentDismissEvent)}}),{checkForDefaultPrevented:!1})})))})),$322c88a641701f3b$export$8ddb526647c0d8fb=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{forceMount,...indicatorProps}=props,context=$322c88a641701f3b$var$useNavigationMenuContext("NavigationMenuIndicator",props.__scopeNavigationMenu),isVisible=Boolean(context.value);return context.indicatorTrack?react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__.z,{present:forceMount||isVisible},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuIndicatorImpl,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({},indicatorProps,{ref:forwardedRef}))),context.indicatorTrack):null})),$322c88a641701f3b$var$NavigationMenuIndicatorImpl=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeNavigationMenu,...indicatorProps}=props,context=$322c88a641701f3b$var$useNavigationMenuContext("NavigationMenuIndicator",__scopeNavigationMenu),getItems=$322c88a641701f3b$var$useCollection(__scopeNavigationMenu),[activeTrigger,setActiveTrigger]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[position,setPosition]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),isHorizontal="horizontal"===context.orientation,isVisible=Boolean(context.value);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{var _items$find;const triggerNode=null===(_items$find=getItems().find((item=>item.value===context.value)))||void 0===_items$find?void 0:_items$find.ref.current;triggerNode&&setActiveTrigger(triggerNode)}),[getItems,context.value]);const handlePositionChange=()=>{activeTrigger&&setPosition({size:isHorizontal?activeTrigger.offsetWidth:activeTrigger.offsetHeight,offset:isHorizontal?activeTrigger.offsetLeft:activeTrigger.offsetTop})};return $322c88a641701f3b$var$useResizeObserver(activeTrigger,handlePositionChange),$322c88a641701f3b$var$useResizeObserver(context.indicatorTrack,handlePositionChange),position?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.WV.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({"aria-hidden":!0,"data-state":isVisible?"visible":"hidden","data-orientation":context.orientation},indicatorProps,{ref:forwardedRef,style:{position:"absolute",...isHorizontal?{left:0,width:position.size+"px",transform:`translateX(${position.offset}px)`}:{top:0,height:position.size+"px",transform:`translateY(${position.offset}px)`},...indicatorProps.style}})):null})),$322c88a641701f3b$export$38e00e996c2f93f7=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{forceMount,...contentProps}=props,context=$322c88a641701f3b$var$useNavigationMenuContext("NavigationMenuContent",props.__scopeNavigationMenu),itemContext=$322c88a641701f3b$var$useNavigationMenuItemContext("NavigationMenuContent",props.__scopeNavigationMenu),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.e)(itemContext.contentRef,forwardedRef),open=itemContext.value===context.value,commonProps={value:itemContext.value,triggerRef:itemContext.triggerRef,focusProxyRef:itemContext.focusProxyRef,wasEscapeCloseRef:itemContext.wasEscapeCloseRef,onContentFocusOutside:itemContext.onContentFocusOutside,onRootContentClose:itemContext.onRootContentClose,...contentProps};return context.viewport?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$ViewportContentMounter,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({forceMount},commonProps,{ref:composedRefs})):(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__.z,{present:forceMount||open},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({"data-state":$322c88a641701f3b$var$getOpenState(open)},commonProps,{ref:composedRefs,onPointerEnter:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.M)(props.onPointerEnter,context.onContentEnter),onPointerLeave:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.M)(props.onPointerLeave,$322c88a641701f3b$var$whenMouse(context.onContentLeave)),style:{pointerEvents:!open&&context.isRootMenu?"none":void 0,...commonProps.style}})))})),$322c88a641701f3b$var$ViewportContentMounter=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const context=$322c88a641701f3b$var$useNavigationMenuContext("NavigationMenuContent",props.__scopeNavigationMenu),{onViewportContentChange,onViewportContentRemove}=context;return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_15__.b)((()=>{onViewportContentChange(props.value,{ref:forwardedRef,...props})}),[props,forwardedRef,onViewportContentChange]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_15__.b)((()=>()=>onViewportContentRemove(props.value)),[props.value,onViewportContentRemove]),null})),$322c88a641701f3b$var$ROOT_CONTENT_DISMISS="navigationMenu.rootContentDismiss",$322c88a641701f3b$var$NavigationMenuContentImpl=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeNavigationMenu,value,triggerRef,focusProxyRef,wasEscapeCloseRef,onRootContentClose,onContentFocusOutside,...contentProps}=props,context=$322c88a641701f3b$var$useNavigationMenuContext("NavigationMenuContent",__scopeNavigationMenu),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.e)(ref,forwardedRef),triggerId=$322c88a641701f3b$var$makeTriggerId(context.baseId,value),contentId=$322c88a641701f3b$var$makeContentId(context.baseId,value),getItems=$322c88a641701f3b$var$useCollection(__scopeNavigationMenu),prevMotionAttributeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),{onItemDismiss}=context;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const content=ref.current;if(context.isRootMenu&&content){const handleClose=()=>{var _triggerRef$current;onItemDismiss(),onRootContentClose(),content.contains(document.activeElement)&&(null===(_triggerRef$current=triggerRef.current)||void 0===_triggerRef$current||_triggerRef$current.focus())};return content.addEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS,handleClose),()=>content.removeEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS,handleClose)}}),[context.isRootMenu,props.value,triggerRef,onItemDismiss,onRootContentClose]);const motionAttribute=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const values=getItems().map((item=>item.value));"rtl"===context.dir&&values.reverse();const index=values.indexOf(context.value),prevIndex=values.indexOf(context.previousValue),isSelected=value===context.value,wasSelected=prevIndex===values.indexOf(value);if(!isSelected&&!wasSelected)return prevMotionAttributeRef.current;const attribute=(()=>{if(index!==prevIndex){if(isSelected&&-1!==prevIndex)return index>prevIndex?"from-end":"from-start";if(wasSelected&&-1!==index)return index>prevIndex?"to-start":"to-end"}return null})();return prevMotionAttributeRef.current=attribute,attribute}),[context.previousValue,context.value,context.dir,getItems,value]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$FocusGroup,{asChild:!0},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_16__.XB,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({id:contentId,"aria-labelledby":triggerId,"data-motion":motionAttribute,"data-orientation":context.orientation},contentProps,{ref:composedRefs,onDismiss:()=>{var _ref$current;const rootContentDismissEvent=new Event($322c88a641701f3b$var$ROOT_CONTENT_DISMISS,{bubbles:!0,cancelable:!0});null===(_ref$current=ref.current)||void 0===_ref$current||_ref$current.dispatchEvent(rootContentDismissEvent)},onFocusOutside:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.M)(props.onFocusOutside,(event=>{var _context$rootNavigati;onContentFocusOutside();const target=event.target;null!==(_context$rootNavigati=context.rootNavigationMenu)&&void 0!==_context$rootNavigati&&_context$rootNavigati.contains(target)&&event.preventDefault()})),onPointerDownOutside:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.M)(props.onPointerDownOutside,(event=>{var _context$viewport;const target=event.target,isTrigger=getItems().some((item=>{var _item$ref$current;return null===(_item$ref$current=item.ref.current)||void 0===_item$ref$current?void 0:_item$ref$current.contains(target)})),isRootViewport=context.isRootMenu&&(null===(_context$viewport=context.viewport)||void 0===_context$viewport?void 0:_context$viewport.contains(target));(isTrigger||isRootViewport||!context.isRootMenu)&&event.preventDefault()})),onKeyDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.M)(props.onKeyDown,(event=>{const isMetaKey=event.altKey||event.ctrlKey||event.metaKey;if("Tab"===event.key&&!isMetaKey){const candidates=$322c88a641701f3b$var$getTabbableCandidates(event.currentTarget),focusedElement=document.activeElement,index=candidates.findIndex((candidate=>candidate===focusedElement));var _focusProxyRef$curren;if($322c88a641701f3b$var$focusFirst(event.shiftKey?candidates.slice(0,index).reverse():candidates.slice(index+1,candidates.length)))event.preventDefault();else null===(_focusProxyRef$curren=focusProxyRef.current)||void 0===_focusProxyRef$curren||_focusProxyRef$curren.focus()}})),onEscapeKeyDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.M)(props.onEscapeKeyDown,(event=>{wasEscapeCloseRef.current=!0}))})))})),$322c88a641701f3b$export$ee880b97cc6d44a5=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{forceMount,...viewportProps}=props,context=$322c88a641701f3b$var$useNavigationMenuContext("NavigationMenuViewport",props.__scopeNavigationMenu),open=Boolean(context.value);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__.z,{present:forceMount||open},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuViewportImpl,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({},viewportProps,{ref:forwardedRef})))})),$322c88a641701f3b$var$NavigationMenuViewportImpl=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props1,forwardedRef)=>{const{__scopeNavigationMenu,children,...viewportImplProps}=props1,context=$322c88a641701f3b$var$useNavigationMenuContext("NavigationMenuViewport",__scopeNavigationMenu),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.e)(forwardedRef,context.onViewportChange),viewportContentContext=$322c88a641701f3b$var$useViewportContentContext("NavigationMenuContent",props1.__scopeNavigationMenu),[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[content,setContent]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),viewportWidth=size?(null==size?void 0:size.width)+"px":void 0,viewportHeight=size?(null==size?void 0:size.height)+"px":void 0,open=Boolean(context.value),activeContentValue=open?context.value:context.previousValue;return $322c88a641701f3b$var$useResizeObserver(content,(()=>{content&&setSize({width:content.offsetWidth,height:content.offsetHeight})})),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.WV.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({"data-state":$322c88a641701f3b$var$getOpenState(open),"data-orientation":context.orientation},viewportImplProps,{ref:composedRefs,style:{pointerEvents:!open&&context.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":viewportWidth,"--radix-navigation-menu-viewport-height":viewportHeight,...viewportImplProps.style},onPointerEnter:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.M)(props1.onPointerEnter,context.onContentEnter),onPointerLeave:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.M)(props1.onPointerLeave,$322c88a641701f3b$var$whenMouse(context.onContentLeave))}),Array.from(viewportContentContext.items).map((([value,{ref,forceMount,...props}])=>{const isActive=activeContentValue===value;return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__.z,{key:value,present:forceMount||isActive},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({},props,{ref:(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.F)(ref,(node=>{isActive&&node&&setContent(node)}))})))})))})),$322c88a641701f3b$var$FocusGroup=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeNavigationMenu,...groupProps}=props,context=$322c88a641701f3b$var$useNavigationMenuContext("FocusGroup",__scopeNavigationMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$FocusGroupCollection.Provider,{scope:__scopeNavigationMenu},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$FocusGroupCollection.Slot,{scope:__scopeNavigationMenu},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.WV.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({dir:context.dir},groupProps,{ref:forwardedRef}))))})),$322c88a641701f3b$var$ARROW_KEYS=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],$322c88a641701f3b$var$FocusGroupItem=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeNavigationMenu,...groupProps}=props,getItems=$322c88a641701f3b$var$useFocusGroupCollection(__scopeNavigationMenu),context=$322c88a641701f3b$var$useNavigationMenuContext("FocusGroupItem",__scopeNavigationMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$FocusGroupCollection.ItemSlot,{scope:__scopeNavigationMenu},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.WV.button,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({},groupProps,{ref:forwardedRef,onKeyDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.M)(props.onKeyDown,(event=>{if(["Home","End",...$322c88a641701f3b$var$ARROW_KEYS].includes(event.key)){let candidateNodes=getItems().map((item=>item.ref.current));if(["rtl"===context.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(event.key)&&candidateNodes.reverse(),$322c88a641701f3b$var$ARROW_KEYS.includes(event.key)){const currentIndex=candidateNodes.indexOf(event.currentTarget);candidateNodes=candidateNodes.slice(currentIndex+1)}setTimeout((()=>$322c88a641701f3b$var$focusFirst(candidateNodes))),event.preventDefault()}}))})))}));function $322c88a641701f3b$var$getTabbableCandidates(container){const nodes=[],walker=document.createTreeWalker(container,NodeFilter.SHOW_ELEMENT,{acceptNode:node=>{const isHiddenInput="INPUT"===node.tagName&&"hidden"===node.type;return node.disabled||node.hidden||isHiddenInput?NodeFilter.FILTER_SKIP:node.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;walker.nextNode();)nodes.push(walker.currentNode);return nodes}function $322c88a641701f3b$var$focusFirst(candidates){const previouslyFocusedElement=document.activeElement;return candidates.some((candidate=>candidate===previouslyFocusedElement||(candidate.focus(),document.activeElement!==previouslyFocusedElement)))}function $322c88a641701f3b$var$useResizeObserver(element,onResize){const handleResize=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.W)(onResize);(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_15__.b)((()=>{let rAF=0;if(element){const resizeObserver=new ResizeObserver((()=>{cancelAnimationFrame(rAF),rAF=window.requestAnimationFrame(handleResize)}));return resizeObserver.observe(element),()=>{window.cancelAnimationFrame(rAF),resizeObserver.unobserve(element)}}}),[element,handleResize])}function $322c88a641701f3b$var$getOpenState(open){return open?"open":"closed"}function $322c88a641701f3b$var$makeTriggerId(baseId,value){return`${baseId}-trigger-${value}`}function $322c88a641701f3b$var$makeContentId(baseId,value){return`${baseId}-content-${value}`}function $322c88a641701f3b$var$whenMouse(handler){return event=>"mouse"===event.pointerType?handler(event):void 0}const $322c88a641701f3b$export$be92b6f5f03c0fe9=$322c88a641701f3b$export$5b2278cf1e8bcae2,$322c88a641701f3b$export$54c2e3dc7acea9f5=$322c88a641701f3b$export$c361068a95fd2286,$322c88a641701f3b$export$6d08773d2e66f8f2=$322c88a641701f3b$export$ffdbb83a2de845c2,$322c88a641701f3b$export$41fb9f06171c75f4=$322c88a641701f3b$export$37fe8002734d8f2,$322c88a641701f3b$export$a6c7ac8248d6e38a=$322c88a641701f3b$export$6893bf21536567da,$322c88a641701f3b$export$adb584737d712b70=$322c88a641701f3b$export$8ddb526647c0d8fb,$322c88a641701f3b$export$7c6e2c02157bb7d2=$322c88a641701f3b$export$38e00e996c2f93f7,$322c88a641701f3b$export$d5c6c08dc2d3ca7=$322c88a641701f3b$export$ee880b97cc6d44a5},"./node_modules/@radix-ui/react-use-previous/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>$010c2913dbd2fe3d$export$5cae361ad82dce8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value,previous:value});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"./node_modules/lucide-react/dist/esm/icons/chevron-down.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ChevronDown});const ChevronDown=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])}}]);