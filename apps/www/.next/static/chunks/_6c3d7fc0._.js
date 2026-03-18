(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/www/lib/basepath.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get the base path for the application
 * Returns empty string in development, or the configured base path in production
 */ __turbopack_context__.s([
    "getBasePath",
    ()=>getBasePath,
    "getLottieBasePath",
    ()=>getLottieBasePath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function getBasePath() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BASE_PATH || "";
}
function getLottieBasePath() {
    const base = getBasePath();
    return base ? "".concat(base, "/agora-uikit/lottie") : "/agora-uikit/lottie";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$5$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.5.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$5$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$13_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_$5f$5iyeqfcv2pcokusrao55yobi2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-tabs@1.1.13_@types+react-dom@19.1.2_@types+react@19.1.2__@types+react@19.1.2__5iyeqfcv2pcokusrao55yobi2m/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Tabs(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$13_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_$5f$5iyeqfcv2pcokusrao55yobi2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/www/components/ui/tabs.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c = Tabs;
function TabsList(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$13_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_$5f$5iyeqfcv2pcokusrao55yobi2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted/50 text-muted-foreground inline-flex h-12 items-center justify-center rounded-lg p-1.5 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/www/components/ui/tabs.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$13_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_$5f$5iyeqfcv2pcokusrao55yobi2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ring-offset-background focus-visible:ring-ring hover:bg-muted hover:text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:ring-border inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:font-semibold data-[state=active]:shadow-md data-[state=active]:ring-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/www/components/ui/tabs.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$13_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_$5f$5iyeqfcv2pcokusrao55yobi2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ring-offset-background focus-visible:ring-ring mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/www/components/ui/tabs.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/uikit/dist/chunk-322AI65H.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "decodeStreamMessage",
    ()=>decodeStreamMessage,
    "renderMarkdownToHtml",
    ()=>renderMarkdownToHtml
]);
// src/lib/utils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dompurify$40$3$2e$3$2e$3$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/dompurify@3.3.3/node_modules/dompurify/dist/purify.es.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$5$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.5.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$5$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function decodeStreamMessage(stream) {
    const decoder = new TextDecoder();
    return decoder.decode(stream);
}
function renderMarkdownToHtml(text) {
    if (!text) return "";
    let processed = text;
    processed = processed.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text2, url)=>"".concat(text2, ': <br/><strong><a href="').concat(url.trim(), '" target="_blank" rel="noopener noreferrer" class="chat-link">[').concat(url.trim(), "]</a></strong>"));
    processed = processed.replace(/(\d+)\.\s+([^0-9]+?)(?=\s+\d+\.|$)/g, (match, num, content)=>{
        const trimmedContent = content.trim();
        return "".concat(num, ". ").concat(trimmedContent, "\n");
    });
    const lines = processed.split(/\n/);
    const formattedLines = lines.map((line)=>{
        const trimmedLine = line.trim();
        const headerMatch = trimmedLine.match(/^(#{1,3})\s+(.+)/);
        if (headerMatch) {
            const hashes = headerMatch[1];
            const content = headerMatch[2];
            if (hashes === "###") {
                return '<div class="heading-sub">'.concat(content, "</div>");
            } else if (hashes === "##") {
                return '<div class="heading">'.concat(content, "</div>");
            }
        }
        const numberedMatch = trimmedLine.match(/^(\d+)\.\s+(.+)/);
        if (numberedMatch) {
            const number = numberedMatch[1];
            const content = numberedMatch[2];
            return '<span class="list-item-numbered"><span class="list-number">'.concat(number, ".</span> ").concat(content, "</span>");
        }
        const bulletMatch = trimmedLine.match(/^-\s+(.+)/);
        if (bulletMatch) {
            var _line_match_, _line_match;
            const content = bulletMatch[1];
            const leadingSpaces = ((_line_match = line.match(/^(\s*)/)) === null || _line_match === void 0 ? void 0 : (_line_match_ = _line_match[1]) === null || _line_match_ === void 0 ? void 0 : _line_match_.length) || 0;
            const isIndented = leadingSpaces >= 2;
            if (isIndented) {
                return '<span class="list-item-sub">◦ '.concat(content, "</span>");
            }
            return '<span class="list-item">• '.concat(content, "</span>");
        }
        return line;
    });
    processed = formattedLines.join("<br/>");
    if ("TURBOPACK compile-time truthy", 1) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dompurify$40$3$2e$3$2e$3$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sanitize(processed, {
            ALLOWED_TAGS: [
                "strong",
                "a",
                "br",
                "div",
                "span"
            ],
            ALLOWED_ATTR: [
                "href",
                "target",
                "rel",
                "class"
            ]
        });
    }
    //TURBOPACK unreachable
    ;
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=chunk-322AI65H.mjs.map
}),
"[project]/packages/uikit/dist/chunk-3XFL3AIM.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentVisualizer",
    ()=>AgentVisualizer,
    "Button",
    ()=>Button,
    "Conversation",
    ()=>Conversation,
    "ConversationContent",
    ()=>ConversationContent,
    "ConversationEmptyState",
    ()=>ConversationEmptyState,
    "ConversationScrollButton",
    ()=>ConversationScrollButton,
    "Message",
    ()=>Message,
    "MessageContent",
    ()=>MessageContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-322AI65H.mjs [app-client] (ecmascript)");
// src/components/voice/agent-visualizer.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lottiefiles$2b$dotlottie$2d$react$40$0$2e$17$2e$15_react$40$18$2e$3$2e$1$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lottiefiles+dotlottie-react@0.17.15_react@18.3.1/node_modules/@lottiefiles/dotlottie-react/dist/browser/index.js [app-client] (ecmascript)");
// src/components/voice/agent-visualizer.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
// src/components/primitives/button.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$1$2e$2_react$40$18$2e$3$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.1.2_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
// src/assets/lottie/ambient.lottie
var ambient_default = "data:application/zip;base64,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";
// src/assets/lottie/analyzing.lottie
var analyzing_default = "data:application/zip;base64,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";
// src/assets/lottie/disconnected.lottie
var disconnected_default = "data:application/zip;base64,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";
// src/assets/lottie/joining.lottie
var joining_default = "data:application/zip;base64,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";
// src/assets/lottie/listening.lottie
var listening_default = "data:application/zip;base64,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";
// src/assets/lottie/not-joined.lottie
var not_joined_default = "data:application/zip;base64,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";
// src/assets/lottie/talking.lottie
var talking_default = "data:application/zip;base64,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";
;
var bundledAnimations = {
    "not-joined": not_joined_default,
    joining: joining_default,
    ambient: ambient_default,
    listening: listening_default,
    analyzing: analyzing_default,
    talking: talking_default,
    disconnected: disconnected_default
};
var stateToText = {
    "not-joined": "Not Joined",
    joining: "Joining",
    ambient: "Ambient",
    listening: "Listening",
    analyzing: "Analyzing",
    talking: "Talking",
    disconnected: "Disconnected"
};
var sizeClasses = {
    sm: {
        container: "w-32 h-32",
        text: "text-sm"
    },
    md: {
        container: "w-48 h-48",
        text: "text-base"
    },
    lg: {
        container: "w-64 h-64",
        text: "text-lg"
    }
};
var AgentVisualizer = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { state, size = "md", lottiePaths, className, ...props } = param;
    const displayText = stateToText[state];
    const sizeConfig = sizeClasses[size];
    var _lottiePaths_state;
    const lottieSrc = (_lottiePaths_state = lottiePaths === null || lottiePaths === void 0 ? void 0 : lottiePaths[state]) !== null && _lottiePaths_state !== void 0 ? _lottiePaths_state : bundledAnimations[state];
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center gap-4", className),
        ...props,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center", sizeConfig.container),
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lottiefiles$2b$dotlottie$2d$react$40$0$2e$17$2e$15_react$40$18$2e$3$2e$1$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
                    src: lottieSrc,
                    loop: true,
                    autoplay: true,
                    className: "h-full w-full"
                })
            }),
            displayText && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground text-center font-medium", sizeConfig.text),
                children: displayText
            })
        ]
    });
});
_c1 = AgentVisualizer;
AgentVisualizer.displayName = "AgentVisualizer";
;
;
;
var buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground",
            destructive: "bg-destructive text-font",
            secondary: "bg-secondary text-secondary-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground"
        },
        size: {
            default: "h-12 px-4 py-4 rounded-md",
            icon: "h-10 w-10 rounded-md"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, label, labelClassName, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$1$2e$2_react$40$18$2e$3$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    const button = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    });
    if (label) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: "flex flex-col items-center",
            children: [
                button,
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground mt-2 text-xs", labelClassName),
                    children: label
                })
            ]
        });
    }
    return button;
}
_c2 = Button;
;
;
;
var ConversationContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
var useConversation = ()=>{
    _s();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ConversationContext);
    if (!context) {
        throw new Error("useConversation must be used within Conversation");
    }
    return context;
};
_s(useConversation, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var useConversationNames = ()=>{
    _s1();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ConversationContext);
    return context ? {
        agentName: context.agentName,
        userName: context.userName
    } : {
        agentName: "Agent",
        userName: "User"
    };
};
_s1(useConversationNames, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
;
var Conversation = /*#__PURE__*/ _s2(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c3 = _s2((param, ref)=>{
    let { className, height = "h-[400px]", agentName = "Agent", userName = "User", ...props } = param;
    _s2();
    const scrollRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [showScrollButton, setShowScrollButton] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const setRefs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Conversation.useCallback[setRefs]": (node)=>{
            scrollRef.current = node;
            if (typeof ref === "function") {
                ref(node);
            } else if (ref) {
                ref.current = node;
            }
        }
    }["Conversation.useCallback[setRefs]"], [
        ref
    ]);
    const scrollToBottom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Conversation.useCallback[scrollToBottom]": ()=>{
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
        }
    }["Conversation.useCallback[scrollToBottom]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Conversation.useEffect": ()=>{
            const scrollElement = scrollRef.current;
            const handleScroll = {
                "Conversation.useEffect.handleScroll": ()=>{
                    if (scrollElement) {
                        const { scrollTop, scrollHeight, clientHeight } = scrollElement;
                        const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
                        setShowScrollButton(!isNearBottom);
                    }
                }
            }["Conversation.useEffect.handleScroll"];
            let rafId = null;
            const observer = new MutationObserver({
                "Conversation.useEffect": ()=>{
                    if (rafId) cancelAnimationFrame(rafId);
                    rafId = requestAnimationFrame(scrollToBottom);
                }
            }["Conversation.useEffect"]);
            if (scrollElement) {
                observer.observe(scrollElement, {
                    childList: true,
                    subtree: true
                });
                scrollElement.addEventListener("scroll", handleScroll);
            }
            return ({
                "Conversation.useEffect": ()=>{
                    observer.disconnect();
                    if (rafId) cancelAnimationFrame(rafId);
                    if (scrollElement) {
                        scrollElement.removeEventListener("scroll", handleScroll);
                    }
                }
            })["Conversation.useEffect"];
        }
    }["Conversation.useEffect"], [
        scrollToBottom
    ]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Conversation.useMemo[contextValue]": ()=>({
                scrollRef,
                agentName,
                userName
            })
    }["Conversation.useMemo[contextValue]"], [
        agentName,
        userName
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ConversationContext.Provider, {
        value: contextValue,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            ref: setRefs,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex flex-col overflow-scroll", height, className),
            ...props,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: "flex-1 min-h-0",
                    children: props.children
                }),
                showScrollButton && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ConversationScrollButton, {
                    onClick: scrollToBottom
                })
            ]
        })
    });
}, "en3+WrKJGyiraEFY8e2XYMYveBM=")), "en3+WrKJGyiraEFY8e2XYMYveBM=");
_c4 = Conversation;
Conversation.displayName = "Conversation";
var ConversationContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = (param, ref)=>{
    let { className, padding = "p-4", ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1", padding, className),
        ...props
    });
});
_c6 = ConversationContent;
ConversationContent.displayName = "ConversationContent";
var ConversationEmptyState = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = (param, ref)=>{
    let { className, icon, title = "No messages yet", description = "Start a conversation to see messages here", ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full flex-col items-center justify-center gap-3 p-8 text-center", className),
        ...props,
        children: [
            icon && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "flex justify-center",
                children: icon
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "space-y-1",
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("h3", {
                        className: "font-semibold",
                        children: title
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                        className: "text-muted-foreground text-sm",
                        children: description
                    })
                ]
            })
        ]
    });
});
_c8 = ConversationEmptyState;
ConversationEmptyState.displayName = "ConversationEmptyState";
var ConversationScrollButton = /*#__PURE__*/ _s3(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c9 = _s3((param, ref)=>{
    let { className, ...props } = param;
    _s3();
    const { scrollRef } = useConversation();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Button, {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute bottom-4 left-1/2 -translate-x-1/2 shadow-md", className),
        onClick: ()=>{
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
        },
        ...props,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        })
    });
}, "lnm5j0ql4kREJuexkCVzQdkq7jY=", false, function() {
    return [
        useConversation
    ];
})), "lnm5j0ql4kREJuexkCVzQdkq7jY=", false, function() {
    return [
        useConversation
    ];
});
_c10 = ConversationScrollButton;
ConversationScrollButton.displayName = "ConversationScrollButton";
;
;
var Message = /*#__PURE__*/ _s4(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c11 = _s4((param, ref)=>{
    let { className, from, name, children, ...props } = param;
    _s4();
    const { agentName, userName } = useConversationNames();
    const isUser = from === "user";
    const displayName = name !== null && name !== void 0 ? name : isUser ? userName : agentName;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full", className),
        style: {
            justifyContent: isUser ? "flex-end" : "flex-start"
        },
        ...props,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: "flex flex-col gap-0.5",
            style: {
                alignItems: isUser ? "flex-end" : "flex-start"
            },
            children: [
                displayName && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: "text-sm font-medium text-muted-foreground",
                    children: displayName
                }),
                children
            ]
        })
    });
}, "xTAgyJS5GyDnfInEyNL3vcNyPfo=", false, function() {
    return [
        useConversationNames
    ];
})), "xTAgyJS5GyDnfInEyNL3vcNyPfo=", false, function() {
    return [
        useConversationNames
    ];
});
_c12 = Message;
Message.displayName = "Message";
var MessageContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c13 = (param, ref)=>{
    let { className, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex max-w-xs flex-col gap-2 rounded-2xl px-1 py-1 bg-secondary text-foreground", className),
        ...props
    });
});
_c14 = MessageContent;
MessageContent.displayName = "MessageContent";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "AgentVisualizer$React.forwardRef");
__turbopack_context__.k.register(_c1, "AgentVisualizer");
__turbopack_context__.k.register(_c2, "Button");
__turbopack_context__.k.register(_c3, "Conversation$React3.forwardRef");
__turbopack_context__.k.register(_c4, "Conversation");
__turbopack_context__.k.register(_c5, "ConversationContent$React3.forwardRef");
__turbopack_context__.k.register(_c6, "ConversationContent");
__turbopack_context__.k.register(_c7, "ConversationEmptyState$React3.forwardRef");
__turbopack_context__.k.register(_c8, "ConversationEmptyState");
__turbopack_context__.k.register(_c9, "ConversationScrollButton$React3.forwardRef");
__turbopack_context__.k.register(_c10, "ConversationScrollButton");
__turbopack_context__.k.register(_c11, "Message$React4.forwardRef");
__turbopack_context__.k.register(_c12, "Message");
__turbopack_context__.k.register(_c13, "MessageContent$React4.forwardRef");
__turbopack_context__.k.register(_c14, "MessageContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=chunk-3XFL3AIM.mjs.map
}),
"[project]/packages/uikit/dist/chunk-PGN4AQHD.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chip",
    ()=>Chip,
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger,
    "LiveWaveform",
    ()=>LiveWaveform,
    "useAudioDevices",
    ()=>useAudioDevices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-322AI65H.mjs [app-client] (ecmascript)");
