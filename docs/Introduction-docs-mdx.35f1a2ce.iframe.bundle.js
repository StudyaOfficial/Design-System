(self.webpackChunk_studyaofficial_studya_design_system=self.webpackChunk_studyaofficial_studya_design_system||[]).push([[4586],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/Introduction/docs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>docs});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),typography=__webpack_require__("./src/components/typography/typography.tsx"),accordion=__webpack_require__("./src/components/ui/accordion.tsx"),__jsx=react.createElement;function Introduction(){return __jsx("main",{className:""},__jsx("div",{className:"flex flex-col gap-1"},__jsx(typography.S5,null,"Introduction"),__jsx(typography.Ol,null,"Re-usable components built using Radix UI and Tailwind CSS.")),__jsx(typography.C0,{className:"max-w-2xl"},"This is NOT a component library. It's a collection of re-usable components that you can copy and paste into your apps."),__jsx("section",{className:"mt-6"},__jsx(typography.d,null,"What do you mean by not a component library?"),__jsx(typography.C0,{className:"max-w-2xl"},"I mean you do not install it as a dependency. It is not available or distributed via npm."),__jsx(typography.C0,{className:"max-w-2xl"},"Pick the components you need. Copy and paste the code into your project and customize to your needs. The code is yours."),__jsx(typography.ZZ,{className:"italic"},"Use this as a reference to build your own component libraries.")),__jsx("section",{className:"mt-6"},__jsx(typography.d,null,"FAQ"),__jsx(accordion.UQ,{type:"single",collapsible:!0,className:"max-w-xs md:max-w-sm lg:max-w-2xl"},__jsx(accordion.Qd,{value:"item-1"},__jsx(accordion.o4,null,"Why copy / paste and not packaged as a dependency?"),__jsx(accordion.vF,null,__jsx(typography.C0,{className:"max-w-2xl"},"The idea behind this is to give you ownership and control over the code, allowing you to decide how the components are built and styled."),__jsx(typography.C0,{className:"max-w-2xl"},"Start with some sensible defaults, then customize the components to your needs."),__jsx(typography.C0,{className:"max-w-2xl"},"One of the drawback of packaging the components in an npm package is that the style is coupled with the implementation.",__jsx("span",{className:"italic"},"The design of your components should be separate from their implementation.")))),__jsx(accordion.Qd,{value:"item-2"},__jsx(accordion.o4,null,"Do you plan to publish it as an npm package?"),__jsx(accordion.vF,null,"No. I have no plans to publish it as an npm package.")),__jsx(accordion.Qd,{value:"item-3"},__jsx(accordion.o4,null,"Which frameworks are supported?"),__jsx(accordion.vF,null,"You can use any framework that supports React. Next.js, Astro, Remix, Gatsby etc.")),__jsx(accordion.Qd,{value:"item-4"},__jsx(accordion.o4,null,"Can I use this in my project?"),__jsx(accordion.vF,null,__jsx(typography.C0,{className:"max-w-2xl"},"Yes. Free to use for personal and commercial projects. No attribution required."),__jsx(typography.C0,{className:"max-w-2xl"},"But hey, let me know if you do. I'd love to see what you build."))))))}Introduction.displayName="Introduction";const introduction=Introduction;var dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Introduction/introduction"}),"\n",(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsx)(introduction,{})})]})}const docs=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()}},"./src/components/typography/typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$v:()=>TypographyTable,C0:()=>TypographyP,GN:()=>TypographyListItem,OP:()=>TypographyLarge,Ol:()=>TypographyMuted,QI:()=>TypographyH3,S5:()=>TypographyH1,ZZ:()=>TypographySmall,d:()=>TypographyH2,fk:()=>TypographyInlineCode,gd:()=>TypographyBlockquote,ip:()=>TypographyH4,lY:()=>TypographyList,n8:()=>TypographyLead});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className","children"],_excluded2=["className","children"],_excluded3=["className","children"],_excluded4=["className","children"],_excluded5=["className","children"],_excluded6=["className","children"],_excluded7=["className","children"],_excluded8=["className","children"],_excluded9=["className","children"],_excluded10=["className","children"],_excluded11=["className","children"],_excluded12=["className","children"],_excluded13=["className","children"],_excluded14=["className","children"],_excluded15=["className","children"],_excluded16=["className","children"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function TypographyH1(_ref){var className=_ref.className,children=_ref.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("h1",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",className)},props),children)}function TypographyH2(_ref2){var className=_ref2.className,children=_ref2.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref2,_excluded2);return __jsx("h2",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",className)},props),children)}function TypographyH3(_ref3){var className=_ref3.className,children=_ref3.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref3,_excluded3);return __jsx("h3",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("scroll-m-20 text-2xl font-semibold tracking-tight",className)},props),children)}function TypographyH4(_ref4){var className=_ref4.className,children=_ref4.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref4,_excluded4);return __jsx("h4",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("scroll-m-20 text-xl font-semibold tracking-tight",className)},props),children)}function TypographyP(_ref5){var className=_ref5.className,children=_ref5.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref5,_excluded5);return __jsx("p",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("leading-7 [&:not(:first-child)]:mt-6",className)},props),children)}function TypographyBlockquote(_ref6){var className=_ref6.className,children=_ref6.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref6,_excluded6);return __jsx("blockquote",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("mt-6 border-l-2 pl-6 italic",className)},props),children)}TypographyH1.displayName="TypographyH1",TypographyH2.displayName="TypographyH2",TypographyH3.displayName="TypographyH3",TypographyH4.displayName="TypographyH4",TypographyP.displayName="TypographyP",TypographyBlockquote.displayName="TypographyBlockquote";var Tr=function Tr(_ref7){var className=_ref7.className,children=_ref7.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref7,_excluded7);return __jsx("tr",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("m-0 border-t p-0 even:bg-muted",className)},props),children)};Tr.displayName="Tr";var Th=function Th(_ref8){var className=_ref8.className,children=_ref8.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref8,_excluded8);return __jsx("th",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",className)},props),children)};Th.displayName="Th";var Td=function Td(_ref9){var className=_ref9.className,children=_ref9.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref9,_excluded9);return __jsx("td",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",className)},props),children)};function TypographyTable(props){return __jsx("div",{className:"my-6 w-full overflow-y-auto"},__jsx("table",{className:"w-full"},__jsx("thead",null,__jsx(Tr,null,__jsx(Th,{className:"border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"},'King"s Treasury'),__jsx(Th,{className:"border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"},'People"s happiness'))),__jsx("tbody",null,__jsx(Tr,null,__jsx(Td,{className:"border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"},"Empty"),__jsx(Td,{className:"border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"},"Overflowing")),__jsx(Tr,null,__jsx(Td,{className:"border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"},"Modest"),__jsx(Td,{className:"border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"},"Satisfied")),__jsx(Tr,null,__jsx(Td,{className:"border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"},"Full"),__jsx(Td,{className:"border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"},"Ecstatic")))))}Td.displayName="Td",TypographyTable.displayName="TypographyTable";var TypographyListItem=function TypographyListItem(_ref10){var className=_ref10.className,children=_ref10.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref10,_excluded10);return __jsx("li",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("",className)},props),children)};function TypographyList(_ref11){var className=_ref11.className,children=_ref11.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref11,_excluded11);return __jsx("ul",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("my-6 ml-6 list-disc [&>li]:mt-2",className)},props),children)}function TypographyInlineCode(_ref12){var className=_ref12.className,children=_ref12.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref12,_excluded12);return __jsx("code",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",className)},props),children)}function TypographyLead(_ref13){var className=_ref13.className,children=_ref13.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref13,_excluded13);return __jsx("p",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-xl text-muted-foreground",className)},props),children)}function TypographyLarge(_ref14){var className=_ref14.className,children=_ref14.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref14,_excluded14);return __jsx("div",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-lg font-semibold",className)},props),children)}function TypographySmall(_ref15){var className=_ref15.className,children=_ref15.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref15,_excluded15);return __jsx("small",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm font-medium leading-none",className)},props),children)}function TypographyMuted(_ref16){var className=_ref16.className,children=_ref16.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref16,_excluded16);return __jsx("p",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm text-muted-foreground",className)},props),children)}TypographyListItem.displayName="TypographyListItem",TypographyList.displayName="TypographyList",TypographyInlineCode.displayName="TypographyInlineCode",TypographyLead.displayName="TypographyLead",TypographyLarge.displayName="TypographyLarge",TypographySmall.displayName="TypographySmall",TypographyMuted.displayName="TypographyMuted";try{TypographyH1.displayName="TypographyH1",TypographyH1.__docgenInfo={description:"",displayName:"TypographyH1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#TypographyH1"]={docgenInfo:TypographyH1.__docgenInfo,name:"TypographyH1",path:"src/components/typography/typography.tsx#TypographyH1"})}catch(__react_docgen_typescript_loader_error){}try{TypographyH2.displayName="TypographyH2",TypographyH2.__docgenInfo={description:"",displayName:"TypographyH2",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#TypographyH2"]={docgenInfo:TypographyH2.__docgenInfo,name:"TypographyH2",path:"src/components/typography/typography.tsx#TypographyH2"})}catch(__react_docgen_typescript_loader_error){}try{TypographyH3.displayName="TypographyH3",TypographyH3.__docgenInfo={description:"",displayName:"TypographyH3",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#TypographyH3"]={docgenInfo:TypographyH3.__docgenInfo,name:"TypographyH3",path:"src/components/typography/typography.tsx#TypographyH3"})}catch(__react_docgen_typescript_loader_error){}try{TypographyH4.displayName="TypographyH4",TypographyH4.__docgenInfo={description:"",displayName:"TypographyH4",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#TypographyH4"]={docgenInfo:TypographyH4.__docgenInfo,name:"TypographyH4",path:"src/components/typography/typography.tsx#TypographyH4"})}catch(__react_docgen_typescript_loader_error){}try{TypographyP.displayName="TypographyP",TypographyP.__docgenInfo={description:"",displayName:"TypographyP",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#TypographyP"]={docgenInfo:TypographyP.__docgenInfo,name:"TypographyP",path:"src/components/typography/typography.tsx#TypographyP"})}catch(__react_docgen_typescript_loader_error){}try{TypographyBlockquote.displayName="TypographyBlockquote",TypographyBlockquote.__docgenInfo={description:"",displayName:"TypographyBlockquote",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#TypographyBlockquote"]={docgenInfo:TypographyBlockquote.__docgenInfo,name:"TypographyBlockquote",path:"src/components/typography/typography.tsx#TypographyBlockquote"})}catch(__react_docgen_typescript_loader_error){}try{TypographyTable.displayName="TypographyTable",TypographyTable.__docgenInfo={description:"",displayName:"TypographyTable",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#TypographyTable"]={docgenInfo:TypographyTable.__docgenInfo,name:"TypographyTable",path:"src/components/typography/typography.tsx#TypographyTable"})}catch(__react_docgen_typescript_loader_error){}try{TypographyList.displayName="TypographyList",TypographyList.__docgenInfo={description:"",displayName:"TypographyList",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#TypographyList"]={docgenInfo:TypographyList.__docgenInfo,name:"TypographyList",path:"src/components/typography/typography.tsx#TypographyList"})}catch(__react_docgen_typescript_loader_error){}try{TypographyInlineCode.displayName="TypographyInlineCode",TypographyInlineCode.__docgenInfo={description:"",displayName:"TypographyInlineCode",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#TypographyInlineCode"]={docgenInfo:TypographyInlineCode.__docgenInfo,name:"TypographyInlineCode",path:"src/components/typography/typography.tsx#TypographyInlineCode"})}catch(__react_docgen_typescript_loader_error){}try{TypographyLead.displayName="TypographyLead",TypographyLead.__docgenInfo={description:"",displayName:"TypographyLead",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#TypographyLead"]={docgenInfo:TypographyLead.__docgenInfo,name:"TypographyLead",path:"src/components/typography/typography.tsx#TypographyLead"})}catch(__react_docgen_typescript_loader_error){}try{TypographyLarge.displayName="TypographyLarge",TypographyLarge.__docgenInfo={description:"",displayName:"TypographyLarge",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#TypographyLarge"]={docgenInfo:TypographyLarge.__docgenInfo,name:"TypographyLarge",path:"src/components/typography/typography.tsx#TypographyLarge"})}catch(__react_docgen_typescript_loader_error){}try{TypographySmall.displayName="TypographySmall",TypographySmall.__docgenInfo={description:"",displayName:"TypographySmall",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#TypographySmall"]={docgenInfo:TypographySmall.__docgenInfo,name:"TypographySmall",path:"src/components/typography/typography.tsx#TypographySmall"})}catch(__react_docgen_typescript_loader_error){}try{TypographyMuted.displayName="TypographyMuted",TypographyMuted.__docgenInfo={description:"",displayName:"TypographyMuted",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#TypographyMuted"]={docgenInfo:TypographyMuted.__docgenInfo,name:"TypographyMuted",path:"src/components/typography/typography.tsx#TypographyMuted"})}catch(__react_docgen_typescript_loader_error){}try{Tr.displayName="Tr",Tr.__docgenInfo={description:"",displayName:"Tr",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#Tr"]={docgenInfo:Tr.__docgenInfo,name:"Tr",path:"src/components/typography/typography.tsx#Tr"})}catch(__react_docgen_typescript_loader_error){}try{Th.displayName="Th",Th.__docgenInfo={description:"",displayName:"Th",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#Th"]={docgenInfo:Th.__docgenInfo,name:"Th",path:"src/components/typography/typography.tsx#Th"})}catch(__react_docgen_typescript_loader_error){}try{Td.displayName="Td",Td.__docgenInfo={description:"",displayName:"Td",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#Td"]={docgenInfo:Td.__docgenInfo,name:"Td",path:"src/components/typography/typography.tsx#Td"})}catch(__react_docgen_typescript_loader_error){}try{TypographyListItem.displayName="TypographyListItem",TypographyListItem.__docgenInfo={description:"",displayName:"TypographyListItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/typography.tsx#TypographyListItem"]={docgenInfo:TypographyListItem.__docgenInfo,name:"TypographyListItem",path:"src/components/typography/typography.tsx#TypographyListItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/accordion.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Qd:()=>AccordionItem,UQ:()=>Accordion,o4:()=>AccordionTrigger,vF:()=>AccordionContent});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-accordion/dist/index.mjs"),lucide_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/chevron-down.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className"],_excluded2=["className","children"],_excluded3=["className","children"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Accordion=_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_1__.fC,AccordionItem=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_1__.ck,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("border-b",className)},props))}));AccordionItem.displayName="AccordionItem";var AccordionTrigger=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref2,ref){var className=_ref2.className,children=_ref2.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref2,_excluded2);return __jsx(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_1__.h4,{className:"flex"},__jsx(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_1__.xz,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",className)},props),children,__jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200 dark"})))}));AccordionTrigger.displayName=_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_1__.xz.displayName;var AccordionContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref3,ref){var className=_ref3.className,children=_ref3.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref3,_excluded3);return __jsx(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_1__.VY,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"},props),__jsx("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("pb-4 pt-0",className)},children))}));AccordionContent.displayName=_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_1__.VY.displayName;try{AccordionItem.displayName="AccordionItem",AccordionItem.__docgenInfo={description:"",displayName:"AccordionItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/accordion.tsx#AccordionItem"]={docgenInfo:AccordionItem.__docgenInfo,name:"AccordionItem",path:"src/components/ui/accordion.tsx#AccordionItem"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);