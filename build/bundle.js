
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
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
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
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
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
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
    function custom_event(type, detail, bubbles = false) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
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

    const file$6 = "src\\components\\navigation_bar.svelte";

    function create_fragment$6(ctx) {
    	let div;
    	let nav;
    	let a0;
    	let t1;
    	let a1;
    	let t3;
    	let a2;
    	let t5;
    	let a3;
    	let t7;
    	let a4;

    	const block = {
    		c: function create() {
    			div = element("div");
    			nav = element("nav");
    			a0 = element("a");
    			a0.textContent = "Welcome";
    			t1 = space();
    			a1 = element("a");
    			a1.textContent = "About";
    			t3 = space();
    			a2 = element("a");
    			a2.textContent = "Skills";
    			t5 = space();
    			a3 = element("a");
    			a3.textContent = "Projects";
    			t7 = space();
    			a4 = element("a");
    			a4.textContent = "Contact";
    			attr_dev(a0, "class", "navbar-link svelte-1ctrp5");
    			attr_dev(a0, "href", "#");
    			add_location(a0, file$6, 68, 8, 1766);
    			attr_dev(a1, "class", "navbar-link svelte-1ctrp5");
    			attr_dev(a1, "href", "#about");
    			add_location(a1, file$6, 69, 8, 1819);
    			attr_dev(a2, "class", "navbar-link svelte-1ctrp5");
    			attr_dev(a2, "href", "#skills");
    			add_location(a2, file$6, 70, 8, 1875);
    			attr_dev(a3, "class", "navbar-link svelte-1ctrp5");
    			attr_dev(a3, "href", "#projects");
    			add_location(a3, file$6, 71, 8, 1933);
    			attr_dev(a4, "class", "navbar-link svelte-1ctrp5");
    			attr_dev(a4, "href", "#contact");
    			add_location(a4, file$6, 72, 8, 1995);
    			attr_dev(nav, "class", "navigation-bar svelte-1ctrp5");
    			add_location(nav, file$6, 67, 4, 1728);
    			attr_dev(div, "class", "navigation-bar-container svelte-1ctrp5");
    			add_location(div, file$6, 66, 0, 1684);
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
    			append_dev(nav, t7);
    			append_dev(nav, a4);
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
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props) {
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
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Navigation_bar",
    			options,
    			id: create_fragment$6.name
    		});
    	}
    }

    /* src\components\welcome.svelte generated by Svelte v3.42.5 */

    const file$5 = "src\\components\\welcome.svelte";

    function create_fragment$5(ctx) {
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
    			p.textContent = "And I do software development 👌";
    			attr_dev(path0, "id", "logo-path");
    			attr_dev(path0, "d", "M134.015 82.5174C137.643 121.896 143.026 161.079 148.566 200.225C155.324 245.741 162.326 291.223 169.81 336.626C171.043 343.938 172.35 351.238 173.65 358.539C176.091 372.248 195.478 368.796 193.038 355.087C191.753 347.869 190.46 340.652 189.241 333.423C181.78 288.167 174.801 242.833 168.064 197.465C162.61 158.937 157.331 120.373 153.687 81.6232C153.055 67.7128 133.383 68.607 134.015 82.5174Z");
    			attr_dev(path0, "class", "svelte-16kknxu");
    			add_location(path0, file$5, 92, 12, 2010);
    			attr_dev(path1, "id", "logo-path");
    			attr_dev(path1, "d", "M95.5772 233.886C97.5979 233.631 99.629 233.448 101.639 233.12C120.469 230.047 139.208 225.43 157.254 219.25C167.749 215.656 178.214 211.904 188.348 207.396C199.905 202.256 210.945 196.027 222.244 190.342C233.108 183.274 244.389 176.809 254.836 169.138C273.343 155.548 291.515 139.359 305.406 120.892C315.812 107.059 325.939 89.052 327.276 71.163C327.889 62.9531 325.176 54.8319 324.126 46.6664C319.359 39.4591 316.093 30.9932 309.825 25.0444C293.29 9.35003 270.982 3.12849 248.96 0.917283C220.119 -1.97867 185.507 2.35398 157.62 8.71109C141.491 12.3879 125.898 18.1124 110.037 22.813C74.6917 37.2926 64.1088 40.1281 32.069 58.6398C22.7372 64.0315 14.0258 70.4321 5.00424 76.3283C-6.64025 83.964 4.15833 100.432 15.8028 92.7961C24.2578 87.2322 32.4147 81.1865 41.1677 76.1044C71.7298 58.3597 81.9259 55.5919 115.663 41.6846C130.697 37.1734 145.476 31.7068 160.764 28.151C186.837 22.0869 217.798 18.126 244.805 20.1664C261.986 21.4646 279.966 25.614 293.847 36.5554C298.335 40.0931 301.076 45.4088 304.69 49.8355C305.863 55.3024 308.39 60.6479 308.209 66.2364C307.724 81.2555 299.276 96.2226 290.728 107.763C277.939 125.03 261.234 139.959 244.071 152.648C234.233 159.922 223.603 166.058 213.369 172.763C202.685 178.176 192.25 184.111 181.317 189.001C171.653 193.325 161.67 196.922 151.66 200.369C133.138 206.747 113.922 211.398 94.5422 214.22C80.6367 214.952 81.6717 234.618 95.5772 233.886V233.886Z");
    			attr_dev(path1, "class", "svelte-16kknxu");
    			add_location(path1, file$5, 93, 12, 2445);
    			add_location(g, file$5, 91, 9, 1993);
    			attr_dev(svg, "width", "328");
    			attr_dev(svg, "height", "368");
    			attr_dev(svg, "viewBox", "0 0 328 368");
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "id", "logo");
    			attr_dev(svg, "class", "svelte-16kknxu");
    			add_location(svg, file$5, 90, 4, 1885);
    			attr_dev(h2, "id", "hey");
    			attr_dev(h2, "class", "svelte-16kknxu");
    			add_location(h2, file$5, 97, 8, 3935);
    			attr_dev(p, "id", "hook");
    			attr_dev(p, "class", "svelte-16kknxu");
    			add_location(p, file$5, 98, 8, 3976);
    			attr_dev(div0, "id", "h2-container");
    			attr_dev(div0, "class", "svelte-16kknxu");
    			add_location(div0, file$5, 96, 4, 3902);
    			attr_dev(div1, "class", "info-container svelte-16kknxu");
    			attr_dev(div1, "id", "welcome");
    			add_location(div1, file$5, 89, 0, 1838);
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
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props) {
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
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Welcome",
    			options,
    			id: create_fragment$5.name
    		});
    	}
    }

    /* src\components\about.svelte generated by Svelte v3.42.5 */

    const file$4 = "src\\components\\about.svelte";

    function create_fragment$4(ctx) {
    	let div;
    	let h1;
    	let t1;
    	let p;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h1 = element("h1");
    			h1.textContent = "About Me";
    			t1 = space();
    			p = element("p");
    			p.textContent = "I'm a sixteen-year-old software developer based in Lincoln, Nebraska.\r\n        I've been programming since the age of nine and since then it has been my primary passion throughout life.\r\n        Pursuing software development as a career has always been something I have wanted to do.\r\n        I'm skilled and very comfortable with languages such as Python and JavaScript, but learning new languages and technologies has been always been something I enjoy doing to a great degree.\r\n        I have a hunger to push myself and learn as much as I possibly can.\r\n        I am very good at researching problems I encounter and can normally fix them very quickly, I would consider this one of my biggest strengths.\r\n        Learning and programming are two things I'm extremely passionate about in my life, and I'm always very happy at the opportunity to work on a new project.";
    			add_location(h1, file$4, 10, 4, 105);
    			add_location(p, file$4, 11, 4, 128);
    			attr_dev(div, "class", "info-container");
    			attr_dev(div, "id", "about");
    			add_location(div, file$4, 9, 0, 60);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h1);
    			append_dev(div, t1);
    			append_dev(div, p);
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
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('About', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<About> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class About extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "About",
    			options,
    			id: create_fragment$4.name
    		});
    	}
    }

    /* src\components\skills.svelte generated by Svelte v3.42.5 */

    const file$3 = "src\\components\\skills.svelte";

    function create_fragment$3(ctx) {
    	let div6;
    	let h1;
    	let t1;
    	let div1;
    	let h20;
    	let t3;
    	let div0;
    	let a0;
    	let h30;
    	let t5;
    	let a1;
    	let h31;
    	let t7;
    	let a2;
    	let h32;
    	let t9;
    	let a3;
    	let h33;
    	let t11;
    	let a4;
    	let h34;
    	let t13;
    	let a5;
    	let h35;
    	let t15;
    	let a6;
    	let h36;
    	let t17;
    	let a7;
    	let h37;
    	let t19;
    	let a8;
    	let h38;
    	let t21;
    	let a9;
    	let h39;
    	let t23;
    	let a10;
    	let h310;
    	let t25;
    	let a11;
    	let h311;
    	let t27;
    	let div3;
    	let h21;
    	let t29;
    	let div2;
    	let a12;
    	let h312;
    	let t31;
    	let a13;
    	let h313;
    	let t33;
    	let a14;
    	let h314;
    	let t35;
    	let a15;
    	let h315;
    	let t37;
    	let a16;
    	let h316;
    	let t39;
    	let a17;
    	let h317;
    	let t41;
    	let a18;
    	let h318;
    	let t43;
    	let a19;
    	let h319;
    	let t45;
    	let a20;
    	let h320;
    	let t47;
    	let a21;
    	let h321;
    	let t49;
    	let a22;
    	let h322;
    	let t51;
    	let a23;
    	let h323;
    	let t53;
    	let div5;
    	let h22;
    	let t55;
    	let div4;
    	let a24;
    	let h324;
    	let t57;
    	let a25;
    	let h325;
    	let t59;
    	let a26;
    	let h326;

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
    			a0 = element("a");
    			h30 = element("h3");
    			h30.textContent = "Python 🐍";
    			t5 = space();
    			a1 = element("a");
    			h31 = element("h3");
    			h31.textContent = "Rust 🦀";
    			t7 = space();
    			a2 = element("a");
    			h32 = element("h3");
    			h32.textContent = "JavaScript ☕";
    			t9 = space();
    			a3 = element("a");
    			h33 = element("h3");
    			h33.textContent = "TypeScript 📰";
    			t11 = space();
    			a4 = element("a");
    			h34 = element("h3");
    			h34.textContent = "HTML 📄";
    			t13 = space();
    			a5 = element("a");
    			h35 = element("h3");
    			h35.textContent = "CSS 📑";
    			t15 = space();
    			a6 = element("a");
    			h36 = element("h3");
    			h36.textContent = "SQL 📂";
    			t17 = space();
    			a7 = element("a");
    			h37 = element("h3");
    			h37.textContent = "C 🔧";
    			t19 = space();
    			a8 = element("a");
    			h38 = element("h3");
    			h38.textContent = "C++ 🔨";
    			t21 = space();
    			a9 = element("a");
    			h39 = element("h3");
    			h39.textContent = "C# 🌳";
    			t23 = space();
    			a10 = element("a");
    			h310 = element("h3");
    			h310.textContent = "Lua 🌌";
    			t25 = space();
    			a11 = element("a");
    			h311 = element("h3");
    			h311.textContent = "GDScript 🎮";
    			t27 = space();
    			div3 = element("div");
    			h21 = element("h2");
    			h21.textContent = "Libraries, Engines & Frameworks 📚";
    			t29 = space();
    			div2 = element("div");
    			a12 = element("a");
    			h312 = element("h3");
    			h312.textContent = "Matplotlib 📈";
    			t31 = space();
    			a13 = element("a");
    			h313 = element("h3");
    			h313.textContent = "NumPy 🧮";
    			t33 = space();
    			a14 = element("a");
    			h314 = element("h3");
    			h314.textContent = "OpenCV 📷";
    			t35 = space();
    			a15 = element("a");
    			h315 = element("h3");
    			h315.textContent = "Mediapipe 🔬";
    			t37 = space();
    			a16 = element("a");
    			h316 = element("h3");
    			h316.textContent = "Flask 🧪";
    			t39 = space();
    			a17 = element("a");
    			h317 = element("h3");
    			h317.textContent = "SQLite 💾";
    			t41 = space();
    			a18 = element("a");
    			h318 = element("h3");
    			h318.textContent = "React ⚡";
    			t43 = space();
    			a19 = element("a");
    			h319 = element("h3");
    			h319.textContent = "Vue 🌴";
    			t45 = space();
    			a20 = element("a");
    			h320 = element("h3");
    			h320.textContent = "Svelte 📙";
    			t47 = space();
    			a21 = element("a");
    			h321 = element("h3");
    			h321.textContent = "Tailwind 🍃";
    			t49 = space();
    			a22 = element("a");
    			h322 = element("h3");
    			h322.textContent = "Sass 💄";
    			t51 = space();
    			a23 = element("a");
    			h323 = element("h3");
    			h323.textContent = "Godot 🤖";
    			t53 = space();
    			div5 = element("div");
    			h22 = element("h2");
    			h22.textContent = "Miscellaneous Technologies ❓";
    			t55 = space();
    			div4 = element("div");
    			a24 = element("a");
    			h324 = element("h3");
    			h324.textContent = "Google 🔍";
    			t57 = space();
    			a25 = element("a");
    			h325 = element("h3");
    			h325.textContent = "Git 💻";
    			t59 = space();
    			a26 = element("a");
    			h326 = element("h3");
    			h326.textContent = "NPM 📦";
    			add_location(h1, file$3, 71, 4, 2844);
    			add_location(h20, file$3, 74, 8, 2989);
    			attr_dev(h30, "class", "svelte-uw700v");
    			add_location(h30, file$3, 77, 16, 3161);
    			attr_dev(a0, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a0, "id", "python");
    			attr_dev(a0, "href", "https://www.python.org/");
    			add_location(a0, file$3, 76, 12, 3067);
    			attr_dev(h31, "class", "svelte-uw700v");
    			add_location(h31, file$3, 80, 16, 3306);
    			attr_dev(a1, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a1, "id", "rust");
    			attr_dev(a1, "href", "https://www.rust-lang.org/");
    			add_location(a1, file$3, 79, 12, 3211);
    			attr_dev(h32, "class", "svelte-uw700v");
    			add_location(h32, file$3, 83, 16, 3457);
    			attr_dev(a2, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a2, "id", "java_script");
    			attr_dev(a2, "href", "https://www.javascript.com/");
    			add_location(a2, file$3, 82, 12, 3354);
    			attr_dev(h33, "class", "svelte-uw700v");
    			add_location(h33, file$3, 86, 16, 3617);
    			attr_dev(a3, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a3, "id", "type_script");
    			attr_dev(a3, "href", "https://www.typescriptlang.org/");
    			add_location(a3, file$3, 85, 12, 3510);
    			attr_dev(h34, "class", "svelte-uw700v");
    			add_location(h34, file$3, 89, 16, 3774);
    			attr_dev(a4, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a4, "id", "html");
    			attr_dev(a4, "href", "https://en.wikipedia.org/wiki/HTML");
    			add_location(a4, file$3, 88, 12, 3671);
    			attr_dev(h35, "class", "svelte-uw700v");
    			add_location(h35, file$3, 92, 16, 3923);
    			attr_dev(a5, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a5, "id", "css");
    			attr_dev(a5, "href", "https://en.wikipedia.org/wiki/CSS");
    			add_location(a5, file$3, 91, 12, 3822);
    			attr_dev(h36, "class", "svelte-uw700v");
    			add_location(h36, file$3, 95, 16, 4071);
    			attr_dev(a6, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a6, "id", "sql");
    			attr_dev(a6, "href", "https://en.wikipedia.org/wiki/SQL");
    			add_location(a6, file$3, 94, 12, 3970);
    			attr_dev(h37, "class", "svelte-uw700v");
    			add_location(h37, file$3, 98, 16, 4238);
    			attr_dev(a7, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a7, "id", "c");
    			attr_dev(a7, "href", "https://en.wikipedia.org/wiki/C_(programming_language)");
    			add_location(a7, file$3, 97, 12, 4118);
    			attr_dev(h38, "class", "svelte-uw700v");
    			add_location(h38, file$3, 101, 16, 4388);
    			attr_dev(a8, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a8, "id", "cpp");
    			attr_dev(a8, "href", "https://en.wikipedia.org/wiki/C%2B%2B");
    			add_location(a8, file$3, 100, 12, 4283);
    			attr_dev(h39, "class", "svelte-uw700v");
    			add_location(h39, file$3, 104, 16, 4554);
    			attr_dev(a9, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a9, "id", "c_sharp");
    			attr_dev(a9, "href", "https://docs.microsoft.com/en-us/dotnet/csharp/");
    			add_location(a9, file$3, 103, 12, 4435);
    			attr_dev(h310, "class", "svelte-uw700v");
    			add_location(h310, file$3, 107, 16, 4688);
    			attr_dev(a10, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a10, "id", "lua");
    			attr_dev(a10, "href", "https://www.lua.org/");
    			add_location(a10, file$3, 106, 12, 4600);
    			attr_dev(h311, "class", "svelte-uw700v");
    			add_location(h311, file$3, 110, 16, 4892);
    			attr_dev(a11, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a11, "id", "gdscript");
    			attr_dev(a11, "href", "https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/index.html");
    			add_location(a11, file$3, 109, 12, 4735);
    			attr_dev(div0, "class", "info-card-container svelte-uw700v");
    			add_location(div0, file$3, 75, 8, 3020);
    			attr_dev(div1, "class", "languages-container");
    			add_location(div1, file$3, 73, 4, 2946);
    			add_location(h21, file$3, 115, 8, 5029);
    			attr_dev(h312, "class", "svelte-uw700v");
    			add_location(h312, file$3, 118, 16, 5227);
    			attr_dev(a12, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a12, "id", "matplotlib");
    			attr_dev(a12, "href", "https://matplotlib.org/");
    			add_location(a12, file$3, 117, 12, 5129);
    			attr_dev(h313, "class", "svelte-uw700v");
    			add_location(h313, file$3, 121, 16, 5369);
    			attr_dev(a13, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a13, "id", "numpy");
    			attr_dev(a13, "href", "https://numpy.org/");
    			add_location(a13, file$3, 120, 12, 5281);
    			attr_dev(h314, "class", "svelte-uw700v");
    			add_location(h314, file$3, 124, 16, 5508);
    			attr_dev(a14, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a14, "id", "opencv");
    			attr_dev(a14, "href", "https://opencv.org/");
    			add_location(a14, file$3, 123, 12, 5418);
    			attr_dev(h315, "class", "svelte-uw700v");
    			add_location(h315, file$3, 127, 16, 5667);
    			attr_dev(a15, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a15, "id", "mediapipe");
    			attr_dev(a15, "href", "https://google.github.io/mediapipe/");
    			add_location(a15, file$3, 126, 12, 5558);
    			attr_dev(h316, "class", "svelte-uw700v");
    			add_location(h316, file$3, 130, 16, 5823);
    			attr_dev(a16, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a16, "id", "flask");
    			attr_dev(a16, "href", "https://github.com/pallets/flask/");
    			add_location(a16, file$3, 129, 12, 5720);
    			attr_dev(h317, "class", "svelte-uw700v");
    			add_location(h317, file$3, 133, 16, 5972);
    			attr_dev(a17, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a17, "id", "sqlite");
    			attr_dev(a17, "href", "https://sqlite.org/index.html");
    			add_location(a17, file$3, 132, 12, 5872);
    			attr_dev(h318, "class", "svelte-uw700v");
    			add_location(h318, file$3, 136, 16, 6112);
    			attr_dev(a18, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a18, "id", "react");
    			attr_dev(a18, "href", "https://reactjs.org/");
    			add_location(a18, file$3, 135, 12, 6022);
    			attr_dev(h319, "class", "svelte-uw700v");
    			add_location(h319, file$3, 139, 16, 6246);
    			attr_dev(a19, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a19, "id", "vue");
    			attr_dev(a19, "href", "https://vuejs.org/");
    			add_location(a19, file$3, 138, 12, 6160);
    			attr_dev(h320, "class", "svelte-uw700v");
    			add_location(h320, file$3, 142, 16, 6383);
    			attr_dev(a20, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a20, "id", "svelte");
    			attr_dev(a20, "href", "https://svelte.dev/");
    			add_location(a20, file$3, 141, 12, 6293);
    			attr_dev(h321, "class", "svelte-uw700v");
    			add_location(h321, file$3, 145, 16, 6530);
    			attr_dev(a21, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a21, "id", "tailwind");
    			attr_dev(a21, "href", "https://tailwindcss.com/");
    			add_location(a21, file$3, 144, 12, 6433);
    			attr_dev(h322, "class", "svelte-uw700v");
    			add_location(h322, file$3, 148, 16, 6673);
    			attr_dev(a22, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a22, "id", "sass");
    			attr_dev(a22, "href", "https://sass-lang.com/");
    			add_location(a22, file$3, 147, 12, 6582);
    			attr_dev(h323, "class", "svelte-uw700v");
    			add_location(h323, file$3, 151, 16, 6815);
    			attr_dev(a23, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a23, "id", "godot");
    			attr_dev(a23, "href", "https://godotengine.org/");
    			add_location(a23, file$3, 150, 12, 6721);
    			attr_dev(div2, "class", "info-card-container svelte-uw700v");
    			add_location(div2, file$3, 116, 8, 5082);
    			attr_dev(div3, "class", "libraies-engines-and-frameworks-container");
    			add_location(div3, file$3, 114, 4, 4964);
    			add_location(h22, file$3, 156, 8, 6927);
    			attr_dev(h324, "class", "svelte-uw700v");
    			add_location(h324, file$3, 159, 16, 7110);
    			attr_dev(a24, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a24, "id", "google");
    			attr_dev(a24, "href", "https://google.com");
    			add_location(a24, file$3, 158, 12, 7021);
    			attr_dev(h325, "class", "svelte-uw700v");
    			add_location(h325, file$3, 162, 16, 7248);
    			attr_dev(a25, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a25, "id", "git");
    			attr_dev(a25, "href", "https://git-scm.com/");
    			add_location(a25, file$3, 161, 12, 7160);
    			attr_dev(h326, "class", "svelte-uw700v");
    			add_location(h326, file$3, 165, 16, 7385);
    			attr_dev(a26, "class", "link-button info-card svelte-uw700v");
    			attr_dev(a26, "id", "npm");
    			attr_dev(a26, "href", "https://www.npmjs.com/");
    			add_location(a26, file$3, 164, 12, 7295);
    			attr_dev(div4, "class", "info-card-container svelte-uw700v");
    			add_location(div4, file$3, 157, 8, 6974);
    			attr_dev(div5, "class", "misc-tech-container");
    			add_location(div5, file$3, 155, 4, 6884);
    			attr_dev(div6, "class", "info-container svelte-uw700v");
    			attr_dev(div6, "id", "skills");
    			add_location(div6, file$3, 70, 0, 2798);
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
    			append_dev(div0, a0);
    			append_dev(a0, h30);
    			append_dev(div0, t5);
    			append_dev(div0, a1);
    			append_dev(a1, h31);
    			append_dev(div0, t7);
    			append_dev(div0, a2);
    			append_dev(a2, h32);
    			append_dev(div0, t9);
    			append_dev(div0, a3);
    			append_dev(a3, h33);
    			append_dev(div0, t11);
    			append_dev(div0, a4);
    			append_dev(a4, h34);
    			append_dev(div0, t13);
    			append_dev(div0, a5);
    			append_dev(a5, h35);
    			append_dev(div0, t15);
    			append_dev(div0, a6);
    			append_dev(a6, h36);
    			append_dev(div0, t17);
    			append_dev(div0, a7);
    			append_dev(a7, h37);
    			append_dev(div0, t19);
    			append_dev(div0, a8);
    			append_dev(a8, h38);
    			append_dev(div0, t21);
    			append_dev(div0, a9);
    			append_dev(a9, h39);
    			append_dev(div0, t23);
    			append_dev(div0, a10);
    			append_dev(a10, h310);
    			append_dev(div0, t25);
    			append_dev(div0, a11);
    			append_dev(a11, h311);
    			append_dev(div6, t27);
    			append_dev(div6, div3);
    			append_dev(div3, h21);
    			append_dev(div3, t29);
    			append_dev(div3, div2);
    			append_dev(div2, a12);
    			append_dev(a12, h312);
    			append_dev(div2, t31);
    			append_dev(div2, a13);
    			append_dev(a13, h313);
    			append_dev(div2, t33);
    			append_dev(div2, a14);
    			append_dev(a14, h314);
    			append_dev(div2, t35);
    			append_dev(div2, a15);
    			append_dev(a15, h315);
    			append_dev(div2, t37);
    			append_dev(div2, a16);
    			append_dev(a16, h316);
    			append_dev(div2, t39);
    			append_dev(div2, a17);
    			append_dev(a17, h317);
    			append_dev(div2, t41);
    			append_dev(div2, a18);
    			append_dev(a18, h318);
    			append_dev(div2, t43);
    			append_dev(div2, a19);
    			append_dev(a19, h319);
    			append_dev(div2, t45);
    			append_dev(div2, a20);
    			append_dev(a20, h320);
    			append_dev(div2, t47);
    			append_dev(div2, a21);
    			append_dev(a21, h321);
    			append_dev(div2, t49);
    			append_dev(div2, a22);
    			append_dev(a22, h322);
    			append_dev(div2, t51);
    			append_dev(div2, a23);
    			append_dev(a23, h323);
    			append_dev(div6, t53);
    			append_dev(div6, div5);
    			append_dev(div5, h22);
    			append_dev(div5, t55);
    			append_dev(div5, div4);
    			append_dev(div4, a24);
    			append_dev(a24, h324);
    			append_dev(div4, t57);
    			append_dev(div4, a25);
    			append_dev(a25, h325);
    			append_dev(div4, t59);
    			append_dev(div4, a26);
    			append_dev(a26, h326);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div6);
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

    function instance$3($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Skills', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Skills> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Skills extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Skills",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    /* src\components\projects.svelte generated by Svelte v3.42.5 */

    const file$2 = "src\\components\\projects.svelte";

    function create_fragment$2(ctx) {
    	let div21;
    	let h10;
    	let t1;
    	let div20;
    	let div3;
    	let div0;
    	let t2;
    	let div2;
    	let h11;
    	let t4;
    	let p0;
    	let t6;
    	let div1;
    	let a0;
    	let svg0;
    	let path0;
    	let t7;
    	let div7;
    	let div4;
    	let t8;
    	let div6;
    	let h12;
    	let t10;
    	let p1;
    	let t12;
    	let div5;
    	let a1;
    	let svg1;
    	let path1;
    	let t13;
    	let div11;
    	let div8;
    	let t14;
    	let div10;
    	let h13;
    	let t16;
    	let p2;
    	let t18;
    	let img0;
    	let img0_src_value;
    	let t19;
    	let div9;
    	let a2;
    	let svg2;
    	let path2;
    	let t20;
    	let div15;
    	let div12;
    	let t21;
    	let div14;
    	let h14;
    	let t23;
    	let p3;
    	let t25;
    	let img1;
    	let img1_src_value;
    	let t26;
    	let div13;
    	let a3;
    	let svg3;
    	let path3;
    	let t27;
    	let div19;
    	let div16;
    	let t28;
    	let div18;
    	let h15;
    	let t30;
    	let p4;
    	let t32;
    	let img2;
    	let img2_src_value;
    	let t33;
    	let div17;
    	let a4;
    	let svg4;
    	let path4;

    	const block = {
    		c: function create() {
    			div21 = element("div");
    			h10 = element("h1");
    			h10.textContent = "Projects";
    			t1 = space();
    			div20 = element("div");
    			div3 = element("div");
    			div0 = element("div");
    			t2 = space();
    			div2 = element("div");
    			h11 = element("h1");
    			h11.textContent = "Portfolio";
    			t4 = space();
    			p0 = element("p");
    			p0.textContent = "My personal portfolio site, the site you're seeing right now.";
    			t6 = space();
    			div1 = element("div");
    			a0 = element("a");
    			svg0 = svg_element("svg");
    			path0 = svg_element("path");
    			t7 = space();
    			div7 = element("div");
    			div4 = element("div");
    			t8 = space();
    			div6 = element("div");
    			h12 = element("h1");
    			h12.textContent = "Cellular Automata";
    			t10 = space();
    			p1 = element("p");
    			p1.textContent = "Python project implementing Conway's Game of Life with PyGame.";
    			t12 = space();
    			div5 = element("div");
    			a1 = element("a");
    			svg1 = svg_element("svg");
    			path1 = svg_element("path");
    			t13 = space();
    			div11 = element("div");
    			div8 = element("div");
    			t14 = space();
    			div10 = element("div");
    			h13 = element("h1");
    			h13.textContent = "Sorting Algorithm Visualizer";
    			t16 = space();
    			p2 = element("p");
    			p2.textContent = "Visualizes various sorting algorithms using Matplotlib and Python.";
    			t18 = space();
    			img0 = element("img");
    			t19 = space();
    			div9 = element("div");
    			a2 = element("a");
    			svg2 = svg_element("svg");
    			path2 = svg_element("path");
    			t20 = space();
    			div15 = element("div");
    			div12 = element("div");
    			t21 = space();
    			div14 = element("div");
    			h14 = element("h1");
    			h14.textContent = "Rust Algorithms";
    			t23 = space();
    			p3 = element("p");
    			p3.textContent = "A Rust library implementing various algorithms.";
    			t25 = space();
    			img1 = element("img");
    			t26 = space();
    			div13 = element("div");
    			a3 = element("a");
    			svg3 = svg_element("svg");
    			path3 = svg_element("path");
    			t27 = space();
    			div19 = element("div");
    			div16 = element("div");
    			t28 = space();
    			div18 = element("div");
    			h15 = element("h1");
    			h15.textContent = "Rust Data Structures";
    			t30 = space();
    			p4 = element("p");
    			p4.textContent = "A library implementing various Data Structures in Rust, made strictly for learning purposes.";
    			t32 = space();
    			img2 = element("img");
    			t33 = space();
    			div17 = element("div");
    			a4 = element("a");
    			svg4 = svg_element("svg");
    			path4 = svg_element("path");
    			add_location(h10, file$2, 58, 4, 1616);
    			attr_dev(div0, "class", "bg-image svelte-159hxv");
    			attr_dev(div0, "id", "portfolio-image");
    			add_location(div0, file$2, 61, 12, 1725);
    			add_location(h11, file$2, 63, 16, 1836);
    			add_location(p0, file$2, 64, 16, 1872);
    			attr_dev(path0, "d", "M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z");
    			add_location(path0, file$2, 68, 28, 2218);
    			attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg0, "viewBox", "0 0 24 24");
    			attr_dev(svg0, "class", "github-logo logo svelte-159hxv");
    			add_location(svg0, file$2, 67, 24, 2103);
    			attr_dev(a0, "href", "https://github.com/c1m50c/portfolio");
    			attr_dev(a0, "class", "logo-link");
    			add_location(a0, file$2, 66, 20, 2013);
    			attr_dev(div1, "class", "logo-link-container svelte-159hxv");
    			add_location(div1, file$2, 65, 16, 1958);
    			attr_dev(div2, "class", "project-card-details");
    			add_location(div2, file$2, 62, 12, 1784);
    			attr_dev(div3, "class", "project-card svelte-159hxv");
    			add_location(div3, file$2, 60, 8, 1685);
    			attr_dev(div4, "class", "bg-image svelte-159hxv");
    			attr_dev(div4, "id", "cellular-automata-image");
    			add_location(div4, file$2, 75, 12, 3093);
    			add_location(h12, file$2, 77, 16, 3212);
    			add_location(p1, file$2, 78, 16, 3256);
    			attr_dev(path1, "d", "M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z");
    			add_location(path1, file$2, 82, 28, 3611);
    			attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg1, "viewBox", "0 0 24 24");
    			attr_dev(svg1, "class", "github-logo logo svelte-159hxv");
    			add_location(svg1, file$2, 81, 24, 3496);
    			attr_dev(a1, "href", "https://github.com/c1m50c/cellular-automata");
    			attr_dev(a1, "class", "logo-link");
    			add_location(a1, file$2, 80, 20, 3398);
    			attr_dev(div5, "class", "logo-link-container svelte-159hxv");
    			add_location(div5, file$2, 79, 16, 3343);
    			attr_dev(div6, "class", "project-card-details");
    			add_location(div6, file$2, 76, 12, 3160);
    			attr_dev(div7, "class", "project-card svelte-159hxv");
    			add_location(div7, file$2, 74, 8, 3053);
    			attr_dev(div8, "class", "bg-image svelte-159hxv");
    			attr_dev(div8, "id", "sorting-algorithm-visualizer-image");
    			add_location(div8, file$2, 89, 12, 4486);
    			add_location(h13, file$2, 91, 16, 4616);
    			add_location(p2, file$2, 92, 16, 4671);
    			if (!src_url_equal(img0.src, img0_src_value = "https://github.com/c1m50c/sorting-algorithm-visualizer/actions/workflows/tests.yml/badge.svg?branch=main")) attr_dev(img0, "src", img0_src_value);
    			attr_dev(img0, "alt", "Tests Status");
    			add_location(img0, file$2, 93, 16, 4762);
    			attr_dev(path2, "d", "M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z");
    			add_location(path2, file$2, 97, 28, 5196);
    			attr_dev(svg2, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg2, "viewBox", "0 0 24 24");
    			attr_dev(svg2, "class", "github-logo logo svelte-159hxv");
    			add_location(svg2, file$2, 96, 24, 5081);
    			attr_dev(a2, "href", "https://github.com/c1m50c/sorting-algorithm-visualizer");
    			attr_dev(a2, "class", "logo-link");
    			add_location(a2, file$2, 95, 20, 4972);
    			attr_dev(div9, "class", "logo-link-container svelte-159hxv");
    			add_location(div9, file$2, 94, 16, 4917);
    			attr_dev(div10, "class", "project-card-details");
    			add_location(div10, file$2, 90, 12, 4564);
    			attr_dev(div11, "class", "project-card svelte-159hxv");
    			add_location(div11, file$2, 88, 8, 4446);
    			attr_dev(div12, "class", "bg-image svelte-159hxv");
    			attr_dev(div12, "id", "rust-algorithms-image");
    			add_location(div12, file$2, 104, 12, 6071);
    			add_location(h14, file$2, 106, 16, 6188);
    			add_location(p3, file$2, 107, 16, 6230);
    			if (!src_url_equal(img1.src, img1_src_value = "https://github.com/c1m50c/rust-algorithms/actions/workflows/build.yml/badge.svg?branch=main")) attr_dev(img1, "src", img1_src_value);
    			attr_dev(img1, "alt", "Build Status");
    			add_location(img1, file$2, 108, 16, 6302);
    			attr_dev(path3, "d", "M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z");
    			add_location(path3, file$2, 112, 28, 6710);
    			attr_dev(svg3, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg3, "viewBox", "0 0 24 24");
    			attr_dev(svg3, "class", "github-logo logo svelte-159hxv");
    			add_location(svg3, file$2, 111, 24, 6595);
    			attr_dev(a3, "href", "https://github.com/c1m50c/rust-algorithms");
    			attr_dev(a3, "class", "logo-link");
    			add_location(a3, file$2, 110, 20, 6499);
    			attr_dev(div13, "class", "logo-link-container svelte-159hxv");
    			add_location(div13, file$2, 109, 16, 6444);
    			attr_dev(div14, "class", "project-card-details");
    			add_location(div14, file$2, 105, 12, 6136);
    			attr_dev(div15, "class", "project-card svelte-159hxv");
    			add_location(div15, file$2, 103, 8, 6031);
    			attr_dev(div16, "class", "bg-image svelte-159hxv");
    			attr_dev(div16, "id", "rust-data-structures-image");
    			add_location(div16, file$2, 119, 12, 7585);
    			add_location(h15, file$2, 121, 16, 7707);
    			add_location(p4, file$2, 122, 16, 7754);
    			if (!src_url_equal(img2.src, img2_src_value = "https://github.com/c1m50c/rust-data-structures/actions/workflows/build.yml/badge.svg?branch=main")) attr_dev(img2, "src", img2_src_value);
    			attr_dev(img2, "alt", "Build Status");
    			add_location(img2, file$2, 123, 16, 7871);
    			attr_dev(path4, "d", "M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z");
    			add_location(path4, file$2, 127, 28, 8289);
    			attr_dev(svg4, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg4, "viewBox", "0 0 24 24");
    			attr_dev(svg4, "class", "github-logo logo svelte-159hxv");
    			add_location(svg4, file$2, 126, 24, 8174);
    			attr_dev(a4, "href", "https://github.com/c1m50c/rust-data-structures");
    			attr_dev(a4, "class", "logo-link");
    			add_location(a4, file$2, 125, 20, 8073);
    			attr_dev(div17, "class", "logo-link-container svelte-159hxv");
    			add_location(div17, file$2, 124, 16, 8018);
    			attr_dev(div18, "class", "project-card-details");
    			add_location(div18, file$2, 120, 12, 7655);
    			attr_dev(div19, "class", "project-card svelte-159hxv");
    			add_location(div19, file$2, 118, 8, 7545);
    			attr_dev(div20, "class", "project-card-container svelte-159hxv");
    			add_location(div20, file$2, 59, 4, 1639);
    			attr_dev(div21, "class", "info-container");
    			attr_dev(div21, "id", "projects");
    			add_location(div21, file$2, 57, 0, 1568);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div21, anchor);
    			append_dev(div21, h10);
    			append_dev(div21, t1);
    			append_dev(div21, div20);
    			append_dev(div20, div3);
    			append_dev(div3, div0);
    			append_dev(div3, t2);
    			append_dev(div3, div2);
    			append_dev(div2, h11);
    			append_dev(div2, t4);
    			append_dev(div2, p0);
    			append_dev(div2, t6);
    			append_dev(div2, div1);
    			append_dev(div1, a0);
    			append_dev(a0, svg0);
    			append_dev(svg0, path0);
    			append_dev(div20, t7);
    			append_dev(div20, div7);
    			append_dev(div7, div4);
    			append_dev(div7, t8);
    			append_dev(div7, div6);
    			append_dev(div6, h12);
    			append_dev(div6, t10);
    			append_dev(div6, p1);
    			append_dev(div6, t12);
    			append_dev(div6, div5);
    			append_dev(div5, a1);
    			append_dev(a1, svg1);
    			append_dev(svg1, path1);
    			append_dev(div20, t13);
    			append_dev(div20, div11);
    			append_dev(div11, div8);
    			append_dev(div11, t14);
    			append_dev(div11, div10);
    			append_dev(div10, h13);
    			append_dev(div10, t16);
    			append_dev(div10, p2);
    			append_dev(div10, t18);
    			append_dev(div10, img0);
    			append_dev(div10, t19);
    			append_dev(div10, div9);
    			append_dev(div9, a2);
    			append_dev(a2, svg2);
    			append_dev(svg2, path2);
    			append_dev(div20, t20);
    			append_dev(div20, div15);
    			append_dev(div15, div12);
    			append_dev(div15, t21);
    			append_dev(div15, div14);
    			append_dev(div14, h14);
    			append_dev(div14, t23);
    			append_dev(div14, p3);
    			append_dev(div14, t25);
    			append_dev(div14, img1);
    			append_dev(div14, t26);
    			append_dev(div14, div13);
    			append_dev(div13, a3);
    			append_dev(a3, svg3);
    			append_dev(svg3, path3);
    			append_dev(div20, t27);
    			append_dev(div20, div19);
    			append_dev(div19, div16);
    			append_dev(div19, t28);
    			append_dev(div19, div18);
    			append_dev(div18, h15);
    			append_dev(div18, t30);
    			append_dev(div18, p4);
    			append_dev(div18, t32);
    			append_dev(div18, img2);
    			append_dev(div18, t33);
    			append_dev(div18, div17);
    			append_dev(div17, a4);
    			append_dev(a4, svg4);
    			append_dev(svg4, path4);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div21);
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

    function instance$2($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Projects', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Projects> was created with unknown prop '${key}'`);
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
    	let a0;
    	let svg0;
    	let path0;
    	let t0;
    	let a1;
    	let svg1;
    	let path1;
    	let t1;
    	let a2;
    	let svg2;
    	let path2;
    	let t2;
    	let button;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			a0 = element("a");
    			svg0 = svg_element("svg");
    			path0 = svg_element("path");
    			t0 = space();
    			a1 = element("a");
    			svg1 = svg_element("svg");
    			path1 = svg_element("path");
    			t1 = space();
    			a2 = element("a");
    			svg2 = svg_element("svg");
    			path2 = svg_element("path");
    			t2 = space();
    			button = element("button");
    			button.textContent = `${/*email*/ ctx[0]}`;
    			attr_dev(path0, "d", "M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z");
    			add_location(path0, file$1, 69, 16, 1694);
    			attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg0, "viewBox", "0 0 24 24");
    			attr_dev(svg0, "class", "logo svelte-31j2f5");
    			attr_dev(svg0, "id", "github-logo");
    			add_location(svg0, file$1, 68, 12, 1586);
    			attr_dev(a0, "href", "https://github.com/c1m50c");
    			attr_dev(a0, "id", "github-profile-link");
    			add_location(a0, file$1, 67, 8, 1511);
    			attr_dev(path1, "d", "M11.9985 2.25C10.6688 2.25 4.1514 5.98793 3.49365 7.12793C2.83515 8.26868 2.83515 15.7373 3.49365 16.8735C4.1544 18.0128 10.6718 21.75 11.9985 21.75C13.3215 21.75 19.8389 18.015 20.5019 16.8765C21.1672 15.735 21.1672 8.26054 20.5019 7.12354V7.12207C19.8337 5.98432 13.317 2.25 11.9985 2.25ZM11.9971 3.75879C13.2698 4.02354 18.3133 6.91257 19.1968 7.88232C19.6018 9.11307 19.601 14.8832 19.1968 16.1162C18.3193 17.0845 13.2713 19.9772 11.9971 20.2412C10.7236 19.9787 5.67929 17.0874 4.80029 16.1177C4.39904 14.8817 4.39904 9.11682 4.80029 7.88232C5.67704 6.91257 10.7228 4.02129 11.9971 3.75879ZM9.74999 6.75L8.24999 8.25H8.99999V15.75H10.5V12.75H13.5V15.75H12.75L14.25 17.25L15.75 15.75H15V9H13.5V11.25H10.5V8.25H11.25L9.74999 6.75Z");
    			add_location(path1, file$1, 74, 16, 2642);
    			attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg1, "viewBox", "0 0 24 24");
    			attr_dev(svg1, "class", "hacker-rank-logo logo svelte-31j2f5");
    			add_location(svg1, file$1, 73, 12, 2534);
    			attr_dev(a1, "href", "https://www.hackerrank.com/c1m50c");
    			attr_dev(a1, "id", "hacker-rank-profile-link");
    			add_location(a1, file$1, 72, 8, 2446);
    			attr_dev(path2, "d", "M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z");
    			add_location(path2, file$1, 79, 16, 3627);
    			attr_dev(svg2, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg2, "viewBox", "0 0 30 30");
    			attr_dev(svg2, "class", "linkedin-logo logo svelte-31j2f5");
    			add_location(svg2, file$1, 78, 12, 3522);
    			attr_dev(a2, "href", "https://www.linkedin.com/in/pere-wells");
    			attr_dev(a2, "id", "linked-in-profile-link");
    			add_location(a2, file$1, 77, 8, 3431);
    			attr_dev(div0, "class", "logo-link-container svelte-31j2f5");
    			add_location(div0, file$1, 66, 4, 1468);
    			attr_dev(button, "id", "email");
    			attr_dev(button, "class", "svelte-31j2f5");
    			add_location(button, file$1, 83, 4, 4169);
    			attr_dev(div1, "class", "info-container svelte-31j2f5");
    			attr_dev(div1, "id", "contact");
    			add_location(div1, file$1, 65, 0, 1421);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			append_dev(div0, a0);
    			append_dev(a0, svg0);
    			append_dev(svg0, path0);
    			append_dev(div0, t0);
    			append_dev(div0, a1);
    			append_dev(a1, svg1);
    			append_dev(svg1, path1);
    			append_dev(div0, t1);
    			append_dev(div0, a2);
    			append_dev(a2, svg2);
    			append_dev(svg2, path2);
    			append_dev(div1, t2);
    			append_dev(div1, button);

    			if (!mounted) {
    				dispose = listen_dev(button, "click", /*click_handler*/ ctx[1], false, false, false);
    				mounted = true;
    			}
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
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

    function copy_to_clipboard(str) {
    	navigator.clipboard.writeText(str);
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Contact', slots, []);
    	let email = "pereiswell@gmail.com";
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Contact> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => {
    		copy_to_clipboard(email);
    	};

    	$$self.$capture_state = () => ({ email, copy_to_clipboard });

    	$$self.$inject_state = $$props => {
    		if ('email' in $$props) $$invalidate(0, email = $$props.email);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [email, click_handler];
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
    	let about;
    	let t2;
    	let skills;
    	let t3;
    	let projects;
    	let t4;
    	let contact;
    	let current;
    	navigationbar = new Navigation_bar({ $$inline: true });
    	welcome = new Welcome({ $$inline: true });
    	about = new About({ $$inline: true });
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
    			create_component(about.$$.fragment);
    			t2 = space();
    			create_component(skills.$$.fragment);
    			t3 = space();
    			create_component(projects.$$.fragment);
    			t4 = space();
    			create_component(contact.$$.fragment);
    			attr_dev(main, "class", "svelte-qc7i0p");
    			add_location(main, file, 74, 0, 2170);
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
    			mount_component(about, main, null);
    			append_dev(main, t2);
    			mount_component(skills, main, null);
    			append_dev(main, t3);
    			mount_component(projects, main, null);
    			append_dev(main, t4);
    			mount_component(contact, main, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbar.$$.fragment, local);
    			transition_in(welcome.$$.fragment, local);
    			transition_in(about.$$.fragment, local);
    			transition_in(skills.$$.fragment, local);
    			transition_in(projects.$$.fragment, local);
    			transition_in(contact.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbar.$$.fragment, local);
    			transition_out(welcome.$$.fragment, local);
    			transition_out(about.$$.fragment, local);
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
    			destroy_component(about);
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
    		About,
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