// src/components/voice/live-waveform.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
// src/components/primitives/dropdown-menu.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$16_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$reac_7uwn2sdzqekt4pynhrkbl7nzuu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.16_@types+react-dom@19.1.2_@types+react@19.1.2__@types+reac_7uwn2sdzqekt4pynhrkbl7nzuu/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
var LiveWaveform = (param)=>{
    let { active = false, data: externalData, deviceId, fftSize = 256, smoothingTimeConstant = 0.8, sensitivity = 1, barWidth = 3, barGap = 1, barRadius = 1.5, barColor, fadeEdges = true, fadeWidth = 24, height = 64, minAlpha = null, alphaRange = 1, onError, className, ...props } = param;
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(externalData || []);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heightStyle = typeof height === "number" ? "".concat(height, "px") : height;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveWaveform.useEffect": ()=>{
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (!canvas || !container) return;
            const resizeObserver = new ResizeObserver({
                "LiveWaveform.useEffect": ()=>{
                    const rect = container.getBoundingClientRect();
                    const dpr = window.devicePixelRatio || 1;
                    canvas.width = rect.width * dpr;
                    canvas.height = rect.height * dpr;
                    canvas.style.width = "".concat(rect.width, "px");
                    canvas.style.height = "".concat(rect.height, "px");
                    const ctx = canvas.getContext("2d");
                    if (ctx) {
                        ctx.scale(dpr, dpr);
                    }
                }
            }["LiveWaveform.useEffect"]);
            resizeObserver.observe(container);
            return ({
                "LiveWaveform.useEffect": ()=>resizeObserver.disconnect()
            })["LiveWaveform.useEffect"];
        }
    }["LiveWaveform.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveWaveform.useEffect": ()=>{
            if (!active || !deviceId) {
                if (streamRef.current) {
                    streamRef.current.getTracks().forEach({
                        "LiveWaveform.useEffect": (track)=>track.stop()
                    }["LiveWaveform.useEffect"]);
                }
                if (audioContextRef.current && audioContextRef.current.state !== "closed") {
                    audioContextRef.current.close();
                }
                if (animationIdRef.current) {
                    cancelAnimationFrame(animationIdRef.current);
                }
                let rafId;
                let t = 0;
                const animateIdle = {
                    "LiveWaveform.useEffect.animateIdle": ()=>{
                        t += 0.03;
                        const idleArray = Array.from({
                            length: 64
                        }, {
                            "LiveWaveform.useEffect.animateIdle.idleArray": (_, i)=>0.05 + Math.sin(t + i * 0.3) * 0.01
                        }["LiveWaveform.useEffect.animateIdle.idleArray"]);
                        setData(idleArray);
                        rafId = requestAnimationFrame(animateIdle);
                    }
                }["LiveWaveform.useEffect.animateIdle"];
                animateIdle();
                return ({
                    "LiveWaveform.useEffect": ()=>cancelAnimationFrame(rafId)
                })["LiveWaveform.useEffect"];
            }
            let cancelled = false;
            const setupMicrophone = {
                "LiveWaveform.useEffect.setupMicrophone": async ()=>{
                    try {
                        const audioConstraints = {
                            echoCancellation: true,
                            noiseSuppression: true,
                            autoGainControl: true
                        };
                        if (deviceId) {
                            audioConstraints.deviceId = deviceId;
                        }
                        const stream = await navigator.mediaDevices.getUserMedia({
                            audio: audioConstraints
                        });
                        if (cancelled) {
                            stream.getTracks().forEach({
                                "LiveWaveform.useEffect.setupMicrophone": (t)=>t.stop()
                            }["LiveWaveform.useEffect.setupMicrophone"]);
                            return;
                        }
                        streamRef.current = stream;
                        const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
                        const audioContext = new AudioContextConstructor();
                        const analyser = audioContext.createAnalyser();
                        analyser.fftSize = fftSize;
                        analyser.smoothingTimeConstant = smoothingTimeConstant;
                        const source = audioContext.createMediaStreamSource(stream);
                        source.connect(analyser);
                        audioContextRef.current = audioContext;
                        analyserRef.current = analyser;
                        const dataArray = new Uint8Array(analyser.frequencyBinCount);
                        const updateData = {
                            "LiveWaveform.useEffect.setupMicrophone.updateData": ()=>{
                                if (!analyserRef.current || !active) return;
                                analyserRef.current.getByteFrequencyData(dataArray);
                                const startFreq = Math.floor(dataArray.length * 0.05);
                                const endFreq = Math.floor(dataArray.length * 0.4);
                                const relevantData = dataArray.slice(startFreq, endFreq);
                                const halfLength = Math.floor(relevantData.length / 2);
                                const normalizedData = [];
                                for(let i = halfLength - 1; i >= 0; i--){
                                    const value = Math.min(1, relevantData[i] / 255 * sensitivity);
                                    normalizedData.push(value);
                                }
                                for(let i = 0; i < halfLength; i++){
                                    const value = Math.min(1, relevantData[i] / 255 * sensitivity);
                                    normalizedData.push(value);
                                }
                                setData(normalizedData);
                                animationIdRef.current = requestAnimationFrame(updateData);
                            }
                        }["LiveWaveform.useEffect.setupMicrophone.updateData"];
                        updateData();
                    } catch (error) {
                        onError === null || onError === void 0 ? void 0 : onError(error);
                    }
                }
            }["LiveWaveform.useEffect.setupMicrophone"];
            setupMicrophone();
            return ({
                "LiveWaveform.useEffect": ()=>{
                    cancelled = true;
                    if (streamRef.current) {
                        streamRef.current.getTracks().forEach({
                            "LiveWaveform.useEffect": (track)=>track.stop()
                        }["LiveWaveform.useEffect"]);
                    }
                    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
                        audioContextRef.current.close();
                    }
                    if (animationIdRef.current) {
                        cancelAnimationFrame(animationIdRef.current);
                    }
                }
            })["LiveWaveform.useEffect"];
        }
    }["LiveWaveform.useEffect"], [
        active,
        deviceId,
        fftSize,
        smoothingTimeConstant,
        sensitivity,
        onError
    ]);
    const dataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(data);
    dataRef.current = data;
    const externalDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(externalData);
    externalDataRef.current = externalData;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveWaveform.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let rafId;
            const computedBarColor = barColor || ({
                "LiveWaveform.useEffect": ()=>{
                    const style = getComputedStyle(canvas);
                    return style.color || "#000";
                }
            })["LiveWaveform.useEffect"]();
            const animate = {
                "LiveWaveform.useEffect.animate": ()=>{
                    const rect = canvas.getBoundingClientRect();
                    ctx.clearRect(0, 0, rect.width, rect.height);
                    const step = barWidth + barGap;
                    const barCount = Math.floor(rect.width / step);
                    const centerY = rect.height / 2;
                    const displayData = externalDataRef.current || dataRef.current;
                    for(let i = 0; i < barCount && i < displayData.length; i++){
                        const value = displayData[i] || 0.05;
                        const x = i * step;
                        const barHeight = Math.max(4, value * rect.height * 0.8);
                        const y = centerY - barHeight / 2;
                        ctx.fillStyle = computedBarColor;
                        ctx.globalAlpha = minAlpha !== null ? minAlpha + value * alphaRange : value;
                        if (barRadius > 0 && typeof ctx.roundRect === "function") {
                            ctx.beginPath();
                            ctx.roundRect(x, y, barWidth, barHeight, barRadius);
                            ctx.fill();
                        } else if (barRadius > 0) {
                            const r = Math.min(barRadius, barWidth / 2, barHeight / 2);
                            ctx.beginPath();
                            ctx.moveTo(x + r, y);
                            ctx.lineTo(x + barWidth - r, y);
                            ctx.quadraticCurveTo(x + barWidth, y, x + barWidth, y + r);
                            ctx.lineTo(x + barWidth, y + barHeight - r);
                            ctx.quadraticCurveTo(x + barWidth, y + barHeight, x + barWidth - r, y + barHeight);
                            ctx.lineTo(x + r, y + barHeight);
                            ctx.quadraticCurveTo(x, y + barHeight, x, y + barHeight - r);
                            ctx.lineTo(x, y + r);
                            ctx.quadraticCurveTo(x, y, x + r, y);
                            ctx.closePath();
                            ctx.fill();
                        } else {
                            ctx.fillRect(x, y, barWidth, barHeight);
                        }
                    }
                    if (fadeEdges && fadeWidth > 0 && rect.width > 0) {
                        const gradient = ctx.createLinearGradient(0, 0, rect.width, 0);
                        const fadePercent = Math.min(0.3, fadeWidth / rect.width);
                        gradient.addColorStop(0, "rgba(255,255,255,1)");
                        gradient.addColorStop(fadePercent, "rgba(255,255,255,0)");
                        gradient.addColorStop(1 - fadePercent, "rgba(255,255,255,0)");
                        gradient.addColorStop(1, "rgba(255,255,255,1)");
                        ctx.globalCompositeOperation = "destination-out";
                        ctx.fillStyle = gradient;
                        ctx.fillRect(0, 0, rect.width, rect.height);
                        ctx.globalCompositeOperation = "source-over";
                    }
                    ctx.globalAlpha = 1;
                    rafId = requestAnimationFrame(animate);
                }
            }["LiveWaveform.useEffect.animate"];
            rafId = requestAnimationFrame(animate);
            return ({
                "LiveWaveform.useEffect": ()=>{
                    if (rafId) {
                        cancelAnimationFrame(rafId);
                    }
                }
            })["LiveWaveform.useEffect"];
        }
    }["LiveWaveform.useEffect"], [
        barWidth,
        barGap,
        barRadius,
        barColor,
        fadeEdges,
        fadeWidth,
        minAlpha,
        alphaRange
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-full w-full", className),
        ref: containerRef,
        style: {
            height: heightStyle
        },
        "aria-label": active ? "Live audio waveform" : "Audio waveform idle",
        role: "img",
        ...props,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("canvas", {
            className: "block h-full w-full",
            ref: canvasRef,
            "aria-hidden": "true"
        })
    });
};
_s(LiveWaveform, "Hc2sx0NnjNb1um+gNfEaMj5BEG0=");
_c = LiveWaveform;
;
;
var Chip = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = (param, ref)=>{
    let { children, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref,
        className: "bg-card-layer-1 relative inline-flex items-center justify-center gap-2 rounded-full p-3",
        ...props,
        children
    });
});
_c2 = Chip;
Chip.displayName = "Chip";
;
;
;
function DropdownMenu(param) {
    let { ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$16_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$reac_7uwn2sdzqekt4pynhrkbl7nzuu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    });
}
_c3 = DropdownMenu;
function DropdownMenuTrigger(param) {
    let { ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$16_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$reac_7uwn2sdzqekt4pynhrkbl7nzuu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    });
}
_c4 = DropdownMenuTrigger;
function DropdownMenuContent(param) {
    let { className, sideOffset = 4, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$16_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$reac_7uwn2sdzqekt4pynhrkbl7nzuu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$16_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$reac_7uwn2sdzqekt4pynhrkbl7nzuu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-xl border", className),
            ...props
        })
    });
}
_c5 = DropdownMenuContent;
function DropdownMenuItem(param) {
    let { className, inset, variant = "default", ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$16_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$reac_7uwn2sdzqekt4pynhrkbl7nzuu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card-layer-2 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground text-small relative flex cursor-pointer items-center gap-2 px-4 py-3 leading-snug outline-hidden select-none hover:bg-[var(--color-neutral)]/25 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    });
}
_c6 = DropdownMenuItem;
;
var agoraRTCPromise = null;
function importAgoraRTC() {
    if (!agoraRTCPromise) {
        agoraRTCPromise = __turbopack_context__.A("[project]/node_modules/.pnpm/agora-rtc-react@2.5.1_react@18.3.1/node_modules/agora-rtc-react/dist/agora-rtc-react.mjs [app-client] (ecmascript, async loader)").then((mod)=>mod.default);
    }
    return agoraRTCPromise;
}
function useAudioDevices() {
    _s1();
    const [devices, setDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasPermission, setHasPermission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const agoraRTCRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const loadDevices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAudioDevices.useCallback[loadDevices]": async ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                setLoading(true);
                setError(null);
                const AgoraRTC = await importAgoraRTC();
                agoraRTCRef.current = AgoraRTC;
                const microphones = await AgoraRTC.getMicrophones();
                const audioInputs = microphones.map({
                    "useAudioDevices.useCallback[loadDevices].audioInputs": (device)=>{
                        let cleanLabel = device.label || "Microphone ".concat(device.deviceId.slice(0, 8));
                        cleanLabel = cleanLabel.replace(/\s*\([^)]*\)/g, "").trim();
                        return {
                            deviceId: device.deviceId,
                            label: cleanLabel,
                            groupId: device.groupId
                        };
                    }
                }["useAudioDevices.useCallback[loadDevices].audioInputs"]);
                setDevices(audioInputs);
                setHasPermission(true);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to get audio devices");
            } finally{
                setLoading(false);
            }
        }
    }["useAudioDevices.useCallback[loadDevices]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAudioDevices.useEffect2": ()=>{
            loadDevices();
        }
    }["useAudioDevices.useEffect2"], [
        loadDevices
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAudioDevices.useEffect2": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            let mounted = true;
            let cleanup = {
                "useAudioDevices.useEffect2.cleanup": ()=>{}
            }["useAudioDevices.useEffect2.cleanup"];
            importAgoraRTC().then({
                "useAudioDevices.useEffect2": (AgoraRTC)=>{
                    if (!mounted) return;
                    const handler = {
                        "useAudioDevices.useEffect2.handler": ()=>{
                            loadDevices();
                        }
                    }["useAudioDevices.useEffect2.handler"];
                    AgoraRTC.on("microphone-changed", handler);
                    cleanup = ({
                        "useAudioDevices.useEffect2": ()=>{
                            AgoraRTC.off("microphone-changed", handler);
                        }
                    })["useAudioDevices.useEffect2"];
                }
            }["useAudioDevices.useEffect2"]);
            return ({
                "useAudioDevices.useEffect2": ()=>{
                    mounted = false;
                    cleanup();
                }
            })["useAudioDevices.useEffect2"];
        }
    }["useAudioDevices.useEffect2"], [
        loadDevices
    ]);
    return {
        devices,
        loading,
        error,
        hasPermission,
        loadDevices
    };
}
_s1(useAudioDevices, "qrbPz5nK1AjYDVGKx86zujlkNK0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]
    ];
});
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "LiveWaveform");
__turbopack_context__.k.register(_c1, "Chip$React.forwardRef");
__turbopack_context__.k.register(_c2, "Chip");
__turbopack_context__.k.register(_c3, "DropdownMenu");
__turbopack_context__.k.register(_c4, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c5, "DropdownMenuContent");
__turbopack_context__.k.register(_c6, "DropdownMenuItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=chunk-PGN4AQHD.mjs.map
}),
"[project]/packages/uikit/dist/chunk-OGIKXBAR.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconButton",
    ()=>IconButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-322AI65H.mjs [app-client] (ecmascript)");
// src/components/primitives/icon-button.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
var iconButtonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("relative inline-flex items-center justify-center cursor-pointer transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 outline-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-6 [&_svg]:shrink-0", {
    variants: {
        shape: {
            round: "rounded-full",
            square: "rounded-md"
        },
        variant: {
            filled: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
            outlined: "border border-primary text-primary hover:bg-primary/10 active:bg-primary/20",
            standard: "text-foreground hover:bg-accent/10 active:bg-accent/20"
        },
        size: {
            default: "h-12 w-12 [&_svg:not([class*='size-'])]:size-6",
            sm: "h-6 w-6 [&_svg:not([class*='size-'])]:size-3",
            md: "h-10 w-10 [&_svg:not([class*='size-'])]:size-5",
            lg: "h-12 w-12 [&_svg:not([class*='size-'])]:size-6",
            xl: "h-14 w-14 [&_svg:not([class*='size-'])]:size-8"
        }
    },
    defaultVariants: {
        shape: "round",
        variant: "filled",
        size: "default"
    }
});
function IconButton(param) {
    let { className, shape, variant, size, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(iconButtonVariants({
            shape,
            variant,
            size,
            className
        })),
        ...props
    });
}
_c = IconButton;
;
var _c;
__turbopack_context__.k.register(_c, "IconButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=chunk-OGIKXBAR.mjs.map
}),
"[project]/packages/uikit/dist/chunk-Z47YZ5WI.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "debug",
    ()=>debug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use client";
// src/lib/debug.ts
var PREFIX = "[agora-agent-uikit]";
var isVerbose = ()=>typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") !== "production" || "object" !== "undefined" && !!window.__AGORA_UIKIT_DEBUG__;
var debug = {
    log: function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (isVerbose()) console.debug(PREFIX, ...args);
    },
    warn: function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        console.warn(PREFIX, ...args);
    },
    error: function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        console.error(PREFIX, ...args);
    }
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=chunk-Z47YZ5WI.mjs.map
}),
"[project]/packages/uikit/dist/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentSettings",
    ()=>AgentSettings,
    "AgoraLogo",
    ()=>AgoraLogo,
    "AudioVisualizer",
    ()=>AudioVisualizer,
    "Avatar",
    ()=>Avatar,
    "AvatarVideoDisplay",
    ()=>AvatarVideoDisplay,
    "CameraSelector",
    ()=>CameraSelector,
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardTitle",
    ()=>CardTitle,
    "Command",
    ()=>Command,
    "ConvoTextStream",
    ()=>ConvoTextStream,
    "EMessageStatus",
    ()=>EMessageStatus,
    "LocalVideoPreview",
    ()=>LocalVideoPreview,
    "MicButton",
    ()=>MicButton,
    "MobileTabs",
    ()=>MobileTabs,
    "Popover",
    ()=>Popover,
    "Response",
    ()=>Response,
    "SessionPanel",
    ()=>SessionPanel,
    "SettingsDialog",
    ()=>SettingsDialog,
    "SimpleVisualizer",
    ()=>SimpleVisualizer,
    "ValuePicker",
    ()=>ValuePicker,
    "VideoGrid",
    ()=>VideoGrid,
    "VideoGridWithControls",
    ()=>VideoGridWithControls,
    "applyCustomTheme",
    ()=>applyCustomTheme,
    "getCurrentTheme",
    ()=>getCurrentTheme,
    "hexToRgbString",
    ()=>hexToRgbString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-3XFL3AIM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$PGN4AQHD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-PGN4AQHD.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$OGIKXBAR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-OGIKXBAR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$Z47YZ5WI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-Z47YZ5WI.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-322AI65H.mjs [app-client] (ecmascript)");
