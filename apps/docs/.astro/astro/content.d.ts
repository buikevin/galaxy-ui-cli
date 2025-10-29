declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"cli-usage.mdx": {
	id: "cli-usage.mdx";
  slug: "cli-usage";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/button.mdx": {
	id: "components/button.mdx";
  slug: "components/button";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/calendar.mdx": {
	id: "components/calendar.mdx";
  slug: "components/calendar";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/checkbox.mdx": {
	id: "components/checkbox.mdx";
  slug: "components/checkbox";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/input.mdx": {
	id: "components/input.mdx";
  slug: "components/input";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/layout/accordion.mdx": {
	id: "components/layout/accordion.mdx";
  slug: "components/layout/accordion";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/layout/card.mdx": {
	id: "components/layout/card.mdx";
  slug: "components/layout/card";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/layout/divider.mdx": {
	id: "components/layout/divider.mdx";
  slug: "components/layout/divider";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/layout/grid.mdx": {
	id: "components/layout/grid.mdx";
  slug: "components/layout/grid";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/layout/splitter.mdx": {
	id: "components/layout/splitter.mdx";
  slug: "components/layout/splitter";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/navigation/breadcrumb.mdx": {
	id: "components/navigation/breadcrumb.mdx";
  slug: "components/navigation/breadcrumb";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/navigation/dropdown.mdx": {
	id: "components/navigation/dropdown.mdx";
  slug: "components/navigation/dropdown";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/navigation/menu.mdx": {
	id: "components/navigation/menu.mdx";
  slug: "components/navigation/menu";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/navigation/sidebar.mdx": {
	id: "components/navigation/sidebar.mdx";
  slug: "components/navigation/sidebar";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/navigation/stepper.mdx": {
	id: "components/navigation/stepper.mdx";
  slug: "components/navigation/stepper";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/navigation/tabs.mdx": {
	id: "components/navigation/tabs.mdx";
  slug: "components/navigation/tabs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/select.mdx": {
	id: "components/select.mdx";
  slug: "components/select";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/icons.mdx": {
	id: "guides/icons.mdx";
  slug: "guides/icons";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"installation.mdx": {
	id: "installation.mdx";
  slug: "installation";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"introduction.mdx": {
	id: "introduction.mdx";
  slug: "introduction";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
