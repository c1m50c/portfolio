
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function is_promise(value) {
        return value && typeof value === 'object' && typeof value.then === 'function';
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function create_slot(definition, ctx, $$scope, fn) {
        if (definition) {
            const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
            return definition[0](slot_ctx);
        }
    }
    function get_slot_context(definition, ctx, $$scope, fn) {
        return definition[1] && fn
            ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
            : $$scope.ctx;
    }
    function get_slot_changes(definition, $$scope, dirty, fn) {
        if (definition[2] && fn) {
            const lets = definition[2](fn(dirty));
            if ($$scope.dirty === undefined) {
                return lets;
            }
            if (typeof lets === 'object') {
                const merged = [];
                const len = Math.max($$scope.dirty.length, lets.length);
                for (let i = 0; i < len; i += 1) {
                    merged[i] = $$scope.dirty[i] | lets[i];
                }
                return merged;
            }
            return $$scope.dirty | lets;
        }
        return $$scope.dirty;
    }
    function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
        if (slot_changes) {
            const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
            slot.p(slot_context, slot_changes);
        }
    }
    function get_all_dirty_from_scope($$scope) {
        if ($$scope.ctx.length > 32) {
            const dirty = [];
            const length = $$scope.ctx.length / 32;
            for (let i = 0; i < length; i++) {
                dirty[i] = -1;
            }
            return dirty;
        }
        return -1;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function self(fn) {
        return function (event) {
            // @ts-ignore
            if (event.target === this)
                fn.call(this, event);
        };
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_style(node, key, value, important) {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
    function custom_event(type, detail, bubbles = false) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }

    function handle_promise(promise, info) {
        const token = info.token = {};
        function update(type, index, key, value) {
            if (info.token !== token)
                return;
            info.resolved = value;
            let child_ctx = info.ctx;
            if (key !== undefined) {
                child_ctx = child_ctx.slice();
                child_ctx[key] = value;
            }
            const block = type && (info.current = type)(child_ctx);
            let needs_flush = false;
            if (info.block) {
                if (info.blocks) {
                    info.blocks.forEach((block, i) => {
                        if (i !== index && block) {
                            group_outros();
                            transition_out(block, 1, 1, () => {
                                if (info.blocks[i] === block) {
                                    info.blocks[i] = null;
                                }
                            });
                            check_outros();
                        }
                    });
                }
                else {
                    info.block.d(1);
                }
                block.c();
                transition_in(block, 1);
                block.m(info.mount(), info.anchor);
                needs_flush = true;
            }
            info.block = block;
            if (info.blocks)
                info.blocks[index] = block;
            if (needs_flush) {
                flush();
            }
        }
        if (is_promise(promise)) {
            const current_component = get_current_component();
            promise.then(value => {
                set_current_component(current_component);
                update(info.then, 1, info.value, value);
                set_current_component(null);
            }, error => {
                set_current_component(current_component);
                update(info.catch, 2, info.error, error);
                set_current_component(null);
                if (!info.hasCatch) {
                    throw error;
                }
            });
            // if we previously had a then/catch block, destroy it
            if (info.current !== info.pending) {
                update(info.pending, 0);
                return true;
            }
        }
        else {
            if (info.current !== info.then) {
                update(info.then, 1, info.value, promise);
                return true;
            }
            info.resolved = promise;
        }
    }
    function update_await_block_branch(info, ctx, dirty) {
        const child_ctx = ctx.slice();
        const { resolved } = info;
        if (info.current === info.then) {
            child_ctx[info.value] = resolved;
        }
        if (info.current === info.catch) {
            child_ctx[info.error] = resolved;
        }
        info.block.p(child_ctx, dirty);
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : options.context || []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.42.5' }, detail), true));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src\components\navigation_bar.svelte generated by Svelte v3.42.5 */

    const file$f = "src\\components\\navigation_bar.svelte";

    function create_fragment$f(ctx) {
    	let div;
    	let nav;
    	let a0;
    	let t1;
    	let a1;
    	let t3;
    	let a2;
    	let t5;
    	let a3;

    	const block = {
    		c: function create() {
    			div = element("div");
    			nav = element("nav");
    			a0 = element("a");
    			a0.textContent = "Welcome";
    			t1 = space();
    			a1 = element("a");
    			a1.textContent = "Skills";
    			t3 = space();
    			a2 = element("a");
    			a2.textContent = "Projects";
    			t5 = space();
    			a3 = element("a");
    			a3.textContent = "Contact";
    			attr_dev(a0, "class", "navbar-link svelte-1ctrp5");
    			attr_dev(a0, "href", "#");
    			add_location(a0, file$f, 69, 8, 1821);
    			attr_dev(a1, "class", "navbar-link svelte-1ctrp5");
    			attr_dev(a1, "href", "#skills");
    			add_location(a1, file$f, 70, 8, 1874);
    			attr_dev(a2, "class", "navbar-link svelte-1ctrp5");
    			attr_dev(a2, "href", "#projects");
    			add_location(a2, file$f, 71, 8, 1932);
    			attr_dev(a3, "class", "navbar-link svelte-1ctrp5");
    			attr_dev(a3, "href", "#contact");
    			add_location(a3, file$f, 72, 8, 1994);
    			attr_dev(nav, "class", "navigation-bar svelte-1ctrp5");
    			add_location(nav, file$f, 67, 4, 1728);
    			attr_dev(div, "class", "navigation-bar-container svelte-1ctrp5");
    			add_location(div, file$f, 66, 0, 1684);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, nav);
    			append_dev(nav, a0);
    			append_dev(nav, t1);
    			append_dev(nav, a1);
    			append_dev(nav, t3);
    			append_dev(nav, a2);
    			append_dev(nav, t5);
    			append_dev(nav, a3);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$f.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$f($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Navigation_bar', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Navigation_bar> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Navigation_bar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$f, create_fragment$f, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Navigation_bar",
    			options,
    			id: create_fragment$f.name
    		});
    	}
    }

    /* src\components\welcome.svelte generated by Svelte v3.42.5 */

    const file$e = "src\\components\\welcome.svelte";

    function create_fragment$e(ctx) {
    	let div1;
    	let svg;
    	let g;
    	let path0;
    	let path1;
    	let t0;
    	let div0;
    	let h2;
    	let t2;
    	let p;

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			svg = svg_element("svg");
    			g = svg_element("g");
    			path0 = svg_element("path");
    			path1 = svg_element("path");
    			t0 = space();
    			div0 = element("div");
    			h2 = element("h2");
    			h2.textContent = "Hey, I'm Pere";
    			t2 = space();
    			p = element("p");
    			p.textContent = "I do software development";
    			attr_dev(path0, "id", "logo-path");
    			attr_dev(path0, "d", "M134.015 82.5174C137.643 121.896 143.026 161.079 148.566 200.225C155.324 245.741 162.326 291.223 169.81 336.626C171.043 343.938 172.35 351.238 173.65 358.539C176.091 372.248 195.478 368.796 193.038 355.087C191.753 347.869 190.46 340.652 189.241 333.423C181.78 288.167 174.801 242.833 168.064 197.465C162.61 158.937 157.331 120.373 153.687 81.6232C153.055 67.7128 133.383 68.607 134.015 82.5174Z");
    			attr_dev(path0, "class", "svelte-uoi0j5");
    			add_location(path0, file$e, 92, 12, 2017);
    			attr_dev(path1, "id", "logo-path");
    			attr_dev(path1, "d", "M95.5772 233.886C97.5979 233.631 99.629 233.448 101.639 233.12C120.469 230.047 139.208 225.43 157.254 219.25C167.749 215.656 178.214 211.904 188.348 207.396C199.905 202.256 210.945 196.027 222.244 190.342C233.108 183.274 244.389 176.809 254.836 169.138C273.343 155.548 291.515 139.359 305.406 120.892C315.812 107.059 325.939 89.052 327.276 71.163C327.889 62.9531 325.176 54.8319 324.126 46.6664C319.359 39.4591 316.093 30.9932 309.825 25.0444C293.29 9.35003 270.982 3.12849 248.96 0.917283C220.119 -1.97867 185.507 2.35398 157.62 8.71109C141.491 12.3879 125.898 18.1124 110.037 22.813C74.6917 37.2926 64.1088 40.1281 32.069 58.6398C22.7372 64.0315 14.0258 70.4321 5.00424 76.3283C-6.64025 83.964 4.15833 100.432 15.8028 92.7961C24.2578 87.2322 32.4147 81.1865 41.1677 76.1044C71.7298 58.3597 81.9259 55.5919 115.663 41.6846C130.697 37.1734 145.476 31.7068 160.764 28.151C186.837 22.0869 217.798 18.126 244.805 20.1664C261.986 21.4646 279.966 25.614 293.847 36.5554C298.335 40.0931 301.076 45.4088 304.69 49.8355C305.863 55.3024 308.39 60.6479 308.209 66.2364C307.724 81.2555 299.276 96.2226 290.728 107.763C277.939 125.03 261.234 139.959 244.071 152.648C234.233 159.922 223.603 166.058 213.369 172.763C202.685 178.176 192.25 184.111 181.317 189.001C171.653 193.325 161.67 196.922 151.66 200.369C133.138 206.747 113.922 211.398 94.5422 214.22C80.6367 214.952 81.6717 234.618 95.5772 233.886V233.886Z");
    			attr_dev(path1, "class", "svelte-uoi0j5");
    			add_location(path1, file$e, 93, 12, 2452);
    			add_location(g, file$e, 91, 9, 2000);
    			attr_dev(svg, "width", "328");
    			attr_dev(svg, "height", "368");
    			attr_dev(svg, "viewBox", "0 0 328 368");
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "id", "logo");
    			attr_dev(svg, "class", "svelte-uoi0j5");
    			add_location(svg, file$e, 90, 4, 1892);
    			attr_dev(h2, "id", "hey");
    			attr_dev(h2, "class", "svelte-uoi0j5");
    			add_location(h2, file$e, 97, 8, 3942);
    			attr_dev(p, "id", "hook");
    			attr_dev(p, "class", "svelte-uoi0j5");
    			add_location(p, file$e, 98, 8, 3983);
    			attr_dev(div0, "id", "h2-container");
    			attr_dev(div0, "class", "svelte-uoi0j5");
    			add_location(div0, file$e, 96, 4, 3909);
    			attr_dev(div1, "class", "info-container svelte-uoi0j5");
    			attr_dev(div1, "id", "welcome");
    			add_location(div1, file$e, 89, 0, 1845);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, svg);
    			append_dev(svg, g);
    			append_dev(g, path0);
    			append_dev(g, path1);
    			append_dev(div1, t0);
    			append_dev(div1, div0);
    			append_dev(div0, h2);
    			append_dev(div0, t2);
    			append_dev(div0, p);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$e.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$e($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Welcome', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Welcome> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Welcome extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$e, create_fragment$e, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Welcome",
    			options,
    			id: create_fragment$e.name
    		});
    	}
    }

    /* src\components\logo_link.svelte generated by Svelte v3.42.5 */

    const file$d = "src\\components\\logo_link.svelte";

    // (60:38) 
    function create_if_block_6(ctx) {
    	let svg;
    	let path;
    	let svg_class_value;

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			attr_dev(path, "id", "W");
    			attr_dev(path, "d", "M23.1328 4.10938V4.54297C22.7188 4.54297 22.3828 4.61719 22.125 4.76562C21.8672 4.91406 21.6211 5.19141 21.3867 5.59766C21.2305 5.87109 20.9844 6.52344 20.6484 7.55469L16.2188 20.3633H15.75L12.1289 10.2031L8.53125 20.3633H8.10938L3.38672 7.16797C3.03516 6.18359 2.8125 5.60156 2.71875 5.42188C2.5625 5.125 2.34766 4.90625 2.07422 4.76562C1.80859 4.61719 1.44531 4.54297 0.984375 4.54297V4.10938H6.86719V4.54297H6.58594C6.17188 4.54297 5.85547 4.63672 5.63672 4.82422C5.41797 5.01172 5.30859 5.23828 5.30859 5.50391C5.30859 5.77734 5.48047 6.40625 5.82422 7.39062L8.95312 16.3086L11.5898 8.72656L11.1211 7.39062L10.7461 6.32422C10.582 5.93359 10.3984 5.58984 10.1953 5.29297C10.0938 5.14453 9.96875 5.01953 9.82031 4.91797C9.625 4.77734 9.42969 4.67578 9.23438 4.61328C9.08594 4.56641 8.85156 4.54297 8.53125 4.54297V4.10938H14.7188V4.54297H14.2969C13.8594 4.54297 13.5391 4.63672 13.3359 4.82422C13.1328 5.01172 13.0312 5.26563 13.0312 5.58594C13.0312 5.98438 13.207 6.67969 13.5586 7.67188L16.6055 16.3086L19.6289 7.55469C19.9727 6.58594 20.1445 5.91406 20.1445 5.53906C20.1445 5.35938 20.0859 5.19141 19.9688 5.03516C19.8594 4.87891 19.7188 4.76953 19.5469 4.70703C19.25 4.59766 18.8633 4.54297 18.3867 4.54297V4.10938H23.1328Z");
    			add_location(path, file$d, 61, 12, 6671);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "viewBox", "0 0 24 24");
    			attr_dev(svg, "class", svg_class_value = "" + (/*icon*/ ctx[1] + "-logo" + " logo"));
    			add_location(svg, file$d, 60, 8, 6567);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, path);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*icon*/ 2 && svg_class_value !== (svg_class_value = "" + (/*icon*/ ctx[1] + "-logo" + " logo"))) {
    				attr_dev(svg, "class", svg_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_6.name,
    		type: "if",
    		source: "(60:38) ",
    		ctx
    	});

    	return block;
    }

    // (56:36) 
    function create_if_block_5(ctx) {
    	let svg;
    	let path;
    	let svg_class_value;

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			attr_dev(path, "d", "M19.4766 16L18.7676 12.0039H18.4746L17.9941 10.4922H19.4766L20.2617 14.5234H20.3789L20.748 9.78906H22.2363L21.6855 16H19.4766ZM2.31445 16L1.76367 9.78906H3.25195L3.62109 14.5234H3.73828L4.52344 10.4922H6.00586L5.50195 12.0039H5.23242L4.47656 16H2.31445ZM6.02344 16L5.30273 12.0039H5.00977L4.52344 10.4922H6.00586L6.82031 14.5234H6.9375V16H6.02344ZM6.82031 16V14.5234H6.9375L7.83398 10.4922H9.32227L8.71875 12.0039H8.54297L7.69336 16H6.82031ZM9.35742 16L8.61328 12.0039H8.32031L7.83398 10.4922H9.32227L10.1602 14.5234H10.2773V16H9.35742ZM10.1602 16V14.5234H10.2773L11.2559 10.4922H12.7441L12.1406 12.0039H11.9648L11.0801 16H10.1602ZM12.9199 16L12.0352 12.0039H11.7422L11.2559 10.4922H12.7441L13.7227 14.5234H13.8398V16H12.9199ZM13.7227 16V14.5234H13.8398L14.6777 10.4922H16.166L15.5625 12.0039H15.3867L14.6426 16H13.7227ZM16.2598 16L15.457 12.0039H15.1641L14.6777 10.4922H16.166L17.0625 14.5234H17.1797V16H16.2598ZM17.0625 16V14.5234H17.1797L17.9941 10.4922H19.4766L18.873 12.0039H18.6973L17.9766 16H17.0625Z");
    			add_location(path, file$d, 57, 12, 5457);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "viewBox", "0 0 24 24");
    			attr_dev(svg, "class", svg_class_value = "" + (/*icon*/ ctx[1] + "-logo" + " logo"));
    			add_location(svg, file$d, 56, 8, 5353);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, path);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*icon*/ 2 && svg_class_value !== (svg_class_value = "" + (/*icon*/ ctx[1] + "-logo" + " logo"))) {
    				attr_dev(svg, "class", svg_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_5.name,
    		type: "if",
    		source: "(56:36) ",
    		ctx
    	});

    	return block;
    }

    // (52:35) 
    function create_if_block_4(ctx) {
    	let svg;
    	let path;
    	let svg_class_value;

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			attr_dev(path, "id", "Vector");
    			attr_dev(path, "d", "M21.0859 11.5244L17.3125 10.1103V5.87207C17.3125 5.28613 16.9492 4.76269 16.3984 4.55566L12.4922 3.09082C12.1758 2.96973 11.8242 2.96973 11.5039 3.09082L7.59766 4.55566C7.04688 4.76269 6.68359 5.28613 6.68359 5.87207V10.1103L2.91016 11.5244C2.36328 11.7314 2 12.2549 2 12.8408V17.1416C2 17.6728 2.30078 18.1611 2.77734 18.3994L6.68359 20.3525C7.07813 20.5518 7.54688 20.5518 7.94141 20.3525L12 18.3213L16.0586 20.3525C16.4531 20.5518 16.9219 20.5518 17.3164 20.3525L21.2227 18.3994C21.6992 18.1611 22 17.6728 22 17.1416V12.8408C22 12.2549 21.6367 11.7314 21.0859 11.5244V11.5244ZM15.9844 10.1416L12.6641 11.3877V8.72363L15.9844 7.27832V10.1416ZM8.01562 5.81738L12 4.32519L15.9844 5.81738V5.84082L12 7.45801L8.01562 5.84082V5.81738ZM11.2969 17.1885L7.97656 18.8486V15.7588L11.2969 14.2432V17.1885ZM11.2969 12.8135L7.3125 14.4307L3.32812 12.8135V12.79L7.3125 11.2978L11.2969 12.79V12.8135ZM20.6719 17.1885L17.3516 18.8486V15.7588L20.6719 14.2432V17.1885ZM20.6719 12.8135L16.6875 14.4307L12.7031 12.8135V12.79L16.6875 11.2978L20.6719 12.79V12.8135Z");
    			add_location(path, file$d, 53, 12, 4197);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "viewBox", "0 0 24 24");
    			attr_dev(svg, "class", svg_class_value = "" + (/*icon*/ ctx[1] + "-logo" + " logo"));
    			add_location(svg, file$d, 52, 8, 4093);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, path);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*icon*/ 2 && svg_class_value !== (svg_class_value = "" + (/*icon*/ ctx[1] + "-logo" + " logo"))) {
    				attr_dev(svg, "class", svg_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4.name,
    		type: "if",
    		source: "(52:35) ",
    		ctx
    	});

    	return block;
    }

    // (47:37) 
    function create_if_block_3(ctx) {
    	let svg;
    	let path0;
    	let path1;
    	let svg_class_value;

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			path0 = svg_element("path");
    			path1 = svg_element("path");
    			attr_dev(path0, "d", "M10 7L14.5 5L19.25 7L24 9V15V21L19.5 23L14.5 25L10 23L5 20.5V15L10 13V10.5V7Z");
    			add_location(path0, file$d, 48, 12, 3421);
    			attr_dev(path1, "d", "M10 7L14.5 5L19.25 7M10 7L14.5 9M10 7V10.5M14.5 9L10 10.5M14.5 9L19 11M14.5 9L19.25 7M10 10.5L14.5 12.5M10 10.5V13M10 17L14.5 19M10 17V23M10 17L5 15M10 17V13M14.5 19V12.5M14.5 19L19.25 17M14.5 19V25M14.5 12.5L19 11M24 9V15M24 9L19.25 7M24 9L19.25 10.9M24 15V21L19.5 23M24 15L19.5 16.8947M19 11L19.25 10.9M19.25 10.9V17M19.25 17L19.5 16.8947M19.5 23V16.8947M19.5 23L14.5 25M14.5 25L10 23M10 23L5 20.5V15M5 15L10 13");
    			attr_dev(path1, "stroke", "black");
    			attr_dev(path1, "stroke-width", "0.25");
    			attr_dev(path1, "stroke-linejoin", "round");
    			add_location(path1, file$d, 49, 12, 3525);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "viewBox", "0 0 30 30");
    			attr_dev(svg, "class", svg_class_value = "" + (/*icon*/ ctx[1] + "-logo" + " logo"));
    			add_location(svg, file$d, 47, 8, 3317);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, path0);
    			append_dev(svg, path1);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*icon*/ 2 && svg_class_value !== (svg_class_value = "" + (/*icon*/ ctx[1] + "-logo" + " logo"))) {
    				attr_dev(svg, "class", svg_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3.name,
    		type: "if",
    		source: "(47:37) ",
    		ctx
    	});

    	return block;
    }

    // (43:37) 
    function create_if_block_2$1(ctx) {
    	let svg;
    	let path;
    	let svg_class_value;

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			attr_dev(path, "d", "M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z");
    			add_location(path, file$d, 44, 12, 2739);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "viewBox", "0 0 30 30");
    			attr_dev(svg, "class", svg_class_value = "" + (/*icon*/ ctx[1] + "-logo" + " logo"));
    			add_location(svg, file$d, 43, 8, 2635);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, path);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*icon*/ 2 && svg_class_value !== (svg_class_value = "" + (/*icon*/ ctx[1] + "-logo" + " logo"))) {
    				attr_dev(svg, "class", svg_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$1.name,
    		type: "if",
    		source: "(43:37) ",
    		ctx
    	});

    	return block;
    }

    // (39:39) 
    function create_if_block_1$1(ctx) {
    	let svg;
    	let path;
    	let svg_class_value;

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			attr_dev(path, "d", "M11.9985 2.25C10.6688 2.25 4.1514 5.98793 3.49365 7.12793C2.83515 8.26868 2.83515 15.7373 3.49365 16.8735C4.1544 18.0128 10.6718 21.75 11.9985 21.75C13.3215 21.75 19.8389 18.015 20.5019 16.8765C21.1672 15.735 21.1672 8.26054 20.5019 7.12354V7.12207C19.8337 5.98432 13.317 2.25 11.9985 2.25ZM11.9971 3.75879C13.2698 4.02354 18.3133 6.91257 19.1968 7.88232C19.6018 9.11307 19.601 14.8832 19.1968 16.1162C18.3193 17.0845 13.2713 19.9772 11.9971 20.2412C10.7236 19.9787 5.67929 17.0874 4.80029 16.1177C4.39904 14.8817 4.39904 9.11682 4.80029 7.88232C5.67704 6.91257 10.7228 4.02129 11.9971 3.75879ZM9.74999 6.75L8.24999 8.25H8.99999V15.75H10.5V12.75H13.5V15.75H12.75L14.25 17.25L15.75 15.75H15V9H13.5V11.25H10.5V8.25H11.25L9.74999 6.75Z");
    			add_location(path, file$d, 40, 12, 1802);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "viewBox", "0 0 24 24");
    			attr_dev(svg, "class", svg_class_value = "" + (/*icon*/ ctx[1] + "-logo" + " logo"));
    			add_location(svg, file$d, 39, 8, 1698);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, path);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*icon*/ 2 && svg_class_value !== (svg_class_value = "" + (/*icon*/ ctx[1] + "-logo" + " logo"))) {
    				attr_dev(svg, "class", svg_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$1.name,
    		type: "if",
    		source: "(39:39) ",
    		ctx
    	});

    	return block;
    }

    // (35:4) {#if icon == Icons.Github}
    function create_if_block$1(ctx) {
    	let svg;
    	let path;
    	let svg_class_value;

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			attr_dev(path, "d", "M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z");
    			add_location(path, file$d, 36, 12, 898);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "viewBox", "0 0 24 24");
    			attr_dev(svg, "class", svg_class_value = "" + (/*icon*/ ctx[1] + "-logo" + " logo"));
    			add_location(svg, file$d, 35, 8, 794);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, path);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*icon*/ 2 && svg_class_value !== (svg_class_value = "" + (/*icon*/ ctx[1] + "-logo" + " logo"))) {
    				attr_dev(svg, "class", svg_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(35:4) {#if icon == Icons.Github}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$d(ctx) {
    	let a;
    	let a_class_value;

    	function select_block_type(ctx, dirty) {
    		if (/*icon*/ ctx[1] == Icons.Github) return create_if_block$1;
    		if (/*icon*/ ctx[1] == Icons.HackerRank) return create_if_block_1$1;
    		if (/*icon*/ ctx[1] == Icons.LinkedIn) return create_if_block_2$1;
    		if (/*icon*/ ctx[1] == Icons.CratesIO) return create_if_block_3;
    		if (/*icon*/ ctx[1] == Icons.DocsRS) return create_if_block_4;
    		if (/*icon*/ ctx[1] == Icons.Website) return create_if_block_5;
    		if (/*icon*/ ctx[1] == Icons.Wikipedia) return create_if_block_6;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block = current_block_type && current_block_type(ctx);

    	const block = {
    		c: function create() {
    			a = element("a");
    			if (if_block) if_block.c();
    			attr_dev(a, "href", /*link*/ ctx[0]);
    			attr_dev(a, "class", a_class_value = "" + (/*icon*/ ctx[1] + "-link" + " logo-link"));
    			add_location(a, file$d, 33, 0, 681);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			if (if_block) if_block.m(a, null);
    		},
    		p: function update(ctx, [dirty]) {
    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
    				if_block.p(ctx, dirty);
    			} else {
    				if (if_block) if_block.d(1);
    				if_block = current_block_type && current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(a, null);
    				}
    			}

    			if (dirty & /*link*/ 1) {
    				attr_dev(a, "href", /*link*/ ctx[0]);
    			}

    			if (dirty & /*icon*/ 2 && a_class_value !== (a_class_value = "" + (/*icon*/ ctx[1] + "-link" + " logo-link"))) {
    				attr_dev(a, "class", a_class_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);

    			if (if_block) {
    				if_block.d();
    			}
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$d.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    var Icons;

    (function (Icons) {
    	// PascalCaseIdentifier = ClassName,
    	Icons["Github"] = "github";

    	Icons["HackerRank"] = "hacker-rank";
    	Icons["LinkedIn"] = "linked-in";
    	Icons["CratesIO"] = "crates-io";
    	Icons["DocsRS"] = "docs-rs";
    	Icons["Website"] = "website";
    	Icons["Wikipedia"] = "wikipedia";
    })(Icons || (Icons = {}));

    function instance$d($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Logo_link', slots, []);
    	let { link } = $$props;
    	let { icon } = $$props;
    	const writable_props = ['link', 'icon'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Logo_link> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('link' in $$props) $$invalidate(0, link = $$props.link);
    		if ('icon' in $$props) $$invalidate(1, icon = $$props.icon);
    	};

    	$$self.$capture_state = () => ({ Icons, link, icon });

    	$$self.$inject_state = $$props => {
    		if ('link' in $$props) $$invalidate(0, link = $$props.link);
    		if ('icon' in $$props) $$invalidate(1, icon = $$props.icon);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [link, icon];
    }

    class Logo_link extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$d, create_fragment$d, safe_not_equal, { link: 0, icon: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Logo_link",
    			options,
    			id: create_fragment$d.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*link*/ ctx[0] === undefined && !('link' in props)) {
    			console.warn("<Logo_link> was created without expected prop 'link'");
    		}

    		if (/*icon*/ ctx[1] === undefined && !('icon' in props)) {
    			console.warn("<Logo_link> was created without expected prop 'icon'");
    		}
    	}

    	get link() {
    		throw new Error("<Logo_link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set link(value) {
    		throw new Error("<Logo_link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get icon() {
    		throw new Error("<Logo_link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set icon(value) {
    		throw new Error("<Logo_link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\components\skill_info.svelte generated by Svelte v3.42.5 */
    const file$c = "src\\components\\skill_info.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[4] = list[i];
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[7] = list[i];
    	return child_ctx;
    }

    // (100:12) {#if "description" in obj}
    function create_if_block_2(ctx) {
    	let div;
    	let h2;
    	let t1;
    	let p;
    	let t2_value = /*obj*/ ctx[0]["description"] + "";
    	let t2;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Description";
    			t1 = space();
    			p = element("p");
    			t2 = text(t2_value);
    			add_location(h2, file$c, 101, 20, 2330);
    			add_location(p, file$c, 102, 20, 2372);
    			attr_dev(div, "class", "details-card description");
    			add_location(div, file$c, 100, 16, 2270);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    			append_dev(div, t1);
    			append_dev(div, p);
    			append_dev(p, t2);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*obj*/ 1 && t2_value !== (t2_value = /*obj*/ ctx[0]["description"] + "")) set_data_dev(t2, t2_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2.name,
    		type: "if",
    		source: "(100:12) {#if \\\"description\\\" in obj}",
    		ctx
    	});

    	return block;
    }

    // (106:12) {#if "tags" in obj}
    function create_if_block_1(ctx) {
    	let div1;
    	let h2;
    	let t1;
    	let div0;
    	let each_value_1 = /*obj*/ ctx[0]["tags"];
    	validate_each_argument(each_value_1);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			h2 = element("h2");
    			h2.textContent = "Tags";
    			t1 = space();
    			div0 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			add_location(h2, file$c, 107, 20, 2546);
    			attr_dev(div0, "class", "list svelte-1oa1ul");
    			add_location(div0, file$c, 108, 20, 2581);
    			attr_dev(div1, "class", "details-card tags svelte-1oa1ul");
    			add_location(div1, file$c, 106, 16, 2493);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, h2);
    			append_dev(div1, t1);
    			append_dev(div1, div0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div0, null);
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*obj*/ 1) {
    				each_value_1 = /*obj*/ ctx[0]["tags"];
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div0, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_1.length;
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(106:12) {#if \\\"tags\\\" in obj}",
    		ctx
    	});

    	return block;
    }

    // (110:24) {#each obj["tags"] as tag}
    function create_each_block_1(ctx) {
    	let strong;
    	let t_value = /*tag*/ ctx[7] + "";
    	let t;

    	const block = {
    		c: function create() {
    			strong = element("strong");
    			t = text(t_value);
    			attr_dev(strong, "class", "tag svelte-1oa1ul");
    			add_location(strong, file$c, 110, 28, 2681);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, strong, anchor);
    			append_dev(strong, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*obj*/ 1 && t_value !== (t_value = /*tag*/ ctx[7] + "")) set_data_dev(t, t_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(strong);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(110:24) {#each obj[\\\"tags\\\"] as tag}",
    		ctx
    	});

    	return block;
    }

    // (116:12) {#if "links" in obj}
    function create_if_block(ctx) {
    	let div1;
    	let h2;
    	let t1;
    	let div0;
    	let current;
    	let each_value = /*obj*/ ctx[0]["links"];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			h2 = element("h2");
    			h2.textContent = "Links";
    			t1 = space();
    			div0 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			add_location(h2, file$c, 117, 20, 2925);
    			attr_dev(div0, "class", "list svelte-1oa1ul");
    			add_location(div0, file$c, 118, 20, 2961);
    			attr_dev(div1, "class", "details-card links svelte-1oa1ul");
    			add_location(div1, file$c, 116, 16, 2871);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, h2);
    			append_dev(div1, t1);
    			append_dev(div1, div0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div0, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*obj*/ 1) {
    				each_value = /*obj*/ ctx[0]["links"];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(div0, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(116:12) {#if \\\"links\\\" in obj}",
    		ctx
    	});

    	return block;
    }

    // (120:24) {#each obj["links"] as link}
    function create_each_block(ctx) {
    	let logolink;
    	let current;

    	logolink = new Logo_link({
    			props: {
    				link: /*link*/ ctx[4]["link"],
    				icon: /*link*/ ctx[4]["icon"]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(logolink.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(logolink, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const logolink_changes = {};
    			if (dirty & /*obj*/ 1) logolink_changes.link = /*link*/ ctx[4]["link"];
    			if (dirty & /*obj*/ 1) logolink_changes.icon = /*link*/ ctx[4]["icon"];
    			logolink.$set(logolink_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(logolink.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(logolink.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(logolink, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(120:24) {#each obj[\\\"links\\\"] as link}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$c(ctx) {
    	let div2;
    	let div1;
    	let header;
    	let h1;
    	let t0_value = /*obj*/ ctx[0]["name"] + "";
    	let t0;
    	let t1;
    	let div0;
    	let t2;
    	let t3;
    	let div1_class_value;
    	let current;
    	let mounted;
    	let dispose;
    	let if_block0 = "description" in /*obj*/ ctx[0] && create_if_block_2(ctx);
    	let if_block1 = "tags" in /*obj*/ ctx[0] && create_if_block_1(ctx);
    	let if_block2 = "links" in /*obj*/ ctx[0] && create_if_block(ctx);

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div1 = element("div");
    			header = element("header");
    			h1 = element("h1");
    			t0 = text(t0_value);
    			t1 = space();
    			div0 = element("div");
    			if (if_block0) if_block0.c();
    			t2 = space();
    			if (if_block1) if_block1.c();
    			t3 = space();
    			if (if_block2) if_block2.c();
    			attr_dev(h1, "class", "name");
    			add_location(h1, file$c, 96, 12, 2127);
    			attr_dev(header, "class", "svelte-1oa1ul");
    			add_location(header, file$c, 95, 8, 2105);
    			attr_dev(div0, "class", "details svelte-1oa1ul");
    			add_location(div0, file$c, 98, 8, 2191);
    			attr_dev(div1, "class", div1_class_value = "info-box " + /*obj*/ ctx[0]["background"] + " svelte-1oa1ul");
    			add_location(div1, file$c, 94, 4, 2053);
    			attr_dev(div2, "class", "skill-info background svelte-1oa1ul");
    			add_location(div2, file$c, 93, 0, 1933);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div1);
    			append_dev(div1, header);
    			append_dev(header, h1);
    			append_dev(h1, t0);
    			append_dev(div1, t1);
    			append_dev(div1, div0);
    			if (if_block0) if_block0.m(div0, null);
    			append_dev(div0, t2);
    			if (if_block1) if_block1.m(div0, null);
    			append_dev(div0, t3);
    			if (if_block2) if_block2.m(div0, null);
    			/*div2_binding*/ ctx[2](div2);
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(div2, "click", self(/*click_handler*/ ctx[3]), false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if ((!current || dirty & /*obj*/ 1) && t0_value !== (t0_value = /*obj*/ ctx[0]["name"] + "")) set_data_dev(t0, t0_value);

    			if ("description" in /*obj*/ ctx[0]) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    				} else {
    					if_block0 = create_if_block_2(ctx);
    					if_block0.c();
    					if_block0.m(div0, t2);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if ("tags" in /*obj*/ ctx[0]) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    				} else {
    					if_block1 = create_if_block_1(ctx);
    					if_block1.c();
    					if_block1.m(div0, t3);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if ("links" in /*obj*/ ctx[0]) {
    				if (if_block2) {
    					if_block2.p(ctx, dirty);

    					if (dirty & /*obj*/ 1) {
    						transition_in(if_block2, 1);
    					}
    				} else {
    					if_block2 = create_if_block(ctx);
    					if_block2.c();
    					transition_in(if_block2, 1);
    					if_block2.m(div0, null);
    				}
    			} else if (if_block2) {
    				group_outros();

    				transition_out(if_block2, 1, 1, () => {
    					if_block2 = null;
    				});

    				check_outros();
    			}

    			if (!current || dirty & /*obj*/ 1 && div1_class_value !== (div1_class_value = "info-box " + /*obj*/ ctx[0]["background"] + " svelte-1oa1ul")) {
    				attr_dev(div1, "class", div1_class_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block2);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block2);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    			if (if_block2) if_block2.d();
    			/*div2_binding*/ ctx[2](null);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$c.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$c($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Skill_info', slots, []);
    	let { obj } = $$props;

    	/**
     * Reference to the Background of the `SkillInfo`.
     */
    	let bg_ref;

    	const writable_props = ['obj'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Skill_info> was created with unknown prop '${key}'`);
    	});

    	function div2_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			bg_ref = $$value;
    			$$invalidate(1, bg_ref);
    		});
    	}

    	const click_handler = () => bg_ref.parentNode.removeChild(bg_ref);

    	$$self.$$set = $$props => {
    		if ('obj' in $$props) $$invalidate(0, obj = $$props.obj);
    	};

    	$$self.$capture_state = () => ({ LogoLink: Logo_link, obj, bg_ref });

    	$$self.$inject_state = $$props => {
    		if ('obj' in $$props) $$invalidate(0, obj = $$props.obj);
    		if ('bg_ref' in $$props) $$invalidate(1, bg_ref = $$props.bg_ref);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [obj, bg_ref, div2_binding, click_handler];
    }

    class Skill_info extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$c, create_fragment$c, safe_not_equal, { obj: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Skill_info",
    			options,
    			id: create_fragment$c.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*obj*/ ctx[0] === undefined && !('obj' in props)) {
    			console.warn("<Skill_info> was created without expected prop 'obj'");
    		}
    	}

    	get obj() {
    		throw new Error("<Skill_info>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set obj(value) {
    		throw new Error("<Skill_info>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\components\skill_button.svelte generated by Svelte v3.42.5 */

    const { Error: Error_1, console: console_1 } = globals;
    const file$b = "src\\components\\skill_button.svelte";

    // (1:0) <script lang="ts">var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }
    function create_catch_block(ctx) {
    	const block = { c: noop, m: noop, p: noop, d: noop };

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_catch_block.name,
    		type: "catch",
    		source: "(1:0) <script lang=\\\"ts\\\">var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }",
    		ctx
    	});

    	return block;
    }

    // (71:36)       <button class="link-button skill-button {skill_obj["background"]}
    function create_then_block(ctx) {
    	let button;
    	let h3;
    	let t_value = /*skill_obj*/ ctx[6]["name"] + "";
    	let t;
    	let mounted;
    	let dispose;

    	function click_handler() {
    		return /*click_handler*/ ctx[3](/*skill_obj*/ ctx[6]);
    	}

    	const block = {
    		c: function create() {
    			button = element("button");
    			h3 = element("h3");
    			t = text(t_value);
    			attr_dev(h3, "class", "svelte-1moaann");
    			add_location(h3, file$b, 72, 8, 2386);
    			attr_dev(button, "class", "link-button skill-button " + /*skill_obj*/ ctx[6]["background"] + " svelte-1moaann");
    			add_location(button, file$b, 71, 4, 2262);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);
    			append_dev(button, h3);
    			append_dev(h3, t);

    			if (!mounted) {
    				dispose = listen_dev(button, "click", click_handler, false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_then_block.name,
    		type: "then",
    		source: "(71:36)       <button class=\\\"link-button skill-button {skill_obj[\\\"background\\\"]}",
    		ctx
    	});

    	return block;
    }

    // (1:0) <script lang="ts">var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }
    function create_pending_block(ctx) {
    	const block = { c: noop, m: noop, p: noop, d: noop };

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_pending_block.name,
    		type: "pending",
    		source: "(1:0) <script lang=\\\"ts\\\">var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }",
    		ctx
    	});

    	return block;
    }

    function create_fragment$b(ctx) {
    	let await_block_anchor;

    	let info = {
    		ctx,
    		current: null,
    		token: null,
    		hasCatch: false,
    		pending: create_pending_block,
    		then: create_then_block,
    		catch: create_catch_block,
    		value: 6
    	};

    	handle_promise(/*json_promise*/ ctx[0], info);

    	const block = {
    		c: function create() {
    			await_block_anchor = empty();
    			info.block.c();
    		},
    		l: function claim(nodes) {
    			throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, await_block_anchor, anchor);
    			info.block.m(target, info.anchor = anchor);
    			info.mount = () => await_block_anchor.parentNode;
    			info.anchor = await_block_anchor;
    		},
    		p: function update(new_ctx, [dirty]) {
    			ctx = new_ctx;
    			update_await_block_branch(info, ctx, dirty);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(await_block_anchor);
    			info.block.d(detaching);
    			info.token = null;
    			info = null;
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$b.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$b($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Skill_button', slots, []);

    	var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    		function adopt(value) {
    			return value instanceof P
    			? value
    			: new P(function (resolve) {
    						resolve(value);
    					});
    		}

    		return new (P || (P = Promise))(function (resolve, reject) {
    				function fulfilled(value) {
    					try {
    						step(generator.next(value));
    					} catch(e) {
    						reject(e);
    					}
    				}

    				function rejected(value) {
    					try {
    						step(generator["throw"](value));
    					} catch(e) {
    						reject(e);
    					}
    				}

    				function step(result) {
    					result.done
    					? resolve(result.value)
    					: adopt(result.value).then(fulfilled, rejected);
    				}

    				step((generator = generator.apply(thisArg, _arguments || [])).next());
    			});
    	};

    	let { json } = $$props;

    	/**
     * Contains a `Promise` containing the `Object` of the `json` File.
     */
    	let json_promise = fetch_json();

    	/**
     * Fetches the `.json` file at the path of the `json` prop,
     * setting `json_promise` to the `Promise` of the `Object`.
     */
    	function fetch_json() {
    		return __awaiter(this, void 0, void 0, function* () {
    			console.log(json);
    			const response = yield fetch(json);
    			const obj = yield response.json();

    			if (response.ok) {
    				return obj;
    			}

    			throw new Error(obj);
    		});
    	}

    	/**
     * Pops up a `SkillInfo` Component coresponding to the items within the passed through `skill_obj`.
     */
    	function add_skill_info(skill_obj) {
    		new Skill_info({
    				target: document.body,
    				props: { obj: skill_obj }
    			});
    	}

    	const writable_props = ['json'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<Skill_button> was created with unknown prop '${key}'`);
    	});

    	const click_handler = skill_obj => {
    		add_skill_info(skill_obj);
    	};

    	$$self.$$set = $$props => {
    		if ('json' in $$props) $$invalidate(2, json = $$props.json);
    	};

    	$$self.$capture_state = () => ({
    		__awaiter,
    		SkillInfo: Skill_info,
    		json,
    		json_promise,
    		fetch_json,
    		add_skill_info
    	});

    	$$self.$inject_state = $$props => {
    		if ('__awaiter' in $$props) __awaiter = $$props.__awaiter;
    		if ('json' in $$props) $$invalidate(2, json = $$props.json);
    		if ('json_promise' in $$props) $$invalidate(0, json_promise = $$props.json_promise);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [json_promise, add_skill_info, json, click_handler];
    }

    class Skill_button extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$b, create_fragment$b, safe_not_equal, { json: 2 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Skill_button",
    			options,
    			id: create_fragment$b.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*json*/ ctx[2] === undefined && !('json' in props)) {
    			console_1.warn("<Skill_button> was created without expected prop 'json'");
    		}
    	}

    	get json() {
    		throw new Error_1("<Skill_button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set json(value) {
    		throw new Error_1("<Skill_button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\components\skills.svelte generated by Svelte v3.42.5 */
    const file$a = "src\\components\\skills.svelte";

    function create_fragment$a(ctx) {
    	let div6;
    	let h1;
    	let t1;
    	let div1;
    	let h20;
    	let t3;
    	let div0;
    	let skillbutton0;
    	let t4;
    	let skillbutton1;
    	let t5;
    	let skillbutton2;
    	let t6;
    	let skillbutton3;
    	let t7;
    	let skillbutton4;
    	let t8;
    	let skillbutton5;
    	let t9;
    	let skillbutton6;
    	let t10;
    	let skillbutton7;
    	let t11;
    	let skillbutton8;
    	let t12;
    	let skillbutton9;
    	let t13;
    	let skillbutton10;
    	let t14;
    	let skillbutton11;
    	let t15;
    	let skillbutton12;
    	let t16;
    	let div3;
    	let h21;
    	let t18;
    	let div2;
    	let skillbutton13;
    	let t19;
    	let skillbutton14;
    	let t20;
    	let skillbutton15;
    	let t21;
    	let skillbutton16;
    	let t22;
    	let skillbutton17;
    	let t23;
    	let skillbutton18;
    	let t24;
    	let skillbutton19;
    	let t25;
    	let skillbutton20;
    	let t26;
    	let skillbutton21;
    	let t27;
    	let skillbutton22;
    	let t28;
    	let skillbutton23;
    	let t29;
    	let skillbutton24;
    	let t30;
    	let skillbutton25;
    	let t31;
    	let skillbutton26;
    	let t32;
    	let div5;
    	let h22;
    	let t34;
    	let div4;
    	let skillbutton27;
    	let t35;
    	let skillbutton28;
    	let t36;
    	let skillbutton29;
    	let t37;
    	let skillbutton30;
    	let current;

    	skillbutton0 = new Skill_button({
    			props: { json: "skills/python.json" },
    			$$inline: true
    		});

    	skillbutton1 = new Skill_button({
    			props: { json: "skills/rust.json" },
    			$$inline: true
    		});

    	skillbutton2 = new Skill_button({
    			props: { json: "skills/go.json" },
    			$$inline: true
    		});

    	skillbutton3 = new Skill_button({
    			props: { json: "skills/java_script.json" },
    			$$inline: true
    		});

    	skillbutton4 = new Skill_button({
    			props: { json: "skills/type_script.json" },
    			$$inline: true
    		});

    	skillbutton5 = new Skill_button({
    			props: { json: "skills/html.json" },
    			$$inline: true
    		});

    	skillbutton6 = new Skill_button({
    			props: { json: "skills/css.json" },
    			$$inline: true
    		});

    	skillbutton7 = new Skill_button({
    			props: { json: "skills/sql.json" },
    			$$inline: true
    		});

    	skillbutton8 = new Skill_button({
    			props: { json: "skills/c.json" },
    			$$inline: true
    		});

    	skillbutton9 = new Skill_button({
    			props: { json: "skills/cpp.json" },
    			$$inline: true
    		});

    	skillbutton10 = new Skill_button({
    			props: { json: "skills/csharp.json" },
    			$$inline: true
    		});

    	skillbutton11 = new Skill_button({
    			props: { json: "skills/lua.json" },
    			$$inline: true
    		});

    	skillbutton12 = new Skill_button({
    			props: { json: "skills/gdscript.json" },
    			$$inline: true
    		});

    	skillbutton13 = new Skill_button({
    			props: { json: "skills/matplotlib.json" },
    			$$inline: true
    		});

    	skillbutton14 = new Skill_button({
    			props: { json: "skills/pandas.json" },
    			$$inline: true
    		});

    	skillbutton15 = new Skill_button({
    			props: { json: "skills/numpy.json" },
    			$$inline: true
    		});

    	skillbutton16 = new Skill_button({
    			props: { json: "skills/pytest.json" },
    			$$inline: true
    		});

    	skillbutton17 = new Skill_button({
    			props: { json: "skills/flask.json" },
    			$$inline: true
    		});

    	skillbutton18 = new Skill_button({
    			props: { json: "skills/mediapipe.json" },
    			$$inline: true
    		});

    	skillbutton19 = new Skill_button({
    			props: { json: "skills/opencv.json" },
    			$$inline: true
    		});

    	skillbutton20 = new Skill_button({
    			props: { json: "skills/rust_cpython.json" },
    			$$inline: true
    		});

    	skillbutton21 = new Skill_button({
    			props: { json: "skills/sqlite.json" },
    			$$inline: true
    		});

    	skillbutton22 = new Skill_button({
    			props: { json: "skills/react.json" },
    			$$inline: true
    		});

    	skillbutton23 = new Skill_button({
    			props: { json: "skills/vue.json" },
    			$$inline: true
    		});

    	skillbutton24 = new Skill_button({
    			props: { json: "skills/svelte.json" },
    			$$inline: true
    		});

    	skillbutton25 = new Skill_button({
    			props: { json: "skills/tailwind.json" },
    			$$inline: true
    		});

    	skillbutton26 = new Skill_button({
    			props: { json: "skills/godot.json" },
    			$$inline: true
    		});

    	skillbutton27 = new Skill_button({
    			props: { json: "skills/google.json" },
    			$$inline: true
    		});

    	skillbutton28 = new Skill_button({
    			props: { json: "skills/git.json" },
    			$$inline: true
    		});

    	skillbutton29 = new Skill_button({
    			props: { json: "skills/npm.json" },
    			$$inline: true
    		});

    	skillbutton30 = new Skill_button({
    			props: { json: "skills/web_assembly.json" },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div6 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Skills";
    			t1 = space();
    			div1 = element("div");
    			h20 = element("h2");
    			h20.textContent = "Languages 💬";
    			t3 = space();
    			div0 = element("div");
    			create_component(skillbutton0.$$.fragment);
    			t4 = space();
    			create_component(skillbutton1.$$.fragment);
    			t5 = space();
    			create_component(skillbutton2.$$.fragment);
    			t6 = space();
    			create_component(skillbutton3.$$.fragment);
    			t7 = space();
    			create_component(skillbutton4.$$.fragment);
    			t8 = space();
    			create_component(skillbutton5.$$.fragment);
    			t9 = space();
    			create_component(skillbutton6.$$.fragment);
    			t10 = space();
    			create_component(skillbutton7.$$.fragment);
    			t11 = space();
    			create_component(skillbutton8.$$.fragment);
    			t12 = space();
    			create_component(skillbutton9.$$.fragment);
    			t13 = space();
    			create_component(skillbutton10.$$.fragment);
    			t14 = space();
    			create_component(skillbutton11.$$.fragment);
    			t15 = space();
    			create_component(skillbutton12.$$.fragment);
    			t16 = space();
    			div3 = element("div");
    			h21 = element("h2");
    			h21.textContent = "Libraries, Engines & Frameworks 📚";
    			t18 = space();
    			div2 = element("div");
    			create_component(skillbutton13.$$.fragment);
    			t19 = space();
    			create_component(skillbutton14.$$.fragment);
    			t20 = space();
    			create_component(skillbutton15.$$.fragment);
    			t21 = space();
    			create_component(skillbutton16.$$.fragment);
    			t22 = space();
    			create_component(skillbutton17.$$.fragment);
    			t23 = space();
    			create_component(skillbutton18.$$.fragment);
    			t24 = space();
    			create_component(skillbutton19.$$.fragment);
    			t25 = space();
    			create_component(skillbutton20.$$.fragment);
    			t26 = space();
    			create_component(skillbutton21.$$.fragment);
    			t27 = space();
    			create_component(skillbutton22.$$.fragment);
    			t28 = space();
    			create_component(skillbutton23.$$.fragment);
    			t29 = space();
    			create_component(skillbutton24.$$.fragment);
    			t30 = space();
    			create_component(skillbutton25.$$.fragment);
    			t31 = space();
    			create_component(skillbutton26.$$.fragment);
    			t32 = space();
    			div5 = element("div");
    			h22 = element("h2");
    			h22.textContent = "Miscellaneous Technologies ❓";
    			t34 = space();
    			div4 = element("div");
    			create_component(skillbutton27.$$.fragment);
    			t35 = space();
    			create_component(skillbutton28.$$.fragment);
    			t36 = space();
    			create_component(skillbutton29.$$.fragment);
    			t37 = space();
    			create_component(skillbutton30.$$.fragment);
    			attr_dev(h1, "class", "section-title svelte-1wmhcd8");
    			add_location(h1, file$a, 24, 4, 479);
    			attr_dev(h20, "class", "section-title svelte-1wmhcd8");
    			add_location(h20, file$a, 27, 8, 623);
    			attr_dev(div0, "class", "info-card-container svelte-1wmhcd8");
    			add_location(div0, file$a, 28, 8, 676);
    			attr_dev(div1, "class", "languages-container");
    			add_location(div1, file$a, 26, 4, 580);
    			attr_dev(h21, "class", "section-title svelte-1wmhcd8");
    			add_location(h21, file$a, 45, 8, 1510);
    			attr_dev(div2, "class", "info-card-container svelte-1wmhcd8");
    			add_location(div2, file$a, 46, 8, 1585);
    			attr_dev(div3, "class", "libraies-engines-and-frameworks-container");
    			add_location(div3, file$a, 44, 4, 1445);
    			attr_dev(h22, "class", "section-title svelte-1wmhcd8");
    			add_location(h22, file$a, 64, 8, 2473);
    			attr_dev(div4, "class", "info-card-container svelte-1wmhcd8");
    			add_location(div4, file$a, 65, 8, 2542);
    			attr_dev(div5, "class", "misc-tech-container");
    			add_location(div5, file$a, 63, 4, 2430);
    			attr_dev(div6, "class", "info-container svelte-1wmhcd8");
    			attr_dev(div6, "id", "skills");
    			add_location(div6, file$a, 23, 0, 433);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div6, anchor);
    			append_dev(div6, h1);
    			append_dev(div6, t1);
    			append_dev(div6, div1);
    			append_dev(div1, h20);
    			append_dev(div1, t3);
    			append_dev(div1, div0);
    			mount_component(skillbutton0, div0, null);
    			append_dev(div0, t4);
    			mount_component(skillbutton1, div0, null);
    			append_dev(div0, t5);
    			mount_component(skillbutton2, div0, null);
    			append_dev(div0, t6);
    			mount_component(skillbutton3, div0, null);
    			append_dev(div0, t7);
    			mount_component(skillbutton4, div0, null);
    			append_dev(div0, t8);
    			mount_component(skillbutton5, div0, null);
    			append_dev(div0, t9);
    			mount_component(skillbutton6, div0, null);
    			append_dev(div0, t10);
    			mount_component(skillbutton7, div0, null);
    			append_dev(div0, t11);
    			mount_component(skillbutton8, div0, null);
    			append_dev(div0, t12);
    			mount_component(skillbutton9, div0, null);
    			append_dev(div0, t13);
    			mount_component(skillbutton10, div0, null);
    			append_dev(div0, t14);
    			mount_component(skillbutton11, div0, null);
    			append_dev(div0, t15);
    			mount_component(skillbutton12, div0, null);
    			append_dev(div6, t16);
    			append_dev(div6, div3);
    			append_dev(div3, h21);
    			append_dev(div3, t18);
    			append_dev(div3, div2);
    			mount_component(skillbutton13, div2, null);
    			append_dev(div2, t19);
    			mount_component(skillbutton14, div2, null);
    			append_dev(div2, t20);
    			mount_component(skillbutton15, div2, null);
    			append_dev(div2, t21);
    			mount_component(skillbutton16, div2, null);
    			append_dev(div2, t22);
    			mount_component(skillbutton17, div2, null);
    			append_dev(div2, t23);
    			mount_component(skillbutton18, div2, null);
    			append_dev(div2, t24);
    			mount_component(skillbutton19, div2, null);
    			append_dev(div2, t25);
    			mount_component(skillbutton20, div2, null);
    			append_dev(div2, t26);
    			mount_component(skillbutton21, div2, null);
    			append_dev(div2, t27);
    			mount_component(skillbutton22, div2, null);
    			append_dev(div2, t28);
    			mount_component(skillbutton23, div2, null);
    			append_dev(div2, t29);
    			mount_component(skillbutton24, div2, null);
    			append_dev(div2, t30);
    			mount_component(skillbutton25, div2, null);
    			append_dev(div2, t31);
    			mount_component(skillbutton26, div2, null);
    			append_dev(div6, t32);
    			append_dev(div6, div5);
    			append_dev(div5, h22);
    			append_dev(div5, t34);
    			append_dev(div5, div4);
    			mount_component(skillbutton27, div4, null);
    			append_dev(div4, t35);
    			mount_component(skillbutton28, div4, null);
    			append_dev(div4, t36);
    			mount_component(skillbutton29, div4, null);
    			append_dev(div4, t37);
    			mount_component(skillbutton30, div4, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(skillbutton0.$$.fragment, local);
    			transition_in(skillbutton1.$$.fragment, local);
    			transition_in(skillbutton2.$$.fragment, local);
    			transition_in(skillbutton3.$$.fragment, local);
    			transition_in(skillbutton4.$$.fragment, local);
    			transition_in(skillbutton5.$$.fragment, local);
    			transition_in(skillbutton6.$$.fragment, local);
    			transition_in(skillbutton7.$$.fragment, local);
    			transition_in(skillbutton8.$$.fragment, local);
    			transition_in(skillbutton9.$$.fragment, local);
    			transition_in(skillbutton10.$$.fragment, local);
    			transition_in(skillbutton11.$$.fragment, local);
    			transition_in(skillbutton12.$$.fragment, local);
    			transition_in(skillbutton13.$$.fragment, local);
    			transition_in(skillbutton14.$$.fragment, local);
    			transition_in(skillbutton15.$$.fragment, local);
    			transition_in(skillbutton16.$$.fragment, local);
    			transition_in(skillbutton17.$$.fragment, local);
    			transition_in(skillbutton18.$$.fragment, local);
    			transition_in(skillbutton19.$$.fragment, local);
    			transition_in(skillbutton20.$$.fragment, local);
    			transition_in(skillbutton21.$$.fragment, local);
    			transition_in(skillbutton22.$$.fragment, local);
    			transition_in(skillbutton23.$$.fragment, local);
    			transition_in(skillbutton24.$$.fragment, local);
    			transition_in(skillbutton25.$$.fragment, local);
    			transition_in(skillbutton26.$$.fragment, local);
    			transition_in(skillbutton27.$$.fragment, local);
    			transition_in(skillbutton28.$$.fragment, local);
    			transition_in(skillbutton29.$$.fragment, local);
    			transition_in(skillbutton30.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(skillbutton0.$$.fragment, local);
    			transition_out(skillbutton1.$$.fragment, local);
    			transition_out(skillbutton2.$$.fragment, local);
    			transition_out(skillbutton3.$$.fragment, local);
    			transition_out(skillbutton4.$$.fragment, local);
    			transition_out(skillbutton5.$$.fragment, local);
    			transition_out(skillbutton6.$$.fragment, local);
    			transition_out(skillbutton7.$$.fragment, local);
    			transition_out(skillbutton8.$$.fragment, local);
    			transition_out(skillbutton9.$$.fragment, local);
    			transition_out(skillbutton10.$$.fragment, local);
    			transition_out(skillbutton11.$$.fragment, local);
    			transition_out(skillbutton12.$$.fragment, local);
    			transition_out(skillbutton13.$$.fragment, local);
    			transition_out(skillbutton14.$$.fragment, local);
    			transition_out(skillbutton15.$$.fragment, local);
    			transition_out(skillbutton16.$$.fragment, local);
    			transition_out(skillbutton17.$$.fragment, local);
    			transition_out(skillbutton18.$$.fragment, local);
    			transition_out(skillbutton19.$$.fragment, local);
    			transition_out(skillbutton20.$$.fragment, local);
    			transition_out(skillbutton21.$$.fragment, local);
    			transition_out(skillbutton22.$$.fragment, local);
    			transition_out(skillbutton23.$$.fragment, local);
    			transition_out(skillbutton24.$$.fragment, local);
    			transition_out(skillbutton25.$$.fragment, local);
    			transition_out(skillbutton26.$$.fragment, local);
    			transition_out(skillbutton27.$$.fragment, local);
    			transition_out(skillbutton28.$$.fragment, local);
    			transition_out(skillbutton29.$$.fragment, local);
    			transition_out(skillbutton30.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div6);
    			destroy_component(skillbutton0);
    			destroy_component(skillbutton1);
    			destroy_component(skillbutton2);
    			destroy_component(skillbutton3);
    			destroy_component(skillbutton4);
    			destroy_component(skillbutton5);
    			destroy_component(skillbutton6);
    			destroy_component(skillbutton7);
    			destroy_component(skillbutton8);
    			destroy_component(skillbutton9);
    			destroy_component(skillbutton10);
    			destroy_component(skillbutton11);
    			destroy_component(skillbutton12);
    			destroy_component(skillbutton13);
    			destroy_component(skillbutton14);
    			destroy_component(skillbutton15);
    			destroy_component(skillbutton16);
    			destroy_component(skillbutton17);
    			destroy_component(skillbutton18);
    			destroy_component(skillbutton19);
    			destroy_component(skillbutton20);
    			destroy_component(skillbutton21);
    			destroy_component(skillbutton22);
    			destroy_component(skillbutton23);
    			destroy_component(skillbutton24);
    			destroy_component(skillbutton25);
    			destroy_component(skillbutton26);
    			destroy_component(skillbutton27);
    			destroy_component(skillbutton28);
    			destroy_component(skillbutton29);
    			destroy_component(skillbutton30);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$a.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$a($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Skills', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Skills> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ SkillButton: Skill_button });
    	return [];
    }

    class Skills extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$a, create_fragment$a, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Skills",
    			options,
    			id: create_fragment$a.name
    		});
    	}
    }

    /* src\components\project-cards\project_card.svelte generated by Svelte v3.42.5 */

    const file$9 = "src\\components\\project-cards\\project_card.svelte";
    const get_logo_link_container_slot_changes = dirty => ({});

    const get_logo_link_container_slot_context = ctx => ({
    	class: "logo-link-container svelte-c0eret"
    });

    const get_status_badge_slot_changes = dirty => ({});
    const get_status_badge_slot_context = ctx => ({});

    function create_fragment$9(ctx) {
    	let div2;
    	let div0;
    	let t0;
    	let div1;
    	let h1;
    	let t1;
    	let t2;
    	let p;
    	let t3;
    	let t4;
    	let t5;
    	let current;
    	const status_badge_slot_template = /*#slots*/ ctx[4]["status-badge"];
    	const status_badge_slot = create_slot(status_badge_slot_template, ctx, /*$$scope*/ ctx[3], get_status_badge_slot_context);
    	const logo_link_container_slot_template = /*#slots*/ ctx[4]["logo-link-container"];
    	const logo_link_container_slot = create_slot(logo_link_container_slot_template, ctx, /*$$scope*/ ctx[3], get_logo_link_container_slot_context);

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			t0 = space();
    			div1 = element("div");
    			h1 = element("h1");
    			t1 = text(/*title*/ ctx[0]);
    			t2 = space();
    			p = element("p");
    			t3 = text(/*description*/ ctx[1]);
    			t4 = space();
    			if (status_badge_slot) status_badge_slot.c();
    			t5 = space();
    			if (logo_link_container_slot) logo_link_container_slot.c();
    			attr_dev(div0, "class", "bg-image svelte-c0eret");
    			set_style(div0, "background-image", "url(" + /*background_url*/ ctx[2] + ")");
    			add_location(div0, file$9, 59, 4, 1269);
    			add_location(h1, file$9, 61, 8, 1391);
    			add_location(p, file$9, 62, 8, 1417);
    			attr_dev(div1, "class", "project-card-details");
    			add_location(div1, file$9, 60, 4, 1347);
    			attr_dev(div2, "class", "project-card svelte-c0eret");
    			add_location(div2, file$9, 58, 0, 1237);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			append_dev(div2, t0);
    			append_dev(div2, div1);
    			append_dev(div1, h1);
    			append_dev(h1, t1);
    			append_dev(div1, t2);
    			append_dev(div1, p);
    			append_dev(p, t3);
    			append_dev(div1, t4);

    			if (status_badge_slot) {
    				status_badge_slot.m(div1, null);
    			}

    			append_dev(div1, t5);

    			if (logo_link_container_slot) {
    				logo_link_container_slot.m(div1, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (!current || dirty & /*background_url*/ 4) {
    				set_style(div0, "background-image", "url(" + /*background_url*/ ctx[2] + ")");
    			}

    			if (!current || dirty & /*title*/ 1) set_data_dev(t1, /*title*/ ctx[0]);
    			if (!current || dirty & /*description*/ 2) set_data_dev(t3, /*description*/ ctx[1]);

    			if (status_badge_slot) {
    				if (status_badge_slot.p && (!current || dirty & /*$$scope*/ 8)) {
    					update_slot_base(
    						status_badge_slot,
    						status_badge_slot_template,
    						ctx,
    						/*$$scope*/ ctx[3],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[3])
    						: get_slot_changes(status_badge_slot_template, /*$$scope*/ ctx[3], dirty, get_status_badge_slot_changes),
    						get_status_badge_slot_context
    					);
    				}
    			}

    			if (logo_link_container_slot) {
    				if (logo_link_container_slot.p && (!current || dirty & /*$$scope*/ 8)) {
    					update_slot_base(
    						logo_link_container_slot,
    						logo_link_container_slot_template,
    						ctx,
    						/*$$scope*/ ctx[3],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[3])
    						: get_slot_changes(logo_link_container_slot_template, /*$$scope*/ ctx[3], dirty, get_logo_link_container_slot_changes),
    						get_logo_link_container_slot_context
    					);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(status_badge_slot, local);
    			transition_in(logo_link_container_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(status_badge_slot, local);
    			transition_out(logo_link_container_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			if (status_badge_slot) status_badge_slot.d(detaching);
    			if (logo_link_container_slot) logo_link_container_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$9.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$9($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Project_card', slots, ['status-badge','logo-link-container']);
    	let { title } = $$props;
    	let { description } = $$props;
    	let { background_url } = $$props;
    	const writable_props = ['title', 'description', 'background_url'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Project_card> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('title' in $$props) $$invalidate(0, title = $$props.title);
    		if ('description' in $$props) $$invalidate(1, description = $$props.description);
    		if ('background_url' in $$props) $$invalidate(2, background_url = $$props.background_url);
    		if ('$$scope' in $$props) $$invalidate(3, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ title, description, background_url });

    	$$self.$inject_state = $$props => {
    		if ('title' in $$props) $$invalidate(0, title = $$props.title);
    		if ('description' in $$props) $$invalidate(1, description = $$props.description);
    		if ('background_url' in $$props) $$invalidate(2, background_url = $$props.background_url);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [title, description, background_url, $$scope, slots];
    }

    class Project_card extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$9, create_fragment$9, safe_not_equal, {
    			title: 0,
    			description: 1,
    			background_url: 2
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Project_card",
    			options,
    			id: create_fragment$9.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*title*/ ctx[0] === undefined && !('title' in props)) {
    			console.warn("<Project_card> was created without expected prop 'title'");
    		}

    		if (/*description*/ ctx[1] === undefined && !('description' in props)) {
    			console.warn("<Project_card> was created without expected prop 'description'");
    		}

    		if (/*background_url*/ ctx[2] === undefined && !('background_url' in props)) {
    			console.warn("<Project_card> was created without expected prop 'background_url'");
    		}
    	}

    	get title() {
    		throw new Error("<Project_card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<Project_card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get description() {
    		throw new Error("<Project_card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set description(value) {
    		throw new Error("<Project_card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get background_url() {
    		throw new Error("<Project_card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set background_url(value) {
    		throw new Error("<Project_card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\components\project-cards\portfolio_pc.svelte generated by Svelte v3.42.5 */
    const file$8 = "src\\components\\project-cards\\portfolio_pc.svelte";

    // (11:4) 
    function create_status_badge_slot$4(ctx) {
    	let div;
    	let img0;
    	let img0_src_value;
    	let t;
    	let img1;
    	let img1_src_value;

    	const block = {
    		c: function create() {
    			div = element("div");
    			img0 = element("img");
    			t = space();
    			img1 = element("img");
    			if (!src_url_equal(img0.src, img0_src_value = "https://img.shields.io/github/license/c1m50c/portfolio?color=blue&style=for-the-badge")) attr_dev(img0, "src", img0_src_value);
    			attr_dev(img0, "alt", "License");
    			add_location(img0, file$8, 11, 8, 346);
    			if (!src_url_equal(img1.src, img1_src_value = "https://img.shields.io/tokei/lines/github/c1m50c/portfolio?style=for-the-badge")) attr_dev(img1, "src", img1_src_value);
    			attr_dev(img1, "alt", "Lines of Code");
    			add_location(img1, file$8, 12, 8, 469);
    			attr_dev(div, "slot", "status-badge");
    			add_location(div, file$8, 10, 4, 311);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, img0);
    			append_dev(div, t);
    			append_dev(div, img1);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_status_badge_slot$4.name,
    		type: "slot",
    		source: "(11:4) ",
    		ctx
    	});

    	return block;
    }

    // (15:4) 
    function create_logo_link_container_slot$5(ctx) {
    	let div;
    	let logolink;
    	let current;

    	logolink = new Logo_link({
    			props: {
    				link: "https://github.com/c1m50c/portfolio",
    				icon: Icons.Github
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(logolink.$$.fragment);
    			attr_dev(div, "slot", "logo-link-container");
    			add_location(div, file$8, 14, 4, 599);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(logolink, div, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(logolink.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(logolink.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(logolink);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_logo_link_container_slot$5.name,
    		type: "slot",
    		source: "(15:4) ",
    		ctx
    	});

    	return block;
    }

    function create_fragment$8(ctx) {
    	let projectcard;
    	let current;

    	projectcard = new Project_card({
    			props: {
    				title: "Portfolio",
    				description: "My personal portfolio site, the site you're seeing right now.",
    				background_url: "./projects/portfolio.png",
    				$$slots: {
    					"logo-link-container": [create_logo_link_container_slot$5],
    					"status-badge": [create_status_badge_slot$4]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(projectcard.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(projectcard, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const projectcard_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				projectcard_changes.$$scope = { dirty, ctx };
    			}

    			projectcard.$set(projectcard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(projectcard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(projectcard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(projectcard, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$8.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$8($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Portfolio_pc', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Portfolio_pc> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ LogoLink: Logo_link, Icons, ProjectCard: Project_card });
    	return [];
    }

    class Portfolio_pc extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$8, create_fragment$8, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Portfolio_pc",
    			options,
    			id: create_fragment$8.name
    		});
    	}
    }

    /* src\components\project-cards\cellular_automata_pc.svelte generated by Svelte v3.42.5 */
    const file$7 = "src\\components\\project-cards\\cellular_automata_pc.svelte";

    // (11:4) 
    function create_logo_link_container_slot$4(ctx) {
    	let div;
    	let logolink;
    	let current;

    	logolink = new Logo_link({
    			props: {
    				link: "https://github.com/c1m50c/cellular-automata",
    				icon: Icons.Github
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(logolink.$$.fragment);
    			attr_dev(div, "slot", "logo-link-container");
    			add_location(div, file$7, 10, 4, 328);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(logolink, div, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(logolink.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(logolink.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(logolink);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_logo_link_container_slot$4.name,
    		type: "slot",
    		source: "(11:4) ",
    		ctx
    	});

    	return block;
    }

    function create_fragment$7(ctx) {
    	let projectcard;
    	let current;

    	projectcard = new Project_card({
    			props: {
    				title: "Cellular Automata",
    				description: "Python project implementing Conway's Game of Life with PyGame.",
    				background_url: "./projects/cellular-automata.gif",
    				$$slots: {
    					"logo-link-container": [create_logo_link_container_slot$4]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(projectcard.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(projectcard, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const projectcard_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				projectcard_changes.$$scope = { dirty, ctx };
    			}

    			projectcard.$set(projectcard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(projectcard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(projectcard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(projectcard, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Cellular_automata_pc', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Cellular_automata_pc> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ LogoLink: Logo_link, Icons, ProjectCard: Project_card });
    	return [];
    }

    class Cellular_automata_pc extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Cellular_automata_pc",
    			options,
    			id: create_fragment$7.name
    		});
    	}
    }

    /* src\components\project-cards\sorting_algorithm_visualizer_pc.svelte generated by Svelte v3.42.5 */
    const file$6 = "src\\components\\project-cards\\sorting_algorithm_visualizer_pc.svelte";

    // (11:4) 
    function create_status_badge_slot$3(ctx) {
    	let div;
    	let img0;
    	let img0_src_value;
    	let t0;
    	let img1;
    	let img1_src_value;
    	let t1;
    	let img2;
    	let img2_src_value;

    	const block = {
    		c: function create() {
    			div = element("div");
    			img0 = element("img");
    			t0 = space();
    			img1 = element("img");
    			t1 = space();
    			img2 = element("img");
    			if (!src_url_equal(img0.src, img0_src_value = "https://img.shields.io/github/workflow/status/c1m50c/sorting-algorithm-visualizer/Tests?style=for-the-badge")) attr_dev(img0, "src", img0_src_value);
    			attr_dev(img0, "alt", "Tests");
    			add_location(img0, file$6, 11, 8, 389);
    			if (!src_url_equal(img1.src, img1_src_value = "https://img.shields.io/github/license/c1m50c/sorting-algorithm-visualizer?color=blue&style=for-the-badge")) attr_dev(img1, "src", img1_src_value);
    			attr_dev(img1, "alt", "License");
    			add_location(img1, file$6, 12, 8, 532);
    			if (!src_url_equal(img2.src, img2_src_value = "https://img.shields.io/tokei/lines/github/c1m50c/sorting-algorithm-visualizer?style=for-the-badge")) attr_dev(img2, "src", img2_src_value);
    			attr_dev(img2, "alt", "Lines of Code");
    			add_location(img2, file$6, 13, 8, 674);
    			attr_dev(div, "slot", "status-badge");
    			add_location(div, file$6, 10, 4, 354);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, img0);
    			append_dev(div, t0);
    			append_dev(div, img1);
    			append_dev(div, t1);
    			append_dev(div, img2);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_status_badge_slot$3.name,
    		type: "slot",
    		source: "(11:4) ",
    		ctx
    	});

    	return block;
    }

    // (16:4) 
    function create_logo_link_container_slot$3(ctx) {
    	let div;
    	let logolink;
    	let current;

    	logolink = new Logo_link({
    			props: {
    				link: "https://github.com/c1m50c/sorting-algorithm-visualizer",
    				icon: Icons.Github
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(logolink.$$.fragment);
    			attr_dev(div, "slot", "logo-link-container");
    			add_location(div, file$6, 15, 4, 823);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(logolink, div, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(logolink.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(logolink.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(logolink);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_logo_link_container_slot$3.name,
    		type: "slot",
    		source: "(16:4) ",
    		ctx
    	});

    	return block;
    }

    function create_fragment$6(ctx) {
    	let projectcard;
    	let current;

    	projectcard = new Project_card({
    			props: {
    				title: "Sorting Algorithm Visualizer",
    				description: "Visualizes various sorting algorithms using Matplotlib and Python.",
    				background_url: "./projects/sorting-algorithm-visualizer.gif",
    				$$slots: {
    					"logo-link-container": [create_logo_link_container_slot$3],
    					"status-badge": [create_status_badge_slot$3]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(projectcard.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(projectcard, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const projectcard_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				projectcard_changes.$$scope = { dirty, ctx };
    			}

    			projectcard.$set(projectcard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(projectcard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(projectcard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(projectcard, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Sorting_algorithm_visualizer_pc', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Sorting_algorithm_visualizer_pc> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ LogoLink: Logo_link, Icons, ProjectCard: Project_card });
    	return [];
    }

    class Sorting_algorithm_visualizer_pc extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Sorting_algorithm_visualizer_pc",
    			options,
    			id: create_fragment$6.name
    		});
    	}
    }

    /* src\components\project-cards\rust_algorithms_pc.svelte generated by Svelte v3.42.5 */
    const file$5 = "src\\components\\project-cards\\rust_algorithms_pc.svelte";

    // (11:4) 
    function create_status_badge_slot$2(ctx) {
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			attr_dev(img, "slot", "status-badge");
    			if (!src_url_equal(img.src, img_src_value = "https://github.com/c1m50c/rust-algorithms/actions/workflows/build.yml/badge.svg?branch=main")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Build Status");
    			add_location(img, file$5, 10, 4, 309);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_status_badge_slot$2.name,
    		type: "slot",
    		source: "(11:4) ",
    		ctx
    	});

    	return block;
    }

    // (12:4) 
    function create_logo_link_container_slot$2(ctx) {
    	let div;
    	let logolink;
    	let current;

    	logolink = new Logo_link({
    			props: {
    				link: "https://github.com/c1m50c/rust-algorithms",
    				icon: Icons.Github
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(logolink.$$.fragment);
    			attr_dev(div, "slot", "logo-link-container");
    			add_location(div, file$5, 11, 4, 459);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(logolink, div, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(logolink.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(logolink.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(logolink);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_logo_link_container_slot$2.name,
    		type: "slot",
    		source: "(12:4) ",
    		ctx
    	});

    	return block;
    }

    function create_fragment$5(ctx) {
    	let projectcard;
    	let current;

    	projectcard = new Project_card({
    			props: {
    				title: "Rust Algorithms",
    				description: "A Rust library implementing various algorithms.",
    				background_url: "./projects/rust-algorithms.png",
    				$$slots: {
    					"logo-link-container": [create_logo_link_container_slot$2],
    					"status-badge": [create_status_badge_slot$2]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(projectcard.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(projectcard, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const projectcard_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				projectcard_changes.$$scope = { dirty, ctx };
    			}

    			projectcard.$set(projectcard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(projectcard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(projectcard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(projectcard, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Rust_algorithms_pc', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Rust_algorithms_pc> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ LogoLink: Logo_link, Icons, ProjectCard: Project_card });
    	return [];
    }

    class Rust_algorithms_pc extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Rust_algorithms_pc",
    			options,
    			id: create_fragment$5.name
    		});
    	}
    }

    /* src\components\project-cards\rust_data_structures_pc.svelte generated by Svelte v3.42.5 */
    const file$4 = "src\\components\\project-cards\\rust_data_structures_pc.svelte";

    // (11:4) 
    function create_status_badge_slot$1(ctx) {
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			attr_dev(img, "slot", "status-badge");
    			if (!src_url_equal(img.src, img_src_value = "https://github.com/c1m50c/rust-data-structures/actions/workflows/build.yml/badge.svg?branch=main")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Build Status");
    			add_location(img, file$4, 10, 4, 364);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_status_badge_slot$1.name,
    		type: "slot",
    		source: "(11:4) ",
    		ctx
    	});

    	return block;
    }

    // (12:4) 
    function create_logo_link_container_slot$1(ctx) {
    	let div;
    	let logolink;
    	let current;

    	logolink = new Logo_link({
    			props: {
    				link: "https://github.com/c1m50c/rust-data-structures",
    				icon: Icons.Github
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(logolink.$$.fragment);
    			attr_dev(div, "slot", "logo-link-container");
    			add_location(div, file$4, 11, 4, 519);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(logolink, div, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(logolink.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(logolink.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(logolink);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_logo_link_container_slot$1.name,
    		type: "slot",
    		source: "(12:4) ",
    		ctx
    	});

    	return block;
    }

    function create_fragment$4(ctx) {
    	let projectcard;
    	let current;

    	projectcard = new Project_card({
    			props: {
    				title: "Rust Data Structures",
    				description: "A library implementing various Data Structures in Rust, made strictly for learning purposes.",
    				background_url: "./projects/rust-data-structures.png",
    				$$slots: {
    					"logo-link-container": [create_logo_link_container_slot$1],
    					"status-badge": [create_status_badge_slot$1]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(projectcard.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(projectcard, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const projectcard_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				projectcard_changes.$$scope = { dirty, ctx };
    			}

    			projectcard.$set(projectcard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(projectcard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(projectcard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(projectcard, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Rust_data_structures_pc', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Rust_data_structures_pc> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ LogoLink: Logo_link, Icons, ProjectCard: Project_card });
    	return [];
    }

    class Rust_data_structures_pc extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Rust_data_structures_pc",
    			options,
    			id: create_fragment$4.name
    		});
    	}
    }

    /* src\components\project-cards\fixed_vectors.svelte generated by Svelte v3.42.5 */
    const file$3 = "src\\components\\project-cards\\fixed_vectors.svelte";

    // (11:4) 
    function create_status_badge_slot(ctx) {
    	let div;
    	let img0;
    	let img0_src_value;
    	let t0;
    	let img1;
    	let img1_src_value;
    	let t1;
    	let img2;
    	let img2_src_value;
    	let t2;
    	let img3;
    	let img3_src_value;
    	let t3;
    	let img4;
    	let img4_src_value;

    	const block = {
    		c: function create() {
    			div = element("div");
    			img0 = element("img");
    			t0 = space();
    			img1 = element("img");
    			t1 = space();
    			img2 = element("img");
    			t2 = space();
    			img3 = element("img");
    			t3 = space();
    			img4 = element("img");
    			if (!src_url_equal(img0.src, img0_src_value = "https://img.shields.io/github/workflow/status/c1m50c/fixed-vectors/Build?style=for-the-badge")) attr_dev(img0, "src", img0_src_value);
    			attr_dev(img0, "alt", "Build");
    			add_location(img0, file$3, 11, 8, 378);
    			if (!src_url_equal(img1.src, img1_src_value = "https://img.shields.io/crates/v/fixed-vectors?color=orange&style=for-the-badge")) attr_dev(img1, "src", img1_src_value);
    			attr_dev(img1, "alt", "CratesIO");
    			add_location(img1, file$3, 12, 8, 506);
    			if (!src_url_equal(img2.src, img2_src_value = "https://img.shields.io/crates/l/fixed-vectors?style=for-the-badge")) attr_dev(img2, "src", img2_src_value);
    			attr_dev(img2, "alt", "License");
    			add_location(img2, file$3, 13, 8, 623);
    			if (!src_url_equal(img3.src, img3_src_value = "https://img.shields.io/tokei/lines/github/c1m50c/fixed-vectors?style=for-the-badge")) attr_dev(img3, "src", img3_src_value);
    			attr_dev(img3, "alt", "Lines of Code");
    			add_location(img3, file$3, 14, 8, 726);
    			if (!src_url_equal(img4.src, img4_src_value = "https://img.shields.io/github/stars/c1m50c/fixed-vectors?style=for-the-badge")) attr_dev(img4, "src", img4_src_value);
    			attr_dev(img4, "alt", "Github Stars");
    			add_location(img4, file$3, 15, 8, 852);
    			attr_dev(div, "slot", "status-badge");
    			add_location(div, file$3, 10, 4, 343);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, img0);
    			append_dev(div, t0);
    			append_dev(div, img1);
    			append_dev(div, t1);
    			append_dev(div, img2);
    			append_dev(div, t2);
    			append_dev(div, img3);
    			append_dev(div, t3);
    			append_dev(div, img4);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_status_badge_slot.name,
    		type: "slot",
    		source: "(11:4) ",
    		ctx
    	});

    	return block;
    }

    // (18:4) 
    function create_logo_link_container_slot(ctx) {
    	let div;
    	let logolink0;
    	let t0;
    	let logolink1;
    	let t1;
    	let logolink2;
    	let current;

    	logolink0 = new Logo_link({
    			props: {
    				link: "https://github.com/c1m50c/fixed-vectors",
    				icon: Icons.Github
    			},
    			$$inline: true
    		});

    	logolink1 = new Logo_link({
    			props: {
    				link: "https://crates.io/crates/fixed-vectors/",
    				icon: Icons.CratesIO
    			},
    			$$inline: true
    		});

    	logolink2 = new Logo_link({
    			props: {
    				link: "https://docs.rs/crate/fixed-vectors/latest",
    				icon: Icons.DocsRS
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(logolink0.$$.fragment);
    			t0 = space();
    			create_component(logolink1.$$.fragment);
    			t1 = space();
    			create_component(logolink2.$$.fragment);
    			attr_dev(div, "slot", "logo-link-container");
    			add_location(div, file$3, 17, 4, 979);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(logolink0, div, null);
    			append_dev(div, t0);
    			mount_component(logolink1, div, null);
    			append_dev(div, t1);
    			mount_component(logolink2, div, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(logolink0.$$.fragment, local);
    			transition_in(logolink1.$$.fragment, local);
    			transition_in(logolink2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(logolink0.$$.fragment, local);
    			transition_out(logolink1.$$.fragment, local);
    			transition_out(logolink2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(logolink0);
    			destroy_component(logolink1);
    			destroy_component(logolink2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_logo_link_container_slot.name,
    		type: "slot",
    		source: "(18:4) ",
    		ctx
    	});

    	return block;
    }

    function create_fragment$3(ctx) {
    	let projectcard;
    	let current;

    	projectcard = new Project_card({
    			props: {
    				title: "Fixed Vectors",
    				description: "Library implementing fixed-length Vectors meant for representing dimensional values. ",
    				background_url: "./projects/fixed-vectors.png",
    				$$slots: {
    					"logo-link-container": [create_logo_link_container_slot],
    					"status-badge": [create_status_badge_slot]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(projectcard.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(projectcard, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const projectcard_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				projectcard_changes.$$scope = { dirty, ctx };
    			}

    			projectcard.$set(projectcard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(projectcard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(projectcard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(projectcard, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Fixed_vectors', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Fixed_vectors> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ LogoLink: Logo_link, Icons, ProjectCard: Project_card });
    	return [];
    }

    class Fixed_vectors extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Fixed_vectors",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    /* src\components\projects.svelte generated by Svelte v3.42.5 */
    const file$2 = "src\\components\\projects.svelte";

    function create_fragment$2(ctx) {
    	let div1;
    	let h1;
    	let t1;
    	let div0;
    	let portfoliopc;
    	let t2;
    	let fixedvectors;
    	let t3;
    	let sortingalgorithmvisualizerpc;
    	let t4;
    	let cellularautomatapc;
    	let t5;
    	let rustalgorithmspc;
    	let t6;
    	let rustdatastructurespc;
    	let current;
    	portfoliopc = new Portfolio_pc({ $$inline: true });
    	fixedvectors = new Fixed_vectors({ $$inline: true });
    	sortingalgorithmvisualizerpc = new Sorting_algorithm_visualizer_pc({ $$inline: true });
    	cellularautomatapc = new Cellular_automata_pc({ $$inline: true });
    	rustalgorithmspc = new Rust_algorithms_pc({ $$inline: true });
    	rustdatastructurespc = new Rust_data_structures_pc({ $$inline: true });

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Projects";
    			t1 = space();
    			div0 = element("div");
    			create_component(portfoliopc.$$.fragment);
    			t2 = space();
    			create_component(fixedvectors.$$.fragment);
    			t3 = space();
    			create_component(sortingalgorithmvisualizerpc.$$.fragment);
    			t4 = space();
    			create_component(cellularautomatapc.$$.fragment);
    			t5 = space();
    			create_component(rustalgorithmspc.$$.fragment);
    			t6 = space();
    			create_component(rustdatastructurespc.$$.fragment);
    			attr_dev(h1, "class", "section-title");
    			add_location(h1, file$2, 20, 4, 729);
    			attr_dev(div0, "class", "project-card-container svelte-1kvgcb0");
    			add_location(div0, file$2, 21, 4, 774);
    			attr_dev(div1, "class", "info-container");
    			attr_dev(div1, "id", "projects");
    			add_location(div1, file$2, 19, 0, 681);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, h1);
    			append_dev(div1, t1);
    			append_dev(div1, div0);
    			mount_component(portfoliopc, div0, null);
    			append_dev(div0, t2);
    			mount_component(fixedvectors, div0, null);
    			append_dev(div0, t3);
    			mount_component(sortingalgorithmvisualizerpc, div0, null);
    			append_dev(div0, t4);
    			mount_component(cellularautomatapc, div0, null);
    			append_dev(div0, t5);
    			mount_component(rustalgorithmspc, div0, null);
    			append_dev(div0, t6);
    			mount_component(rustdatastructurespc, div0, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(portfoliopc.$$.fragment, local);
    			transition_in(fixedvectors.$$.fragment, local);
    			transition_in(sortingalgorithmvisualizerpc.$$.fragment, local);
    			transition_in(cellularautomatapc.$$.fragment, local);
    			transition_in(rustalgorithmspc.$$.fragment, local);
    			transition_in(rustdatastructurespc.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(portfoliopc.$$.fragment, local);
    			transition_out(fixedvectors.$$.fragment, local);
    			transition_out(sortingalgorithmvisualizerpc.$$.fragment, local);
    			transition_out(cellularautomatapc.$$.fragment, local);
    			transition_out(rustalgorithmspc.$$.fragment, local);
    			transition_out(rustdatastructurespc.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			destroy_component(portfoliopc);
    			destroy_component(fixedvectors);
    			destroy_component(sortingalgorithmvisualizerpc);
    			destroy_component(cellularautomatapc);
    			destroy_component(rustalgorithmspc);
    			destroy_component(rustdatastructurespc);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Projects', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Projects> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		PortfolioPc: Portfolio_pc,
    		CellularAutomataPc: Cellular_automata_pc,
    		SortingAlgorithmVisualizerPc: Sorting_algorithm_visualizer_pc,
    		RustAlgorithmsPc: Rust_algorithms_pc,
    		RustDataStructuresPc: Rust_data_structures_pc,
    		FixedVectors: Fixed_vectors
    	});

    	return [];
    }

    class Projects extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Projects",
    			options,
    			id: create_fragment$2.name
    		});
    	}
    }

    /* src\components\contact.svelte generated by Svelte v3.42.5 */
    const file$1 = "src\\components\\contact.svelte";

    function create_fragment$1(ctx) {
    	let div1;
    	let div0;
    	let logolink0;
    	let t0;
    	let logolink1;
    	let t1;
    	let logolink2;
    	let t2;
    	let button;
    	let current;
    	let mounted;
    	let dispose;

    	logolink0 = new Logo_link({
    			props: { link: github_profile, icon: Icons.Github },
    			$$inline: true
    		});

    	logolink1 = new Logo_link({
    			props: {
    				link: hacker_rank_profile,
    				icon: Icons.HackerRank
    			},
    			$$inline: true
    		});

    	logolink2 = new Logo_link({
    			props: {
    				link: linked_in_profile,
    				icon: Icons.LinkedIn
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			create_component(logolink0.$$.fragment);
    			t0 = space();
    			create_component(logolink1.$$.fragment);
    			t1 = space();
    			create_component(logolink2.$$.fragment);
    			t2 = space();
    			button = element("button");
    			button.textContent = `${email}`;
    			attr_dev(div0, "class", "logo-link-container svelte-1a8ojy");
    			add_location(div0, file$1, 54, 4, 1416);
    			attr_dev(button, "id", "email");
    			attr_dev(button, "class", "svelte-1a8ojy");
    			add_location(button, file$1, 59, 4, 1673);
    			attr_dev(div1, "class", "info-container svelte-1a8ojy");
    			attr_dev(div1, "id", "contact");
    			add_location(div1, file$1, 53, 0, 1369);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			mount_component(logolink0, div0, null);
    			append_dev(div0, t0);
    			mount_component(logolink1, div0, null);
    			append_dev(div0, t1);
    			mount_component(logolink2, div0, null);
    			append_dev(div1, t2);
    			append_dev(div1, button);
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(button, "click", /*click_handler*/ ctx[0], false, false, false);
    				mounted = true;
    			}
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(logolink0.$$.fragment, local);
    			transition_in(logolink1.$$.fragment, local);
    			transition_in(logolink2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(logolink0.$$.fragment, local);
    			transition_out(logolink1.$$.fragment, local);
    			transition_out(logolink2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			destroy_component(logolink0);
    			destroy_component(logolink1);
    			destroy_component(logolink2);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const email = "pereiswell@gmail.com";
    const github_profile = "https://github.com/c1m50c";
    const hacker_rank_profile = "https://www.hackerrank.com/c1m50c";
    const linked_in_profile = "https://www.linkedin.com/in/pere-wells";

    /** Copys a string into the user's clipboard. */
    function copy_to_clipboard(str) {
    	navigator.clipboard.writeText(str);
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Contact', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Contact> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => {
    		copy_to_clipboard(email);
    	};

    	$$self.$capture_state = () => ({
    		LogoLink: Logo_link,
    		Icons,
    		email,
    		github_profile,
    		hacker_rank_profile,
    		linked_in_profile,
    		copy_to_clipboard
    	});

    	return [click_handler];
    }

    class Contact extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Contact",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src\App.svelte generated by Svelte v3.42.5 */
    const file = "src\\App.svelte";

    function create_fragment(ctx) {
    	let navigationbar;
    	let t0;
    	let main;
    	let welcome;
    	let t1;
    	let skills;
    	let t2;
    	let projects;
    	let t3;
    	let contact;
    	let current;
    	navigationbar = new Navigation_bar({ $$inline: true });
    	welcome = new Welcome({ $$inline: true });
    	skills = new Skills({ $$inline: true });
    	projects = new Projects({ $$inline: true });
    	contact = new Contact({ $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(navigationbar.$$.fragment);
    			t0 = space();
    			main = element("main");
    			create_component(welcome.$$.fragment);
    			t1 = space();
    			create_component(skills.$$.fragment);
    			t2 = space();
    			create_component(projects.$$.fragment);
    			t3 = space();
    			create_component(contact.$$.fragment);
    			attr_dev(main, "class", "svelte-h3hsr1");
    			add_location(main, file, 95, 0, 3527);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(navigationbar, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, main, anchor);
    			mount_component(welcome, main, null);
    			append_dev(main, t1);
    			mount_component(skills, main, null);
    			append_dev(main, t2);
    			mount_component(projects, main, null);
    			append_dev(main, t3);
    			mount_component(contact, main, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbar.$$.fragment, local);
    			transition_in(welcome.$$.fragment, local);
    			transition_in(skills.$$.fragment, local);
    			transition_in(projects.$$.fragment, local);
    			transition_in(contact.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbar.$$.fragment, local);
    			transition_out(welcome.$$.fragment, local);
    			transition_out(skills.$$.fragment, local);
    			transition_out(projects.$$.fragment, local);
    			transition_out(contact.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(navigationbar, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(main);
    			destroy_component(welcome);
    			destroy_component(skills);
    			destroy_component(projects);
    			destroy_component(contact);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		NavigationBar: Navigation_bar,
    		Welcome,
    		Skills,
    		Projects,
    		Contact
    	});

    	return [];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
        target: document.body,
        props: {}
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
