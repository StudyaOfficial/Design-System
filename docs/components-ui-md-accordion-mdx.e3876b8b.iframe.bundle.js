(self.webpackChunk_studyaofficial_studya_design_system=self.webpackChunk_studyaofficial_studya_design_system||[]).push([[455],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ui/stories/accordio-demo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AccordionWithOneItem:()=>AccordionWithOneItem,AcorrdionDemo:()=>AcorrdionDemo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _AcorrdionDemo$parame,_AcorrdionDemo$parame2,_AccordionWithOneItem,_AccordionWithOneItem2,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),_ui_accordion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ui/accordion.tsx"),_storybook_jest__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/jest/dist/index.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Shadcn/accordion",render:function render(args){return __jsx(_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.UQ,{type:"single",collapsible:!0,className:"w-80"},__jsx(_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.Qd,{value:"item-1"},__jsx(_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.o4,null,"Is it accessible?"),__jsx(_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.vF,null,"Yes. It adheres to the WAI-ARIA design pattern.")),__jsx(_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.Qd,{value:"item-2"},__jsx(_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.o4,null,"Is it styled?"),__jsx(_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.vF,null,"Yes. It comes with default styles that matches the other components' aesthetic.")),__jsx(_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.Qd,{value:"item-3"},__jsx(_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.o4,null,"Is it animated?"),__jsx(_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.vF,null,"Yes. It's animated by default, but you can disable it if you prefer.")))},parameters:{layout:"centered"}};var _play,AcorrdionDemo={args:{}},AccordionWithOneItem={args:{},render:function render(args){return __jsx(_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.UQ,{type:"single",collapsible:!0,className:"w-80"},__jsx(_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.Qd,{value:"item-1"},__jsx(_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.o4,null,"Accordion"),__jsx(_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.vF,{"data-testid":"description"},"A vertically stacked set of interactive headings that each reveal a section of content.")))},play:(_play=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark((function _callee2(_ref){var canvasElement,step,canvas,elementButtonControl;return _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return canvasElement=_ref.canvasElement,step=_ref.step,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement),_context2.next=4,canvas.findByRole("button");case 4:return elementButtonControl=_context2.sent,_context2.next=7,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_6__.l)(elementButtonControl).toBeVisible();case 7:return _context2.next=9,step("simulation click accordion",(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark((function _callee(){var elementAccordionContent;return _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_3__.mV.click(elementButtonControl);case 2:return _context.next=4,canvas.findByTestId("description");case 4:return elementAccordionContent=_context.sent,_context.next=7,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_6__.l)(elementAccordionContent).toBeVisible();case 7:case"end":return _context.stop()}}),_callee)}))));case 9:case"end":return _context2.stop()}}),_callee2)}))),function play(_x){return _play.apply(this,arguments)})};AcorrdionDemo.parameters=_objectSpread(_objectSpread({},AcorrdionDemo.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AcorrdionDemo$parame=AcorrdionDemo.parameters)||void 0===_AcorrdionDemo$parame?void 0:_AcorrdionDemo$parame.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_AcorrdionDemo$parame2=AcorrdionDemo.parameters)||void 0===_AcorrdionDemo$parame2||null===(_AcorrdionDemo$parame2=_AcorrdionDemo$parame2.docs)||void 0===_AcorrdionDemo$parame2?void 0:_AcorrdionDemo$parame2.source)})}),AccordionWithOneItem.parameters=_objectSpread(_objectSpread({},AccordionWithOneItem.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AccordionWithOneItem=AccordionWithOneItem.parameters)||void 0===_AccordionWithOneItem?void 0:_AccordionWithOneItem.docs),{},{source:_objectSpread({originalSource:'{\n  args: {},\n  render: args => <Accordion type="single" collapsible className="w-80">\n            <AccordionItem value="item-1">\n                <AccordionTrigger>Accordion</AccordionTrigger>\n                <AccordionContent data-testid="description">\n                    A vertically stacked set of interactive headings that each\n                    reveal a section of content.\n                </AccordionContent>\n            </AccordionItem>\n        </Accordion>,\n  play: async ({\n    canvasElement,\n    step\n  }) => {\n    const canvas = within(canvasElement);\n    const elementButtonControl = await canvas.findByRole(\'button\');\n    await expect(elementButtonControl).toBeVisible();\n    await step(\'simulation click accordion\', async () => {\n      await userEvent.click(elementButtonControl);\n      const elementAccordionContent = await canvas.findByTestId(\'description\');\n      await expect(elementAccordionContent).toBeVisible();\n    });\n  }\n}'},null===(_AccordionWithOneItem2=AccordionWithOneItem.parameters)||void 0===_AccordionWithOneItem2||null===(_AccordionWithOneItem2=_AccordionWithOneItem2.docs)||void 0===_AccordionWithOneItem2?void 0:_AccordionWithOneItem2.source)})});const __namedExportsOrder=["AcorrdionDemo","AccordionWithOneItem"]},"./src/components/ui/md/accordion.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_stories_accordio_demo_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/stories/accordio-demo.stories.tsx");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_stories_accordio_demo_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1",{children:" Accordion"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"",children:"A vertically stacked set of interactive headings that each reveal a section of content"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{display:"flex",gap:"20px",color:"#029CFD"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"https://www.radix-ui.com/primitives/docs/components/accordion",target:"_blank",rel:"noreferrer",children:"Radix"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:" | "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"https://www.radix-ui.com/primitives/docs/components/accordion#api-reference",target:"_blank",rel:"noreferrer",children:"API Reference"})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_stories_accordio_demo_stories__WEBPACK_IMPORTED_MODULE_2__.AcorrdionDemo}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{children:"Accordion with one item "})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_stories_accordio_demo_stories__WEBPACK_IMPORTED_MODULE_2__.AccordionWithOneItem})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent()}},"./src/components/ui/accordion.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Qd:()=>AccordionItem,UQ:()=>Accordion,o4:()=>AccordionTrigger,vF:()=>AccordionContent});var _Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-accordion/dist/index.mjs"),lucide_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/chevron-down.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts"),_excluded=["className"],_excluded2=["className","children"],_excluded3=["className","children"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Accordion=_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_1__.fC,AccordionItem=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_1__.ck,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("border-b",className)},props))}));AccordionItem.displayName="AccordionItem";var AccordionTrigger=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref2,ref){var className=_ref2.className,children=_ref2.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref2,_excluded2);return __jsx(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_1__.h4,{className:"flex"},__jsx(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_1__.xz,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",className)},props),children,__jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200 dark"})))}));AccordionTrigger.displayName=_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_1__.xz.displayName;var AccordionContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref3,ref){var className=_ref3.className,children=_ref3.children,props=(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref3,_excluded3);return __jsx(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_1__.VY,(0,_Users_mehdi_Documents_Projects_Studya_Code_StudyaDesignSystem_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"},props),__jsx("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("pb-4 pt-0",className)},children))}));AccordionContent.displayName=_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_1__.VY.displayName;try{AccordionItem.displayName="AccordionItem",AccordionItem.__docgenInfo={description:"",displayName:"AccordionItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/accordion.tsx#AccordionItem"]={docgenInfo:AccordionItem.__docgenInfo,name:"AccordionItem",path:"src/components/ui/accordion.tsx#AccordionItem"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")},"?4f7e":()=>{}}]);