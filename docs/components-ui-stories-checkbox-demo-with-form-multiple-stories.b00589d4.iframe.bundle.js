/*! For license information please see components-ui-stories-checkbox-demo-with-form-multiple-stories.b00589d4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_studyaofficial_design_system=self.webpackChunk_studyaofficial_design_system||[]).push([[7117],{"./node_modules/@radix-ui/react-checkbox/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C1:()=>Indicator,bL:()=>Root});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@radix-ui/react-use-previous/dist/index.mjs"),_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@radix-ui/react-use-size/dist/index.mjs"),_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@radix-ui/react-presence/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),[createCheckboxContext,createCheckboxScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)("Checkbox"),[CheckboxProvider,useCheckboxContext]=createCheckboxContext("Checkbox"),Checkbox=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeCheckbox,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,form,...checkboxProps}=props,[button,setButton]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),isFormControl=!button||(form||!!button.closest("form")),[checked=!1,setChecked]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__.i)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange}),initialCheckedStateRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(checked);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const form2=button?.form;if(form2){const reset=()=>setChecked(initialCheckedStateRef.current);return form2.addEventListener("reset",reset),()=>form2.removeEventListener("reset",reset)}}),[button,setChecked]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(CheckboxProvider,{scope:__scopeCheckbox,state:checked,disabled,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.sG.button,{type:"button",role:"checkbox","aria-checked":isIndeterminate(checked)?"mixed":checked,"aria-required":required,"data-state":getState(checked),"data-disabled":disabled?"":void 0,disabled,value,...checkboxProps,ref:composedRefs,onKeyDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.m)(props.onKeyDown,(event=>{"Enter"===event.key&&event.preventDefault()})),onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.m)(props.onClick,(event=>{setChecked((prevChecked=>!!isIndeterminate(prevChecked)||!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))}),isFormControl&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,form,style:{transform:"translateX(-100%)"},defaultChecked:!isIndeterminate(defaultChecked)&&defaultChecked})]})}));Checkbox.displayName="Checkbox";var CheckboxIndicator=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeCheckbox,forceMount,...indicatorProps}=props,context=useCheckboxContext("CheckboxIndicator",__scopeCheckbox);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__.C,{present:forceMount||isIndeterminate(context.state)||!0===context.state,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.sG.span,{"data-state":getState(context.state),"data-disabled":context.disabled?"":void 0,...indicatorProps,ref:forwardedRef,style:{pointerEvents:"none",...props.style}})})}));CheckboxIndicator.displayName="CheckboxIndicator";var BubbleInput=props=>{const{control,checked,bubbles=!0,defaultChecked,...inputProps}=props,ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),prevChecked=(0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_8__.Z)(checked),controlSize=(0,_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_9__.X)(control);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});input.indeterminate=isIndeterminate(checked),setChecked.call(input,!isIndeterminate(checked)&&checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]);const defaultCheckedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!isIndeterminate(checked)&&checked);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:defaultChecked??defaultCheckedRef.current,...inputProps,tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function isIndeterminate(checked){return"indeterminate"===checked}function getState(checked){return isIndeterminate(checked)?"indeterminate":checked?"checked":"unchecked"}var Root=Checkbox,Indicator=CheckboxIndicator},"./node_modules/@radix-ui/react-use-previous/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>usePrevious});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function usePrevious(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef({value,previous:value});return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"./node_modules/@radix-ui/react-use-size/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>useSize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");function useSize(element){const[size,setSize]=react__WEBPACK_IMPORTED_MODULE_0__.useState(void 0);return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.N)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}},"./node_modules/lucide-react/dist/esm/icons/check.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Check});const Check=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},"./src/components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,r:()=>buttonVariants});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className","variant","size","asChild"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,variant=_ref.variant,size=_ref.size,_ref$asChild=_ref.asChild,asChild=void 0!==_ref$asChild&&_ref$asChild,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded),Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:"button";return __jsx(Comp,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(buttonVariants({variant,size,className})),ref},props))}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ui/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Checkbox});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-checkbox/dist/index.mjs"),lucide_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/check.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Checkbox=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.A)(_ref,_excluded);return __jsx(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__.bL,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.A)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",className)},props),__jsx(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__.C1,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex items-center justify-center text-current")},__jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.A,{className:"h-4 w-4"})))}));Checkbox.displayName=_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__.bL.displayName;try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/checkbox.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/ui/checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/form.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C5:()=>FormMessage,MJ:()=>FormControl,Rr:()=>FormDescription,eI:()=>FormItem,lR:()=>FormLabel,lV:()=>Form,zB:()=>FormField});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_hook_form__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/lib/utils.ts"),_label__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/label.tsx"),_excluded=["className"],_excluded2=["className"],_excluded3=["className"],_excluded4=["className","children"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var Form=react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Op,FormFieldContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),FormField=function FormField(_ref){var props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({},((0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_5__.A)(_ref),_ref));return __jsx(FormFieldContext.Provider,{value:{name:props.name}},__jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.xI,props))};FormField.displayName="FormField";var useFormField=function useFormField(){var fieldContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormFieldContext),itemContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormItemContext),_useFormContext=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.xW)(),getFieldState=_useFormContext.getFieldState,formState=_useFormContext.formState,fieldState=getFieldState(fieldContext.name,formState);if(!fieldContext)throw new Error("useFormField should be used within <FormField>");var id=itemContext.id;return function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({id,name:fieldContext.name,formItemId:"".concat(id,"-form-item"),formDescriptionId:"".concat(id,"-form-item-description"),formMessageId:"".concat(id,"-form-item-message")},fieldState)},FormItemContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),FormItem=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.A)(_ref2,_excluded),id=react__WEBPACK_IMPORTED_MODULE_0__.useId();return __jsx(FormItemContext.Provider,{value:{id}},__jsx("div",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)("space-y-2",className)},props)))}));FormItem.displayName="FormItem";var FormLabel=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref3,ref){var className=_ref3.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.A)(_ref3,_excluded2),_useFormField=useFormField(),error=_useFormField.error,formItemId=_useFormField.formItemId;return __jsx(_label__WEBPACK_IMPORTED_MODULE_2__.J,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)(error&&"text-destructive",className),htmlFor:formItemId},props))}));FormLabel.displayName="FormLabel";var FormControl=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref4,ref){var props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({},((0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_5__.A)(_ref4),_ref4)),_useFormField2=useFormField(),error=_useFormField2.error,formItemId=_useFormField2.formItemId,formDescriptionId=_useFormField2.formDescriptionId,formMessageId=_useFormField2.formMessageId;return __jsx(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_8__.DX,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({ref,id:formItemId,"aria-describedby":error?"".concat(formDescriptionId," ").concat(formMessageId):"".concat(formDescriptionId),"aria-invalid":!!error},props))}));FormControl.displayName="FormControl";var FormDescription=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref5,ref){var className=_ref5.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.A)(_ref5,_excluded3),formDescriptionId=useFormField().formDescriptionId;return __jsx("p",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({ref,id:formDescriptionId,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)("text-sm text-muted-foreground",className)},props))}));FormDescription.displayName="FormDescription";var FormMessage=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref6,ref){var className=_ref6.className,children=_ref6.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.A)(_ref6,_excluded4),_useFormField4=useFormField(),error=_useFormField4.error,formMessageId=_useFormField4.formMessageId,body=error?String(null==error?void 0:error.message):children;return body?__jsx("p",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({ref,id:formMessageId,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)("text-sm font-medium text-destructive",className)},props),body):null}));FormMessage.displayName="FormMessage";try{FormItem.displayName="FormItem",FormItem.__docgenInfo={description:"",displayName:"FormItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/form.tsx#FormItem"]={docgenInfo:FormItem.__docgenInfo,name:"FormItem",path:"src/components/ui/form.tsx#FormItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-label/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,labelVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return __jsx(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.b,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(labelVariants(),className)},props))}));Label.displayName=_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.b.displayName;try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/ui/label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/stories/checkbox-demo-with-form-multiple.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckboxDemoReactHookFormMultiple:()=>CheckboxDemoReactHookFormMultiple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>checkbox_demo_with_form_multiple_stories});var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),zod=__webpack_require__("./node_modules/@hookform/resolvers/zod/dist/zod.mjs"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),lib=__webpack_require__("./node_modules/zod/lib/index.mjs"),ui_button=__webpack_require__("./src/components/ui/button.tsx"),ui_checkbox=__webpack_require__("./src/components/ui/checkbox.tsx"),ui_form=__webpack_require__("./src/components/ui/form.tsx"),use_toast=__webpack_require__("./src/components/ui/use-toast.ts"),__jsx=react.createElement,items=[{id:"recents",label:"Recents"},{id:"home",label:"Home"},{id:"applications",label:"Applications"},{id:"desktop",label:"Desktop"},{id:"downloads",label:"Downloads"},{id:"documents",label:"Documents"}],FormSchema=lib.Ik({items:lib.YO(lib.Yj()).refine((function(value){return value.some((function(item){return item}))}),{message:"You have to select at least one item."})});function CheckboxReactHookFormMultiple(){var form=(0,index_esm.mN)({resolver:(0,zod.u)(FormSchema),defaultValues:{items:["recents","home"]}});return __jsx(ui_form.lV,form,__jsx("form",{onSubmit:form.handleSubmit((function onSubmit(data){(0,use_toast.oR)({title:"You submitted the following values:",description:__jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4"},__jsx("code",{className:"text-white"},JSON.stringify(data,null,2)))})})),className:"space-y-8"},__jsx(ui_form.zB,{control:form.control,name:"items",render:function render(){return __jsx(ui_form.eI,null,__jsx("div",{className:"mb-4"},__jsx(ui_form.lR,{className:"text-base"},"Sidebar"),__jsx(ui_form.Rr,null,"Select the items you want to display in the sidebar.")),items.map((function(item){return __jsx(ui_form.zB,{key:item.id,control:form.control,name:"items",render:function render(_ref){var _field$value,field=_ref.field;return __jsx(ui_form.eI,{key:item.id,className:"flex flex-row items-start space-x-3 space-y-0"},__jsx(ui_form.MJ,null,__jsx(ui_checkbox.S,{checked:null===(_field$value=field.value)||void 0===_field$value?void 0:_field$value.includes(item.id),onCheckedChange:function onCheckedChange(checked){var _field$value2;return checked?field.onChange([].concat((0,toConsumableArray.A)(field.value),[item.id])):field.onChange(null===(_field$value2=field.value)||void 0===_field$value2?void 0:_field$value2.filter((function(value){return value!==item.id})))}})),__jsx(ui_form.lR,{className:"font-normal"},item.label))}})})),__jsx(ui_form.C5,null))}}),__jsx(ui_button.$,{type:"submit"},"Submit")))}CheckboxReactHookFormMultiple.displayName="CheckboxReactHookFormMultiple";const checkbox_demo_with_form_multiple_stories={title:"Shadcn/form",component:CheckboxReactHookFormMultiple,parameters:{layout:"centered"}};var CheckboxDemoReactHookFormMultiple={args:{}};CheckboxDemoReactHookFormMultiple.parameters={...CheckboxDemoReactHookFormMultiple.parameters,docs:{...CheckboxDemoReactHookFormMultiple.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...CheckboxDemoReactHookFormMultiple.parameters?.docs?.source}}};const __namedExportsOrder=["CheckboxDemoReactHookFormMultiple"]}}]);