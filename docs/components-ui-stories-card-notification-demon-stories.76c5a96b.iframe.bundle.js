/*! For license information please see components-ui-stories-card-notification-demon-stories.76c5a96b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_studyaofficial_design_system=self.webpackChunk_studyaofficial_design_system||[]).push([[1865],{"./node_modules/@radix-ui/react-switch/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bL:()=>Root,zi:()=>Thumb});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@radix-ui/react-use-previous/dist/index.mjs"),_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@radix-ui/react-use-size/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),[createSwitchContext,createSwitchScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)("Switch"),[SwitchProvider,useSwitchContext]=createSwitchContext("Switch"),Switch=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeSwitch,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,form,...switchProps}=props,[button,setButton]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),isFormControl=!button||(form||!!button.closest("form")),[checked=!1,setChecked]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__.i)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(SwitchProvider,{scope:__scopeSwitch,checked,disabled,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.sG.button,{type:"button",role:"switch","aria-checked":checked,"aria-required":required,"data-state":getState(checked),"data-disabled":disabled?"":void 0,disabled,value,...switchProps,ref:composedRefs,onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.m)(props.onClick,(event=>{setChecked((prevChecked=>!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))}),isFormControl&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,form,style:{transform:"translateX(-100%)"}})]})}));Switch.displayName="Switch";var SwitchThumb=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeSwitch,...thumbProps}=props,context=useSwitchContext("SwitchThumb",__scopeSwitch);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.sG.span,{"data-state":getState(context.checked),"data-disabled":context.disabled?"":void 0,...thumbProps,ref:forwardedRef})}));SwitchThumb.displayName="SwitchThumb";var BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),prevChecked=(0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__.Z)(checked),controlSize=(0,_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__.X)(control);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});setChecked.call(input,checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:checked,...inputProps,tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function getState(checked){return checked?"checked":"unchecked"}var Root=Switch,Thumb=SwitchThumb},"./node_modules/@radix-ui/react-use-previous/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>usePrevious});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function usePrevious(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef({value,previous:value});return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"./node_modules/@radix-ui/react-use-size/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>useSize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");function useSize(element){const[size,setSize]=react__WEBPACK_IMPORTED_MODULE_0__.useState(void 0);return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.N)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}},"./node_modules/lucide-react/dist/esm/icons/check.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Check});const Check=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},"./src/components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,r:()=>buttonVariants});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className","variant","size","asChild"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,variant=_ref.variant,size=_ref.size,_ref$asChild=_ref.asChild,asChild=void 0!==_ref$asChild&&_ref$asChild,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded),Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:"button";return __jsx(Comp,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(buttonVariants({variant,size,className})),ref},props))}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ui/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BT:()=>CardDescription,Wu:()=>CardContent,ZB:()=>CardTitle,Zp:()=>Card,aR:()=>CardHeader,wL:()=>CardFooter});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className"],_excluded2=["className"],_excluded3=["className"],_excluded4=["className"],_excluded5=["className"],_excluded6=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Card=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.A)(_ref,_excluded);return __jsx("div",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",className)},props))}));Card.displayName="Card";var CardHeader=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.A)(_ref2,_excluded2);return __jsx("div",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-col space-y-1.5 p-6",className)},props))}));CardHeader.displayName="CardHeader";var CardTitle=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref3,ref){var className=_ref3.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.A)(_ref3,_excluded3);return __jsx("h3",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-2xl font-semibold leading-none tracking-tight",className)},props))}));CardTitle.displayName="CardTitle";var CardDescription=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref4,ref){var className=_ref4.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.A)(_ref4,_excluded4);return __jsx("p",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm text-muted-foreground",className)},props))}));CardDescription.displayName="CardDescription";var CardContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref5,ref){var className=_ref5.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.A)(_ref5,_excluded5);return __jsx("div",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("p-6 pt-0",className)},props))}));CardContent.displayName="CardContent";var CardFooter=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref6,ref){var className=_ref6.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.A)(_ref6,_excluded6);return __jsx("div",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex items-center p-6 pt-0",className)},props))}));CardFooter.displayName="CardFooter";try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/ui/card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/stories/card-notification-demon.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardNotificationDemo:()=>CardNotificationDemo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>card_notification_demon_stories});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const BellRing=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("BellRing",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);var check=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/check.js"),utils=__webpack_require__("./src/lib/utils.ts"),ui_button=__webpack_require__("./src/components/ui/button.tsx"),card=__webpack_require__("./src/components/ui/card.tsx"),ui_switch=__webpack_require__("./src/components/ui/switch.tsx"),_excluded=["className"],__jsx=react.createElement,notifications=[{title:"Your call has been confirmed.",description:"1 hour ago"},{title:"You have a new message!",description:"1 hour ago"},{title:"Your subscription is expiring soon!",description:"2 hours ago"}];function CardDemoNotification(_ref){var className=_ref.className,props=(0,objectWithoutProperties.A)(_ref,_excluded);return __jsx(card.Zp,(0,esm_extends.A)({className:(0,utils.cn)("w-[380px]",className)},props),__jsx(card.aR,null,__jsx(card.ZB,null,"Notifications"),__jsx(card.BT,null,"You have 3 unread messages.")),__jsx(card.Wu,{className:"grid gap-4"},__jsx("div",{className:" flex items-center space-x-4 rounded-md border p-4"},__jsx(BellRing,null),__jsx("div",{className:"flex-1 space-y-1"},__jsx("p",{className:"text-sm font-medium leading-none"},"Push Notifications"),__jsx("p",{className:"text-sm text-muted-foreground"},"Send notifications to device.")),__jsx(ui_switch.d,null)),__jsx("div",null,notifications.map((function(notification,index){return __jsx("div",{key:index,className:"mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"},__jsx("span",{className:"flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"}),__jsx("div",{className:"space-y-1"},__jsx("p",{className:"text-sm font-medium leading-none"},notification.title),__jsx("p",{className:"text-sm text-muted-foreground"},notification.description)))})))),__jsx(card.wL,null,__jsx(ui_button.$,{className:"w-full"},__jsx(check.A,{className:"mr-2 h-4 w-4"})," Mark all as read")))}CardDemoNotification.displayName="CardDemoNotification";try{CardDemoNotification.displayName="CardDemoNotification",CardDemoNotification.__docgenInfo={description:"",displayName:"CardDemoNotification",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/demo/card-notification-demo.tsx#CardDemoNotification"]={docgenInfo:CardDemoNotification.__docgenInfo,name:"CardDemoNotification",path:"src/components/ui/demo/card-notification-demo.tsx#CardDemoNotification"})}catch(__react_docgen_typescript_loader_error){}var CardNotificationDemo={args:{}};const card_notification_demon_stories={title:"Shadcn/Card",component:CardDemoNotification,parameters:{layout:"centered"}};CardNotificationDemo.parameters={...CardNotificationDemo.parameters,docs:{...CardNotificationDemo.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...CardNotificationDemo.parameters?.docs?.source}}};const __namedExportsOrder=["CardNotificationDemo"]},"./src/components/ui/switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>Switch});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-switch/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Switch=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.A)(_ref,_excluded);return __jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.bL,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.A)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",className)},props,{ref}),__jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.zi,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")}))}));Switch.displayName=_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.bL.displayName;try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/components/ui/switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}}}]);