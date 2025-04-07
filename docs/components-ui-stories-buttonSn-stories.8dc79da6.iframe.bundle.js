"use strict";(self.webpackChunk_studyaofficial_design_system=self.webpackChunk_studyaofficial_design_system||[]).push([[9972],{"./src/components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,r:()=>buttonVariants});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className","variant","size","asChild"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,variant=_ref.variant,size=_ref.size,_ref$asChild=_ref.asChild,asChild=void 0!==_ref$asChild&&_ref$asChild,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded),Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:"button";return __jsx(Comp,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(buttonVariants({variant,size,className})),ref},props))}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ui/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/stories/buttonSn.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Destructive:()=>Destructive,Ghost:()=>Ghost,Link:()=>Link,Outline:()=>Outline,Secondary:()=>Secondary,SizeDefault:()=>SizeDefault,SizeIcon:()=>SizeIcon,SizeLarge:()=>SizeLarge,SizeSmall:()=>SizeSmall,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Shadcn/button",component:__webpack_require__("./src/components/ui/button.tsx").$,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","secondary","destructive","ghost","link","outline"]},size:{control:{type:"select"},options:["default","icon","sm","lg"]}},parameters:{layout:"centered"}};var Default={args:{variant:"default",children:"ButtonShadcn"}},Secondary={args:{variant:"secondary",children:"ButtonShadcn"}},Destructive={args:{variant:"destructive",children:"ButtonShadcn"}},Ghost={args:{variant:"ghost",children:"ButtonShadcn"}},Link={args:{variant:"link",children:"ButtonShadcn"}},Outline={args:{variant:"outline",children:"ButtonShadcn"}},SizeDefault={args:{size:"default",children:"ButtonShadcn"}},SizeIcon={args:{size:"icon",children:"icon"}},SizeLarge={args:{size:"lg",children:"ButtonShadcn"}},SizeSmall={args:{size:"sm",children:"ButtonShadcn"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'default',\n    children: 'ButtonShadcn'\n  }\n}",...Default.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'secondary',\n    children: 'ButtonShadcn'\n  }\n}",...Secondary.parameters?.docs?.source}}},Destructive.parameters={...Destructive.parameters,docs:{...Destructive.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'destructive',\n    children: 'ButtonShadcn'\n  }\n}",...Destructive.parameters?.docs?.source}}},Ghost.parameters={...Ghost.parameters,docs:{...Ghost.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'ghost',\n    children: 'ButtonShadcn'\n  }\n}",...Ghost.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'link',\n    children: 'ButtonShadcn'\n  }\n}",...Link.parameters?.docs?.source}}},Outline.parameters={...Outline.parameters,docs:{...Outline.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'outline',\n    children: 'ButtonShadcn'\n  }\n}",...Outline.parameters?.docs?.source}}},SizeDefault.parameters={...SizeDefault.parameters,docs:{...SizeDefault.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'default',\n    children: 'ButtonShadcn'\n  }\n}",...SizeDefault.parameters?.docs?.source}}},SizeIcon.parameters={...SizeIcon.parameters,docs:{...SizeIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'icon',\n    children: 'icon'\n  }\n}",...SizeIcon.parameters?.docs?.source}}},SizeLarge.parameters={...SizeLarge.parameters,docs:{...SizeLarge.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'lg',\n    children: 'ButtonShadcn'\n  }\n}",...SizeLarge.parameters?.docs?.source}}},SizeSmall.parameters={...SizeSmall.parameters,docs:{...SizeSmall.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'sm',\n    children: 'ButtonShadcn'\n  }\n}",...SizeSmall.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Secondary","Destructive","Ghost","Link","Outline","SizeDefault","SizeIcon","SizeLarge","SizeSmall"]}}]);