// src/components/voice/mic-button.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
// src/components/voice/simple-visualizer.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/video-off.js [app-client] (ecmascript) <export default as VideoOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
// src/components/primitives/popover.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1_5ztkp22xhcwd7pzy4sv3v7w3re$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-popover@1.1.15_@types+react-dom@19.1.2_@types+react@19.1.2__@types+react@19.1_5ztkp22xhcwd7pzy4sv3v7w3re/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_vqlgveintfgb4slrw5v6ylsbay$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-select@2.2.6_@types+react-dom@19.1.2_@types+react@19.1.2__@types+react@19.1.2_vqlgveintfgb4slrw5v6ylsbay/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
// src/components/primitives/command.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.1.2_@types+react@19.1.2__@types+react@19.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/cmdk/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$_xsxbxa6bnzzue5b7vv3fg6qbxa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-dialog@1.1.15_@types+react-dom@19.1.2_@types+react@19.1.2__@types+react@19.1._xsxbxa6bnzzue5b7vv3fg6qbxa/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$switch$40$1$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_rrgv2b73tuwa3vxmdkaw6ookyu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-switch@1.2.6_@types+react-dom@19.1.2_@types+react@19.1.2__@types+react@19.1.2_rrgv2b73tuwa3vxmdkaw6ookyu/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function SimpleVisualizer(param) {
    let { data, className, activeColor = "#374151", inactiveColor = "#d1d5db", barWidth = 3, barHeight = 16, barGap = 2 } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-start", className),
        style: {
            gap: "".concat(barGap, "px"),
            height: "".concat(barHeight * 2, "px")
        },
        role: "img",
        "aria-label": "Audio level indicator",
        children: data.map((value, i)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                style: {
                    width: "".concat(barWidth, "px"),
                    height: "".concat(barHeight, "px"),
                    backgroundColor: value > 0 ? activeColor : inactiveColor,
                    borderRadius: "9999px",
                    transition: "background-color 75ms",
                    willChange: "background-color"
                }
            }, i))
    });
}
_c = SimpleVisualizer;
;
var MicButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = (param, ref)=>{
    let { state = "idle", icon = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
        className: "h-4 w-4"
    }), showErrorBadge = false, audioData, className, disabled, ...props } = param;
    const isProcessing = state === "processing";
    const isError = state === "error";
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("button", {
        ref,
        disabled: disabled || isError,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-medium transition-colors", // Idle and active states
        !isError && "border-input bg-background hover:bg-accent focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none", // Error state
        isError && "border-destructive bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive cursor-not-allowed focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none", // Disabled state
        disabled && "cursor-not-allowed opacity-50", className),
        "aria-label": isError ? "Microphone error" : state === "listening" ? "Microphone active" : "Microphone",
        ...props,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "flex items-center justify-center gap-1.5",
                children: [
                    isError ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                        className: "h-4 w-4"
                    }) : icon,
                    audioData && audioData.length > 0 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SimpleVisualizer, {
                        data: audioData,
                        className: isProcessing ? "text-slate-400" : ""
                    })
                ]
            }),
            isError && showErrorBadge && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-amber-900",
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    className: "text-xs leading-none font-bold",
                    children: "!"
                })
            })
        ]
    });
});
_c2 = MicButton;
MicButton.displayName = "MicButton";
;
;
var AudioVisualizer = (param)=>{
    let { track, gradientColors = [
        "#A0FAFF",
        "#FCF9F8",
        "#C46FFB"
    ], className = "" } = param;
    _s();
    const [isVisualizing, setIsVisualizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    const barsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animate = ()=>{
        if (!analyserRef.current) {
            return;
        }
        const bufferLength = analyserRef.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyserRef.current.getByteFrequencyData(dataArray);
        const frequencyRanges = [
            [
                24,
                31
            ],
            // Highest (bar 0, 8)
            [
                16,
                23
            ],
            // Mid-high (bar 1, 7)
            [
                8,
                15
            ],
            // Mid (bar 2, 6)
            [
                4,
                7
            ],
            // Low-mid (bar 3, 5)
            [
                0,
                3
            ]
        ];
        barsRef.current.forEach((bar, index)=>{
            if (!bar) {
                return;
            }
            const rangeIndex = index < 5 ? index : 8 - index;
            const [start, end] = frequencyRanges[rangeIndex];
            let sum = 0;
            for(let i = start; i <= end; i++){
                sum += dataArray[i];
            }
            let average = sum / (end - start + 1);
            const multipliers = [
                0.7,
                0.8,
                0.85,
                0.9,
                0.95
            ];
            const multiplierIndex = index < 5 ? index : 8 - index;
            average *= multipliers[multiplierIndex];
            const height = Math.min(average / 255 * 100, 100);
            bar.style.height = "".concat(height, "px");
        });
        animationFrameRef.current = requestAnimationFrame(animate);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioVisualizer.useEffect": ()=>{
            if (!track) {
                return;
            }
            const startVisualizer = {
                "AudioVisualizer.useEffect.startVisualizer": async ()=>{
                    try {
                        if (audioContextRef.current) {
                            audioContextRef.current.close();
                        }
                        if (animationFrameRef.current) {
                            cancelAnimationFrame(animationFrameRef.current);
                        }
                        audioContextRef.current = new AudioContext();
                        analyserRef.current = audioContextRef.current.createAnalyser();
                        analyserRef.current.fftSize = 64;
                        let mediaStreamTrack;
                        if (track instanceof MediaStream) {
                            const audioTracks = track.getAudioTracks();
                            if (audioTracks.length === 0) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$Z47YZ5WI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].warn("AudioVisualizer: MediaStream has no audio tracks");
                                return;
                            }
                            mediaStreamTrack = audioTracks[0];
                        } else {
                            mediaStreamTrack = track.getMediaStreamTrack();
                        }
                        const stream = new MediaStream([
                            mediaStreamTrack
                        ]);
                        const source = audioContextRef.current.createMediaStreamSource(stream);
                        source.connect(analyserRef.current);
                        setIsVisualizing(true);
                        animate();
                    } catch (error) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$Z47YZ5WI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error("AudioVisualizer: failed to start", error);
                    }
                }
            }["AudioVisualizer.useEffect.startVisualizer"];
            startVisualizer();
            return ({
                "AudioVisualizer.useEffect": ()=>{
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                    if (audioContextRef.current) {
                        audioContextRef.current.close();
                    }
                }
            })["AudioVisualizer.useEffect"];
        }
    }["AudioVisualizer.useEffect"], [
        track
    ]);
    const gradientString = "linear-gradient(to top, ".concat(gradientColors.join(", "), ")");
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg ".concat(className),
        role: "img",
        "aria-label": "Audio frequency visualizer",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "relative z-10 flex h-[100px] items-center space-x-2",
            children: [
                ...Array(9)
            ].map((_, index)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    ref: (el)=>{
                        barsRef.current[index] = el;
                    },
                    className: "visualizer-bar w-3 rounded-full transition-all duration-75",
                    style: {
                        height: "2px",
                        transformOrigin: "bottom",
                        minHeight: "2px",
                        display: "block",
                        position: "relative",
                        background: gradientString,
                        opacity: 1
                    }
                }, index))
        })
    });
};
_s(AudioVisualizer, "cqfH/wv+zb7GQCs41lK173SGZQA=");
_c3 = AudioVisualizer;
;
;
var Response = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = (param, ref)=>{
    let { className, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm leading-relaxed break-words whitespace-pre-wrap", className),
        ...props
    });
});
_c5 = Response;
Response.displayName = "Response";
;
;
;
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    _s1();
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useIsMobile.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return window.innerWidth < MOBILE_BREAKPOINT;
        }
    }["useIsMobile.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useIsMobile.useEffect": ()=>{
            const mql = window.matchMedia("(max-width: ".concat(MOBILE_BREAKPOINT - 1, "px)"));
            const onChange = {
                "useIsMobile.useEffect.onChange": ()=>{
                    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
                }
            }["useIsMobile.useEffect.onChange"];
            mql.addEventListener("change", onChange);
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
            return ({
                "useIsMobile.useEffect": ()=>mql.removeEventListener("change", onChange)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return isMobile;
}
_s1(useIsMobile, "34SrJL9JQnchFr2q495wc7XkHTg=");
// src/lib/message-types.ts
var EMessageStatus = /* @__PURE__ */ ((EMessageStatus2)=>{
    EMessageStatus2[EMessageStatus2["IN_PROGRESS"] = 0] = "IN_PROGRESS";
    EMessageStatus2[EMessageStatus2["END"] = 1] = "END";
    EMessageStatus2[EMessageStatus2["INTERRUPTED"] = 2] = "INTERRUPTED";
    return EMessageStatus2;
})(EMessageStatus || {});
;
function ConvoTextStream(param) {
    let { messageList, currentInProgressMessage = null, agentUID, className = "" } = param;
    _s2();
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldAutoScroll, setShouldAutoScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hasNewMessages, setHasNewMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastMessageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevMessageLengthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(messageList.length);
    const prevMessageTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const hasSeenFirstMessageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const shouldShowStreamingMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConvoTextStream.useCallback[shouldShowStreamingMessage]": ()=>{
            return currentInProgressMessage !== null && currentInProgressMessage.status === 0 /* IN_PROGRESS */  && currentInProgressMessage.text.trim().length > 0;
        }
    }["ConvoTextStream.useCallback[shouldShowStreamingMessage]"], [
        currentInProgressMessage
    ]);
    const scrollToBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConvoTextStream.useCallback[scrollToBottom]": ()=>{
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
        }
    }["ConvoTextStream.useCallback[scrollToBottom]"], []);
    const handleScroll = ()=>{
        if (scrollRef.current) {
            const { scrollHeight, scrollTop, clientHeight } = scrollRef.current;
            const isAtBottom = scrollHeight - scrollTop - clientHeight < 100;
            setShouldAutoScroll(isAtBottom);
        }
    };
    const hasContentChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConvoTextStream.useCallback[hasContentChanged]": ()=>{
            if (!currentInProgressMessage) return false;
            const currentText = currentInProgressMessage.text || "";
            const textLengthDiff = currentText.length - prevMessageTextRef.current.length;
            const hasSignificantChange = textLengthDiff > 20;
            if (hasSignificantChange) {
                prevMessageTextRef.current = currentText;
            }
            return hasSignificantChange;
        }
    }["ConvoTextStream.useCallback[hasContentChanged]"], [
        currentInProgressMessage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConvoTextStream.useEffect3": ()=>{
            const hasNewMessage = messageList.length > 0;
            const hasInProgressMessage = shouldShowStreamingMessage() && currentInProgressMessage !== null;
            if ((hasNewMessage || hasInProgressMessage) && !hasSeenFirstMessageRef.current) {
                setIsOpen(true);
                setHasNewMessages(true);
                hasSeenFirstMessageRef.current = true;
            }
        }
    }["ConvoTextStream.useEffect3"], [
        messageList,
        currentInProgressMessage,
        isMobile,
        shouldShowStreamingMessage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConvoTextStream.useEffect3": ()=>{
            const hasNewMessage = messageList.length > prevMessageLengthRef.current;
            const hasStreamingChange = hasContentChanged();
            if ((hasNewMessage || shouldAutoScroll || hasStreamingChange) && scrollRef.current) {
                scrollToBottom();
            }
            prevMessageLengthRef.current = messageList.length;
        }
    }["ConvoTextStream.useEffect3"], [
        messageList,
        currentInProgressMessage === null || currentInProgressMessage === void 0 ? void 0 : currentInProgressMessage.text,
        shouldAutoScroll,
        hasContentChanged,
        scrollToBottom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConvoTextStream.useEffect3": ()=>{
            if ((currentInProgressMessage === null || currentInProgressMessage === void 0 ? void 0 : currentInProgressMessage.status) === 0 /* IN_PROGRESS */  && shouldAutoScroll) {
                const timer = setTimeout(scrollToBottom, 100);
                return ({
                    "ConvoTextStream.useEffect3": ()=>clearTimeout(timer)
                })["ConvoTextStream.useEffect3"];
            }
        }
    }["ConvoTextStream.useEffect3"], [
        currentInProgressMessage === null || currentInProgressMessage === void 0 ? void 0 : currentInProgressMessage.text,
        currentInProgressMessage === null || currentInProgressMessage === void 0 ? void 0 : currentInProgressMessage.status,
        shouldAutoScroll,
        scrollToBottom
    ]);
    const toggleChat = ()=>{
        setIsOpen(!isOpen);
        if (!isOpen) {
            hasSeenFirstMessageRef.current = true;
            setHasNewMessages(false);
        }
    };
    const isAIMessage = (message)=>{
        return message.uid === 0 || agentUID && message.uid.toString() === agentUID;
    };
    const allMessages = [
        ...messageList
    ];
    if (shouldShowStreamingMessage() && currentInProgressMessage) {
        allMessages.push(currentInProgressMessage);
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        id: "chatbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed z-50", isOpen ? "right-4 bottom-32 left-4 md:right-8 md:bottom-24 md:left-auto" : "right-4 bottom-6 md:right-8 md:bottom-8", className),
        children: isOpen ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: "chatbox expanded mx-auto flex max-w-96 min-w-96 max-h-[600px] flex-col rounded-[15px] shadow-lg md:mx-0",
            style: {
                backgroundColor: "var(--background, #171717)"
            },
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: "flex shrink-0 items-center justify-end p-2",
                    children: [
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("h3", {
                            className: "mr-auto ml-2 font-semibold",
                            children: "Transcription"
                        }),
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                            onClick: toggleChat,
                            className: "inline-flex items-center justify-center rounded-md p-2 transition-colors hover:bg-white/10",
                            "aria-label": "Close transcription",
                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            })
                        })
                    ]
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: "flex-1 overflow-auto",
                    ref: scrollRef,
                    onScroll: handleScroll,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: "space-y-4 p-4",
                        children: allMessages.map((message, index)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                ref: index === allMessages.length - 1 ? lastMessageRef : null,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-start gap-2", isAIMessage(message) ? "flex-row" : "flex-row-reverse"),
                                children: [
                                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-medium",
                                        style: {
                                            backgroundColor: isAIMessage(message) ? "var(--primary, #A0FAFF)" : "var(--card_layer_1, #333333)",
                                            color: isAIMessage(message) ? "var(--font-high, #000000)" : "var(--foreground, #ffffff)"
                                        },
                                        children: isAIMessage(message) ? "AI" : "U"
                                    }),
                                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex", isAIMessage(message) ? "flex-col items-start" : "flex-col items-end"),
                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-[15px] px-3 py-2", isAIMessage(message) ? "text-left" : "text-right", message.status === 0 /* IN_PROGRESS */  && "animate-pulse"),
                                            style: {
                                                backgroundColor: isAIMessage(message) ? "transparent" : "var(--card_layer_1, #333333)",
                                                color: isAIMessage(message) ? "var(--primary, #A0FAFF)" : "var(--foreground, #ffffff)"
                                            },
                                            dangerouslySetInnerHTML: {
                                                __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderMarkdownToHtml"])(message.text)
                                            }
                                        })
                                    })
                                ]
                            }, "".concat(message.turn_id, "-").concat(message.uid, "-").concat(message.status)))
                    })
                })
            ]
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
            onClick: toggleChat,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group mr-2 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ease-in-out hover:scale-110 active:scale-110", "border-white bg-[#333333] hover:bg-white active:bg-white", hasNewMessages && "animate-chat-pulse"),
            "aria-label": "Open transcription",
            "aria-expanded": false,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                className: "h-6 w-6 text-white transition-colors duration-300 ease-in-out group-hover:text-black group-active:text-black"
            })
        })
    });
}
_s2(ConvoTextStream, "Fgo+QYBLIvZvE+qopTaObvWnZrE=", false, function() {
    return [
        useIsMobile,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]
    ];
});
_c6 = ConvoTextStream;
;
;
var sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12"
};
var getInitials = (name, customInitials)=>{
    if (customInitials) return customInitials.toUpperCase();
    if (name) {
        return name.split(" ").slice(0, 2).map((part)=>part[0]).join("").toUpperCase();
    }
    return "?";
};
var Avatar = /*#__PURE__*/ _s3(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = _s3((param, ref)=>{
    let { className, src, icon, initials, name, size = "md", bgColor = "bg-gradient-to-br from-blue-500 to-blue-600", alt = "avatar", ...props } = param;
    _s3();
    const [imageError, setImageError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const displayInitials = getInitials(name, initials);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ring-border flex items-center justify-center overflow-hidden rounded-full ring-1", sizeClasses[size], className),
        ...props,
        children: src && !imageError ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("img", {
            src,
            alt,
            className: "h-full w-full object-cover",
            onError: ()=>setImageError(true)
        }) : icon ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full w-full flex items-center justify-center text-white", bgColor),
            children: icon
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full w-full flex items-center justify-center text-xs font-semibold text-white", bgColor),
            children: displayInitials
        })
    });
}, "gLR0P7wgc8ZXiun/rQPANvAzwwQ=")), "gLR0P7wgc8ZXiun/rQPANvAzwwQ=");
_c8 = Avatar;
Avatar.displayName = "Avatar";
;
;
function useVideoPlayback(param) {
    let { videoTrack, useMediaStream, videoContainerRef, videoElementRef, debugLabel = "useVideoPlayback" } = param;
    _s4();
    const [isPlaying, setIsPlaying] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useVideoPlayback.useEffect": ()=>{
            if (!useMediaStream || !videoTrack || !videoElementRef.current) {
                if (useMediaStream) setIsPlaying(false);
                return;
            }
            try {
                const mediaStreamTrack = videoTrack.getMediaStreamTrack();
                const stream = new MediaStream([
                    mediaStreamTrack
                ]);
                videoElementRef.current.srcObject = stream;
                videoElementRef.current.play().catch({
                    "useVideoPlayback.useEffect": (error)=>{
                        if (error.name !== "AbortError") {
                            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$Z47YZ5WI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error("".concat(debugLabel, ": MediaStream playback failed"), error);
                        }
                    }
                }["useVideoPlayback.useEffect"]);
                setIsPlaying(true);
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$Z47YZ5WI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error("".concat(debugLabel, ": failed to attach MediaStream"), error);
                setIsPlaying(false);
            }
            return ({
                "useVideoPlayback.useEffect": ()=>{
                    if (videoElementRef.current) {
                        videoElementRef.current.srcObject = null;
                    }
                    setIsPlaying(false);
                }
            })["useVideoPlayback.useEffect"];
        }
    }["useVideoPlayback.useEffect"], [
        videoTrack,
        useMediaStream,
        debugLabel
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useVideoPlayback.useEffect": ()=>{
            if (useMediaStream || !videoTrack || !videoContainerRef.current) {
                if (!useMediaStream) setIsPlaying(false);
                return;
            }
            try {
                videoTrack.play(videoContainerRef.current);
                setIsPlaying(true);
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$Z47YZ5WI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error("".concat(debugLabel, ": failed to play video track"), error);
                setIsPlaying(false);
            }
            return ({
                "useVideoPlayback.useEffect": ()=>{
                    try {
                        videoTrack.stop();
                        setIsPlaying(false);
                    } catch (error) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$Z47YZ5WI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error("".concat(debugLabel, ": failed to stop video track"), error);
                    }
                }
            })["useVideoPlayback.useEffect"];
        }
    }["useVideoPlayback.useEffect"], [
        videoTrack,
        useMediaStream,
        debugLabel
    ]);
    return {
        isPlaying
    };
}
_s4(useVideoPlayback, "fXAELlDlOxHwQE3qVmptCmPKGNo=");
;
var AvatarVideoDisplay = /*#__PURE__*/ _s5(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c9 = _s5((param, ref)=>{
    let { className, videoTrack, state = "disconnected", showStatus = false, placeholder, useMediaStream = false, objectFit = "cover", ...props } = param;
    _s5();
    const videoContainerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const videoElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const { isPlaying } = useVideoPlayback({
        videoTrack: videoTrack !== null && videoTrack !== void 0 ? videoTrack : null,
        useMediaStream,
        videoContainerRef,
        videoElementRef,
        debugLabel: "AvatarVideoDisplay"
    });
    const showPlaceholder = !isPlaying || state === "disconnected";
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden rounded-lg bg-muted", "flex items-center justify-center", className),
        ...props,
        children: [
            !useMediaStream && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ref: videoContainerRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-2 rounded-lg overflow-hidden", showPlaceholder && "hidden")
            }),
            useMediaStream && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("video", {
                ref: videoElementRef,
                autoPlay: true,
                playsInline: true,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-lg", showPlaceholder && "hidden"),
                style: {
                    objectFit
                }
            }),
            showPlaceholder && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-muted-foreground",
                children: placeholder || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: "flex flex-col items-center gap-2",
                    children: [
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            className: "h-16 w-16 rounded-full bg-slate-700/50 flex items-center justify-center",
                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
                                className: "h-8 w-8",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                })
                            })
                        }),
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                            className: "text-sm",
                            children: state === "loading" ? "Connecting..." : "No video"
                        })
                    ]
                })
            }),
            showStatus && state !== "disconnected" && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "absolute top-2 right-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm",
                children: [
                    state === "loading" && "Connecting...",
                    state === "connected" && isPlaying && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                        className: "flex items-center gap-1",
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                className: "h-2 w-2 rounded-full bg-green-500 animate-pulse"
                            }),
                            "Live"
                        ]
                    })
                ]
            })
        ]
    });
}, "VKD1qRNDPE0lvUUbz+wxT8OpdMw=", false, function() {
    return [
        useVideoPlayback
    ];
})), "VKD1qRNDPE0lvUUbz+wxT8OpdMw=", false, function() {
    return [
        useVideoPlayback
    ];
});
_c10 = AvatarVideoDisplay;
AvatarVideoDisplay.displayName = "AvatarVideoDisplay";
;
;
;
var LocalVideoPreview = /*#__PURE__*/ _s6(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c11 = _s6((param, ref)=>{
    let { className, videoTrack, isMirrored = true, showLabel = false, label = "You", placeholder, useMediaStream = false, isVideoMuted = false, onToggleMute, showMuteControl = false, objectFit = "cover", ...props } = param;
    _s6();
    const videoContainerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const videoElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [isHovering, setIsHovering] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const { isPlaying } = useVideoPlayback({
        videoTrack: videoTrack !== null && videoTrack !== void 0 ? videoTrack : null,
        useMediaStream,
        videoContainerRef,
        videoElementRef,
        debugLabel: "LocalVideoPreview"
    });
    const showPlaceholder = !isPlaying;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden rounded-lg bg-muted", "flex items-center justify-center", className),
        onMouseEnter: ()=>setIsHovering(true),
        onMouseLeave: ()=>setIsHovering(false),
        ...props,
        children: [
            !useMediaStream && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ref: videoContainerRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-2 rounded-lg overflow-hidden", isMirrored && "scale-x-[-1]", showPlaceholder && "hidden")
            }),
            useMediaStream && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("video", {
                ref: videoElementRef,
                autoPlay: true,
                playsInline: true,
                muted: true,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-lg", isMirrored && "scale-x-[-1]", showPlaceholder && "hidden"),
                style: {
                    objectFit
                }
            }),
            showPlaceholder && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 text-muted-foreground",
                children: placeholder || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: "flex flex-col items-center gap-2",
                    children: [
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            className: "h-12 w-12 rounded-full bg-slate-600/50 flex items-center justify-center",
                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                className: "h-6 w-6"
                            })
                        }),
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                            className: "text-xs",
                            children: "Camera off"
                        })
                    ]
                })
            }),
            showLabel && isPlaying && label && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm",
                children: label
            }),
            showMuteControl && onToggleMute && isPlaying && isHovering && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]",
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        onToggleMute();
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center rounded-full p-4 transition-all", "bg-black/60 hover:bg-black/80 text-white", "shadow-lg backdrop-blur-sm"),
                    "aria-label": isVideoMuted ? "Unmute video" : "Mute video",
                    children: isVideoMuted ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                        className: "h-6 w-6"
                    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                        className: "h-6 w-6"
                    })
                })
            })
        ]
    });
}, "2ouSdX8AHEbh5V5KPCg4FHCbwyg=", false, function() {
    return [
        useVideoPlayback
    ];
})), "2ouSdX8AHEbh5V5KPCg4FHCbwyg=", false, function() {
    return [
        useVideoPlayback
    ];
});
_c12 = LocalVideoPreview;
LocalVideoPreview.displayName = "LocalVideoPreview";
;
;
;
;
function Popover(param) {
    let { ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1_5ztkp22xhcwd7pzy4sv3v7w3re$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "popover",
        ...props
    });
}
_c13 = Popover;
function PopoverTrigger(param) {
    let { ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1_5ztkp22xhcwd7pzy4sv3v7w3re$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "popover-trigger",
        ...props
    });
}
_c14 = PopoverTrigger;
function PopoverContent(param) {
    let { className, align = "center", sideOffset = 4, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1_5ztkp22xhcwd7pzy4sv3v7w3re$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1_5ztkp22xhcwd7pzy4sv3v7w3re$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "popover-content",
            align,
            sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", className),
            ...props
        })
    });
}
_c15 = PopoverContent;
;
var CameraSelector = /*#__PURE__*/ _s7(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c16 = _s7((param, ref)=>{
    let { devices = [], value, onValueChange, disabled = false, onDisabledChange, hasError = false, className } = param;
    _s7();
    const [isOpen, setIsOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const selectedDevice = devices.find((d)=>d.deviceId === value) || devices[0];
    const handleToggleCamera = ()=>{
        onDisabledChange === null || onDisabledChange === void 0 ? void 0 : onDisabledChange(!disabled);
    };
    const handleSelectDevice = (deviceId)=>{
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(deviceId);
        setIsOpen(false);
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-2 rounded-lg border bg-background px-3 py-2", hasError && "border-destructive", className),
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                onClick: handleToggleCamera,
                "aria-label": "Toggle camera",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-8 w-8 items-center justify-center rounded-full transition-colors", "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none", hasError ? "bg-destructive/10 text-destructive hover:bg-destructive/20" : disabled ? "bg-muted text-muted-foreground hover:bg-muted/80" : "bg-primary/10 text-primary hover:bg-primary/20"),
                children: hasError || disabled ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                    className: "h-4 w-4"
                }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                    className: "h-4 w-4"
                })
            }),
            devices.length > 0 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Popover, {
                open: isOpen,
                onOpenChange: setIsOpen,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(PopoverTrigger, {
                        "aria-label": "Select camera device",
                        className: "flex items-center gap-2 text-sm hover:text-foreground/80",
                        disabled: disabled || hasError,
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                className: "max-w-[150px] truncate",
                                children: (selectedDevice === null || selectedDevice === void 0 ? void 0 : selectedDevice.label) || "Select camera"
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 transition-transform", isOpen && "rotate-180")
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopoverContent, {
                        align: "start",
                        sideOffset: 8,
                        className: "w-64 p-1",
                        children: devices.map((device)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("button", {
                                onClick: ()=>handleSelectDevice(device.deviceId),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-center justify-between rounded px-3 py-2 text-sm hover:bg-accent", device.deviceId === value && "bg-accent"),
                                children: [
                                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                        className: "truncate",
                                        children: device.label
                                    }),
                                    device.deviceId === value && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "h-4 w-4 flex-shrink-0"
                                    })
                                ]
                            }, device.deviceId))
                    })
                ]
            }),
            devices.length === 0 && !hasError && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: "text-sm text-muted-foreground",
                children: "No cameras available"
            }),
            hasError && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-amber-900",
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    className: "text-xs font-bold leading-none",
                    children: "!"
                })
            })
        ]
    });
}, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=")), "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c17 = CameraSelector;
CameraSelector.displayName = "CameraSelector";
;
;
var VideoGrid = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c18 = (param, ref)=>{
    let { className, avatar, chat, localVideo, controls: _controls, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid h-full w-full", className),
        style: {
            gridTemplateColumns: "40% 60%",
            gridTemplateRows: "1fr 1fr",
            gap: "1rem"
        },
        ...props,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "overflow-hidden rounded-lg border bg-card shadow-lg",
                style: {
                    gridRow: "1"
                },
                children: chat
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "overflow-hidden rounded-lg border bg-card shadow-lg",
                style: {
                    gridRow: "1 / 3",
                    gridColumn: "2"
                },
                children: avatar
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "overflow-hidden rounded-lg border bg-card shadow-lg",
                style: {
                    gridRow: "2"
                },
                children: localVideo
            })
        ]
    });
});
_c19 = VideoGrid;
VideoGrid.displayName = "VideoGrid";
var VideoGridWithControls = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c20 = (param, ref)=>{
    let { className, avatar, chat, localVideo, controls, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid h-full w-full gap-4", "grid-cols-2 grid-rows-2", className),
        ...props,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "overflow-hidden rounded-lg border bg-card shadow-lg",
                children: chat
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "overflow-hidden rounded-lg border bg-card shadow-lg",
                children: avatar
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "overflow-hidden rounded-lg border bg-card shadow-lg",
                children: localVideo
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "overflow-hidden rounded-lg border bg-card shadow-lg p-4 flex items-center justify-center",
                children: controls
            })
        ]
    });
});
_c21 = VideoGridWithControls;
VideoGridWithControls.displayName = "VideoGridWithControls";
;
;
var MobileTabs = /*#__PURE__*/ _s8(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c22 = _s8((param, ref)=>{
    let { className, tabs, activeTab: controlledActiveTab, onTabChange, tabPosition = "top", ...props } = param;
    var _tabs_, _tabs_find;
    _s8();
    const [internalActiveTab, setInternalActiveTab] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](((_tabs_ = tabs[0]) === null || _tabs_ === void 0 ? void 0 : _tabs_.id) || "");
    const activeTab = controlledActiveTab !== void 0 ? controlledActiveTab : internalActiveTab;
    const activeTabContent = (_tabs_find = tabs.find((tab)=>tab.id === activeTab)) === null || _tabs_find === void 0 ? void 0 : _tabs_find.content;
    const handleTabChange = (tabId)=>{
        if (controlledActiveTab === void 0) {
            setInternalActiveTab(tabId);
        }
        onTabChange === null || onTabChange === void 0 ? void 0 : onTabChange(tabId);
    };
    const tabButtons = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "flex border-b bg-muted/30",
        role: "tablist",
        children: tabs.map((tab, index)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("button", {
                        role: "tab",
                        "aria-selected": activeTab === tab.id,
                        onClick: ()=>handleTabChange(tab.id),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer flex flex-1 items-center justify-center gap-2 px-3 py-2 text-sm font-medium transition-colors", activeTab === tab.id ? "bg-background text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"),
                        children: [
                            tab.icon && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                className: "h-4 w-4",
                                children: tab.icon
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                children: tab.label
                            })
                        ]
                    }),
                    index < tabs.length - 1 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: "w-px bg-border"
                    })
                ]
            }, tab.id))
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full flex-col overflow-hidden", className),
        ...props,
        children: [
            tabPosition === "top" && tabButtons,
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "flex-1 overflow-hidden",
                role: "tabpanel",
                children: activeTabContent
            }),
            tabPosition === "bottom" && tabButtons
        ]
    });
}, "naEm3ghSiKXjD9IgVgXog0k1Dww=")), "naEm3ghSiKXjD9IgVgXog0k1Dww=");
_c23 = MobileTabs;
MobileTabs.displayName = "MobileTabs";
;
function Card(param) {
    let { className, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-3 rounded-md border p-4", className),
        ...props
    });
}
_c24 = Card;
function CardTitle(param) {
    let { className, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-tiny leading-none font-semibold uppercase", className),
        ...props
    });
}
_c25 = CardTitle;
function CardContent(param) {
    let { className, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-tiny", className),
        ...props
    });
}
_c26 = CardContent;
;
;
;
;
var ValuePicker = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c27 = (param, ref)=>{
    let { items, value, onValueChange, placeholder = "Select a value...", label, disabled, open, onOpenChange, maxHeight } = param;
    const selectedItem = items.find((i)=>i.id === value);
    const hasScroll = !!maxHeight;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: "flex flex-col gap-3",
        children: [
            label && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                className: "text-small font-medium",
                children: label
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_vqlgveintfgb4slrw5v6ylsbay$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                value,
                onValueChange,
                open,
                onOpenChange,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_vqlgveintfgb4slrw5v6ylsbay$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                        ref,
                        disabled,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-input-field-bg text-font-high text-normal inline-flex w-full items-center justify-between border p-3 font-medium outline-hidden", "data-[state=closed]:rounded-md data-[state=open]:rounded-none", "data-[placeholder]:text-muted-foreground", "disabled:pointer-events-none disabled:opacity-50"),
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_vqlgveintfgb4slrw5v6ylsbay$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
                                placeholder,
                                asChild: true,
                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                    className: "truncate leading-tight",
                                    children: (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.name) || placeholder
                                })
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_vqlgveintfgb4slrw5v6ylsbay$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                asChild: true,
                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "size-5"
                                })
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_vqlgveintfgb4slrw5v6ylsbay$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_vqlgveintfgb4slrw5v6ylsbay$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-input-field-bg text-font-high text-normal border-t-primary-brand relative z-50 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-br-md rounded-bl-md border p-0", "data-[state=open]:animate-in data-[state=closed]:animate-out", "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", "data-[side=bottom]:slide-in-from-top-2", "data-[side=left]:slide-in-from-right-2", "data-[side=right]:slide-in-from-left-2", "data-[side=top]:slide-in-from-bottom-2"),
                            position: "popper",
                            sideOffset: 0,
                            children: [
                                hasScroll && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_vqlgveintfgb4slrw5v6ylsbay$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
                                    className: "flex cursor-default items-center justify-center py-1",
                                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "size-4 rotate-180"
                                    })
                                }),
                                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_vqlgveintfgb4slrw5v6ylsbay$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(hasScroll && "overflow-y-auto"),
                                    style: hasScroll ? {
                                        maxHeight
                                    } : void 0,
                                    children: items.length === 0 ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: "text-muted-foreground py-6 text-center text-sm",
                                        children: "No items found."
                                    }) : items.map((item)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_vqlgveintfgb4slrw5v6ylsbay$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                                            value: item.id,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-input-field-bg text-normal relative flex cursor-pointer items-center gap-2 rounded-sm p-3 pr-8 outline-hidden select-none", "transition-colors hover:rounded-none hover:bg-[var(--color-neutral)]/25", "data-[state=checked]:rounded-none data-[state=checked]:bg-[var(--color-neutral)]/15", "focus-visible:bg-[var(--color-neutral)]/15"),
                                            children: [
                                                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_vqlgveintfgb4slrw5v6ylsbay$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                                                    className: "flex-1",
                                                    children: item.name
                                                }),
                                                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                    className: "pointer-events-none absolute right-3 flex size-4 items-center justify-center",
                                                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_vqlgveintfgb4slrw5v6ylsbay$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "size-4"
                                                        })
                                                    })
                                                })
                                            ]
                                        }, item.id))
                                }),
                                hasScroll && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_vqlgveintfgb4slrw5v6ylsbay$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
                                    className: "flex cursor-default items-center justify-center py-1",
                                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "size-4"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
});
_c28 = ValuePicker;
ValuePicker.displayName = "ValuePicker";
;
;
;
function Command(param) {
    let { className, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"], {
        "data-slot": "command",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", className),
        ...props
    });
}
_c29 = Command;
;
;
;
;
var Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$_xsxbxa6bnzzue5b7vv3fg6qbxa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
var DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$_xsxbxa6bnzzue5b7vv3fg6qbxa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
var DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$_xsxbxa6bnzzue5b7vv3fg6qbxa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
var DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c30 = (param, ref)=>{
    let { className, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$_xsxbxa6bnzzue5b7vv3fg6qbxa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    });
});
_c31 = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$_xsxbxa6bnzzue5b7vv3fg6qbxa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
var DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c32 = (param, ref)=>{
    let { className, children, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(DialogPortal, {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogOverlay, {}),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$_xsxbxa6bnzzue5b7vv3fg6qbxa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref,
                style: {
                    position: "fixed",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)"
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 grid w-[calc(100%-2rem)] max-w-2xl gap-4 border bg-background p-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 rounded-lg", "sm:w-full sm:p-6", "max-h-[90vh] overflow-y-auto", className),
                ...props,
                children
            })
        ]
    });
});
_c33 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$_xsxbxa6bnzzue5b7vv3fg6qbxa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
var DialogHeader = (param)=>{
    let { className, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left pl-1", className),
        ...props
    });
};
_c34 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
var DialogFooter = (param)=>{
    let { className, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
};
_c35 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
var DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c36 = (param, ref)=>{
    let { className, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$_xsxbxa6bnzzue5b7vv3fg6qbxa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    });
});
_c37 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$_xsxbxa6bnzzue5b7vv3fg6qbxa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
var DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c38 = (param, ref)=>{
    let { className, ...props } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$_xsxbxa6bnzzue5b7vv3fg6qbxa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    });
});
_c39 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$_xsxbxa6bnzzue5b7vv3fg6qbxa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
;
;
var DEFAULT_LANGUAGES = [
    {
        id: "en-US",
        name: "English (US)"
    },
    {
        id: "en-GB",
        name: "English (UK)"
    },
    {
        id: "es-ES",
        name: "Spanish (Spain)"
    },
    {
        id: "es-MX",
        name: "Spanish (Mexico)"
    },
    {
        id: "fr-FR",
        name: "French"
    },
    {
        id: "de-DE",
        name: "German"
    },
    {
        id: "it-IT",
        name: "Italian"
    },
    {
        id: "pt-BR",
        name: "Portuguese (Brazil)"
    },
    {
        id: "ja-JP",
        name: "Japanese"
    },
    {
        id: "ko-KR",
        name: "Korean"
    },
    {
        id: "zh-CN",
        name: "Chinese (Simplified)"
    },
    {
        id: "zh-TW",
        name: "Chinese (Traditional)"
    }
];
var AgentSettings = /*#__PURE__*/ _s9(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c40 = _s9((param, ref)=>{
    let { selectedMicId, onMicChange, enableAivad, onEnableAivadChange, language, onLanguageChange, prompt, onPromptChange, greeting, onGreetingChange, languages = DEFAULT_LANGUAGES, disabled = false, className } = param;
    _s9();
    const { devices: audioDevices } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$PGN4AQHD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioDevices"])();
    const SYSTEM_DEFAULT_MIC = "system-default";
    const micItems = [
        {
            id: SYSTEM_DEFAULT_MIC,
            name: "System Default"
        },
        ...audioDevices.map((d)=>({
                id: d.deviceId,
                name: d.label
            }))
    ];
    const handleMicValueChange = (value)=>{
        onMicChange === null || onMicChange === void 0 ? void 0 : onMicChange(value === SYSTEM_DEFAULT_MIC ? "" : value);
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-6", className),
        children: [
            onMicChange && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ValuePicker, {
                label: "Microphone",
                items: micItems,
                value: selectedMicId || SYSTEM_DEFAULT_MIC,
                onValueChange: handleMicValueChange,
                placeholder: "Select a microphone...",
                maxHeight: "200px"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ValuePicker, {
                label: "Speech Recognition Language",
                items: languages,
                value: language,
                onValueChange: onLanguageChange,
                placeholder: "Select a language...",
                disabled,
                maxHeight: "300px"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "flex items-center justify-between bg-input-field-bg border rounded-md p-3 pr-4",
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: "text-sm font-medium",
                        children: "AI Turn Detection"
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$switch$40$1$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_rrgv2b73tuwa3vxmdkaw6ookyu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                        checked: enableAivad,
                        onCheckedChange: onEnableAivadChange,
                        disabled,
                        style: {
                            width: "44px",
                            height: "24px",
                            padding: "2px"
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors", "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", "disabled:cursor-not-allowed disabled:opacity-50", enableAivad ? "bg-primary" : "bg-input"),
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$switch$40$1$2e$2$2e$6_$40$types$2b$react$2d$dom$40$19$2e$1$2e$2_$40$types$2b$react$40$19$2e$1$2e$2_$5f40$types$2b$react$40$19$2e$1$2e$2_rrgv2b73tuwa3vxmdkaw6ookyu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
                            style: {
                                transform: enableAivad ? "translateX(20px)" : "translateX(0)"
                            },
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform")
                        })
                    })
                ]
            }),
            onPromptChange && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "flex flex-col gap-3",
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                        htmlFor: "agent-prompt",
                        className: "text-small font-medium",
                        children: "System Prompt"
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("textarea", {
                        id: "agent-prompt",
                        value: prompt || "",
                        onChange: (e)=>onPromptChange(e.target.value),
                        disabled,
                        placeholder: "You are a helpful AI assistant...",
                        rows: 6,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full rounded-md border border-input bg-input-field-bg px-3 py-2 text-sm", "focus:outline-none focus:ring-2 focus:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", "resize-none")
                    })
                ]
            }),
            onGreetingChange && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "flex flex-col gap-3",
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                        htmlFor: "agent-greeting",
                        className: "text-small font-medium",
                        children: "Greeting Message"
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                        id: "agent-greeting",
                        type: "text",
                        value: greeting || "",
                        onChange: (e)=>onGreetingChange(e.target.value),
                        disabled,
                        placeholder: "Hello! How can I help you today?",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full rounded-md border border-input bg-input-field-bg px-3 py-2 text-sm", "focus:outline-none focus:ring-2 focus:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50")
                    })
                ]
            })
        ]
    });
}, "PHaG9aN3TeqFIymhStxysmJUx7g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$PGN4AQHD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioDevices"]
    ];
})), "PHaG9aN3TeqFIymhStxysmJUx7g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$PGN4AQHD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioDevices"]
    ];
});
_c41 = AgentSettings;
AgentSettings.displayName = "AgentSettings";
;
var SettingsDialog = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c42 = (param, ref)=>{
    let { open, onOpenChange, title = "Agent Settings", description, children, ...agentSettingsProps } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Dialog, {
        open,
        onOpenChange,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(DialogContent, {
            ref,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(DialogHeader, {
                    children: [
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogTitle, {
                            children: title
                        }),
                        description && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogDescription, {
                            children: description
                        }),
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(DialogClose, {
                            className: "cursor-pointer absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                            children: [
                                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                                            d: "M18 6 6 18"
                                        }),
                                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                                            d: "m6 6 12 12"
                                        })
                                    ]
                                }),
                                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                    className: "sr-only",
                                    children: "Close"
                                })
                            ]
                        })
                    ]
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AgentSettings, {
                    ...agentSettingsProps
                }),
                children
            ]
        })
    });
});
_c43 = SettingsDialog;
SettingsDialog.displayName = "SettingsDialog";
;
;
function CopyButton(param) {
    let { text } = param;
    _s10();
    const [copied, setCopied] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const handleCopy = async ()=>{
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2e3);
        } catch (e) {
            try {
                const textarea = document.createElement("textarea");
                textarea.value = text;
                textarea.style.position = "fixed";
                textarea.style.opacity = "0";
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
                setCopied(true);
                setTimeout(()=>setCopied(false), 2e3);
            } catch (e) {}
        }
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
        type: "button",
        onClick: handleCopy,
        className: "ml-2 shrink-0 rounded px-2 py-0.5 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
        children: copied ? "Copied" : "Copy"
    });
}
_s10(CopyButton, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c44 = CopyButton;
var SessionPanel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c45 = (param, ref)=>{
    let { agentId, payload, className, ...props } = param;
    if (!agentId) return null;
    const payloadJson = payload ? JSON.stringify(payload, null, 2) : "";
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$322AI65H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-4 border-t pt-4 mt-4", className),
        ...props,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                                className: "text-sm font-medium text-muted-foreground",
                                children: "Agent ID"
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CopyButton, {
                                text: agentId
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("code", {
                        className: "mt-1 block rounded-md bg-muted px-3 py-2 text-xs font-mono break-all",
                        children: agentId
                    })
                ]
            }),
            payload && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                                className: "text-sm font-medium text-muted-foreground",
                                children: "Join Request Body"
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CopyButton, {
                                text: payloadJson
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("pre", {
                        className: "mt-1 max-h-64 overflow-auto rounded-md bg-muted px-3 py-2 text-xs font-mono whitespace-pre-wrap break-all",
                        children: payloadJson
                    })
                ]
            })
        ]
    });
});
_c46 = SessionPanel;
SessionPanel.displayName = "SessionPanel";
;
function AgoraLogo(param) {
    let { size = 18, className = "" } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M8.715 13.81a4.81 4.81 0 1 1 0-9.62 4.81 4.81 0 0 1 0 9.62Zm5.602-11.818-.074.098-.073.097-.097-.073-.093-.073a8.722 8.722 0 1 0-5.265 15.68 8.63 8.63 0 0 0 5.265-1.772l.093-.068.097-.078.073.102.074.098a4.16 4.16 0 0 0 2.798 1.68l.322.044V.273l-.322.044a4.165 4.165 0 0 0-2.798 1.675Z",
            fill: "#00C2FF"
        })
    });
}
_c47 = AgoraLogo;
// src/lib/theme/apply-theme.ts
var CSS_VAR_MAP = {
    PRIMARY_COLOR: "--primary",
    PRIMARY_ACTION_BRAND_COLOR: "--primary-brand",
    FONT_COLOR: "--foreground",
    PRIMARY_FONT_COLOR: "--font-high",
    SECONDARY_FONT_COLOR: "--secondary-foreground",
    BACKGROUND_COLOR: "--background",
    ICON_BG_COLOR: "--icon-bg",
    TOOLBAR_COLOR: "--toolbar-color",
    INPUT_FIELD_BACKGROUND_COLOR: "--input-field-bg",
    INPUT_FIELD_BORDER_COLOR: "--input-field-border",
    CARD_LAYER_1_COLOR: "--card_layer_1",
    CARD_LAYER_2_COLOR: "--card_layer_2",
    CARD_LAYER_3_COLOR: "--card_layer_3",
    CARD_LAYER_4_COLOR: "--card_layer_4",
    CARD_LAYER_5_COLOR: "--card_layer_5",
    VIDEO_AUDIO_TILE_COLOR: "--video-tile",
    VIDEO_AUDIO_TILE_OVERLAY_COLOR: "--video-tile-overlay",
    VIDEO_AUDIO_TILE_TEXT_COLOR: "--video-tile-text",
    VIDEO_AUDIO_TILE_AVATAR_COLOR: "--video-tile-avatar",
    SEMANTIC_ERROR: "--semantic-error",
    SEMANTIC_SUCCESS: "--semantic-success",
    SEMANTIC_WARNING: "--semantic-warning",
    SEMANTIC_NEUTRAL: "--semantic-neutral"
};
function applyCustomTheme(config) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const root = document.documentElement;
    Object.entries(config).forEach((param)=>{
        let [apiField, colorValue] = param;
        if (colorValue && typeof colorValue === "string") {
            const cssVar = CSS_VAR_MAP[apiField];
            if (cssVar) {
                root.style.setProperty(cssVar, colorValue);
            }
        }
    });
}
function hexToRgbString(hex) {
    let v = hex.trim();
    if (!v.startsWith("#")) return null;
    v = v.slice(1);
    if (v.length === 3) {
        const r = parseInt(v[0] + v[0], 16);
        const g = parseInt(v[1] + v[1], 16);
        const b = parseInt(v[2] + v[2], 16);
        return "".concat(r, ", ").concat(g, ", ").concat(b);
    }
    if (v.length === 6) {
        const r = parseInt(v.slice(0, 2), 16);
        const g = parseInt(v.slice(2, 4), 16);
        const b = parseInt(v.slice(4, 6), 16);
        return "".concat(r, ", ").concat(g, ", ").concat(b);
    }
    return null;
}
function getCurrentTheme() {
    const root = document.documentElement;
    const computed = getComputedStyle(root);
    const theme = {};
    Object.values(CSS_VAR_MAP).forEach((cssVar)=>{
        theme[cssVar] = computed.getPropertyValue(cssVar).trim();
    });
    return theme;
}
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44, _c45, _c46, _c47;
__turbopack_context__.k.register(_c, "SimpleVisualizer");
__turbopack_context__.k.register(_c1, "MicButton$React.forwardRef");
__turbopack_context__.k.register(_c2, "MicButton");
__turbopack_context__.k.register(_c3, "AudioVisualizer");
__turbopack_context__.k.register(_c4, "Response$React3.forwardRef");
__turbopack_context__.k.register(_c5, "Response");
__turbopack_context__.k.register(_c6, "ConvoTextStream");
__turbopack_context__.k.register(_c7, "Avatar$React5.forwardRef");
__turbopack_context__.k.register(_c8, "Avatar");
__turbopack_context__.k.register(_c9, "AvatarVideoDisplay$React7.forwardRef");
__turbopack_context__.k.register(_c10, "AvatarVideoDisplay");
__turbopack_context__.k.register(_c11, "LocalVideoPreview$React8.forwardRef");
__turbopack_context__.k.register(_c12, "LocalVideoPreview");
__turbopack_context__.k.register(_c13, "Popover");
__turbopack_context__.k.register(_c14, "PopoverTrigger");
__turbopack_context__.k.register(_c15, "PopoverContent");
__turbopack_context__.k.register(_c16, "CameraSelector$React9.forwardRef");
__turbopack_context__.k.register(_c17, "CameraSelector");
__turbopack_context__.k.register(_c18, "VideoGrid$React10.forwardRef");
__turbopack_context__.k.register(_c19, "VideoGrid");
__turbopack_context__.k.register(_c20, "VideoGridWithControls$React10.forwardRef");
__turbopack_context__.k.register(_c21, "VideoGridWithControls");
__turbopack_context__.k.register(_c22, "MobileTabs$React11.forwardRef");
__turbopack_context__.k.register(_c23, "MobileTabs");
__turbopack_context__.k.register(_c24, "Card");
__turbopack_context__.k.register(_c25, "CardTitle");
__turbopack_context__.k.register(_c26, "CardContent");
__turbopack_context__.k.register(_c27, "ValuePicker$React12.forwardRef");
__turbopack_context__.k.register(_c28, "ValuePicker");
__turbopack_context__.k.register(_c29, "Command");
__turbopack_context__.k.register(_c30, "DialogOverlay$React13.forwardRef");
__turbopack_context__.k.register(_c31, "DialogOverlay");
__turbopack_context__.k.register(_c32, "DialogContent$React13.forwardRef");
__turbopack_context__.k.register(_c33, "DialogContent");
__turbopack_context__.k.register(_c34, "DialogHeader");
__turbopack_context__.k.register(_c35, "DialogFooter");
__turbopack_context__.k.register(_c36, "DialogTitle$React13.forwardRef");
__turbopack_context__.k.register(_c37, "DialogTitle");
__turbopack_context__.k.register(_c38, "DialogDescription$React13.forwardRef");
__turbopack_context__.k.register(_c39, "DialogDescription");
__turbopack_context__.k.register(_c40, "AgentSettings$React14.forwardRef");
__turbopack_context__.k.register(_c41, "AgentSettings");
__turbopack_context__.k.register(_c42, "SettingsDialog$React15.forwardRef");
__turbopack_context__.k.register(_c43, "SettingsDialog");
__turbopack_context__.k.register(_c44, "CopyButton");
__turbopack_context__.k.register(_c45, "SessionPanel$React16.forwardRef");
__turbopack_context__.k.register(_c46, "SessionPanel");
__turbopack_context__.k.register(_c47, "AgoraLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=index.mjs.map
}),
"[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AgentVisualizerDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$basepath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/lib/basepath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-3XFL3AIM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/uikit/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/components/ui/tabs.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const states = [
    "not-joined",
    "joining",
    "ambient",
    "listening",
    "analyzing",
    "talking",
    "disconnected"
];
const sizeItems = [
    {
        id: "sm",
        name: "Small"
    },
    {
        id: "md",
        name: "Medium"
    },
    {
        id: "lg",
        name: "Large"
    }
];
function AgentVisualizerDemo() {
    _s();
    const [selectedState, setSelectedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("listening");
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("md");
    const lottieBasePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$basepath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLottieBasePath"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl space-y-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
            defaultValue: "interactive",
            className: "w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center border-b pb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "interactive",
                                children: "Interactive"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "all-states",
                                children: "All States"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "sizes",
                                children: "Sizes"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                    value: "interactive",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 rounded-lg border p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-muted flex items-center justify-center rounded-lg p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentVisualizer"], {
                                    state: selectedState,
                                    size: selectedSize,
                                    lottieBasePath: lottieBasePath
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium",
                                            children: "Agent State"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: states.map((state)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: ()=>setSelectedState(state),
                                                    variant: selectedState === state ? "default" : "secondary",
                                                    className: "flex-1 px-3 py-1 text-xs whitespace-nowrap",
                                                    children: state.split("-").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
                                                }, state, false, {
                                                    fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ValuePicker"], {
                                    label: "Size",
                                    items: sizeItems,
                                    value: selectedSize,
                                    onValueChange: (value)=>setSelectedSize(value)
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                    value: "all-states",
                    className: "space-y-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                        children: states.map((state)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-muted flex min-w-0 flex-col items-center gap-3 overflow-hidden rounded-lg border p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentVisualizer"], {
                                    state: state,
                                    size: "md",
                                    lottieBasePath: lottieBasePath
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, this)
                            }, state, false, {
                                fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                    value: "sizes",
                    className: "space-y-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-end justify-center gap-8 overflow-hidden rounded-lg border p-6",
                        children: [
                            "sm",
                            "md",
                            "lg"
                        ].map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-w-0 flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentVisualizer"], {
                                        state: "listening",
                                        size: size,
                                        lottieBasePath: lottieBasePath
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground text-xs capitalize",
                                        children: size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, size, true, {
                                fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(AgentVisualizerDemo, "qelDwKTf6Lf+DeM7uMFslsxHLuM=");
_c = AgentVisualizerDemo;
var _c;
__turbopack_context__.k.register(_c, "AgentVisualizerDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AudioVisualizerDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/uikit/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-3XFL3AIM.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const gradientPresets = [
    {
        name: "Default",
        colors: [
            "#A0FAFF",
            "#FCF9F8",
            "#C46FFB"
        ]
    },
    {
        name: "Ocean Blue",
        colors: [
            "#3b82f6",
            "#60a5fa",
            "#93c5fd"
        ]
    },
    {
        name: "Purple Sunset",
        colors: [
            "#a855f7",
            "#ec4899",
            "#f472b6"
        ]
    },
    {
        name: "Emerald",
        colors: [
            "#10b981",
            "#34d399",
            "#6ee7b7"
        ]
    }
];
function AudioVisualizerDemo() {
    _s();
    const [micStream, setMicStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [micEnabled, setMicEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedPreset, setSelectedPreset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(gradientPresets[0]);
    const [dropdownOpen, setDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startMicrophone = async ()=>{
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            setMicStream(stream);
            setMicEnabled(true);
            setError(null);
        } catch (err) {
            console.error("Error accessing microphone:", err);
            setError("Unable to access microphone. Please grant microphone permissions.");
            setMicEnabled(false);
        }
    };
    const stopMicrophone = ()=>{
        if (micStream) {
            micStream.getTracks().forEach((track)=>track.stop());
            setMicStream(undefined);
            setMicEnabled(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioVisualizerDemo.useEffect": ()=>{
            return ({
                "AudioVisualizerDemo.useEffect": ()=>{
                    if (micStream) {
                        micStream.getTracks().forEach({
                            "AudioVisualizerDemo.useEffect": (track)=>track.stop()
                        }["AudioVisualizerDemo.useEffect"]);
                    }
                }
            })["AudioVisualizerDemo.useEffect"];
        }
    }["AudioVisualizerDemo.useEffect"], [
        micStream
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioVisualizerDemo.useEffect": ()=>{
            const handleClickOutside = {
                "AudioVisualizerDemo.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setDropdownOpen(false);
                    }
                }
            }["AudioVisualizerDemo.useEffect.handleClickOutside"];
            if (dropdownOpen) {
                document.addEventListener("mousedown", handleClickOutside);
                return ({
                    "AudioVisualizerDemo.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
                })["AudioVisualizerDemo.useEffect"];
            }
        }
    }["AudioVisualizerDemo.useEffect"], [
        dropdownOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium",
                                children: "Live Visualization"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground text-xs",
                                children: [
                                    "Active: ",
                                    selectedPreset.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-muted rounded-lg p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AudioVisualizer"], {
                            track: micStream,
                            gradientColors: selectedPreset.colors
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    !micEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-xs",
                        children: "Enable microphone below to see live visualization."
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Demo Controls"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    !micEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: startMicrophone,
                                        children: "Enable Microphone"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "destructive",
                                        onClick: stopMicrophone,
                                        children: "Disable Microphone"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    micEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-green-500",
                                        children: "● Microphone Active"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                                        lineNumber: 89,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                ref: dropdownRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDropdownOpen(!dropdownOpen),
                                        className: "border-input bg-background hover:bg-accent flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-6 w-6 flex-shrink-0 rounded-full border",
                                                style: {
                                                    background: "linear-gradient(135deg, ".concat(selectedPreset.colors.join(", "), ")")
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: selectedPreset.name
                                            }, void 0, false, {
                                                fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    dropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-background border-input absolute top-full right-0 z-10 mt-1 w-64 rounded-md border shadow-lg",
                                        children: gradientPresets.map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setSelectedPreset(preset);
                                                    setDropdownOpen(false);
                                                },
                                                className: "hover:bg-accent flex w-full items-center gap-3 px-3 py-2 text-left transition-all ".concat(selectedPreset.name === preset.name ? "bg-accent" : ""),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-8 w-8 flex-shrink-0 rounded-full border",
                                                        style: {
                                                            background: "linear-gradient(135deg, ".concat(preset.colors.join(", "), ")")
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium",
                                                                children: preset.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                                                                lineNumber: 117,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-muted-foreground text-xs",
                                                                children: preset.colors.join(" • ")
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                                                                lineNumber: 118,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, preset.name, true, {
                                                fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-500",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                        lineNumber: 126,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(AudioVisualizerDemo, "smYtwMRGgK6MxQQ8vH/0XSsUV8Q=");
_c = AudioVisualizerDemo;
var _c;
__turbopack_context__.k.register(_c, "AudioVisualizerDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/avatar-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AvatarDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/uikit/dist/index.mjs [app-client] (ecmascript) <locals>");
"use client";
;
;
;
function AvatarDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-2xl space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Sizes"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                size: "sm",
                                initials: "JD"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                size: "md",
                                initials: "JD"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                size: "lg",
                                initials: "JD"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "With Icons"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                size: "md",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                    lineNumber: 24,
                                    columnNumber: 35
                                }, void 0),
                                bgColor: "bg-gradient-to-br from-blue-500 to-blue-600"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                size: "md",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                    lineNumber: 25,
                                    columnNumber: 35
                                }, void 0),
                                bgColor: "bg-gradient-to-br from-purple-500 to-purple-600"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                size: "md",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                    lineNumber: 26,
                                    columnNumber: 35
                                }, void 0),
                                bgColor: "bg-gradient-to-br from-green-500 to-green-600"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "With Initials"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                        initials: "JD",
                                        bgColor: "bg-gradient-to-br from-blue-500 to-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground text-xs",
                                        children: "JD"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                        initials: "AB",
                                        bgColor: "bg-gradient-to-br from-pink-500 to-pink-600"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground text-xs",
                                        children: "AB"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                        initials: "XY",
                                        bgColor: "bg-gradient-to-br from-orange-500 to-orange-600"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground text-xs",
                                        children: "XY"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Auto-generated from Name"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-4",
                        children: [
                            {
                                name: "John Doe",
                                color: "from-blue-500 to-blue-600"
                            },
                            {
                                name: "Alice Brown",
                                color: "from-pink-500 to-pink-600"
                            },
                            {
                                name: "Xavier Young",
                                color: "from-orange-500 to-orange-600"
                            }
                        ].map((param)=>{
                            let { name, color } = param;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                        name: name,
                                        bgColor: "bg-gradient-to-br ".concat(color)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground text-xs",
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, name, true, {
                                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: [
                            "Priority Order (Image ",
                            ">",
                            " Icon ",
                            ">",
                            " Initials)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-muted-foreground flex items-center gap-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                            lineNumber: 71,
                                            columnNumber: 27
                                        }, void 0),
                                        initials: "JD",
                                        bgColor: "bg-gradient-to-br from-blue-500 to-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Icon wins (shows icon)"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-muted-foreground flex items-center gap-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                        initials: "JD",
                                        bgColor: "bg-gradient-to-br from-blue-500 to-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Shows initials (fallback)"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/app/components/demos/avatar-demo.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = AvatarDemo;
var _c;
__turbopack_context__.k.register(_c, "AvatarDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/button-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ButtonDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-3XFL3AIM.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function ButtonDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 rounded-lg border p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium",
                    children: "Interactive Demo"
                }, void 0, false, {
                    fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "default",
                                    children: "Default"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "secondary",
                                    children: "Secondary"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "destructive",
                                    children: "Destructive"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "default",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                            className: "size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                                            lineNumber: 19,
                                            columnNumber: 39
                                        }, this),
                                        " Record"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "secondary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                                            lineNumber: 20,
                                            columnNumber: 41
                                        }, this),
                                        " Copy"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "destructive",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                                            lineNumber: 21,
                                            columnNumber: 43
                                        }, this),
                                        " Delete"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    label: "Click me",
                                    children: "Default"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "secondary",
                                    label: "Submit form",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                            className: "size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                                            lineNumber: 25,
                                            columnNumber: 61
                                        }, this),
                                        " Submit"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                disabled: true,
                                children: "Disabled"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/www/app/components/demos/button-demo.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ButtonDemo;
