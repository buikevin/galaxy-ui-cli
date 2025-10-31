import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Context Menu","description":"","frontmatter":{},"headers":[],"relativePath":"vi/components/context-menu.md","filePath":"vi/components/context-menu.md","lastUpdated":1761927024000}');
const _sfc_main = { name: "vi/components/context-menu.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ComponentPreview = resolveComponent("ComponentPreview");
  const _component_DemoContainer = resolveComponent("DemoContainer");
  const _component_ContextMenuDemo = resolveComponent("ContextMenuDemo");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="context-menu" tabindex="-1">Context Menu <a class="header-anchor" href="#context-menu" aria-label="Permalink to &quot;Context Menu&quot;">​</a></h1><p>Hiển thị menu cho người dùng—chẳng hạn như một tập hợp các hành động hoặc chức năng—được kích hoạt bằng cách nhấp chuột phải.</p>`);
  _push(ssrRenderComponent(_component_ComponentPreview, { name: "ContextMenuDemo" }, {
    preview: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_DemoContainer, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ContextMenuDemo, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ContextMenuDemo)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_DemoContainer, null, {
            default: withCtx(() => [
              createVNode(_component_ContextMenuDemo)
            ]),
            _: 1
          })
        ];
      }
    }),
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="vp-code-group vp-adaptive-theme"${_scopeId}><div class="tabs"${_scopeId}><input type="radio" name="group-xlUFA" id="tab-WkiEORz" checked${_scopeId}><label data-title="Vue" for="tab-WkiEORz"${_scopeId}>Vue</label><input type="radio" name="group-xlUFA" id="tab-poJxAqA"${_scopeId}><label data-title="React" for="tab-poJxAqA"${_scopeId}>React</label><input type="radio" name="group-xlUFA" id="tab-IyHeG19"${_scopeId}><label data-title="Angular" for="tab-IyHeG19"${_scopeId}>Angular</label></div><div class="blocks"${_scopeId}><div class="language-vue vp-adaptive-theme active line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>&quot;ts&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}> &#39;@/components/ui/context-menu&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>ContextMenu</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>ContextMenuTrigger</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;Right click here&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>ContextMenuTrigger</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>ContextMenuContent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;Profile&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;Settings&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;Logout&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>ContextMenuContent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>  &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>ContextMenu</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}></div></div><div class="language-tsx vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}> &quot;@/components/ui/context-menu&quot;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>export</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> default</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> function</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> App</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>() {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>  return</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> (</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>ContextMenu</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>ContextMenuTrigger</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;Right click here&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>ContextMenuTrigger</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>ContextMenuContent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;Profile&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;Settings&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;Logout&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>ContextMenuContent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>ContextMenu</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>  )</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}></div></div><div class="language-typescript vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> { Component } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}> &#39;@angular/core&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> { ContextMenuComponent } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}> &#39;@/components/ui/context-menu&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>@</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Component</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>({</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>  selector: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>&#39;app-root&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>  standalone: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>true</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>  imports: [ContextMenuComponent],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>  template: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>\`</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>    &lt;ui-context-menu&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>      &lt;div trigger&gt;Right click here&lt;/div&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>      &lt;div content&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>        &lt;ui-context-menu-item&gt;Profile&lt;/ui-context-menu-item&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>        &lt;ui-context-menu-item&gt;Settings&lt;/ui-context-menu-item&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>        &lt;ui-context-menu-item&gt;Logout&lt;/ui-context-menu-item&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>      &lt;/div&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>    &lt;/ui-context-menu&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>  \`</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>})</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>export</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> AppComponent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "vp-code-group vp-adaptive-theme" }, [
            createVNode("div", { class: "tabs" }, [
              createVNode("input", {
                type: "radio",
                name: "group-xlUFA",
                id: "tab-WkiEORz",
                checked: ""
              }),
              createVNode("label", {
                "data-title": "Vue",
                for: "tab-WkiEORz"
              }, "Vue"),
              createVNode("input", {
                type: "radio",
                name: "group-xlUFA",
                id: "tab-poJxAqA"
              }),
              createVNode("label", {
                "data-title": "React",
                for: "tab-poJxAqA"
              }, "React"),
              createVNode("input", {
                type: "radio",
                name: "group-xlUFA",
                id: "tab-IyHeG19"
              }),
              createVNode("label", {
                "data-title": "Angular",
                for: "tab-IyHeG19"
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
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } "),
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "from"),
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " '@/components/ui/context-menu'")
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
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "ContextMenu"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    <"),
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "ContextMenuTrigger"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">Right click here</"),
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "ContextMenuTrigger"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    <"),
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "ContextMenuContent"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      <"),
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "ContextMenuItem"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">Profile</"),
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "ContextMenuItem"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      <"),
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "ContextMenuItem"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">Settings</"),
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "ContextMenuItem"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      <"),
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "ContextMenuItem"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">Logout</"),
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "ContextMenuItem"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    </"),
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "ContextMenuContent"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  </"),
                      createVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "ContextMenu"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
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
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "8"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "9"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "10"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "11"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "12"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "13"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "14"),
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
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } "),
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "from"),
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, ' "@/components/ui/context-menu"')
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
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " (")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    <"),
                      createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "ContextMenu"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      <"),
                      createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "ContextMenuTrigger"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">Right click here</"),
                      createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "ContextMenuTrigger"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      <"),
                      createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "ContextMenuContent"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        <"),
                      createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "ContextMenuItem"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">Profile</"),
                      createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "ContextMenuItem"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        <"),
                      createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "ContextMenuItem"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">Settings</"),
                      createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "ContextMenuItem"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        <"),
                      createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "ContextMenuItem"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">Logout</"),
                      createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "ContextMenuItem"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      </"),
                      createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "ContextMenuContent"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    </"),
                      createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "ContextMenu"),
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  )")
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
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "11"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "12"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "13"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "14"),
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
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " { ContextMenuComponent } "),
                      createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "from"),
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " '@/components/ui/context-menu'"),
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
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  imports: [ContextMenuComponent],")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  template: "),
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "`")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "    <ui-context-menu>")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "      <div trigger>Right click here</div>")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "      <div content>")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "        <ui-context-menu-item>Profile</ui-context-menu-item>")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "        <ui-context-menu-item>Settings</ui-context-menu-item>")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "        <ui-context-menu-item>Logout</ui-context-menu-item>")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "      </div>")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "    </ui-context-menu>")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "  `")
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
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "11"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "12"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "13"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "14"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "15"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "16"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "17"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "18"),
                  createVNode("br"),
                  createVNode("span", { class: "line-number" }, "19"),
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
  _push(`<h2 id="cai-đat" tabindex="-1">Cài đặt <a class="header-anchor" href="#cai-đat" aria-label="Permalink to &quot;Cài đặt&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-DQlKT" id="tab-24SaDsR" checked><label data-title="npm" for="tab-24SaDsR">npm</label><input type="radio" name="group-DQlKT" id="tab-Mh6b3rs"><label data-title="pnpm" for="tab-Mh6b3rs">pnpm</label><input type="radio" name="group-DQlKT" id="tab-As-Gee4"><label data-title="yarn" for="tab-As-Gee4">yarn</label><input type="radio" name="group-DQlKT" id="tab-efIzBle"><label data-title="bun" for="tab-efIzBle">bun</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">npx</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> galaxy-ui@latest</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> add</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> context-menu</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">pnpm</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> dlx</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> galaxy-ui@latest</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> add</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> context-menu</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">yarn</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> dlx</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> galaxy-ui@latest</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> add</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> context-menu</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">bunx</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> galaxy-ui@latest</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> add</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> context-menu</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><h2 id="su-dung" tabindex="-1">Sử dụng <a class="header-anchor" href="#su-dung" aria-label="Permalink to &quot;Sử dụng&quot;">​</a></h2><h3 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h3><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;ts&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  ContextMenu,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  ContextMenuTrigger,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  ContextMenuContent,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  ContextMenuItem</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">} </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@galaxy-ui/vue&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ContextMenu</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ContextMenuTrigger</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Nhấp chuột phải vào đây&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ContextMenuTrigger</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ContextMenuContent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Hồ sơ&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Cài đặt&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Đăng xuất&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ContextMenuContent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ContextMenu</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="react" tabindex="-1">React <a class="header-anchor" href="#react" aria-label="Permalink to &quot;React&quot;">​</a></h3><div class="language-tsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  ContextMenu,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  ContextMenuTrigger,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  ContextMenuContent,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  ContextMenuItem</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">} </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@galaxy-ui/react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">export</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> default</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> function</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> ContextMenuDemo</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">  return</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> (</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">ContextMenu</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">ContextMenuTrigger</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Nhấp chuột phải vào đây&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">ContextMenuTrigger</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">ContextMenuContent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Hồ sơ&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Cài đặt&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Đăng xuất&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">ContextMenuItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">      &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">ContextMenuContent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">ContextMenu</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  )</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vi/components/context-menu.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contextMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contextMenu as default
};
