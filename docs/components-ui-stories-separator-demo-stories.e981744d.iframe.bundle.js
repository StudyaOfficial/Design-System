"use strict";(self.webpackChunk_studyaofficial_design_system=self.webpackChunk_studyaofficial_design_system||[]).push([[420],{"./node_modules/@radix-ui/react-separator/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Root});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),DEFAULT_ORIENTATION="horizontal",ORIENTATIONS=["horizontal","vertical"],Separator=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{decorative,orientation:orientationProp=DEFAULT_ORIENTATION,...domProps}=props,orientation=function isValidOrientation(orientation){return ORIENTATIONS.includes(orientation)}(orientationProp)?orientationProp:DEFAULT_ORIENTATION,semanticProps=decorative?{role:"none"}:{"aria-orientation":"vertical"===orientation?orientation:void 0,role:"separator"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.sG.div,{"data-orientation":orientation,...semanticProps,...domProps,ref:forwardedRef})}));Separator.displayName="Separator";var Root=Separator},"./src/components/ui/separator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Separator});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-separator/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className","orientation","decorative"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Separator=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,_ref$orientation=_ref.orientation,orientation=void 0===_ref$orientation?"horizontal":_ref$orientation,_ref$decorative=_ref.decorative,decorative=void 0===_ref$decorative||_ref$decorative,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.A)(_ref,_excluded);return __jsx(_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__.b,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.A)({ref,decorative,orientation,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("shrink-0 bg-border","horizontal"===orientation?"h-[1px] w-full":"h-full w-[1px]",className)},props))}));Separator.displayName=_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__.b.displayName;try{Separator.displayName="Separator",Separator.__docgenInfo={description:"",displayName:"Separator",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/separator.tsx#Separator"]={docgenInfo:Separator.__docgenInfo,name:"Separator",path:"src/components/ui/separator.tsx#Separator"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/stories/separator-demo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SeparatorDemo:()=>SeparatorDemo,SeparatorHorizontal:()=>SeparatorHorizontal,SeparatorVertical:()=>SeparatorVertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_separator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/separator.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Shadcn/separator",component:function component(){return __jsx("div",null,__jsx("div",{className:"space-y-1"},__jsx("h4",{className:"text-sm font-medium leading-none"},"Radix Primitives"),__jsx("p",{className:"text-sm text-muted-foreground"},"An open-source UI component library.")),__jsx(_separator__WEBPACK_IMPORTED_MODULE_1__.w,{className:"my-4"}),__jsx("div",{className:"flex h-5 items-center space-x-4 text-sm"},__jsx("div",null,"Blog"),__jsx(_separator__WEBPACK_IMPORTED_MODULE_1__.w,{orientation:"vertical"}),__jsx("div",null,"Docs"),__jsx(_separator__WEBPACK_IMPORTED_MODULE_1__.w,{orientation:"vertical"}),__jsx("div",null,"Source")))},parameters:{layout:"centered"}};var SeparatorDemo={args:{}},SeparatorHorizontal={args:{},render:function render(){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"flex flex-col gap-2"},__jsx("h1",null,"Shadcn-ui"),__jsx(_separator__WEBPACK_IMPORTED_MODULE_1__.w,{orientation:"horizontal"}),__jsx("p",null,"This is NOT a component library. Its a collection of re-usable components that you can copy and paste into your apps.")))}},SeparatorVertical={args:{},render:function render(){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"flex gap-2"},__jsx("span",null,"Shadcn"),__jsx(_separator__WEBPACK_IMPORTED_MODULE_1__.w,{orientation:"vertical"}),__jsx("span",null,"UI")))}};SeparatorDemo.parameters={...SeparatorDemo.parameters,docs:{...SeparatorDemo.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...SeparatorDemo.parameters?.docs?.source}}},SeparatorHorizontal.parameters={...SeparatorHorizontal.parameters,docs:{...SeparatorHorizontal.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: () => <>\n            <div className="flex flex-col gap-2">\n                <h1>Shadcn-ui</h1>\n                <Separator orientation="horizontal" />\n                <p>\n                    This is NOT a component library. Its a collection of\n                    re-usable components that you can copy and paste into your\n                    apps.\n                </p>\n            </div>\n        </>\n}',...SeparatorHorizontal.parameters?.docs?.source}}},SeparatorVertical.parameters={...SeparatorVertical.parameters,docs:{...SeparatorVertical.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: () => <>\n            <div className="flex gap-2">\n                <span>Shadcn</span>\n                <Separator orientation="vertical" />\n                <span>UI</span>\n            </div>\n        </>\n}',...SeparatorVertical.parameters?.docs?.source}}};const __namedExportsOrder=["SeparatorDemo","SeparatorHorizontal","SeparatorVertical"]}}]);