var _c;
__turbopack_context__.k.register(_c, "ButtonDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/camera-selector-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CameraSelectorDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/uikit/dist/index.mjs [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const mockDevices = [
    {
        deviceId: "device-1",
        label: "FaceTime HD Camera"
    },
    {
        deviceId: "device-2",
        label: "USB Webcam (Logitech C920)"
    },
    {
        deviceId: "device-3",
        label: "OBS Virtual Camera"
    }
];
function CameraSelectorDemo() {
    var _mockDevices_find;
    _s();
    const [selectedDevice, setSelectedDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("device-1");
    const [disabled, setDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-2xl space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Camera Selector"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CameraSelector"], {
                        devices: mockDevices,
                        value: selectedDevice,
                        onValueChange: setSelectedDevice,
                        disabled: disabled,
                        hasError: hasError
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-3 text-sm",
                        children: [
                            "Selected: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: (_mockDevices_find = mockDevices.find((d)=>d.deviceId === selectedDevice)) === null || _mockDevices_find === void 0 ? void 0 : _mockDevices_find.label
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Controls"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: disabled,
                                        onChange: (e)=>setDisabled(e.target.checked),
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    "Disabled"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: hasError,
                                        onChange: (e)=>setHasError(e.target.checked),
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    "Error State"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-sm font-medium",
                        children: "Props"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-muted-foreground space-y-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "devices?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                                        lineNumber: 54,
                                        columnNumber: 16
                                    }, this),
                                    " CameraDevice[] - List of camera devices"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "value?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                                        lineNumber: 55,
                                        columnNumber: 16
                                    }, this),
                                    " string - Selected device ID"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "onValueChange?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                                        lineNumber: 56,
                                        columnNumber: 16
                                    }, this),
                                    " (deviceId: string) => void"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "disabled?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                                        lineNumber: 57,
                                        columnNumber: 16
                                    }, this),
                                    " boolean"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "hasError?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                                        lineNumber: 58,
                                        columnNumber: 16
                                    }, this),
                                    " boolean - Show error state"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/app/components/demos/camera-selector-demo.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(CameraSelectorDemo, "pMiYQYtw4z1bsUiii2C/dhBhT3g=");
