"use strict";(self.webpackChunkstudya_design_system=self.webpackChunkstudya_design_system||[]).push([[8907],{"./node_modules/@radix-ui/react-switch/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bU:()=>$6be4966fd9bbc698$export$6521433ed15a34db,fC:()=>$6be4966fd9bbc698$export$be92b6f5f03c0fe9});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@radix-ui/react-use-previous/dist/index.mjs"),_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@radix-ui/react-use-size/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs");const[$6be4966fd9bbc698$var$createSwitchContext,$6be4966fd9bbc698$export$cf7f5f17f69cbd43]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)("Switch"),[$6be4966fd9bbc698$var$SwitchProvider,$6be4966fd9bbc698$var$useSwitchContext]=$6be4966fd9bbc698$var$createSwitchContext("Switch"),$6be4966fd9bbc698$export$b5d5cf8927ab7262=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,...switchProps}=props,[button,setButton]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.e)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),isFormControl=!button||Boolean(button.closest("form")),[checked=!1,setChecked]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__.T)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange});return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($6be4966fd9bbc698$var$SwitchProvider,{scope:__scopeSwitch,checked,disabled},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.WV.button,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({type:"button",role:"switch","aria-checked":checked,"aria-required":required,"data-state":$6be4966fd9bbc698$var$getState(checked),"data-disabled":disabled?"":void 0,disabled,value},switchProps,{ref:composedRefs,onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(props.onClick,(event=>{setChecked((prevChecked=>!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))})),isFormControl&&(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($6be4966fd9bbc698$var$BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,style:{transform:"translateX(-100%)"}}))})),$6be4966fd9bbc698$export$4d07bf653ea69106=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch,...thumbProps}=props,context=$6be4966fd9bbc698$var$useSwitchContext("SwitchThumb",__scopeSwitch);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.WV.span,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({"data-state":$6be4966fd9bbc698$var$getState(context.checked),"data-disabled":context.disabled?"":void 0},thumbProps,{ref:forwardedRef}))})),$6be4966fd9bbc698$var$BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),prevChecked=(0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__.D)(checked),controlSize=(0,_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__.t)(control);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});setChecked.call(input,checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input",(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:checked},inputProps,{tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $6be4966fd9bbc698$var$getState(checked){return checked?"checked":"unchecked"}const $6be4966fd9bbc698$export$be92b6f5f03c0fe9=$6be4966fd9bbc698$export$b5d5cf8927ab7262,$6be4966fd9bbc698$export$6521433ed15a34db=$6be4966fd9bbc698$export$4d07bf653ea69106},"./node_modules/@radix-ui/react-use-previous/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>$010c2913dbd2fe3d$export$5cae361ad82dce8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value,previous:value});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"./node_modules/@radix-ui/react-use-size/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>$db6c3485150b8e66$export$1ab7ae714698c4b8});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");function $db6c3485150b8e66$export$1ab7ae714698c4b8(element){const[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}},"./src/components/ui/stories/switch-form-demo.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SwitchForm:()=>SwitchForm,__namedExportsOrder:()=>__namedExportsOrder,default:()=>switch_form_demo_stories});var _SwitchForm$parameter,_SwitchForm$parameter2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),zod=__webpack_require__("./node_modules/@hookform/resolvers/zod/dist/zod.mjs"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),lib=__webpack_require__("./node_modules/zod/lib/index.mjs"),ui_button=__webpack_require__("./src/components/ui/button.tsx"),ui_form=__webpack_require__("./src/components/ui/form.tsx"),ui_switch=__webpack_require__("./src/components/ui/switch.tsx"),use_toast=__webpack_require__("./src/components/ui/use-toast.ts"),__jsx=react.createElement,FormSchema=lib.Ry({marketing_emails:lib.O7().default(!1).optional(),security_emails:lib.O7()});function SwitchFormDemo(){var form=(0,index_esm.cI)({resolver:(0,zod.F)(FormSchema),defaultValues:{security_emails:!0}});return __jsx(ui_form.l0,form,__jsx("form",{onSubmit:form.handleSubmit((function onSubmit(data){(0,use_toast.Am)({title:"You submitted the following values:",description:__jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4"},__jsx("code",{className:"text-white"},JSON.stringify(data,null,2)))})})),className:"w-full space-y-6"},__jsx("div",null,__jsx("h3",{className:"mb-4 text-lg font-medium"},"Email Notifications"),__jsx("div",{className:"space-y-4"},__jsx(ui_form.Wi,{control:form.control,name:"marketing_emails",render:function render(_ref){var field=_ref.field;return __jsx(ui_form.xJ,{className:"flex flex-row items-center justify-between rounded-lg border p-4"},__jsx("div",{className:"space-y-0.5"},__jsx(ui_form.lX,{className:"text-base"},"Marketing emails"),__jsx(ui_form.pf,null,"Receive emails about new products, features, and more.")),__jsx(ui_form.NI,null,__jsx(ui_switch.r,{checked:field.value,onCheckedChange:field.onChange})))}}),__jsx(ui_form.Wi,{control:form.control,name:"security_emails",render:function render(_ref2){var field=_ref2.field;return __jsx(ui_form.xJ,{className:"flex flex-row items-center justify-between rounded-lg border p-4"},__jsx("div",{className:"space-y-0.5"},__jsx(ui_form.lX,{className:"text-base"},"Security emails"),__jsx(ui_form.pf,null,"Receive emails about your account security.")),__jsx(ui_form.NI,null,__jsx(ui_switch.r,{checked:field.value,onCheckedChange:field.onChange,disabled:!0,"aria-readonly":!0})))}}))),__jsx(ui_button.z,{type:"submit"},"Submit")))}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}SwitchFormDemo.displayName="SwitchFormDemo";const switch_form_demo_stories={title:"Shadcn/form",component:SwitchFormDemo,parameters:{layout:"centered"}};var SwitchForm={args:{}};SwitchForm.parameters=_objectSpread(_objectSpread({},SwitchForm.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SwitchForm$parameter=SwitchForm.parameters)||void 0===_SwitchForm$parameter?void 0:_SwitchForm$parameter.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_SwitchForm$parameter2=SwitchForm.parameters)||void 0===_SwitchForm$parameter2||null===(_SwitchForm$parameter2=_SwitchForm$parameter2.docs)||void 0===_SwitchForm$parameter2?void 0:_SwitchForm$parameter2.source)})});const __namedExportsOrder=["SwitchForm"]},"./src/components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>buttonVariants,z:()=>Button});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className","variant","size","asChild"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,variant=_ref.variant,size=_ref.size,_ref$asChild=_ref.asChild,asChild=void 0!==_ref$asChild&&_ref$asChild,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded),Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.g7:"button";return __jsx(Comp,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(buttonVariants({variant,size,className})),ref},props))}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"link" | "default" | "outline" | "destructive" | "secondary" | "ghost" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ui/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/form.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NI:()=>FormControl,Wi:()=>FormField,l0:()=>Form,lX:()=>FormLabel,pf:()=>FormDescription,xJ:()=>FormItem,zG:()=>FormMessage});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_hook_form__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/lib/utils.ts"),_label__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/label.tsx"),_excluded=["className"],_excluded2=["className"],_excluded3=["className"],_excluded4=["className","children"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var Form=react_hook_form__WEBPACK_IMPORTED_MODULE_3__.RV,FormFieldContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),FormField=function FormField(_ref){var props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},((0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref),_ref));return __jsx(FormFieldContext.Provider,{value:{name:props.name}},__jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Qr,props))};FormField.displayName="FormField";var useFormField=function useFormField(){var fieldContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormFieldContext),itemContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormItemContext),_useFormContext=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Gc)(),getFieldState=_useFormContext.getFieldState,formState=_useFormContext.formState,fieldState=getFieldState(fieldContext.name,formState);if(!fieldContext)throw new Error("useFormField should be used within <FormField>");var id=itemContext.id;return function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({id,name:fieldContext.name,formItemId:"".concat(id,"-form-item"),formDescriptionId:"".concat(id,"-form-item-description"),formMessageId:"".concat(id,"-form-item-message")},fieldState)},FormItemContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),FormItem=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref2,_excluded),id=react__WEBPACK_IMPORTED_MODULE_0__.useId();return __jsx(FormItemContext.Provider,{value:{id}},__jsx("div",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)("space-y-2",className)},props)))}));FormItem.displayName="FormItem";var FormLabel=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref3,ref){var className=_ref3.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref3,_excluded2),_useFormField=useFormField(),error=_useFormField.error,formItemId=_useFormField.formItemId;return __jsx(_label__WEBPACK_IMPORTED_MODULE_2__._,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)(error&&"text-destructive",className),htmlFor:formItemId},props))}));FormLabel.displayName="FormLabel";var FormControl=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref4,ref){var props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},((0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref4),_ref4)),_useFormField2=useFormField(),error=_useFormField2.error,formItemId=_useFormField2.formItemId,formDescriptionId=_useFormField2.formDescriptionId,formMessageId=_useFormField2.formMessageId;return __jsx(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_8__.g7,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref,id:formItemId,"aria-describedby":error?"".concat(formDescriptionId," ").concat(formMessageId):"".concat(formDescriptionId),"aria-invalid":!!error},props))}));FormControl.displayName="FormControl";var FormDescription=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref5,ref){var className=_ref5.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref5,_excluded3),formDescriptionId=useFormField().formDescriptionId;return __jsx("p",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref,id:formDescriptionId,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)("text-sm text-muted-foreground",className)},props))}));FormDescription.displayName="FormDescription";var FormMessage=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref6,ref){var className=_ref6.className,children=_ref6.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref6,_excluded4),_useFormField4=useFormField(),error=_useFormField4.error,formMessageId=_useFormField4.formMessageId,body=error?String(null==error?void 0:error.message):children;return body?__jsx("p",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref,id:formMessageId,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)("text-sm font-medium text-destructive",className)},props),body):null}));FormMessage.displayName="FormMessage";try{FormItem.displayName="FormItem",FormItem.__docgenInfo={description:"",displayName:"FormItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/form.tsx#FormItem"]={docgenInfo:FormItem.__docgenInfo,name:"FormItem",path:"src/components/ui/form.tsx#FormItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-label/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,labelVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.f,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(labelVariants(),className)},props))}));Label.displayName=_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.f.displayName;try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/ui/label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Switch});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-switch/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Switch=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.fC,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",className)},props,{ref}),__jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.bU,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")}))}));Switch.displayName=_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.fC.displayName;try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/components/ui/switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}}}]);