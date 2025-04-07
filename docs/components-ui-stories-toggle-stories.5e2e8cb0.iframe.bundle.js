/*! For license information please see components-ui-stories-toggle-stories.5e2e8cb0.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_studyaofficial_design_system=self.webpackChunk_studyaofficial_design_system||[]).push([[4767],{"./node_modules/@radix-ui/react-toggle/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Root,l:()=>Toggle});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Toggle=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{pressed:pressedProp,defaultPressed=!1,onPressedChange,...buttonProps}=props,[pressed=!1,setPressed]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_2__.i)({prop:pressedProp,onChange:onPressedChange,defaultProp:defaultPressed});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.sG.button,{type:"button","aria-pressed":pressed,"data-state":pressed?"on":"off","data-disabled":props.disabled?"":void 0,...buttonProps,ref:forwardedRef,onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_4__.m)(props.onClick,(()=>{props.disabled||setPressed(!pressed)}))})}));Toggle.displayName="Toggle";var Root=Toggle},"./node_modules/lucide-react/dist/esm/icons/bold.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Bold});const Bold=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Bold",[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8",key:"v2sylx"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z",key:"1ef5ya"}]])},"./node_modules/lucide-react/dist/esm/icons/italic.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Italic});const Italic=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]])},"./src/components/ui/stories/toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ToggleDefaultStyle:()=>ToggleDefaultStyle,ToggleDisabled:()=>ToggleDisabled,ToggleOutlineStyle:()=>ToggleOutlineStyle,ToggleSizeDefault:()=>ToggleSizeDefault,ToggleSizeLarge:()=>ToggleSizeLarge,ToggleSizeSmall:()=>ToggleSizeSmall,ToggleWithText:()=>ToggleWithText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),lucide_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/bold.js"),lucide_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/italic.js"),_toggle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/toggle.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,meta={title:"Shadcn/toggle",tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline"]},size:{control:"select",options:["default","sm","lg"]}},parameters:{layout:"centered"},component:function component(args){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_toggle__WEBPACK_IMPORTED_MODULE_1__.l,args,__jsx(lucide_react__WEBPACK_IMPORTED_MODULE_2__.A,{className:"h-4 w-4"})))}},ToggleDefaultStyle={args:{variant:"default"}},ToggleOutlineStyle={args:{variant:"outline"}},ToggleSizeDefault={args:{variant:"default",size:"default"}},ToggleSizeSmall={args:{variant:"default",size:"sm"}},ToggleSizeLarge={args:{variant:"default",size:"lg"}},ToggleDisabled={args:{variant:"default",size:"default",disabled:!0}},ToggleWithText=function ToggleWithText(args){return __jsx(_toggle__WEBPACK_IMPORTED_MODULE_1__.l,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.A)({"aria-label":"Toggle italic"},args),__jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__.A,{className:"mr-2 h-4 w-4"}),"Italic")};ToggleWithText.displayName="ToggleWithText";const __WEBPACK_DEFAULT_EXPORT__=meta;ToggleDefaultStyle.parameters={...ToggleDefaultStyle.parameters,docs:{...ToggleDefaultStyle.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'default'\n  }\n}",...ToggleDefaultStyle.parameters?.docs?.source}}},ToggleOutlineStyle.parameters={...ToggleOutlineStyle.parameters,docs:{...ToggleOutlineStyle.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'outline'\n  }\n}",...ToggleOutlineStyle.parameters?.docs?.source}}},ToggleSizeDefault.parameters={...ToggleSizeDefault.parameters,docs:{...ToggleSizeDefault.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'default',\n    size: 'default'\n  }\n}",...ToggleSizeDefault.parameters?.docs?.source}}},ToggleSizeSmall.parameters={...ToggleSizeSmall.parameters,docs:{...ToggleSizeSmall.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'default',\n    size: 'sm'\n  }\n}",...ToggleSizeSmall.parameters?.docs?.source}}},ToggleSizeLarge.parameters={...ToggleSizeLarge.parameters,docs:{...ToggleSizeLarge.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'default',\n    size: 'lg'\n  }\n}",...ToggleSizeLarge.parameters?.docs?.source}}},ToggleDisabled.parameters={...ToggleDisabled.parameters,docs:{...ToggleDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'default',\n    size: 'default',\n    disabled: true\n  }\n}",...ToggleDisabled.parameters?.docs?.source}}},ToggleWithText.parameters={...ToggleWithText.parameters,docs:{...ToggleWithText.parameters?.docs,source:{originalSource:'(args: Story) => <Toggle aria-label="Toggle italic" {...args}>\n        <Italic className="mr-2 h-4 w-4" />\n        Italic\n    </Toggle>',...ToggleWithText.parameters?.docs?.source}}};const __namedExportsOrder=["ToggleDefaultStyle","ToggleOutlineStyle","ToggleSizeDefault","ToggleSizeSmall","ToggleSizeLarge","ToggleDisabled","ToggleWithText"];try{ToggleWithText.displayName="ToggleWithText",ToggleWithText.__docgenInfo={description:"",displayName:"ToggleWithText",props:{decorators:{defaultValue:null,description:"Wrapper components or Storybook decorators that wrap a story.\n\nDecorators defined in Meta will be applied to every story variation.\n@see [Decorators](https://storybook.js.org/docs/addons/introduction/#1-decorators)",name:"decorators",required:!1,type:{name:"DecoratorFunction<ReactRenderer, { form?: string; slot?: string; style?: CSSProperties | undefined; title?: string | undefined; key?: Key | null | undefined; ... 291 more ...; ref?: LegacyRef<...> | undefined; }> | DecoratorFunction<...>[] | undefined"}},parameters:{defaultValue:null,description:"Custom metadata for a story.\n@see [Parameters](https://storybook.js.org/docs/basics/writing-stories/#parameters)",name:"parameters",required:!1,type:{name:"Parameters"}},args:{defaultValue:null,description:"Dynamic data that are provided (and possibly updated by) Storybook and its addons.\n@see [Arg story inputs](https://storybook.js.org/docs/react/api/csf#args-story-inputs)",name:"args",required:!1,type:{name:"(Partial<{ form?: string; slot?: string; style?: CSSProperties | undefined; title?: string | undefined; key?: Key | null | undefined; value?: string | ... 2 more ... | undefined; ... 290 more ...; ref?: LegacyRef<...> | undefined; }> & { ...; }) | undefined"}},argTypes:{defaultValue:null,description:"ArgTypes encode basic metadata for args, such as `name`, `description`, `defaultValue` for an arg. These get automatically filled in by Storybook Docs.\n@see [Control annotations](https://github.com/storybookjs/storybook/blob/91e9dee33faa8eff0b342a366845de7100415367/addons/controls/README.md#control-annotations)",name:"argTypes",required:!1,type:{name:"Partial<ArgTypes<{ form?: string; slot?: string; style?: CSSProperties | undefined; title?: string | undefined; key?: Key | null | undefined; value?: string | ... 2 more ... | undefined; ... 290 more ...; ref?: LegacyRef<...> | undefined; }>> | undefined"}},loaders:{defaultValue:null,description:"Asynchronous functions which provide data for a story.\n@see [Loaders](https://storybook.js.org/docs/react/writing-stories/loaders)",name:"loaders",required:!1,type:{name:"LoaderFunction<ReactRenderer, { form?: string; slot?: string; style?: CSSProperties | undefined; title?: string | undefined; key?: Key | null | undefined; ... 291 more ...; ref?: LegacyRef<...> | undefined; }> | LoaderFunction<...>[] | undefined"}},render:{defaultValue:null,description:"Define a custom render function for the story(ies). If not passed, a default render function by the renderer will be used.",name:"render",required:!1,type:{name:"ArgsStoryFn<ReactRenderer, { form?: string; slot?: string; style?: CSSProperties | undefined; title?: string | undefined; key?: Key | null | undefined; ... 291 more ...; ref?: LegacyRef<...> | undefined; }> | undefined"}},name:{defaultValue:null,description:"Override the display name in the UI (CSF v3)",name:"name",required:!1,type:{name:"string"}},storyName:{defaultValue:null,description:"Override the display name in the UI (CSF v2)",name:"storyName",required:!1,type:{name:"string"}},play:{defaultValue:null,description:"Function that is executed after the story is rendered.",name:"play",required:!1,type:{name:"PlayFunction<ReactRenderer, { form?: string; slot?: string; style?: CSSProperties | undefined; title?: string | undefined; key?: Key | null | undefined; ... 291 more ...; ref?: LegacyRef<...> | undefined; }> | undefined"}},tags:{defaultValue:null,description:"Named tags for a story, used to filter stories in different contexts.",name:"tags",required:!1,type:{name:"string[]"}},story:{defaultValue:null,description:"@deprecated",name:"story",required:!1,type:{name:'Omit<StoryAnnotations<ReactRenderer, { form?: string; slot?: string; style?: CSSProperties | undefined; title?: string | undefined; key?: Key | null | undefined; ... 291 more ...; ref?: LegacyRef<...> | undefined; }, Partial<...>>, "story"> | undefined'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/stories/toggle.stories.tsx#ToggleWithText"]={docgenInfo:ToggleWithText.__docgenInfo,name:"ToggleWithText",path:"src/components/ui/stories/toggle.stories.tsx#ToggleWithText"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/toggle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Toggle,v:()=>toggleVariants});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_toggle__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-toggle/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className","variant","size"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,toggleVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.F)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}}),Toggle=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,variant=_ref.variant,size=_ref.size,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return __jsx(_radix_ui_react_toggle__WEBPACK_IMPORTED_MODULE_3__.b,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(toggleVariants({variant,size,className}))},props))}));Toggle.displayName=_radix_ui_react_toggle__WEBPACK_IMPORTED_MODULE_3__.b.displayName;try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | null'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "outline" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/toggle.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"src/components/ui/toggle.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}}}]);