_c = CameraSelectorDemo;
var _c;
__turbopack_context__.k.register(_c, "CameraSelectorDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/conversation-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConversationDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/uikit/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-3XFL3AIM.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const allMessages = [
    {
        id: "1",
        role: "user",
        text: "Hey, I need help with my order"
    },
    {
        id: "2",
        role: "assistant",
        tokens: [
            "Hi!",
            " I'd",
            " be",
            " happy",
            " to",
            " help",
            " you",
            " with",
            " your",
            " order.",
            " Could",
            " you",
            " please",
            " provide",
            " your",
            " order",
            " number?"
        ],
        text: "Hi! I'd be happy to help you with your order. Could you please provide your order number?"
    },
    {
        id: "3",
        role: "user",
        text: "It's ORDER-12345"
    },
    {
        id: "4",
        role: "assistant",
        tokens: [
            "Thank",
            " you!",
            " Let",
            " me",
            " pull",
            " up",
            " your",
            " order",
            " details.",
            " I",
            " can",
            " see",
            " that",
            " your",
            " order",
            " was",
            " placed",
            " on",
            " March",
            " 15th",
            " and",
            " is",
            " currently",
            " being",
            " processed.",
            " It",
            " should",
            " ship",
            " within",
            " the",
            " next",
            " 1-2",
            " business",
            " days."
        ],
        text: "Thank you! Let me pull up your order details. I can see that your order was placed on March 15th and is currently being processed. It should ship within the next 1-2 business days."
    },
    {
        id: "5",
        role: "user",
        text: "Can I change the shipping address?"
    },
    {
        id: "6",
        role: "assistant",
        tokens: [
            "Absolutely!",
            " Since",
            " the",
            " order",
            " hasn't",
            " shipped",
            " yet,",
            " I",
            " can",
            " update",
            " the",
            " shipping",
            " address",
            " for",
            " you.",
            " What",
            " would",
            " you",
            " like",
            " the",
            " new",
            " address",
            " to",
            " be?"
        ],
        text: "Absolutely! Since the order hasn't shipped yet, I can update the shipping address for you. What would you like the new address to be?"
    }
];
function ConversationDemo() {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [streamingMessageIndex, setStreamingMessageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [streamingContent, setStreamingContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConversationDemo.useEffect": ()=>{
            const timeouts = [];
            const intervals = [];
            let currentMessageIndex = 0;
            const addNextMessage = {
                "ConversationDemo.useEffect.addNextMessage": ()=>{
                    if (currentMessageIndex >= allMessages.length) return;
                    const message = allMessages[currentMessageIndex];
                    if (message.role === "assistant" && "tokens" in message && message.tokens) {
                        setStreamingMessageIndex(currentMessageIndex);
                        setStreamingContent("");
                        let currentContent = "";
                        let tokenIndex = 0;
                        const streamInterval = setInterval({
                            "ConversationDemo.useEffect.addNextMessage.streamInterval": ()=>{
                                if (tokenIndex < message.tokens.length) {
                                    currentContent += message.tokens[tokenIndex];
                                    setStreamingContent(currentContent);
                                    tokenIndex++;
                                } else {
                                    clearInterval(streamInterval);
                                    setMessages({
                                        "ConversationDemo.useEffect.addNextMessage.streamInterval": (prev)=>[
                                                ...prev,
                                                message
                                            ]
                                    }["ConversationDemo.useEffect.addNextMessage.streamInterval"]);
                                    setStreamingMessageIndex(null);
                                    setStreamingContent("");
                                    currentMessageIndex++;
                                    timeouts.push(setTimeout(addNextMessage, 500));
                                }
                            }
                        }["ConversationDemo.useEffect.addNextMessage.streamInterval"], 100);
                        intervals.push(streamInterval);
                    } else {
                        setMessages({
                            "ConversationDemo.useEffect.addNextMessage": (prev)=>[
                                    ...prev,
                                    message
                                ]
                        }["ConversationDemo.useEffect.addNextMessage"]);
                        currentMessageIndex++;
                        timeouts.push(setTimeout(addNextMessage, 800));
                    }
                }
            }["ConversationDemo.useEffect.addNextMessage"];
            timeouts.push(setTimeout(addNextMessage, 1000));
            return ({
                "ConversationDemo.useEffect": ()=>{
                    timeouts.forEach({
                        "ConversationDemo.useEffect": (timeout)=>clearTimeout(timeout)
                    }["ConversationDemo.useEffect"]);
                    intervals.forEach({
                        "ConversationDemo.useEffect": (interval)=>clearInterval(interval)
                    }["ConversationDemo.useEffect"]);
                }
            })["ConversationDemo.useEffect"];
        }
    }["ConversationDemo.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Conversation"], {
            className: "rounded-lg border",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConversationContent"], {
                    children: messages.length === 0 && streamingMessageIndex === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConversationEmptyState"], {
                        title: "Start a conversation",
                        description: "This is a simulated conversation with streaming responses"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                        lineNumber: 93,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Message"], {
                                    from: message.role,
                                    avatar: message.role === "assistant" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                        size: "md",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                                            lineNumber: 99,
                                            columnNumber: 45
                                        }, void 0),
                                        bgColor: "bg-gradient-to-br from-blue-500 to-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                                        lineNumber: 99,
                                        columnNumber: 21
                                    }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                        size: "md",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                                            lineNumber: 101,
                                            columnNumber: 45
                                        }, void 0),
                                        bgColor: "bg-gradient-to-br from-green-500 to-green-600"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                                        lineNumber: 101,
                                        columnNumber: 21
                                    }, void 0),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Response"], {
                                            children: message.text
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                                            lineNumber: 103,
                                            columnNumber: 35
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                                        lineNumber: 103,
                                        columnNumber: 19
                                    }, this)
                                }, message.id, false, {
                                    fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this)),
                            streamingMessageIndex !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Message"], {
                                from: allMessages[streamingMessageIndex].role,
                                avatar: allMessages[streamingMessageIndex].role === "assistant" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                    size: "md",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                                        lineNumber: 109,
                                        columnNumber: 45
                                    }, void 0),
                                    bgColor: "bg-gradient-to-br from-blue-500 to-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                                    lineNumber: 109,
                                    columnNumber: 21
                                }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                    size: "md",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                                        lineNumber: 111,
                                        columnNumber: 45
                                    }, void 0),
                                    bgColor: "bg-gradient-to-br from-green-500 to-green-600"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                                    lineNumber: 111,
                                    columnNumber: 21
                                }, void 0),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Response"], {
                                        children: streamingContent || "\u200B"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                                        lineNumber: 113,
                                        columnNumber: 35
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                                    lineNumber: 113,
                                    columnNumber: 19
                                }, this)
                            }, "streaming-".concat(streamingMessageIndex), false, {
                                fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                                lineNumber: 107,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConversationScrollButton"], {}, void 0, false, {
                    fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/www/app/components/demos/conversation-demo.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(ConversationDemo, "tZi2Q45lBRcmuiydzJqKmc/qPmg=");
_c = ConversationDemo;
var _c;
__turbopack_context__.k.register(_c, "ConversationDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConvoTextStreamDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/uikit/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-3XFL3AIM.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ConvoTextStreamDemo() {
    _s();
    const [messageList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            uid: 0,
            turn_id: 1,
            text: "Hello! How can I assist you today?",
            status: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EMessageStatus"].END
        },
        {
            uid: 1,
            turn_id: 2,
            text: "I need help with my Agora integration",
            status: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EMessageStatus"].END
        },
        {
            uid: 0,
            turn_id: 3,
            text: "I'd be happy to help! What specific aspect of the integration are you working on?",
            status: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EMessageStatus"].END
        },
        {
            uid: 1,
            turn_id: 4,
            text: "I'm trying to implement **real-time transcription** with the conversational AI",
            status: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EMessageStatus"].END
        },
        {
            uid: 0,
            turn_id: 5,
            text: "Great! For real-time transcription, you'll need to:\n\n1. Initialize the MessageEngine\n2. Subscribe to RTC or RTM messages\n3. Pass messages to the ConvoTextStream component\n\nCheck out the [documentation](https://docs.agora.io) for more details.",
            status: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EMessageStatus"].END
        }
    ]);
    const [currentMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        uid: 0,
        turn_id: 6,
        text: "The component supports both RTC datastream and Signaling/RTM...",
        status: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EMessageStatus"].IN_PROGRESS
    });
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("inline");
    const chatContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConvoTextStreamDemo.useEffect": ()=>{
            if (viewMode !== "inline" || !chatContainerRef.current) return;
            const scrollToBottom = {
                "ConvoTextStreamDemo.useEffect.scrollToBottom": ()=>{
                    var _chatContainerRef_current;
                    const scrollContainer = (_chatContainerRef_current = chatContainerRef.current) === null || _chatContainerRef_current === void 0 ? void 0 : _chatContainerRef_current.querySelector(".flex-1.overflow-auto");
                    if (scrollContainer) scrollContainer.scrollTop = scrollContainer.scrollHeight;
                }
            }["ConvoTextStreamDemo.useEffect.scrollToBottom"];
            setTimeout(scrollToBottom, 100);
            const observer = new MutationObserver({
                "ConvoTextStreamDemo.useEffect": ()=>setTimeout(scrollToBottom, 50)
            }["ConvoTextStreamDemo.useEffect"]);
            observer.observe(chatContainerRef.current, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            });
            return ({
                "ConvoTextStreamDemo.useEffect": ()=>observer.disconnect()
            })["ConvoTextStreamDemo.useEffect"];
        }
    }["ConvoTextStreamDemo.useEffect"], [
        viewMode,
        messageList,
        currentMessage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "View Mode"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setViewMode("inline"),
                                variant: viewMode === "inline" ? "default" : "secondary",
                                children: "Inline Preview"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setViewMode("popout"),
                                variant: viewMode === "popout" ? "default" : "secondary",
                                children: "Pop-out Mode"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-xs",
                        children: viewMode === "inline" ? "Transcript is shown open in the preview area below" : "Transcript appears as a floating widget (click the button in bottom-right)"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Interactive Demo"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted rounded-lg p-6", viewMode === "popout" && "relative"),
                        style: viewMode === "popout" ? {
                            height: 500
                        } : {
                            minHeight: 650
                        },
                        children: viewMode === "popout" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-muted-foreground flex h-full items-center justify-center text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                children: "Check the bottom-right corner"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-xs",
                                                children: "The transcript appears as a floating widget with a toggle button"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
                                                lineNumber: 60,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConvoTextStream"], {
                                    messageList: messageList,
                                    currentInProgressMessage: currentMessage,
                                    agentUID: "0"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: chatContainerRef,
                            className: "relative mx-auto flex max-w-96 items-end justify-center",
                            style: {
                                height: 600
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConvoTextStream"], {
                                messageList: messageList,
                                currentInProgressMessage: currentMessage,
                                agentUID: "0",
                                className: "pointer-events-auto !relative !inset-auto !top-auto !right-auto !bottom-auto !left-auto !mx-0 !my-0 [&>div.chatbox]:!max-h-[600px]"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(ConvoTextStreamDemo, "4TIaldpTSh6t7vgwo/vvHf3lRKU=");
_c = ConvoTextStreamDemo;
var _c;
__turbopack_context__.k.register(_c, "ConvoTextStreamDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/icon-button-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconButtonDemo",
    ()=>IconButtonDemo,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$OGIKXBAR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-OGIKXBAR.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function IconButtonDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 rounded-lg border p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium",
                    children: "Interactive Demo"
                }, void 0, false, {
                    fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-muted-foreground mb-2 text-xs",
                                            children: "Filled"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                            lineNumber: 15,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$OGIKXBAR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                                    shape: "round",
                                                    variant: "filled",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        className: "size-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                                        lineNumber: 17,
                                                        columnNumber: 60
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                                    lineNumber: 17,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$OGIKXBAR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                                    shape: "square",
                                                    variant: "filled",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                        className: "size-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                                        lineNumber: 18,
                                                        columnNumber: 61
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                                    lineNumber: 18,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                            lineNumber: 16,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-muted-foreground mb-2 text-xs",
                                            children: "Outlined"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                            lineNumber: 22,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$OGIKXBAR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                                    shape: "round",
                                                    variant: "outlined",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "size-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                                        lineNumber: 24,
                                                        columnNumber: 62
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                                    lineNumber: 24,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$OGIKXBAR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                                    shape: "square",
                                                    variant: "outlined",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                        className: "size-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                                        lineNumber: 25,
                                                        columnNumber: 63
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                                    lineNumber: 25,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                            lineNumber: 23,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-muted-foreground mb-2 text-xs",
                                            children: "Standard"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$OGIKXBAR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                                    shape: "round",
                                                    variant: "standard",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                        className: "size-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 62
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$OGIKXBAR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                                    shape: "square",
                                                    variant: "standard",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "size-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 63
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-muted-foreground mb-2 text-xs",
                                    children: "Disabled"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$OGIKXBAR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                            shape: "round",
                                            variant: "filled",
                                            disabled: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                className: "size-5"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                                lineNumber: 39,
                                                columnNumber: 67
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$OGIKXBAR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                            shape: "round",
                                            variant: "outlined",
                                            disabled: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "size-5"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                                lineNumber: 40,
                                                columnNumber: 69
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$OGIKXBAR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                            shape: "round",
                                            variant: "standard",
                                            disabled: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                className: "size-5"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                                lineNumber: 41,
                                                columnNumber: 69
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/www/app/components/demos/icon-button-demo.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = IconButtonDemo;
const __TURBOPACK__default__export__ = IconButtonDemo;
var _c;
__turbopack_context__.k.register(_c, "IconButtonDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/live-waveform-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LiveWaveformDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$PGN4AQHD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-PGN4AQHD.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LiveWaveformDemo() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-2xl space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Animation State"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded px-2 py-1 text-sm transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: active,
                                onChange: (e)=>setActive(e.target.checked),
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Active"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Default"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-muted flex items-center justify-center rounded-lg p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$PGN4AQHD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveWaveform"], {
                            active: active
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Custom Blue (Larger)"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-muted flex items-center justify-center rounded-lg p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$PGN4AQHD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveWaveform"], {
                            active: active,
                            barWidth: 6,
                            barGap: 3,
                            barColor: "#2563eb",
                            height: 120
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Purple Vibrant"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-muted flex items-center justify-center rounded-lg p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$PGN4AQHD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveWaveform"], {
                            active: active,
                            barWidth: 5,
                            barGap: 2,
                            barColor: "#a855f7",
                            height: 90,
                            fadeEdges: false
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Compact"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-muted flex items-center justify-center rounded-lg p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$PGN4AQHD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveWaveform"], {
                            active: active,
                            barWidth: 3,
                            barGap: 1,
                            barColor: "#06b6d4",
                            height: 60
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/app/components/demos/live-waveform-demo.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(LiveWaveformDemo, "8U9J+wJN8vvBTuOPDEeGZkZ5XMY=");
_c = LiveWaveformDemo;
var _c;
__turbopack_context__.k.register(_c, "LiveWaveformDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/mic-button-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MicButtonDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/uikit/dist/index.mjs [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MicButtonDemo() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [micStream, setMicStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [audioLevel, setAudioLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const startMicrophone = async ()=>{
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            setMicStream(stream);
            setState("listening");
            audioContextRef.current = new AudioContext();
            analyserRef.current = audioContextRef.current.createAnalyser();
            analyserRef.current.fftSize = 64;
            analyserRef.current.smoothingTimeConstant = 0.5;
            const source = audioContextRef.current.createMediaStreamSource(stream);
            source.connect(analyserRef.current);
            updateAudioLevel();
        } catch (err) {
            console.error("Error accessing microphone:", err);
            setState("error");
        }
    };
    const stopMicrophone = ()=>{
        if (micStream) {
            micStream.getTracks().forEach((track)=>track.stop());
            setMicStream(undefined);
        }
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        if (audioContextRef.current) {
            audioContextRef.current.close();
            audioContextRef.current = null;
        }
        setState("idle");
        setAudioLevel(0);
    };
    const updateAudioLevel = ()=>{
        if (!analyserRef.current) return;
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((a, b)=>a + b, 0) / dataArray.length;
        const normalizedLevel = Math.min(average / 128, 1);
        setAudioLevel(normalizedLevel);
        animationFrameRef.current = requestAnimationFrame(updateAudioLevel);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MicButtonDemo.useEffect": ()=>{
            return ({
                "MicButtonDemo.useEffect": ()=>{
                    if (micStream) micStream.getTracks().forEach({
                        "MicButtonDemo.useEffect": (track)=>track.stop()
                    }["MicButtonDemo.useEffect"]);
                    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
                    if (audioContextRef.current) audioContextRef.current.close();
                }
            })["MicButtonDemo.useEffect"];
        }
    }["MicButtonDemo.useEffect"], [
        micStream
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-lg space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Microphone Control"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            !micStream ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: startMicrophone,
                                className: "rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700",
                                children: "Enable Microphone"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: stopMicrophone,
                                className: "rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700",
                                children: "Disable Microphone"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            micStream && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-green-500",
                                children: "● Microphone Active"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                                lineNumber: 81,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Live Demo"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-muted flex items-center justify-center rounded-lg p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MicButton"], {
                            state: state
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-xs",
                        children: [
                            "Current state: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "capitalize",
                                children: state
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                                lineNumber: 91,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Manual State Control"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            "idle",
                            "listening",
                            "processing",
                            "error"
                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded px-2 py-1 text-sm transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "state",
                                        value: s,
                                        checked: state === s,
                                        onChange: (e)=>!micStream && setState(e.target.value),
                                        disabled: !!micStream,
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "capitalize",
                                        children: s
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, s, true, {
                                fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 text-sm font-medium",
                        children: "State Examples"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            [
                                "idle",
                                "listening",
                                "processing",
                                "error"
                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MicButton"], {
                                            state: s
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground text-xs",
                                            children: s
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, s, true, {
                                    fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MicButton"], {
                                        state: "error",
                                        showErrorBadge: true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground text-xs",
                                        children: "error with badge"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/app/components/demos/mic-button-demo.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(MicButtonDemo, "QpqYwLxR5i/aihIXsurSl9gQVPU=");
_c = MicButtonDemo;
var _c;
__turbopack_context__.k.register(_c, "MicButtonDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MicButtonWithVisualizerDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-3XFL3AIM.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const colorSchemePresets = [
    {
        name: "Default",
        enabled: "#A0FAFF",
        disabled: "#DE344A"
    },
    {
        name: "Ocean Blue",
        enabled: "#3b82f6",
        disabled: "#ef4444"
    },
    {
        name: "Purple",
        enabled: "#a855f7",
        disabled: "#f43f5e"
    },
    {
        name: "Emerald",
        enabled: "#10b981",
        disabled: "#f59e0b"
    }
];
function MicButtonVisualizerDemo(param) {
    let { micEnabled, selectedScheme, micStream, onToggleMic } = param;
    _s();
    const [audioData, setAudioData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(5).fill({
        height: 0
    }));
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MicButtonVisualizerDemo.useEffect": ()=>{
            if (micStream && micEnabled) setupAudioAnalyser();
            else cleanupAudioAnalyser();
            return ({
                "MicButtonVisualizerDemo.useEffect": ()=>cleanupAudioAnalyser()
            })["MicButtonVisualizerDemo.useEffect"];
        }
    }["MicButtonVisualizerDemo.useEffect"], [
        micStream,
        micEnabled
    ]);
    const setupAudioAnalyser = async ()=>{
        if (!micStream) return;
        try {
            audioContextRef.current = new AudioContext();
            analyserRef.current = audioContextRef.current.createAnalyser();
            analyserRef.current.fftSize = 64;
            analyserRef.current.smoothingTimeConstant = 0.5;
            const source = audioContextRef.current.createMediaStreamSource(micStream);
            source.connect(analyserRef.current);
            updateAudioData();
        } catch (error) {
            console.error("Error setting up audio analyser:", error);
        }
    };
    const cleanupAudioAnalyser = ()=>{
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        if (audioContextRef.current) {
            audioContextRef.current.close();
            audioContextRef.current = null;
        }
        setAudioData(Array(5).fill({
            height: 0
        }));
    };
    const updateAudioData = ()=>{
        if (!analyserRef.current) return;
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);
        const segmentSize = Math.floor(dataArray.length / 5);
        const newAudioData = Array(5).fill(0).map((_, index)=>{
            const start = index * segmentSize;
            const segment = dataArray.slice(start, start + segmentSize);
            const average = segment.reduce((a, b)=>a + b, 0) / segment.length;
            const scaledHeight = Math.min(60, average / 255 * 100 * 1.2);
            return {
                height: Math.pow(scaledHeight / 60, 0.7) * 60
            };
        });
        setAudioData(newAudioData);
        animationFrameRef.current = requestAnimationFrame(updateAudioData);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onToggleMic,
        className: "group relative flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center gap-1",
                children: audioData.map((bar, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1 rounded-full transition-all duration-100",
                        style: {
                            height: "".concat(bar.height, "%"),
                            transform: "scaleY(".concat(Math.max(0.1, bar.height / 100), ")"),
                            transformOrigin: "center",
                            backgroundColor: micEnabled ? selectedScheme.enabled : selectedScheme.disabled
                        }
                    }, index, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 transition-colors duration-300",
                children: micEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: selectedScheme.enabled,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M19 10v2a7 7 0 0 1-14 0v-2"
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "12",
                            x2: "12",
                            y1: "19",
                            y2: "22"
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: selectedScheme.disabled,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "2",
                            x2: "22",
                            y1: "2",
                            y2: "22"
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M5 10v2a7 7 0 0 0 12 5"
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M15 9.34V5a3 3 0 0 0-5.68-1.33"
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9 9v3a3 3 0 0 0 5.12 2.12"
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "12",
                            x2: "12",
                            y1: "19",
                            y2: "22"
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(MicButtonVisualizerDemo, "NnBZ+kbMupSm3jUCTbUMtbA8tA8=");
_c = MicButtonVisualizerDemo;
function MicButtonWithVisualizerDemo() {
    _s1();
    const [micStream, setMicStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [micEnabled, setMicEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedScheme, setSelectedScheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(colorSchemePresets[0]);
    const [dropdownOpen, setDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startMicrophone = async ()=>{
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            setMicStream(stream);
            setMicEnabled(true);
            setError(null);
        } catch (err) {
            console.error("Error accessing microphone:", err);
            setError("Unable to access microphone.");
            setMicEnabled(false);
        }
    };
    const stopMicrophone = ()=>{
        if (micStream) {
            micStream.getTracks().forEach((track)=>track.stop());
            setMicStream(undefined);
            setMicEnabled(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MicButtonWithVisualizerDemo.useEffect": ()=>{
            return ({
                "MicButtonWithVisualizerDemo.useEffect": ()=>{
                    if (micStream) micStream.getTracks().forEach({
                        "MicButtonWithVisualizerDemo.useEffect": (track)=>track.stop()
                    }["MicButtonWithVisualizerDemo.useEffect"]);
                }
            })["MicButtonWithVisualizerDemo.useEffect"];
        }
    }["MicButtonWithVisualizerDemo.useEffect"], [
        micStream
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MicButtonWithVisualizerDemo.useEffect": ()=>{
            const handleClickOutside = {
                "MicButtonWithVisualizerDemo.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setDropdownOpen(false);
                }
            }["MicButtonWithVisualizerDemo.useEffect.handleClickOutside"];
            if (dropdownOpen) {
                document.addEventListener("mousedown", handleClickOutside);
                return ({
                    "MicButtonWithVisualizerDemo.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
                })["MicButtonWithVisualizerDemo.useEffect"];
            }
        }
    }["MicButtonWithVisualizerDemo.useEffect"], [
        dropdownOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Live Demo"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-muted flex items-center justify-center rounded-lg p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MicButtonVisualizerDemo, {
                            micEnabled: micEnabled,
                            selectedScheme: selectedScheme,
                            micStream: micStream,
                            onToggleMic: ()=>micEnabled ? stopMicrophone() : startMicrophone()
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    micEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-green-500",
                        children: "● Microphone Active"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-center text-xs",
                        children: "Click the button to toggle mic."
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Demo Controls"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: !micEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: startMicrophone,
                                    children: "Enable Microphone"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "destructive",
                                    onClick: stopMicrophone,
                                    children: "Disable Microphone"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                ref: dropdownRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDropdownOpen(!dropdownOpen),
                                        className: "border-input bg-background hover:bg-accent flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-4 w-4 rounded-full border",
                                                        style: {
                                                            backgroundColor: selectedScheme.enabled
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-4 w-4 rounded-full border",
                                                        style: {
                                                            backgroundColor: selectedScheme.disabled
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: selectedScheme.name
                                            }, void 0, false, {
                                                fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                                                lineNumber: 192,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    dropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-background border-input absolute top-full right-0 z-10 mt-1 w-56 rounded-md border shadow-lg",
                                        children: colorSchemePresets.map((scheme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setSelectedScheme(scheme);
                                                    setDropdownOpen(false);
                                                },
                                                className: "hover:bg-accent flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors ".concat(selectedScheme.name === scheme.name ? "bg-accent" : ""),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-4 w-4 rounded-full border",
                                                                style: {
                                                                    backgroundColor: scheme.enabled
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-4 w-4 rounded-full border",
                                                                style: {
                                                                    backgroundColor: scheme.disabled
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: scheme.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, scheme.name, true, {
                                                fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                                                lineNumber: 197,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-500",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                        lineNumber: 210,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s1(MicButtonWithVisualizerDemo, "708VQMpfXl/skhJpT98jQZTalCA=");
_c1 = MicButtonWithVisualizerDemo;
var _c, _c1;
__turbopack_context__.k.register(_c, "MicButtonVisualizerDemo");
__turbopack_context__.k.register(_c1, "MicButtonWithVisualizerDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/mic-selector-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MicSelectorDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function MicSelectorDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-2xl space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-blue-500/20 bg-blue-500/10 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-sm font-medium text-blue-400",
                        children: "SDK Dependency Required"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-xs",
                        children: [
                            "The MicSelector component requires the Agora RTC SDK (",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: "agora-rtc-react"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                                lineNumber: 11,
                                columnNumber: 65
                            }, this),
                            ") and is imported from ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: "agora-agent-uikit/rtc"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                                lineNumber: 12,
                                columnNumber: 28
                            }, this),
                            ". This demo shows a preview of the component's appearance and behavior."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-sm font-medium",
                        children: "Features"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-muted-foreground space-y-1.5 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "• Auto-detects audio input devices"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "• Live waveform preview using Web Audio API"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "• Mute/unmute toggle with visual indicator"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "• Dropdown device selector"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "• Permission handling with error states"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "• Auto-selects first available device"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-sm font-medium",
                        children: "Usage"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "bg-muted overflow-auto rounded p-4 text-xs",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                            children: 'import { MicSelector } from "agora-agent-uikit/rtc"\nimport { useState } from "react"\n\nexport function MyComponent() {\n  const [device, setDevice] = useState<string>()\n  const [muted, setMuted] = useState(false)\n\n  return (\n    <MicSelector\n      value={device}\n      onValueChange={setDevice}\n      muted={muted}\n      onMutedChange={setMuted}\n    />\n  )\n}'
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/app/components/demos/mic-selector-demo.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = MicSelectorDemo;
var _c;
__turbopack_context__.k.register(_c, "MicSelectorDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileTabsDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/uikit/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-3XFL3AIM.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const demoTabs = [
    {
        id: "chat",
        label: "Chat",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
            lineNumber: 12,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-48 items-center justify-center rounded-lg border",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground text-sm",
                children: "Chat content area"
            }, void 0, false, {
                fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "video",
        label: "Video",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
            lineNumber: 22,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-48 items-center justify-center rounded-lg border",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground text-sm",
                children: "Video content area"
            }, void 0, false, {
                fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "audio",
        label: "Audio",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
            lineNumber: 32,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-48 items-center justify-center rounded-lg border",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground text-sm",
                children: "Audio content area"
            }, void 0, false, {
                fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "settings",
        label: "Settings",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
            lineNumber: 42,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-48 items-center justify-center rounded-lg border",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground text-sm",
                children: "Settings content area"
            }, void 0, false, {
                fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function MobileTabsDemo() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("chat");
    const [tabPosition, setTabPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("top");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setTabPosition("top"),
                        variant: tabPosition === "top" ? "default" : "secondary",
                        className: "text-xs",
                        children: "Tabs on Top"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setTabPosition("bottom"),
                        variant: tabPosition === "bottom" ? "default" : "secondary",
                        className: "text-xs",
                        children: "Tabs on Bottom"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MobileTabs"], {
                    tabs: demoTabs,
                    activeTab: activeTab,
                    onTabChange: setActiveTab,
                    tabPosition: tabPosition
                }, void 0, false, {
                    fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-sm font-medium",
                        children: "Props"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-muted-foreground space-y-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "tabs:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                                        lineNumber: 78,
                                        columnNumber: 16
                                    }, this),
                                    " Tab[] - Array of tab definitions"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "activeTab?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                                        lineNumber: 79,
                                        columnNumber: 16
                                    }, this),
                                    " string - Currently active tab ID"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "onTabChange?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                                        lineNumber: 80,
                                        columnNumber: 16
                                    }, this),
                                    " (tabId: string) => void"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "tabPosition?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                                        lineNumber: 81,
                                        columnNumber: 16
                                    }, this),
                                    ' "top" | "bottom" (default: "top")'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(MobileTabsDemo, "ZkGXIe9jSNcko2txSjZWCw4EVgE=");
_c = MobileTabsDemo;
var _c;
__turbopack_context__.k.register(_c, "MobileTabsDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/primitives-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrimitivesDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/uikit/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$PGN4AQHD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-PGN4AQHD.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-3XFL3AIM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/components/ui/tabs.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const items = [
    {
        id: "option-1",
        name: "Option 1"
    },
    {
        id: "option-2",
        name: "Option 2"
    },
    {
        id: "option-3",
        name: "Option 3"
    },
    {
        id: "option-4",
        name: "Option 4"
    },
    {
        id: "option-5",
        name: "Option 5"
    }
];
function PrimitivesDemo() {
    var _items_find;
    _s();
    const [selectedValue, setSelectedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("option-1");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
            defaultValue: "card",
            className: "w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center border-b pb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "card",
                                children: "Card"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "chip",
                                children: "Chip"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "value-picker",
                                children: "Value Picker"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                    value: "card",
                    className: "space-y-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-lg flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Card"], {
                                className: "w-full"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Card"], {
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CardTitle"], {
                                    children: "Basic Card"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                    lineNumber: 34,
                                    columnNumber: 38
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Card"], {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CardTitle"], {
                                        children: "Full Card"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: "Cards are flexible containers for grouping content and actions."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                    value: "chip",
                    className: "space-y-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$PGN4AQHD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chip"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "size-4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                        lineNumber: 47,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "size-4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                        lineNumber: 48,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                    value: "value-picker",
                    className: "space-y-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-lg space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ValuePicker"], {
                                label: "Select a value",
                                items: items,
                                value: selectedValue,
                                onValueChange: setSelectedValue,
                                placeholder: "Choose an option...",
                                maxHeight: "150px"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            selectedValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium",
                                        children: [
                                            "Selected: ",
                                            (_items_find = items.find((i)=>i.id === selectedValue)) === null || _items_find === void 0 ? void 0 : _items_find.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground mt-1 text-sm",
                                        children: [
                                            "ID: ",
                                            selectedValue
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/www/app/components/demos/primitives-demo.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(PrimitivesDemo, "faSMh8LKf+woxrsgj/1y2N/E7vU=");
_c = PrimitivesDemo;
var _c;
__turbopack_context__.k.register(_c, "PrimitivesDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/session-panel-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SessionPanelDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/uikit/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-3XFL3AIM.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const samplePayload = {
    channel_name: "test-channel-123",
    uid: 1001,
    token: "006...truncated",
    agent_config: {
        model: "gpt-4o",
        language: "en-US",
        greeting: "Hello! How can I help?"
    }
};
function SessionPanelDemo() {
    _s();
    const [agentId, setAgentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("agent-abc-123");
    const [payload, setPayload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(samplePayload);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-lg space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Session Panel"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/session-panel-demo.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SessionPanel"], {
                        agentId: agentId,
                        payload: payload
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/session-panel-demo.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/session-panel-demo.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Controls"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/session-panel-demo.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setAgentId(agentId ? null : "agent-abc-123"),
                                variant: "secondary",
                                className: "text-xs",
                                children: "Toggle Agent ID"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/session-panel-demo.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setPayload(payload ? null : samplePayload),
                                variant: "secondary",
                                className: "text-xs",
                                children: "Toggle Payload"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/session-panel-demo.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/session-panel-demo.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/session-panel-demo.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-sm font-medium",
                        children: "Props"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/session-panel-demo.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-muted-foreground space-y-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "agentId:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/session-panel-demo.tsx",
                                        lineNumber: 46,
                                        columnNumber: 16
                                    }, this),
                                    " string | null - Agent identifier"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/session-panel-demo.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "payload:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/session-panel-demo.tsx",
                                        lineNumber: 47,
                                        columnNumber: 16
                                    }, this),
                                    " object | null - Session configuration payload"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/session-panel-demo.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/session-panel-demo.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/session-panel-demo.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/app/components/demos/session-panel-demo.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(SessionPanelDemo, "NKEiQ2Miq6w71NP88iiaeJl4blU=");
_c = SessionPanelDemo;
var _c;
__turbopack_context__.k.register(_c, "SessionPanelDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/settings-dialog-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsDialogDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/uikit/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-3XFL3AIM.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SettingsDialogDemo() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [enableAivad, setEnableAivad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en-US");
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("You are a helpful assistant.");
    const [greeting, setGreeting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Hello! How can I help you?");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-lg space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Settings Dialog"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setOpen(true),
                        children: "Open Settings"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SettingsDialog"], {
                        open: open,
                        onOpenChange: setOpen,
                        enableAivad: enableAivad,
                        onEnableAivadChange: setEnableAivad,
                        language: language,
                        onLanguageChange: setLanguage,
                        prompt: prompt,
                        onPromptChange: setPrompt,
                        greeting: greeting,
                        onGreetingChange: setGreeting
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-sm font-medium",
                        children: "Current Settings"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "bg-muted overflow-auto rounded p-4 text-xs",
                        children: JSON.stringify({
                            enableAivad,
                            language,
                            prompt,
                            greeting
                        }, null, 2)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-sm font-medium",
                        children: "Props"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-muted-foreground space-y-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "open:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                                        lineNumber: 44,
                                        columnNumber: 16
                                    }, this),
                                    " boolean - Dialog open state"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "onOpenChange:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                                        lineNumber: 45,
                                        columnNumber: 16
                                    }, this),
                                    " (open: boolean) => void"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "enableAivad:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                                        lineNumber: 46,
                                        columnNumber: 16
                                    }, this),
                                    " boolean - AI VAD toggle"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "language:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                                        lineNumber: 47,
                                        columnNumber: 16
                                    }, this),
                                    " string - Selected language code"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "prompt?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                                        lineNumber: 48,
                                        columnNumber: 16
                                    }, this),
                                    " string - System prompt text"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "greeting?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                                        lineNumber: 49,
                                        columnNumber: 16
                                    }, this),
                                    " string - Greeting message"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/app/components/demos/settings-dialog-demo.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(SettingsDialogDemo, "ifBZP2qkp+TMxf8rqbfBSw8SulM=");
