"use strict";(self.webpackChunkstudya_design_system=self.webpackChunkstudya_design_system||[]).push([[9847],{"./src/components/examples/form/notifications/stories/notifications-page.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NotificationPage:()=>NotificationPage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>notifications_page_stories});var _NotificationPage$par,_NotificationPage$par2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),separator=__webpack_require__("./src/components/ui/separator.tsx"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),zod=__webpack_require__("./node_modules/@hookform/resolvers/zod/dist/zod.mjs"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),lib=__webpack_require__("./node_modules/zod/lib/index.mjs"),ui_button=__webpack_require__("./src/components/ui/button.tsx"),ui_checkbox=__webpack_require__("./src/components/ui/checkbox.tsx"),ui_form=__webpack_require__("./src/components/ui/form.tsx"),radio_group=__webpack_require__("./src/components/ui/radio-group.tsx"),ui_switch=__webpack_require__("./src/components/ui/switch.tsx"),use_toast=__webpack_require__("./src/components/ui/use-toast.ts"),__jsx=react.createElement,notificationsFormSchema=lib.Ry({type:lib.Km(["all","mentions","none"],{required_error:"You need to select a notification type."}),mobile:lib.O7().default(!1).optional(),communication_emails:lib.O7().default(!1).optional(),social_emails:lib.O7().default(!1).optional(),marketing_emails:lib.O7().default(!1).optional(),security_emails:lib.O7()}),defaultValues={communication_emails:!1,marketing_emails:!1,social_emails:!0,security_emails:!0};function NotificationsForm(){var form=(0,index_esm.cI)({resolver:(0,zod.F)(notificationsFormSchema),defaultValues});return __jsx(ui_form.l0,form,__jsx("form",{onSubmit:form.handleSubmit((function onSubmit(data){(0,use_toast.Am)({title:"You submitted the following values:",description:__jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4"},__jsx("code",{className:"text-white"},JSON.stringify(data,null,2)))})})),className:"space-y-8 max-w-3xl"},__jsx(ui_form.Wi,{control:form.control,name:"type",render:function render(_ref){var field=_ref.field;return __jsx(ui_form.xJ,{className:"space-y-3"},__jsx(ui_form.lX,null,"Notify me about..."),__jsx(ui_form.NI,null,__jsx(radio_group.E,{onValueChange:field.onChange,defaultValue:field.value,className:"flex flex-col space-y-1"},__jsx(ui_form.xJ,{className:"flex items-center space-x-3 space-y-0"},__jsx(ui_form.NI,null,__jsx(radio_group.m,{value:"all"})),__jsx(ui_form.lX,{className:"font-normal"},"All new messages")),__jsx(ui_form.xJ,{className:"flex items-center space-x-3 space-y-0"},__jsx(ui_form.NI,null,__jsx(radio_group.m,{value:"mentions"})),__jsx(ui_form.lX,{className:"font-normal"},"Direct messages and mentions")),__jsx(ui_form.xJ,{className:"flex items-center space-x-3 space-y-0"},__jsx(ui_form.NI,null,__jsx(radio_group.m,{value:"none"})),__jsx(ui_form.lX,{className:"font-normal"},"Nothing")))),__jsx(ui_form.zG,null))}}),__jsx("div",null,__jsx("h3",{className:"mb-4 text-lg font-medium"},"Email Notifications"),__jsx("div",{className:"space-y-4"},__jsx(ui_form.Wi,{control:form.control,name:"communication_emails",render:function render(_ref2){var field=_ref2.field;return __jsx(ui_form.xJ,{className:"flex flex-row items-center justify-between rounded-lg border p-4"},__jsx("div",{className:"space-y-0.5"},__jsx(ui_form.lX,{className:"text-base"},"Communication emails"),__jsx(ui_form.pf,null,"Receive emails about your account activity.")),__jsx(ui_form.NI,null,__jsx(ui_switch.r,{checked:field.value,onCheckedChange:field.onChange})))}}),__jsx(ui_form.Wi,{control:form.control,name:"marketing_emails",render:function render(_ref3){var field=_ref3.field;return __jsx(ui_form.xJ,{className:"flex flex-row items-center justify-between rounded-lg border p-4"},__jsx("div",{className:"space-y-0.5"},__jsx(ui_form.lX,{className:"text-base"},"Marketing emails"),__jsx(ui_form.pf,null,"Receive emails about new products, features, and more.")),__jsx(ui_form.NI,null,__jsx(ui_switch.r,{checked:field.value,onCheckedChange:field.onChange})))}}),__jsx(ui_form.Wi,{control:form.control,name:"social_emails",render:function render(_ref4){var field=_ref4.field;return __jsx(ui_form.xJ,{className:"flex flex-row items-center justify-between rounded-lg border p-4"},__jsx("div",{className:"space-y-0.5"},__jsx(ui_form.lX,{className:"text-base"},"Social emails"),__jsx(ui_form.pf,null,"Receive emails for friend requests, follows, and more.")),__jsx(ui_form.NI,null,__jsx(ui_switch.r,{checked:field.value,onCheckedChange:field.onChange})))}}),__jsx(ui_form.Wi,{control:form.control,name:"security_emails",render:function render(_ref5){var field=_ref5.field;return __jsx(ui_form.xJ,{className:"flex flex-row items-center justify-between rounded-lg border p-4"},__jsx("div",{className:"space-y-0.5"},__jsx(ui_form.lX,{className:"text-base"},"Security emails"),__jsx(ui_form.pf,null,"Receive emails about your account activity and security.")),__jsx(ui_form.NI,null,__jsx(ui_switch.r,{checked:field.value,onCheckedChange:field.onChange,disabled:!0,"aria-readonly":!0})))}}))),__jsx(ui_form.Wi,{control:form.control,name:"mobile",render:function render(_ref6){var field=_ref6.field;return __jsx(ui_form.xJ,{className:"flex flex-row items-start space-x-3 space-y-0"},__jsx(ui_form.NI,null,__jsx(ui_checkbox.X,{checked:field.value,onCheckedChange:field.onChange})),__jsx("div",{className:"space-y-1 leading-none"},__jsx(ui_form.lX,null,"Use different settings for my mobile devices"),__jsx(ui_form.pf,null,"You can manage your mobile notifications in the"," ",__jsx(link_default(),{href:"/examples/forms"},"mobile settings")," ","page.")))}}),__jsx(ui_button.z,{type:"submit"},"Update notifications")))}NotificationsForm.displayName="NotificationsForm";var notifications_page_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var NotificationPage={};const notifications_page_stories={title:"Examples/notification",component:function component(args){return notifications_page_stories_jsx("div",{className:"space-y-6"},notifications_page_stories_jsx("div",null,notifications_page_stories_jsx("h3",{className:"text-lg font-medium"},"Notifications"),notifications_page_stories_jsx("p",{className:"text-sm text-muted-foreground"},"Configure how you receive notifications.")),notifications_page_stories_jsx(separator.Z,null),notifications_page_stories_jsx(NotificationsForm,null))}};NotificationPage.parameters=_objectSpread(_objectSpread({},NotificationPage.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NotificationPage$par=NotificationPage.parameters)||void 0===_NotificationPage$par?void 0:_NotificationPage$par.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_NotificationPage$par2=NotificationPage.parameters)||void 0===_NotificationPage$par2||null===(_NotificationPage$par2=_NotificationPage$par2.docs)||void 0===_NotificationPage$par2?void 0:_NotificationPage$par2.source)})});const __namedExportsOrder=["NotificationPage"]},"./src/components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>buttonVariants,z:()=>Button});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className","variant","size","asChild"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,variant=_ref.variant,size=_ref.size,_ref$asChild=_ref.asChild,asChild=void 0!==_ref$asChild&&_ref$asChild,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded),Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.g7:"button";return __jsx(Comp,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(buttonVariants({variant,size,className})),ref},props))}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"link" | "default" | "outline" | "destructive" | "secondary" | "ghost" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ui/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Checkbox});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-checkbox/dist/index.mjs"),lucide_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/check.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Checkbox=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__.fC,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",className)},props),__jsx(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__.z$,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex items-center justify-center text-current")},__jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Z,{className:"h-4 w-4"})))}));Checkbox.displayName=_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__.fC.displayName;try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/checkbox.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/ui/checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/form.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NI:()=>FormControl,Wi:()=>FormField,l0:()=>Form,lX:()=>FormLabel,pf:()=>FormDescription,xJ:()=>FormItem,zG:()=>FormMessage});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_hook_form__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/lib/utils.ts"),_label__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/label.tsx"),_excluded=["className"],_excluded2=["className"],_excluded3=["className"],_excluded4=["className","children"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var Form=react_hook_form__WEBPACK_IMPORTED_MODULE_3__.RV,FormFieldContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),FormField=function FormField(_ref){var props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},((0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref),_ref));return __jsx(FormFieldContext.Provider,{value:{name:props.name}},__jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Qr,props))};FormField.displayName="FormField";var useFormField=function useFormField(){var fieldContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormFieldContext),itemContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormItemContext),_useFormContext=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Gc)(),getFieldState=_useFormContext.getFieldState,formState=_useFormContext.formState,fieldState=getFieldState(fieldContext.name,formState);if(!fieldContext)throw new Error("useFormField should be used within <FormField>");var id=itemContext.id;return function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({id,name:fieldContext.name,formItemId:"".concat(id,"-form-item"),formDescriptionId:"".concat(id,"-form-item-description"),formMessageId:"".concat(id,"-form-item-message")},fieldState)},FormItemContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),FormItem=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref2,_excluded),id=react__WEBPACK_IMPORTED_MODULE_0__.useId();return __jsx(FormItemContext.Provider,{value:{id}},__jsx("div",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)("space-y-2",className)},props)))}));FormItem.displayName="FormItem";var FormLabel=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref3,ref){var className=_ref3.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref3,_excluded2),_useFormField=useFormField(),error=_useFormField.error,formItemId=_useFormField.formItemId;return __jsx(_label__WEBPACK_IMPORTED_MODULE_2__._,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)(error&&"text-destructive",className),htmlFor:formItemId},props))}));FormLabel.displayName="FormLabel";var FormControl=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref4,ref){var props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},((0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref4),_ref4)),_useFormField2=useFormField(),error=_useFormField2.error,formItemId=_useFormField2.formItemId,formDescriptionId=_useFormField2.formDescriptionId,formMessageId=_useFormField2.formMessageId;return __jsx(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_8__.g7,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref,id:formItemId,"aria-describedby":error?"".concat(formDescriptionId," ").concat(formMessageId):"".concat(formDescriptionId),"aria-invalid":!!error},props))}));FormControl.displayName="FormControl";var FormDescription=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref5,ref){var className=_ref5.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref5,_excluded3),formDescriptionId=useFormField().formDescriptionId;return __jsx("p",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref,id:formDescriptionId,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)("text-sm text-muted-foreground",className)},props))}));FormDescription.displayName="FormDescription";var FormMessage=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref6,ref){var className=_ref6.className,children=_ref6.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref6,_excluded4),_useFormField4=useFormField(),error=_useFormField4.error,formMessageId=_useFormField4.formMessageId,body=error?String(null==error?void 0:error.message):children;return body?__jsx("p",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref,id:formMessageId,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)("text-sm font-medium text-destructive",className)},props),body):null}));FormMessage.displayName="FormMessage";try{FormItem.displayName="FormItem",FormItem.__docgenInfo={description:"",displayName:"FormItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/form.tsx#FormItem"]={docgenInfo:FormItem.__docgenInfo,name:"FormItem",path:"src/components/ui/form.tsx#FormItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-label/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,labelVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.f,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(labelVariants(),className)},props))}));Label.displayName=_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.f.displayName;try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/ui/label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/radio-group.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>RadioGroup,m:()=>RadioGroupItem});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-radio-group/dist/index.mjs"),lucide_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/circle.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className"],_excluded2=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,RadioGroup=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__.fC,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("grid gap-2",className)},props,{ref}))}));RadioGroup.displayName=_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__.fC.displayName;var RadioGroupItem=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref2,_excluded2);return __jsx(_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__.ck,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",className)},props),__jsx(_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__.z$,{className:"flex items-center justify-center"},__jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Z,{className:"h-2.5 w-2.5 fill-current text-current"})))}));RadioGroupItem.displayName=_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__.ck.displayName;try{RadioGroup.displayName="RadioGroup",RadioGroup.__docgenInfo={description:"",displayName:"RadioGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/radio-group.tsx#RadioGroup"]={docgenInfo:RadioGroup.__docgenInfo,name:"RadioGroup",path:"src/components/ui/radio-group.tsx#RadioGroup"})}catch(__react_docgen_typescript_loader_error){}try{RadioGroupItem.displayName="RadioGroupItem",RadioGroupItem.__docgenInfo={description:"",displayName:"RadioGroupItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/radio-group.tsx#RadioGroupItem"]={docgenInfo:RadioGroupItem.__docgenInfo,name:"RadioGroupItem",path:"src/components/ui/radio-group.tsx#RadioGroupItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/separator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Separator});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-separator/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className","orientation","decorative"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Separator=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,_ref$orientation=_ref.orientation,orientation=void 0===_ref$orientation?"horizontal":_ref$orientation,_ref$decorative=_ref.decorative,decorative=void 0===_ref$decorative||_ref$decorative,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__.f,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,decorative,orientation,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("shrink-0 bg-border","horizontal"===orientation?"h-[1px] w-full":"h-full w-[1px]",className)},props))}));Separator.displayName=_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__.f.displayName;try{Separator.displayName="Separator",Separator.__docgenInfo={description:"",displayName:"Separator",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/separator.tsx#Separator"]={docgenInfo:Separator.__docgenInfo,name:"Separator",path:"src/components/ui/separator.tsx#Separator"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Switch});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-switch/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Switch=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.fC,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",className)},props,{ref}),__jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.bU,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")}))}));Switch.displayName=_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.fC.displayName;try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/components/ui/switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}}}]);