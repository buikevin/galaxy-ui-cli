import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Separator","description":"","frontmatter":{},"headers":[],"relativePath":"vi/components/separator.md","filePath":"vi/components/separator.md","lastUpdated":1761927024000}');
const _sfc_main = { name: "vi/components/separator.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ComponentPreview = resolveComponent("ComponentPreview");
  const _component_DemoContainer = resolveComponent("DemoContainer");
  const _component_SeparatorDemo = resolveComponent("SeparatorDemo");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="separator" tabindex="-1">Separator <a class="header-anchor" href="#separator" aria-label="Permalink to &quot;Separator&quot;">​</a></h1><p>Đường phân cách.</p>`);
  _push(ssrRenderComponent(_component_ComponentPreview, { name: "SeparatorDemo" }, {
    preview: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_DemoContainer, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_SeparatorDemo, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_SeparatorDemo)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_DemoContainer, null, {
            default: withCtx(() => [
              createVNode(_component_SeparatorDemo)
            ]),
            _: 1
          })
        ];
      }
    }),
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="vp-code-group vp-adaptive-theme"${_scopeId}><div class="tabs"${_scopeId}><input type="radio" name="group-ehTYd" id="tab-Un0YLTI" checked${_scopeId}><label data-title="Vue" for="tab-Un0YLTI"${_scopeId}>Vue</label><input type="radio" name="group-ehTYd" id="tab-3DgJ6iu"${_scopeId}><label data-title="React" for="tab-3DgJ6iu"${_scopeId}>React</label><input type="radio" name="group-ehTYd" id="tab-Z3RVUHz"${_scopeId}><label data-title="Angular" for="tab-Z3RVUHz"${_scopeId}>Angular</label></div><div class="blocks"${_scopeId}><div class="language-vue vp-adaptive-theme active line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>&quot;ts&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> { Separator } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}> &#39;@/components/ui/separator&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>Separator</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}></div></div><div class="language-tsx vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> { Separator } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}> &quot;@/components/ui/separator&quot;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>export</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> default</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> function</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> App</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>() {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>  return</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>Separator</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}></div></div><div class="language-typescript vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> { Component } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}> &#39;@angular/core&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> { SeparatorComponent } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}> &#39;@/components/ui/separator&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>@</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Component</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>({</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>  selector: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>&#39;app-root&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>  standalone: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>true</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>  imports: [SeparatorComponent],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>  template: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>\`&lt;ui-separator&gt;&lt;/ui-separator&gt;\`</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>})</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>export</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> AppComponent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "vp-code-group vp-adaptive-theme" }, [
            createVNode("div", { class: "tabs" }, [
              createVNode("input", {
                type: "radio",
                name: "group-ehTYd",
                id: "tab-Un0YLTI",
                checked: ""
              }),
              createVNode("label", {
                "data-title": "Vue",
                for: "tab-Un0YLTI"
              }, "Vue"),
              createVNode("input", {
                type: "radio",
                name: "group-ehTYd",
                id: "tab-3DgJ6iu"
              }),
              createVNode("label", {
                "data-title": "React",
                for: "tab-3DgJ6iu"
              }, "React"),
              createVNode("input", {
                type: "radio",
                name: "group-ehTYd",
                id: "tab-Z3RVUHz"
              }),
              createVNode("label", {
                "data-title": "Angular",
                for: "tab-Z3RVUHz"
              }, "Angular")
            ]),
            createVNode("div", { class: "blocks" }, [
              createVNode("div", { class: "language-vue vp-adaptive-theme active line-numbers-mode" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", {
                  class: "shiki shiki-themes github-light github-dark vp-code",
                  tabindex: "0"
                }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "<"),
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "script"),
                      createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " setup"),
                      createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " lang"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "="),
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, '"ts"'),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "import"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " { Separator } "),
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "from"),
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " '@/components/ui/separator'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "</"),
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "script"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "<"),
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "template"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  <"),
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "Separator"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "</"),
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "template"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ])
                  ])
                ]),
                createVNode("div", {
                  class: "line-numbers-wrapper",
                  "aria-hidden": "true"
                }, [
                  createVNode("span", { class: "line-number" }, "1"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "2"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "3"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "4"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "5"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "6"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "7"),
                  createVNode("br")
                ])
              ]),
              createVNode("div", { class: "language-tsx vp-adaptive-theme line-numbers-mode" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "tsx"),
                createVNode("pre", {
                  class: "shiki shiki-themes github-light github-dark vp-code",
                  tabindex: "0"
                }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "import"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " { Separator } "),
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "from"),
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, ' "@/components/ui/separator"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "export"),
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " default"),
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " function"),
                      createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " App"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "() {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "  return"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " <"),
                      createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "Separator"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "}")
                    ])
                  ])
                ]),
                createVNode("div", {
                  class: "line-numbers-wrapper",
                  "aria-hidden": "true"
                }, [
                  createVNode("span", { class: "line-number" }, "1"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "2"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "3"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "4"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "5"),
                  createVNode("br")
                ])
              ]),
              createVNode("div", { class: "language-typescript vp-adaptive-theme line-numbers-mode" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "typescript"),
                createVNode("pre", {
                  class: "shiki shiki-themes github-light github-dark vp-code",
                  tabindex: "0"
                }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "import"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " { Component } "),
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "from"),
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " '@angular/core'"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "import"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " { SeparatorComponent } "),
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "from"),
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " '@/components/ui/separator'"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "@"),
                      createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Component"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "({")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  selector: "),
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "'app-root'"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  standalone: "),
                      createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "true"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  imports: [SeparatorComponent],")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  template: "),
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "`<ui-separator></ui-separator>`")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "})")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "export"),
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " class"),
                      createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " AppComponent"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " {}")
                    ])
                  ])
                ]),
                createVNode("div", {
                  class: "line-numbers-wrapper",
                  "aria-hidden": "true"
                }, [
                  createVNode("span", { class: "line-number" }, "1"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "2"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "3"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "4"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "5"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "6"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "7"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "8"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "9"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "10"),
                  createVNode("br")
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="cai-đat" tabindex="-1">Cài đặt <a class="header-anchor" href="#cai-đat" aria-label="Permalink to &quot;Cài đặt&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Gu8a0" id="tab-OKKrhuM" checked><label data-title="npm" for="tab-OKKrhuM">npm</label><input type="radio" name="group-Gu8a0" id="tab-gLQp4wq"><label data-title="pnpm" for="tab-gLQp4wq">pnpm</label><input type="radio" name="group-Gu8a0" id="tab-rfiH7cf"><label data-title="yarn" for="tab-rfiH7cf">yarn</label><input type="radio" name="group-Gu8a0" id="tab-CzSQ8QL"><label data-title="bun" for="tab-CzSQ8QL">bun</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">npx</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> galaxy-ui@latest</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> add</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> separator</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">pnpm</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> dlx</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> galaxy-ui@latest</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> add</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> separator</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">yarn</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> dlx</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> galaxy-ui@latest</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> add</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> separator</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">bunx</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> galaxy-ui@latest</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> add</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> separator</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Separator</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Separator</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> orientation</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;vertical&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Bùi Trọng Hiếu</strong> - MIT © 2025</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vi/components/separator.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const separator = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  separator as default
};