_c = SettingsDialogDemo;
var _c;
__turbopack_context__.k.register(_c, "SettingsDialogDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/lib/theme/apply-theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Theme Configuration Type
 * Maps to API config fields that can be customized by users
 */ __turbopack_context__.s([
    "applyCustomTheme",
    ()=>applyCustomTheme,
    "getCurrentTheme",
    ()=>getCurrentTheme,
    "hexToRgbString",
    ()=>hexToRgbString
]);
const CSS_VAR_MAP = {
    PRIMARY_COLOR: "--primary",
    PRIMARY_ACTION_BRAND_COLOR: "--primary-brand",
    FONT_COLOR: "--foreground",
    PRIMARY_FONT_COLOR: "--font-high",
    SECONDARY_FONT_COLOR: "--secondary-foreground",
    BACKGROUND_COLOR: "--background",
    ICON_BG_COLOR: "--icon-bg",
    TOOLBAR_COLOR: "--toolbar-color",
    INPUT_FIELD_BACKGROUND_COLOR: "--input-field-bg",
    INPUT_FIELD_BORDER_COLOR: "--input-field-border",
    CARD_LAYER_1_COLOR: "--card_layer_1",
    CARD_LAYER_2_COLOR: "--card_layer_2",
    CARD_LAYER_3_COLOR: "--card_layer_3",
    CARD_LAYER_4_COLOR: "--card_layer_4",
    CARD_LAYER_5_COLOR: "--card_layer_5",
    VIDEO_AUDIO_TILE_COLOR: "--video-tile",
    VIDEO_AUDIO_TILE_OVERLAY_COLOR: "--video-tile-overlay",
    VIDEO_AUDIO_TILE_TEXT_COLOR: "--video-tile-text",
    VIDEO_AUDIO_TILE_AVATAR_COLOR: "--video-tile-avatar",
    SEMANTIC_ERROR: "--semantic-error",
    SEMANTIC_SUCCESS: "--semantic-success",
    SEMANTIC_WARNING: "--semantic-warning",
    SEMANTIC_NEUTRAL: "--semantic-neutral"
};
function applyCustomTheme(config) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const root = document.documentElement;
    Object.entries(config).forEach((param)=>{
        let [apiField, colorValue] = param;
        if (colorValue && typeof colorValue === "string") {
            const cssVar = CSS_VAR_MAP[apiField];
            if (cssVar) {
                root.style.setProperty(cssVar, colorValue);
            }
        }
    });
}
function hexToRgbString(hex) {
    let v = hex.trim();
    if (!v.startsWith("#")) return null;
    v = v.slice(1);
    if (v.length === 3) {
        const r = parseInt(v[0] + v[0], 16);
        const g = parseInt(v[1] + v[1], 16);
        const b = parseInt(v[2] + v[2], 16);
        return "".concat(r, ", ").concat(g, ", ").concat(b);
    }
    if (v.length === 6) {
        const r = parseInt(v.slice(0, 2), 16);
        const g = parseInt(v.slice(2, 4), 16);
        const b = parseInt(v.slice(4, 6), 16);
        return "".concat(r, ", ").concat(g, ", ").concat(b);
    }
    return null;
}
function getCurrentTheme() {
    const root = document.documentElement;
    const computed = getComputedStyle(root);
    const theme = {};
    Object.values(CSS_VAR_MAP).forEach((cssVar)=>{
        theme[cssVar] = computed.getPropertyValue(cssVar).trim();
    });
    return theme;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/theme-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$theme$2f$apply$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/lib/theme/apply-theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-3XFL3AIM.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const themePresets = {
    blue: {
        PRIMARY_ACTION_BRAND_COLOR: "#099dfd"
    },
    pink: {
        PRIMARY_ACTION_BRAND_COLOR: "#E62079"
    },
    green: {
        PRIMARY_ACTION_BRAND_COLOR: "#36b37e"
    }
};
function ThemeDemo() {
    _s();
    const [selectedTheme, setSelectedTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("blue");
    const handleThemeChange = (themeName)=>{
        setSelectedTheme(themeName);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$theme$2f$apply$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyCustomTheme"])(themePresets[themeName]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mb-3 text-sm",
                        children: "Select a theme to dynamically update the primary brand color:"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/theme-demo.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: Object.keys(themePresets).map((themeName)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleThemeChange(themeName),
                                className: "rounded-md px-4 py-2 text-sm font-medium capitalize transition-all ".concat(selectedTheme === themeName ? "bg-primary text-primary-foreground ring-primary ring-2 ring-offset-2" : "bg-muted text-muted-foreground hover:bg-muted/80"),
                                children: themeName
                            }, themeName, false, {
                                fileName: "[project]/apps/www/app/components/demos/theme-demo.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/theme-demo.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/theme-demo.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 rounded-lg border p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold",
                        children: "Component Preview"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/theme-demo.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-sm",
                        children: "These components dynamically use the primary brand color."
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/theme-demo.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                children: "Default Button"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/theme-demo.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "secondary",
                                children: "Secondary Button"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/theme-demo.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "destructive",
                                children: "Destructive Button"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/theme-demo.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/theme-demo.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/theme-demo.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-3 text-lg font-semibold",
                        children: "Current Theme Config"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/theme-demo.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "bg-muted overflow-auto rounded p-4 text-xs",
                        children: JSON.stringify(themePresets[selectedTheme], null, 2)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/theme-demo.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/theme-demo.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/app/components/demos/theme-demo.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(ThemeDemo, "UUuV/j+7zD75wx+sWnqUifZJwD0=");
_c = ThemeDemo;
var _c;
__turbopack_context__.k.register(_c, "ThemeDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/video-display-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoDisplayDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/uikit/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-3XFL3AIM.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function VideoDisplayDemo() {
    _s();
    const [avatarState, setAvatarState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("disconnected");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-3xl space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-blue-500/20 bg-blue-500/10 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-sm font-medium text-blue-400",
                        children: "Video Track Required"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-xs",
                        children: "These components require an Agora video track or MediaStream. This demo shows placeholder states."
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "AvatarVideoDisplay"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mb-3",
                        children: [
                            "disconnected",
                            "loading",
                            "connected"
                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setAvatarState(s),
                                variant: avatarState === s ? "default" : "secondary",
                                className: "text-xs capitalize",
                                children: s
                            }, s, false, {
                                fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-muted flex items-center justify-center rounded-lg p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AvatarVideoDisplay"], {
                            state: avatarState,
                            showStatus: true,
                            placeholder: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                size: "lg",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                    lineNumber: 36,
                                    columnNumber: 39
                                }, void 0),
                                bgColor: "bg-gradient-to-br from-blue-500 to-blue-600"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, void 0),
                            className: "h-64 w-80 rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "LocalVideoPreview"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-muted flex items-center justify-center rounded-lg p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LocalVideoPreview"], {
                            showLabel: true,
                            label: "You",
                            isVideoMuted: true,
                            placeholder: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                                        size: "lg",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                            lineNumber: 53,
                                            columnNumber: 41
                                        }, void 0),
                                        bgColor: "bg-gradient-to-br from-green-500 to-green-600"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground text-xs",
                                        children: "Camera off"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, void 0),
                            className: "h-48 w-64 rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-sm font-medium",
                        children: "Props"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-muted-foreground space-y-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "videoTrack?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                        lineNumber: 66,
                                        columnNumber: 16
                                    }, this),
                                    " PlayableVideoTrack | null - Video track to display"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "state?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                        lineNumber: 67,
                                        columnNumber: 16
                                    }, this),
                                    ' "connected" | "loading" | "disconnected" - Connection state'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "showStatus?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                        lineNumber: 68,
                                        columnNumber: 16
                                    }, this),
                                    " boolean - Show status indicator"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "placeholder?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                        lineNumber: 69,
                                        columnNumber: 16
                                    }, this),
                                    " ReactNode - Shown when no video track"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "objectFit?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                        lineNumber: 70,
                                        columnNumber: 16
                                    }, this),
                                    ' "cover" | "contain" | "fill" - Video fit mode'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/app/components/demos/video-display-demo.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(VideoDisplayDemo, "bYJFZdVsumvecTEL0kgRO9SHc+M=");
_c = VideoDisplayDemo;
var _c;
__turbopack_context__.k.register(_c, "VideoDisplayDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/demos/video-grid-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoGridDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/uikit/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-3XFL3AIM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$OGIKXBAR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/uikit/dist/chunk-OGIKXBAR.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function VideoGridDemo() {
    _s();
    const [showControls, setShowControls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const GridComponent = showControls ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["VideoGridWithControls"] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["VideoGrid"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setShowControls(false),
                        variant: !showControls ? "default" : "secondary",
                        className: "text-xs",
                        children: "VideoGrid"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$3XFL3AIM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setShowControls(true),
                        variant: showControls ? "default" : "secondary",
                        className: "text-xs",
                        children: "VideoGridWithControls"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GridComponent, {
                    avatar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-video-tile flex h-full items-center justify-center rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                            size: "lg",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                className: "h-8 w-8"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                                lineNumber: 28,
                                columnNumber: 39
                            }, void 0),
                            bgColor: "bg-gradient-to-br from-blue-500 to-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                            lineNumber: 28,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                        lineNumber: 27,
                        columnNumber: 13
                    }, void 0),
                    chat: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card-layer-1 flex h-full flex-col items-center justify-center rounded-lg p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                className: "text-muted-foreground mb-2 h-8 w-8"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground text-xs",
                                children: "Chat Area"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, void 0),
                    localVideo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-video-tile flex h-full items-center justify-center rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                            size: "md",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                                lineNumber: 39,
                                columnNumber: 39
                            }, void 0),
                            bgColor: "bg-gradient-to-br from-green-500 to-green-600"
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                            lineNumber: 39,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, void 0),
                    controls: showControls ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full items-center justify-center gap-2 rounded-lg border p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$OGIKXBAR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                shape: "round",
                                variant: "filled",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                    className: "size-5"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                                    lineNumber: 45,
                                    columnNumber: 60
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                                lineNumber: 45,
                                columnNumber: 17
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$uikit$2f$dist$2f$chunk$2d$OGIKXBAR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                shape: "round",
                                variant: "filled",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                    className: "size-5"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                                    lineNumber: 46,
                                    columnNumber: 60
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                                lineNumber: 46,
                                columnNumber: 17
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                        lineNumber: 44,
                        columnNumber: 15
                    }, void 0) : undefined,
                    className: "h-96"
                }, void 0, false, {
                    fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-sm font-medium",
                        children: "Props"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-muted-foreground space-y-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "avatar?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                                        lineNumber: 57,
                                        columnNumber: 16
                                    }, this),
                                    " ReactNode - Top-right (largest area)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "chat?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                                        lineNumber: 58,
                                        columnNumber: 16
                                    }, this),
                                    " ReactNode - Top-left area"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "localVideo?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                                        lineNumber: 59,
                                        columnNumber: 16
                                    }, this),
                                    " ReactNode - Bottom-left area"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "controls?:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                                        lineNumber: 60,
                                        columnNumber: 16
                                    }, this),
                                    " ReactNode - Bottom-right area (VideoGridWithControls only)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/app/components/demos/video-grid-demo.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(VideoGridDemo, "7eA0rbk66uaQlFqoDuvoBZcmuMg=");
_c = VideoGridDemo;
var _c;
__turbopack_context__.k.register(_c, "VideoGridDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/code-examples.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "codeExamples",
    ()=>codeExamples
]);
const codeExamples = {
    agentVisualizer: 'import { AgentVisualizer } from "agora-agent-uikit"\n\nexport function MyComponent() {\n  return (\n    <AgentVisualizer\n      state="listening"\n      size="md"\n    />\n  )\n}\n\n// Available states:\n// - not-joined, joining, ambient\n// - listening, analyzing, talking\n// - disconnected\n\n// Available sizes:\n// - sm (128px), md (192px), lg (256px)',
    audioVisualizer: [
        {
            label: "Agora",
            code: 'import { AudioVisualizer } from "agora-agent-uikit"\nimport { useLocalMicrophoneTrack } from "agora-rtc-react"\n\nexport function MyComponent() {\n  const { localMicrophoneTrack } = useLocalMicrophoneTrack()\n\n  return (\n    <AudioVisualizer\n      track={localMicrophoneTrack}\n      gradientColors={["#A0FAFF", "#FCF9F8", "#C46FFB"]}\n    />\n  )\n}\n\n// Features:\n// - 9-bar frequency visualization\n// - Configurable gradient colors\n// - Supports Agora audio tracks'
        },
        {
            label: "WebRTC",
            code: 'import { AudioVisualizer } from "agora-agent-uikit"\nimport { useState, useEffect } from "react"\n\nexport function MyComponent() {\n  const [micStream, setMicStream] = useState<MediaStream>()\n\n  const startMic = async () => {\n    const stream = await navigator.mediaDevices.getUserMedia({\n      audio: true\n    })\n    setMicStream(stream)\n  }\n\n  useEffect(() => {\n    return () => {\n      micStream?.getTracks().forEach(track => track.stop())\n    }\n  }, [micStream])\n\n  return (\n    <>\n      <button onClick={startMic}>Enable Microphone</button>\n      <AudioVisualizer\n        track={micStream}\n        gradientColors={["#3b82f6", "#60a5fa", "#93c5fd"]}\n      />\n    </>\n  )\n}\n\n// Works with standard MediaStream objects'
        }
    ],
    micButton: 'import { MicButton } from "agora-agent-uikit"\nimport { useState } from "react"\n\nexport function MyComponent() {\n  const [state, setState] = useState<\n    "idle" | "listening" | "processing" | "error"\n  >("idle")\n\n  return (\n    <MicButton\n      state={state}\n      showErrorBadge={state === "error"}\n    />\n  )\n}\n\n// States:\n// - idle: Mic icon + chevron\n// - listening: Mic + animated blue waveform\n// - processing: Mic + static gray waveform\n// - error: Mic-off icon in red',
    micButtonWithVisualizer: [
        {
            label: "Agora",
            code: 'import { MicButtonWithVisualizer } from "agora-agent-uikit/rtc"\nimport { AgoraRTCProvider, useLocalMicrophoneTrack } from "agora-rtc-react"\nimport AgoraRTC from "agora-rtc-sdk-ng"\nimport { useState } from "react"\n\nconst client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" })\n\nexport function MyComponent() {\n  const [micEnabled, setMicEnabled] = useState(false)\n  const { localMicrophoneTrack } = useLocalMicrophoneTrack()\n\n  return (\n    <AgoraRTCProvider client={client}>\n      <MicButtonWithVisualizer\n        isEnabled={micEnabled}\n        setIsEnabled={setMicEnabled}\n        track={localMicrophoneTrack}\n        enabledColor="#A0FAFF"\n        disabledColor="#DE344A"\n      />\n    </AgoraRTCProvider>\n  )\n}'
        },
        {
            label: "WebRTC",
            code: 'import { MicButtonWithVisualizer } from "agora-agent-uikit/rtc"\nimport { useState, useEffect } from "react"\n\nexport function MyComponent() {\n  const [micEnabled, setMicEnabled] = useState(false)\n  const [micStream, setMicStream] = useState<MediaStream>()\n\n  const toggleMic = async () => {\n    if (micEnabled && micStream) {\n      micStream.getTracks().forEach(track => track.stop())\n      setMicStream(undefined)\n      setMicEnabled(false)\n    } else {\n      const stream = await navigator.mediaDevices.getUserMedia({\n        audio: true\n      })\n      setMicStream(stream)\n      setMicEnabled(true)\n    }\n  }\n\n  return (\n    <MicButtonWithVisualizer\n      isEnabled={micEnabled}\n      setIsEnabled={setMicEnabled}\n      track={micStream || null}\n      enabledColor="#3b82f6"\n      disabledColor="#ef4444"\n      onToggle={toggleMic}\n    />\n  )\n}'
        }
    ],
    liveWaveform: 'import { LiveWaveform } from "agora-agent-uikit"\n\nexport function MyComponent() {\n  return (\n    <LiveWaveform\n      active={true}\n      barWidth={4}\n      barGap={2}\n      barColor="#3b82f6"\n      height={100}\n      fadeEdges={true}\n    />\n  )\n}\n\n// Props:\n// - active: Enable/disable animation\n// - barWidth, barGap: Bar dimensions\n// - barColor: Color (hex/rgb/name)\n// - height: Waveform height (px)\n// - fadeEdges: Fade left/right edges',
    micSelector: 'import { MicSelector } from "agora-agent-uikit/rtc"\nimport { useState } from "react"\n\nexport function MyComponent() {\n  const [device, setDevice] = useState<string>()\n  const [muted, setMuted] = useState(false)\n\n  return (\n    <MicSelector\n      value={device}\n      onValueChange={setDevice}\n      muted={muted}\n      onMutedChange={setMuted}\n    />\n  )\n}\n\n// Features:\n// - Auto-detects audio devices\n// - Mute/unmute toggle\n// - Waveform preview',
    convoTextStream: [
        {
            label: "RTC",
            code: 'import {\n  ConvoTextStream,\n  EMessageStatus,\n  type IMessageListItem\n} from "agora-agent-uikit"\nimport { useState, useEffect } from "react"\n\nexport function MyComponent() {\n  const [messages, setMessages] = useState<IMessageListItem[]>([])\n  const [inProgressMsg, setInProgressMsg] =\n    useState<IMessageListItem | null>(null)\n\n  return (\n    <ConvoTextStream\n      messageList={messages}\n      currentInProgressMessage={inProgressMsg}\n      agentUID="0"\n    />\n  )\n}'
        },
        {
            label: "RTM",
            code: 'import {\n  ConvoTextStream,\n  EMessageStatus,\n  type IMessageListItem\n} from "agora-agent-uikit"\nimport { useState } from "react"\n\nexport function MyComponent() {\n  const [messages, setMessages] = useState<IMessageListItem[]>([])\n  const [inProgressMsg, setInProgressMsg] =\n    useState<IMessageListItem | null>(null)\n\n  return (\n    <ConvoTextStream\n      messageList={messages}\n      currentInProgressMessage={inProgressMsg}\n      agentUID="0"\n    />\n  )\n}'
        }
    ],
    conversation: 'import {\n  Avatar,\n  Conversation,\n  ConversationContent,\n  ConversationEmptyState,\n  ConversationScrollButton,\n  Message,\n  MessageContent,\n  Response,\n} from "agora-agent-uikit"\nimport { MessageCircle, User } from "lucide-react"\n\nexport function MyComponent() {\n  return (\n    <Conversation>\n      <ConversationContent>\n        <Message from="assistant" avatar={\n          <Avatar icon={<MessageCircle />} />\n        }>\n          <MessageContent>\n            <Response>Hello! How can I help?</Response>\n          </MessageContent>\n        </Message>\n        <Message from="user" avatar={\n          <Avatar icon={<User />} />\n        }>\n          <MessageContent>\n            <Response>I need help with...</Response>\n          </MessageContent>\n        </Message>\n      </ConversationContent>\n      <ConversationScrollButton />\n    </Conversation>\n  )\n}',
    avatar: 'import { Avatar } from "agora-agent-uikit"\nimport { User } from "lucide-react"\n\nexport function MyComponent() {\n  return (\n    <>\n      {/* With initials */}\n      <Avatar size="md" initials="JD" />\n\n      {/* With icon */}\n      <Avatar\n        size="md"\n        icon={<User className="h-5 w-5" />}\n        bgColor="bg-gradient-to-br from-blue-500 to-blue-600"\n      />\n\n      {/* Auto from name */}\n      <Avatar name="John Doe" />\n\n      {/* With image */}\n      <Avatar src="/avatar.jpg" alt="User" />\n    </>\n  )\n}\n\n// Priority: Image > Icon > Initials > Default\n// Sizes: sm (32px), md (40px), lg (48px)',
    videoDisplay: 'import {\n  AvatarVideoDisplay,\n  LocalVideoPreview\n} from "agora-agent-uikit"\n\nexport function MyComponent({ videoTrack }) {\n  return (\n    <>\n      <AvatarVideoDisplay\n        videoTrack={videoTrack}\n        state="connected"\n        showStatus\n        placeholder={<div>No video</div>}\n      />\n\n      <LocalVideoPreview\n        videoTrack={videoTrack}\n        isMirrored\n        showLabel\n        label="You"\n      />\n    </>\n  )\n}',
    cameraSelector: 'import { CameraSelector } from "agora-agent-uikit"\nimport { useState } from "react"\n\nexport function MyComponent({ devices }) {\n  const [selected, setSelected] = useState<string>()\n\n  return (\n    <CameraSelector\n      devices={devices}\n      value={selected}\n      onValueChange={setSelected}\n    />\n  )\n}',
    videoGrid: 'import {\n  VideoGrid,\n  VideoGridWithControls\n} from "agora-agent-uikit"\n\nexport function MyComponent() {\n  return (\n    <VideoGridWithControls\n      avatar={<RemoteVideo />}\n      chat={<ChatPanel />}\n      localVideo={<LocalVideo />}\n      controls={<ControlBar />}\n    />\n  )\n}\n\n// Layout: 2x2 grid\n// - Top-left: chat (40% width)\n// - Top-right: avatar (60% width)\n// - Bottom-left: localVideo\n// - Bottom-right: controls',
    mobileTabs: 'import { MobileTabs, type Tab } from "agora-agent-uikit"\nimport { useState } from "react"\n\nconst tabs: Tab[] = [\n  { id: "chat", label: "Chat", content: <Chat /> },\n  { id: "video", label: "Video", content: <Video /> },\n]\n\nexport function MyComponent() {\n  const [activeTab, setActiveTab] = useState("chat")\n\n  return (\n    <MobileTabs\n      tabs={tabs}\n      activeTab={activeTab}\n      onTabChange={setActiveTab}\n      tabPosition="bottom"\n    />\n  )\n}',
    settingsDialog: 'import { SettingsDialog } from "agora-agent-uikit"\nimport { useState } from "react"\n\nexport function MyComponent() {\n  const [open, setOpen] = useState(false)\n  const [enableAivad, setEnableAivad] = useState(true)\n  const [language, setLanguage] = useState("en-US")\n\n  return (\n    <SettingsDialog\n      open={open}\n      onOpenChange={setOpen}\n      enableAivad={enableAivad}\n      onEnableAivadChange={setEnableAivad}\n      language={language}\n      onLanguageChange={setLanguage}\n      prompt="You are a helpful assistant."\n      onPromptChange={console.log}\n    />\n  )\n}',
    sessionPanel: 'import { SessionPanel } from "agora-agent-uikit"\n\nexport function MyComponent() {\n  return (\n    <SessionPanel\n      agentId="agent-abc-123"\n      payload={{\n        channel_name: "test-channel",\n        uid: 1001,\n        agent_config: {\n          model: "gpt-4o",\n          language: "en-US",\n        },\n      }}\n    />\n  )\n}',
    theme: 'import { applyCustomTheme } from "agora-agent-uikit"\n\n// Apply a custom theme on app init\napplyCustomTheme({\n  PRIMARY_ACTION_BRAND_COLOR: "#E62079",\n  BACKGROUND_COLOR: "#111111",\n  SEMANTIC_SUCCESS: "#36b37e",\n})\n\n// All components automatically update\n// No manual re-renders needed',
    iconButton: 'import { IconButton } from "agora-agent-uikit"\nimport { Copy } from "lucide-react"\n\nexport function MyComponent() {\n  return (\n    <>\n      {/* Filled variant (default) */}\n      <IconButton shape="round" variant="filled">\n        <Copy className="size-5" />\n      </IconButton>\n\n      {/* Outlined variant */}\n      <IconButton shape="square" variant="outlined">\n        <Copy className="size-5" />\n      </IconButton>\n\n      {/* Standard variant */}\n      <IconButton variant="standard">\n        <Copy className="size-5" />\n      </IconButton>\n    </>\n  )\n}',
    button: 'import { Button } from "agora-agent-uikit"\nimport { Mic } from "lucide-react"\n\nexport function MyComponent() {\n  return (\n    <>\n      {/* Variants */}\n      <Button variant="default">Default</Button>\n      <Button variant="secondary">Secondary</Button>\n      <Button variant="destructive">Delete</Button>\n\n      {/* With Icon */}\n      <Button>\n        <Mic className="size-4" />\n        Record\n      </Button>\n\n      {/* With Label */}\n      <Button label="Click to submit">\n        Submit\n      </Button>\n    </>\n  )\n}',
    primitives: 'import { Card, CardTitle, CardContent } from "agora-agent-uikit"\nimport { Chip, Button } from "agora-agent-uikit"\nimport { ValuePicker } from "agora-agent-uikit"\n\n// Card\n<Card>\n  <CardTitle>Title</CardTitle>\n  <CardContent>Content here</CardContent>\n</Card>\n\n// Chip\n<Chip>\n  <Button>Action 1</Button>\n  <Button>Action 2</Button>\n</Chip>\n\n// ValuePicker\n<ValuePicker\n  items={[{ id: "1", name: "Option 1" }]}\n  value={selected}\n  onValueChange={setSelected}\n/>'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/component-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComponentDemo",
    ()=>ComponentDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ComponentDemo(param) {
    let { title, description, demo, code, className } = param;
    _s();
    const [copied, setCopied] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [activeTab, setActiveTab] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const codeExamples = Array.isArray(code) ? code : code ? [
        {
            label: "Code",
            code
        }
    ] : [];
    const hasMultipleTabs = Array.isArray(code) && code.length > 1;
    const copyToClipboard = async ()=>{
        if (codeExamples.length === 0) return;
        try {
            await navigator.clipboard.writeText(codeExamples[activeTab].code);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy code: ", err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-4", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/component-demo.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-1 text-sm",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/component-demo.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/component-demo.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-h-[200px] items-start justify-center",
                            children: demo
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/component-demo.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/component-demo.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    codeExamples.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-muted/50 relative flex flex-col rounded-lg border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-muted/20 flex items-center justify-between border-b px-4 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: hasMultipleTabs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: codeExamples.map((example, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveTab(index),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded px-2 py-1 text-xs font-medium transition-colors", activeTab === index ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"),
                                                    children: example.label
                                                }, index, false, {
                                                    fileName: "[project]/apps/www/app/components/component-demo.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/component-demo.tsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground text-xs font-medium",
                                            children: codeExamples[0].label
                                        }, void 0, false, {
                                            fileName: "[project]/apps/www/app/components/component-demo.tsx",
                                            lineNumber: 92,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/component-demo.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: copyToClipboard,
                                        className: "text-muted-foreground hover:bg-muted hover:text-foreground flex items-center gap-1 rounded px-2 py-1 text-xs font-medium transition-colors",
                                        title: copied ? "Copied!" : "Copy code",
                                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/www/app/components/component-demo.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this),
                                                "Copied!"
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/www/app/components/component-demo.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 21
                                                }, this),
                                                "Copy"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/component-demo.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/component-demo.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "flex-1 overflow-x-auto p-4 text-xs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "text-foreground",
                                    children: codeExamples[activeTab].code
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/component-demo.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/component-demo.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/app/components/component-demo.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/app/components/component-demo.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/app/components/component-demo.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(ComponentDemo, "FeewOrdXL8sokFmrw38+N8vbXIc=");
_c = ComponentDemo;
var _c;
__turbopack_context__.k.register(_c, "ComponentDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/app/components/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComponentsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$basepath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/lib/basepath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$agent$2d$visualizer$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/agent-visualizer-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$audio$2d$visualizer$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/audio-visualizer-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$avatar$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/avatar-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$button$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/button-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$camera$2d$selector$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/camera-selector-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$conversation$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/conversation-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$convo$2d$text$2d$stream$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/convo-text-stream-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$icon$2d$button$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/icon-button-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$live$2d$waveform$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/live-waveform-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$mic$2d$button$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/mic-button-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$mic$2d$button$2d$with$2d$visualizer$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/mic-button-with-visualizer-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$mic$2d$selector$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/mic-selector-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$mobile$2d$tabs$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/mobile-tabs-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$primitives$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/primitives-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$session$2d$panel$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/session-panel-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$settings$2d$dialog$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/settings-dialog-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$theme$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/theme-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$video$2d$display$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/video-display-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$video$2d$grid$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/demos/video-grid-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/code-examples.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/app/components/component-demo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function InstallCTA() {
    _s();
    const [copied, setCopied] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const installCommand = "npm install agora-agent-uikit";
    const copyToClipboard = async ()=>{
        try {
            await navigator.clipboard.writeText(installCommand);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy install command: ", err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-card flex items-center gap-3 rounded-lg border p-4 shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                    className: "text-muted-foreground h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/apps/www/app/components/page.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    className: "text-muted-foreground flex-1 font-mono text-xs",
                    children: installCommand
                }, void 0, false, {
                    fileName: "[project]/apps/www/app/components/page.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: copyToClipboard,
                    className: "text-muted-foreground hover:bg-muted hover:text-foreground flex h-6 w-6 items-center justify-center rounded transition-colors",
                    title: copied ? "Copied!" : "Copy install command",
                    children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-3 w-3"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/page.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                        className: "h-3 w-3"
                    }, void 0, false, {
                        fileName: "[project]/apps/www/app/components/page.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/www/app/components/page.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/app/components/page.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/www/app/components/page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(InstallCTA, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = InstallCTA;
function ComponentsPage() {
    const basePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$basepath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBasePath"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-background min-h-screen p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-6 md:flex-row md:items-start md:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex items-end gap-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold tracking-tight",
                                        children: "AI Agent UIKit"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-lg",
                                    children: "React components for building AI agents with real-time voice and video"
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:w-90",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstallCTA, {}, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/www/app/components/page.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                    defaultValue: "agent-visualizer",
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-background border-b pb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                className: "flex flex-wrap gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "agent-visualizer",
                                        className: "text-xs",
                                        children: "Agent Visualizer"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "audio-visualizer",
                                        className: "text-xs",
                                        children: "Audio Visualizer"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "mic-button",
                                        className: "text-xs",
                                        children: "Mic Button"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "mic-button-visualizer",
                                        className: "text-xs",
                                        children: "Mic + Visualizer"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "live-waveform",
                                        className: "text-xs",
                                        children: "Live Waveform"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "mic-selector",
                                        className: "text-xs",
                                        children: "Mic Selector"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "convo-text-stream",
                                        className: "text-xs",
                                        children: "Transcript"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "conversation",
                                        className: "text-xs",
                                        children: "Conversation"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "avatar",
                                        className: "text-xs",
                                        children: "Avatar"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "video-display",
                                        className: "text-xs",
                                        children: "Video Display"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "camera-selector",
                                        className: "text-xs",
                                        children: "Camera Selector"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "video-grid",
                                        className: "text-xs",
                                        children: "Video Grid"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "mobile-tabs",
                                        className: "text-xs",
                                        children: "Mobile Tabs"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "settings-dialog",
                                        className: "text-xs",
                                        children: "Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "session-panel",
                                        className: "text-xs",
                                        children: "Session Panel"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "button",
                                        className: "text-xs",
                                        children: "Button"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "icon-button",
                                        className: "text-xs",
                                        children: "Icon Button"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "primitives",
                                        className: "text-xs",
                                        children: "Primitives"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "theme",
                                        className: "text-xs",
                                        children: "Theme"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/www/app/components/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "agent-visualizer",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Agent Visualizer",
                                description: "An animated agent visualizer component that displays Lottie animations for different agent states",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$agent$2d$visualizer$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].agentVisualizer
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "audio-visualizer",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Audio Visualizer",
                                description: "Real-time audio frequency visualizer with 9 bars and configurable gradient colors. Supports Agora audio tracks and MediaStream.",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$audio$2d$visualizer$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].audioVisualizer
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "mic-button",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Mic Button",
                                description: "A microphone button with state-based visual feedback. Shows different animations for idle, listening, processing, and error states.",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$mic$2d$button$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].micButton
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "mic-button-visualizer",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Mic Button with Visualizer",
                                description: "Microphone toggle button with integrated 5-bar audio visualizer. Requires Agora RTC context for publish/unpublish functionality.",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$mic$2d$button$2d$with$2d$visualizer$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].micButtonWithVisualizer
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "live-waveform",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Live Waveform",
                                description: "Animated waveform bars with configurable appearance. Can be driven by live audio data or display ambient animation.",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$live$2d$waveform$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].liveWaveform
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "mic-selector",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Mic Selector",
                                description: "A microphone selector component with automatic device detection, mute toggle, and waveform preview using Web Audio API",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$mic$2d$selector$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 212,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].micSelector
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "convo-text-stream",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Convo Text Stream",
                                description: "Collapsible chat interface for displaying streaming conversation transcripts. Supports markdown rendering, auto-scrolling, and both RTC/RTM message sources.",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$convo$2d$text$2d$stream$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].convoTextStream
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "conversation",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Conversation",
                                description: "Scrollable conversation component with auto-scroll, streaming responses, avatar integration, and empty state handling.",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$conversation$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].conversation
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "avatar",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Avatar",
                                description: "Flexible avatar component displaying images, icons, or initials with configurable sizes and colors.",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$avatar$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].avatar
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "video-display",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Video Display",
                                description: "AvatarVideoDisplay and LocalVideoPreview components for rendering video tracks with placeholder states.",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$video$2d$display$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].videoDisplay
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "camera-selector",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Camera Selector",
                                description: "Camera device selector with device list, disabled state, and error state support.",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$camera$2d$selector$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].cameraSelector
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "video-grid",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Video Grid",
                                description: "2x2 grid layout for video calls with slots for avatar, chat, local video, and controls.",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$video$2d$grid$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 269,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].videoGrid
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "mobile-tabs",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Mobile Tabs",
                                description: "Tab navigation component with top/bottom positioning, icon support, and content switching.",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$mobile$2d$tabs$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 278,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].mobileTabs
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "settings-dialog",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Settings Dialog",
                                description: "Modal dialog with AgentSettings controls including mic selection, AI VAD, language, prompt, and greeting.",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$settings$2d$dialog$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].settingsDialog
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "session-panel",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Session Panel",
                                description: "Displays agent session information including agent ID and JSON payload with copy functionality.",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$session$2d$panel$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 297,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].sessionPanel
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "button",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Button",
                                description: "A versatile button component with multiple variants, sizes, and optional label support.",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$button$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].button
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "icon-button",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Icon Button",
                                description: "A compact icon button component with shape variants (round, square) and style variants (filled, outlined, standard).",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$icon$2d$button$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].iconButton
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "primitives",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Card / Chip / Value Picker",
                                description: "Core primitive components: Card containers, Chip wrappers, and ValuePicker dropdown selects.",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$primitives$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].primitives
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "theme",
                            className: "pt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$component$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentDemo"], {
                                title: "Theme",
                                description: "Dynamic theme system using applyCustomTheme() to set CSS variables. All components automatically update.",
                                demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$demos$2f$theme$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/www/app/components/page.tsx",
                                    lineNumber: 335,
                                    columnNumber: 21
                                }, void 0),
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$app$2f$components$2f$code$2d$examples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codeExamples"].theme
                            }, void 0, false, {
                                fileName: "[project]/apps/www/app/components/page.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/app/components/page.tsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/www/app/components/page.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/app/components/page.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/www/app/components/page.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_c1 = ComponentsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "InstallCTA");
__turbopack_context__.k.register(_c1, "ComponentsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_6c3d7fc0._.js.map