import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Locale = "en" | "zh-HK";
type Copy = Record<Locale, string>;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const locales: Locale[] = ["en", "zh-HK"];

const categories = [
  { slug: "food-drink", badge: "FD", name: { en: "Food and drink", "zh-HK": "餐飲" }, description: { en: "Neighborhood dining, cafes, and weekly specials.", "zh-HK": "社區餐飲、咖啡店及每週精選優惠。" } },
  { slug: "family-living", badge: "FL", name: { en: "Family and living", "zh-HK": "親子生活" }, description: { en: "Family resources, home needs, and seasonal shopping.", "zh-HK": "親子資源、家居所需及季節精選。" } },
  { slug: "events-culture", badge: "EC", name: { en: "Events and culture", "zh-HK": "活動文化" }, description: { en: "Community gatherings, exhibitions, and local happenings.", "zh-HK": "社區聚會、展覽及本地動向。" } },
  { slug: "wellness-services", badge: "WS", name: { en: "Wellness and services", "zh-HK": "健康服務" }, description: { en: "Trusted services, classes, and everyday support.", "zh-HK": "可信服務、課程及日常支援。" } }
] as const;

const partners = [
  {
    slug: "market-hall",
    name: "Harbor Market Hall",
    cover: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=80",
    areas: "Central / Sheung Wan / Kennedy Town",
    bio: {
      en: "A curated neighborhood hall of food stalls, pantry finds, and independent producers.",
      "zh-HK": "集合美食攤位、生活雜貨及獨立品牌的社區市集空間。"
    },
    email: "hello@market-hall.test",
    phone: "+852 5555 1200"
  },
  {
    slug: "seaside-studio",
    name: "Seaside Studio",
    cover: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    areas: "Sai Ying Pun / Mid-Levels",
    bio: {
      en: "Classes, workshops, and wellness sessions designed for busy local residents.",
      "zh-HK": "為繁忙居民而設的課程、工作坊及健康體驗空間。"
    },
    email: "studio@seaside.test",
    phone: "+852 5555 1300"
  }
] as const;

const listings = [
  {
    slug: "spring-market-weekend",
    title: { en: "Spring market weekend with family workshops", "zh-HK": "春季週末市集及親子工作坊" },
    summary: { en: "Three days of local makers, mini performances, and guided tasting sessions.", "zh-HK": "一連三日雲集本地品牌、迷你表演及導賞試食活動。" },
    body: { en: "Visitors can browse produce stalls, discover independent makers, and join a rotating schedule of workshops. The page is designed to feel browseable and editorial, with useful logistics, highlights, and partner details in one place.", "zh-HK": "訪客可探索蔬果攤位、本地品牌及輪流舉行的工作坊。頁面以清晰的編輯式結構整合亮點、交通、活動詳情及合作夥伴資訊。" },
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
    category: "events-culture",
    partner: "market-hall",
    featured: true,
    tags: "family / market / weekend",
    dates: "May 3 - May 9"
  },
  {
    slug: "resident-wellness-pass",
    title: { en: "Resident wellness pass for yoga and recovery classes", "zh-HK": "居民瑜伽及修復課程通行證" },
    summary: { en: "A month-long pass with bilingual class schedules and community pricing.", "zh-HK": "全月課程通行證，提供雙語時間表及社區優惠價。" },
    body: { en: "The pass includes restorative yoga, breathwork, and neighborhood-friendly evening sessions. This listing demonstrates ongoing offers with longer validity windows and a clear call to action.", "zh-HK": "通行證涵蓋伸展瑜伽、呼吸訓練及適合居民下班後參加的晚間課程，示範長期優惠與清晰報名導向。" },
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    category: "wellness-services",
    partner: "seaside-studio",
    featured: true,
    tags: "wellness / members / classes",
    dates: "May 1 - May 31"
  },
  {
    slug: "family-pantry-bundle",
    title: { en: "Family pantry bundle with weekly staples", "zh-HK": "家庭常備糧食每週組合" },
    summary: { en: "Curated essentials for households looking for easy weekday planning.", "zh-HK": "為家庭預備的常備食材組合，方便安排平日餐單。" },
    body: { en: "This listing shows short-term community commerce content with tags, localized summary text, and a strong visual card treatment to support discovery.", "zh-HK": "此項目示範短期社區消費內容，具備標籤、雙語摘要及強烈卡片視覺，方便瀏覽與發現。" },
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    category: "family-living",
    partner: "market-hall",
    featured: false,
    tags: "groceries / bundle / family",
    dates: "May 3 - May 5"
  },
  {
    slug: "harbor-brunch-club",
    title: { en: "Harbor brunch club with neighborhood host tables", "zh-HK": "海港早午餐社群共享餐桌" },
    summary: { en: "A rotating brunch series built around shared seating and local ingredients.", "zh-HK": "以共享餐桌及本地食材為主題的輪換式早午餐系列。" },
    body: { en: "Every brunch session pairs a seasonal menu with one community host. The page structure supports partner bios, dates, key details, and save actions in one editorial flow.", "zh-HK": "每場早午餐都會配合季節餐單及社區主持人，頁面結構可同時呈現商戶簡介、日期、重點資料及收藏功能。" },
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=80",
    category: "food-drink",
    partner: "market-hall",
    featured: false,
    tags: "food / brunch / community",
    dates: "May 4 - May 12"
  }
] as const;

const guides = [
  {
    slug: "how-to-plan-a-neighborhood-weekend",
    title: { en: "How to plan a neighborhood weekend page that people actually use", "zh-HK": "如何規劃真正有人使用的社區週末頁面" },
    summary: { en: "A practical editorial framework for combining events, offers, and logistics.", "zh-HK": "結合活動、優惠及交通資訊的實用編輯框架。" },
    body: { en: "Strong community pages help residents answer three questions quickly: what is happening, why it matters, and how to join. This guide demonstrates bilingual long-form content support.", "zh-HK": "優秀的社區頁面能迅速回答三個問題：有甚麼發生、為何值得留意、如何參與。本文示範雙語長文內容的支援。" }
  },
  {
    slug: "bilingual-content-checklist",
    title: { en: "A bilingual content checklist for community teams", "zh-HK": "社區團隊雙語內容檢查清單" },
    summary: { en: "Keep navigation, labels, and editorial details aligned across both languages.", "zh-HK": "確保導覽、標籤及編輯細節在兩種語言之間保持一致。" },
    body: { en: "The checklist covers navigation labels, listing titles, summaries, and SEO metadata. It is designed to match the content model used by this implementation.", "zh-HK": "清單涵蓋導覽標籤、項目標題、摘要及 SEO 中繼資料，並與此實作的內容模型相對應。" }
  }
] as const;

const heroSlides = [
  {
    image: listings[0].image,
    label: { en: "Weekend highlight", "zh-HK": "週末焦點" },
    title: { en: "A cleaner, calmer board for local stories and offers.", "zh-HK": "以更乾淨、更平靜的方式呈現社區故事與優惠。" },
    copy: { en: "Use the homepage banner to rotate the most important community highlights, seasonal campaigns, and editorial picks.", "zh-HK": "首頁橫幅可輪播最重要的社區焦點、季節企劃及編輯精選。" },
    primaryHref: "/all",
    primaryLabel: { en: "Browse all updates", "zh-HK": "查看全部更新" },
    secondaryHref: "/apply",
    secondaryLabel: { en: "Become a partner", "zh-HK": "成為合作夥伴" },
    stats: [
      { value: "4", label: { en: "Community categories", "zh-HK": "社區分類" } },
      { value: "2", label: { en: "Languages", "zh-HK": "語言版本" } },
      { value: "24/7", label: { en: "Browse anytime", "zh-HK": "隨時瀏覽" } }
    ]
  },
  {
    image: listings[1].image,
    label: { en: "Editorial focus", "zh-HK": "內容焦點" },
    title: { en: "Promote featured moments without cluttering the page.", "zh-HK": "在不堆砌版面的情況下放大重點內容。" },
    copy: { en: "This carousel can feature time-sensitive passes, neighborhood launches, or campaign-driven stories at the top of the site.", "zh-HK": "這個輪播可用來展示限時通行證、社區新消息或重點活動企劃。" },
    primaryHref: "/today",
    primaryLabel: { en: "See what is live today", "zh-HK": "查看今天內容" },
    secondaryHref: "/guides",
    secondaryLabel: { en: "Read the guides", "zh-HK": "閱讀指南" },
    stats: [
      { value: "3", label: { en: "Hero slides", "zh-HK": "輪播頁數" } },
      { value: "1", label: { en: "Simple direction", "zh-HK": "清晰方向" } },
      { value: "100%", label: { en: "White-based UI", "zh-HK": "白色基調" } }
    ]
  },
  {
    image: listings[3].image,
    label: { en: "Community rhythm", "zh-HK": "社區節奏" },
    title: { en: "Keep the experience elegant, readable, and easy to scan.", "zh-HK": "讓整體體驗更優雅、可讀、易於瀏覽。" },
    copy: { en: "The new tone uses white backgrounds, black typography, and a soft green accent to feel quieter and more premium.", "zh-HK": "新版調性改用白底、黑字及柔和綠色點綴，整體更安靜也更精緻。" },
    primaryHref: "/food-drink",
    primaryLabel: { en: "Explore categories", "zh-HK": "探索分類" },
    secondaryHref: "/search",
    secondaryLabel: { en: "Use search", "zh-HK": "前往搜尋" },
    stats: [
      { value: "#b1c5a4", label: { en: "Accent tone", "zh-HK": "輔助色" } },
      { value: "0", label: { en: "Search bar in header", "zh-HK": "頁首搜尋欄" } },
      { value: "1", label: { en: "Cleaner look", "zh-HK": "更簡潔外觀" } }
    ]
  }
] as const;

function t(copy: Copy, locale: Locale) {
  return copy[locale];
}

function nav(locale: Locale, current: string) {
  const items = [
    ["", locale === "en" ? "Home" : "首頁"],
    ["today", locale === "en" ? "Today" : "今日"],
    ["this-week", locale === "en" ? "This week" : "本週"],
    ["all", locale === "en" ? "All" : "全部"],
    ["guides", locale === "en" ? "Guides" : "指南"],
    ["search", locale === "en" ? "Search" : "搜尋"],
    ["apply", locale === "en" ? "Apply" : "合作申請"],
    ["account", locale === "en" ? "Account" : "帳戶"],
    ["admin", locale === "en" ? "Admin" : "管理" }
  ];

  return (
    <header className="shell site-header">
      <div className="site-header-bar panel">
        <Link href={`/${locale}`} className="site-logo">
          Harbor
        </Link>
        <nav className="menu-pill">
          {items.map(([href, label]) => {
            const key = `/${locale}${href ? `/${href}` : ""}`;
            const active = current === href;
            return (
              <Link key={key} href={key} className={`header-link${active ? " active" : ""}`}>
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="lang-switch">
          {locales.map((code) => (
            <Link key={code} href={`/${code}`} className={`lang-link${code === locale ? " active" : ""}`}>
              {code}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

function footer(locale: Locale) {
  return (
    <footer className="shell spacer-xl" style={{ paddingBottom: 40 }}>
      <div className="panel" style={{ padding: 28, display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        <div>
          <div className="chip">{locale === "en" ? "Community first" : "以社區為先"}</div>
          <div className="section-title">{locale === "en" ? "Built for curation, not clutter." : "為策展而設，不為堆砌而做。"}</div>
        </div>
        <div className="muted">
          <strong>{locale === "en" ? "Explore" : "探索"}</strong>
          <div><Link href={`/${locale}/today`}>{locale === "en" ? "Today" : "今日"}</Link></div>
          <div><Link href={`/${locale}/guides`}>{locale === "en" ? "Guides" : "指南"}</Link></div>
          <div><Link href={`/${locale}/apply`}>{locale === "en" ? "Partner apply" : "合作申請"}</Link></div>
        </div>
        <div className="muted">
          <strong>{locale === "en" ? "Production ready" : "可直接上線"}</strong>
          <div>Next.js</div>
          <div>Vercel deployable</div>
          <div>Custom-domain ready</div>
        </div>
      </div>
    </footer>
  );
}

function section(eyebrow: string, title: string, copy: string) {
  return (
    <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", alignItems: "end" }}>
      <div>
        <div className="chip">{eyebrow}</div>
        <div className="section-title">{title}</div>
      </div>
      <div className="muted">{copy}</div>
    </div>
  );
}

function homeCarousel(locale: Locale) {
  return (
    <section className="shell spacer-lg">
      <div className="panel hero-carousel">
        <div className="hero-track">
          {heroSlides.map((slide) => (
            <div key={slide.title.en} className="hero-slide">
              <div className="hero-copy">
                <div className="hero-kicker">{t(slide.label, locale)}</div>
                <h1 className="hero-title">{t(slide.title, locale)}</h1>
                <p className="muted" style={{ fontSize: 18 }}>{t(slide.copy, locale)}</p>
                <div className="hero-actions">
                  <Link href={`/${locale}${slide.primaryHref}`} className="button primary">
                    {t(slide.primaryLabel, locale)}
                  </Link>
                  <Link href={`/${locale}${slide.secondaryHref}`} className="button secondary">
                    {t(slide.secondaryLabel, locale)}
                  </Link>
                </div>
              </div>
              <div className="hero-image" style={{ backgroundImage: `url(${slide.image})` }}>
                <div className="hero-stats">
                  {slide.stats.map((stat) => (
                    <div key={stat.value} className="stat">
                      <strong>{stat.value}</strong>
                      <span className="muted">{t(stat.label, locale)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-dots" aria-hidden="true">
          <span className="carousel-dot" />
          <span className="carousel-dot" />
          <span className="carousel-dot" />
        </div>
      </div>
    </section>
  );
}

function listingCard(locale: Locale, item: (typeof listings)[number]) {
  const partner = partners.find((candidate) => candidate.slug === item.partner);
  const category = categories.find((candidate) => candidate.slug === item.category);
  return (
    <article key={item.slug} className="panel">
      <div className="media" style={{ backgroundImage: `url(${item.image})` }} />
      <div className="card-body">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
          <div className="chip">{category ? t(category.name, locale) : item.category}</div>
          <div className="meta">{item.dates}</div>
        </div>
        <div className="card-title"><Link href={`/${locale}/listing/${item.slug}`}>{t(item.title, locale)}</Link></div>
        <p className="muted">{t(item.summary, locale)}</p>
        <div className="meta">{partner?.name} / {item.tags}</div>
      </div>
    </article>
  );
}

function guideCard(locale: Locale, item: (typeof guides)[number]) {
  return (
    <article key={item.slug} className="panel" style={{ padding: 24 }}>
      <div className="chip">{locale === "en" ? "Guide" : "指南"}</div>
      <div className="card-title"><Link href={`/${locale}/guides/${item.slug}`}>{t(item.title, locale)}</Link></div>
      <p className="muted">{t(item.summary, locale)}</p>
    </article>
  );
}

function searchBar(locale: Locale, currentQuery = "", currentCategory = "") {
  return (
    <form className="panel" style={{ padding: 20, display: "grid", gap: 16, gridTemplateColumns: "2fr 1fr auto" }}>
      <input name="q" defaultValue={currentQuery} placeholder={locale === "en" ? "Search listings, tags, or topics" : "搜尋項目、標籤或主題"} />
      <select name="category" defaultValue={currentCategory}>
        <option value="">{locale === "en" ? "All categories" : "全部分類"}</option>
        {categories.map((item) => <option key={item.slug} value={item.slug}>{t(item.name, locale)}</option>)}
      </select>
      <button style={{ background: "#111111", color: "white" }} type="submit">{locale === "en" ? "Search" : "搜尋"}</button>
    </form>
  );
}

function pageMeta(locale: Locale, title: string, description: string, path: string): Metadata {
  return {
    title: `${title} | Harbor Community`,
    description,
    alternates: { canonical: `${siteUrl}/${locale}${path}` },
    openGraph: { title, description, url: `${siteUrl}/${locale}${path}` }
  };
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}): Promise<Metadata> {
  const resolved = await params;
  const locale = resolved.locale as Locale;
  const slug = resolved.slug || [];
  const [first, second] = slug;

  if (!locales.includes(locale)) {
    return {};
  }

  if (!first) return pageMeta(locale, locale === "en" ? "Home" : "首頁", "Community offers, guides, and trusted partners.", "");
  if (["today", "this-week", "all", "search", "guides", "apply", "account", "admin"].includes(first)) return pageMeta(locale, first, "Harbor Community page.", `/${slug.join("/")}`);
  if (first === "listing" && second) {
    const listing = listings.find((item) => item.slug === second);
    if (listing) return pageMeta(locale, t(listing.title, locale), t(listing.summary, locale), `/listing/${listing.slug}`);
  }
  if (first === "partner" && second) {
    const partner = partners.find((item) => item.slug === second);
    if (partner) return pageMeta(locale, partner.name, t(partner.bio, locale), `/partner/${partner.slug}`);
  }
  if (first === "guides" && second) {
    const guide = guides.find((item) => item.slug === second);
    if (guide) return pageMeta(locale, t(guide.title, locale), t(guide.summary, locale), `/guides/${guide.slug}`);
  }
  const category = categories.find((item) => item.slug === first);
  if (category) return pageMeta(locale, t(category.name, locale), t(category.description, locale), `/${category.slug}`);
  return {};
}

export default async function LocaleRouter({
  params,
  searchParams
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const resolved = await params;
  const search = await searchParams;
  const locale = resolved.locale as Locale;
  const slug = resolved.slug || [];

  if (!locales.includes(locale)) {
    notFound();
  }

  const current = slug[0] || "";
  const query = (search.q || "").toLowerCase();
  const categoryFilter = search.category || "";

  const filteredListings = listings.filter((item) => {
    const categoryOkay = categoryFilter ? item.category === categoryFilter : true;
    const queryOkay = query
      ? [item.slug, t(item.title, locale), t(item.summary, locale), item.tags].join(" ").toLowerCase().includes(query)
      : true;
    return categoryOkay && queryOkay;
  });

  const page = (
    <>
      {nav(locale, current)}
      {!current && (
        <>
          {homeCarousel(locale)}

          <section className="shell spacer-xl">
            {section(locale === "en" ? "Browse by category" : "按分類瀏覽", locale === "en" ? "Designed for quick scanning." : "為快速瀏覽而設。", locale === "en" ? "Use these category landing pages as the main discovery pathways for your community." : "這些分類頁面可作為社區主要的探索入口。")}
            <div className="grid cards-3 spacer-lg">
              {categories.map((item) => (
                <Link href={`/${locale}/${item.slug}`} key={item.slug} className="panel" style={{ padding: 24 }}>
                  <div className="chip">{item.badge}</div>
                  <div className="card-title">{t(item.name, locale)}</div>
                  <p className="muted">{t(item.description, locale)}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="shell spacer-xl">
            {section(locale === "en" ? "Featured now" : "精選內容", locale === "en" ? "Stories, savings, and local motion." : "故事、優惠與社區動態。", locale === "en" ? "A visual editorial feed for time-sensitive offers, events, and trusted local picks." : "以視覺化編輯式內容整合限時優惠、活動及本地精選。")}
            <div className="grid cards-2 spacer-lg">{listings.filter((item) => item.featured).map((item) => listingCard(locale, item))}</div>
          </section>

          <section className="shell spacer-xl">
            {section(locale === "en" ? "Editorial" : "內容專欄", locale === "en" ? "Guides that deepen the platform." : "加深平台價值的指南內容。", locale === "en" ? "Evergreen articles help the site rank better and remain useful between short-term updates." : "長青文章能提升搜尋表現，亦令平台在短期更新之外保持實用。")}
            <div className="grid cards-2 spacer-lg">{guides.map((item) => guideCard(locale, item))}</div>
          </section>
        </>
      )}

      {current === "today" && <section className="shell spacer-lg">{section(locale === "en" ? "Today" : "今日", locale === "en" ? "Everything active right now." : "此刻正在進行中的內容。", locale === "en" ? "Use this view for recency-first browsing." : "此頁面適合即時瀏覽。")}<div className="grid cards-3 spacer-lg">{listings.map((item) => listingCard(locale, item))}</div></section>}

      {current === "this-week" && <section className="shell spacer-lg">{section(locale === "en" ? "This week" : "本週", locale === "en" ? "The next seven days at a glance." : "一頁掌握未來七天。", locale === "en" ? "A medium-horizon page for planning events, offers, and family activities." : "適合規劃活動、優惠及親子內容的中期頁面。")}<div className="grid cards-3 spacer-lg">{listings.map((item) => listingCard(locale, item))}</div></section>}

      {current === "all" && <section className="shell spacer-lg">{section(locale === "en" ? "Full archive" : "完整總覽", locale === "en" ? "One feed for everything your community is tracking." : "整合社區所有重點內容的總覽。", locale === "en" ? "This central feed can later be wired to a database, pagination, and moderation." : "此總覽可日後接駁資料庫、分頁及審核流程。")}{searchBar(locale)}<div className="grid cards-3 spacer-lg">{listings.map((item) => listingCard(locale, item))}</div></section>}

      {current === "search" && <section className="shell spacer-lg">{section(locale === "en" ? "Search" : "搜尋", locale === "en" ? "Find useful updates quickly." : "快速找到相關更新。", locale === "en" ? "The current implementation uses seeded data and is ready to move to a database later." : "目前版本使用假資料，之後可轉接至資料庫搜尋。")}{searchBar(locale, search.q || "", categoryFilter)}<div className="grid cards-3 spacer-lg">{filteredListings.map((item) => listingCard(locale, item))}</div></section>}

      {current === "guides" && !slug[1] && <section className="shell spacer-lg">{section(locale === "en" ? "Editorial guides" : "編輯指南", locale === "en" ? "Long-form context alongside short-form discovery." : "在即時內容之外補充長文脈絡。", locale === "en" ? "Use this area for explainers, comparisons, and evergreen local resources." : "此區適合教學、比較及長青本地資源內容。")}<div className="grid cards-2 spacer-lg">{guides.map((item) => guideCard(locale, item))}</div></section>}

      {current === "apply" && <section className="shell spacer-lg">{section(locale === "en" ? "Partner pipeline" : "合作管道", locale === "en" ? "Collect new community submissions with structure." : "以結構化方式收集新的社區合作申請。", locale === "en" ? "This launch-ready intake form can later post to Supabase or another backend." : "這個可上線的收件表單之後可接駁至 Supabase 或其他後端。")}<form className="panel grid-2 spacer-lg" style={{ padding: 24 }}><label><div className="muted">{locale === "en" ? "Organization" : "機構名稱"}</div><input /></label><label><div className="muted">{locale === "en" ? "Contact name" : "聯絡人"}</div><input /></label><label><div className="muted">Email</div><input /></label><label><div className="muted">{locale === "en" ? "Phone" : "電話"}</div><input /></label><label><div className="muted">{locale === "en" ? "Category" : "類別"}</div><select>{categories.map((item) => <option key={item.slug}>{t(item.name, locale)}</option>)}</select></label><label className="full"><div className="muted">{locale === "en" ? "Notes" : "補充資料"}</div><textarea rows={6} /></label><div className="full" style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", flexWrap: "wrap" }}><div className="muted">{locale === "en" ? "Connect this form to your backend when you are ready." : "準備好之後可把此表單接駁至你的後端。"}</div><button style={{ background: "#111111", color: "white" }} type="button">{locale === "en" ? "Submit application" : "提交申請"}</button></div></form></section>}

      {current === "account" && !slug[1] && <section className="shell spacer-lg"><div className="panel" style={{ padding: 28, display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}><div><div className="chip">{locale === "en" ? "Account" : "帳戶"}</div><div className="section-title">{locale === "en" ? "Member hub" : "會員中心"}</div><p className="muted">{locale === "en" ? "A basic member area for saved items, profile settings, and future alerts." : "基本會員區，適合作為收藏、個人設定及未來通知功能的入口。"}</p></div><div className="sidebar"><div className="meta">resident@harbor.test</div><div style={{ display: "grid", gap: 12, marginTop: 18 }}><Link href={`/${locale}/account/saved`} className="button secondary">{locale === "en" ? "View saved items" : "查看收藏項目"}</Link><button className="button secondary" type="button">{locale === "en" ? "Connect authentication later" : "之後接駁登入功能"}</button></div></div></div></section>}

      {current === "account" && slug[1] === "saved" && <section className="shell spacer-lg">{section(locale === "en" ? "Saved items" : "收藏項目", locale === "en" ? "A resident-facing reading list." : "面向居民的收藏清單。", locale === "en" ? "Seeded favorites now, database-backed favorites later." : "目前以假資料示範，之後可接駁資料庫。")}<div className="grid cards-2 spacer-lg">{[listings[1], listings[3]].map((item) => listingCard(locale, item))}</div></section>}

      {current === "admin" && <section className="shell spacer-lg">{section(locale === "en" ? "Internal tools" : "內部工具", locale === "en" ? "Editorial admin scaffold" : "編輯管理架構", locale === "en" ? "A lightweight editorial view for future publishing operations." : "為日後發佈流程而設的輕量化編輯介面。")}<div className="grid cards-2 spacer-lg"><div className="panel" style={{ padding: 24 }}><div className="card-title">{locale === "en" ? "Listings queue" : "項目清單"}</div><div style={{ display: "grid", gap: 12, marginTop: 18 }}>{listings.map((item) => <div key={item.slug} className="sidebar">{t(item.title, locale)}</div>)}</div></div><div className="panel" style={{ padding: 24 }}><div className="card-title">{locale === "en" ? "Guide articles" : "指南文章"}</div><div style={{ display: "grid", gap: 12, marginTop: 18 }}>{guides.map((item) => <div key={item.slug} className="sidebar">{t(item.title, locale)}</div>)}</div></div></div></section>}

      {current === "listing" && slug[1] && (() => {
        const item = listings.find((entry) => entry.slug === slug[1]);
        if (!item) return notFound();
        const partner = partners.find((entry) => entry.slug === item.partner);
        const category = categories.find((entry) => entry.slug === item.category);
        return <section className="shell spacer-lg"><div className="panel"><div className="media" style={{ height: 320, backgroundImage: `url(${item.image})`, borderRadius: "28px 28px 0 0" }} /><div style={{ padding: 28, display: "grid", gap: 24, gridTemplateColumns: "1.2fr 0.8fr" }}><div><div className="chip">{category ? t(category.name, locale) : item.category}</div><div className="hero-title" style={{ fontSize: "3.5rem" }}>{t(item.title, locale)}</div><p className="muted" style={{ fontSize: 18 }}>{t(item.summary, locale)}</p><p className="muted">{t(item.body, locale)}</p></div><aside className="sidebar"><div className="meta">{locale === "en" ? "Dates" : "日期"}</div><p>{item.dates}</p><div className="meta">{locale === "en" ? "Tags" : "標籤"}</div><p>{item.tags}</p><div className="meta">{locale === "en" ? "Partner" : "合作夥伴"}</div>{partner ? <Link href={`/${locale}/partner/${partner.slug}`}>{partner.name}</Link> : null}<div style={{ marginTop: 18 }}><button style={{ background: "#111111", color: "white" }} type="button">{locale === "en" ? "Save item" : "收藏項目"}</button></div></aside></div></div></section>;
      })()}

      {current === "partner" && slug[1] && (() => {
        const item = partners.find((entry) => entry.slug === slug[1]);
        if (!item) return notFound();
        const partnerListings = listings.filter((entry) => entry.partner === item.slug);
        return <section className="shell spacer-lg"><div className="panel"><div className="media" style={{ height: 320, backgroundImage: `url(${item.cover})`, borderRadius: "28px 28px 0 0" }} /><div style={{ padding: 28, display: "grid", gap: 24, gridTemplateColumns: "1.2fr 0.8fr" }}><div><div className="chip">{locale === "en" ? "Trusted partner" : "可信夥伴"}</div><div className="hero-title" style={{ fontSize: "3.5rem" }}>{item.name}</div><p className="muted" style={{ fontSize: 18 }}>{t(item.bio, locale)}</p></div><aside className="sidebar"><div className="meta">{locale === "en" ? "Coverage" : "服務範圍"}</div><p>{item.areas}</p><div className="meta">{locale === "en" ? "Contact" : "聯絡"}</div><p>{item.email}</p><p>{item.phone}</p></aside></div></div><div className="spacer-lg">{section(locale === "en" ? "Current listings" : "目前項目", item.name, locale === "en" ? "Everything this partner is currently publishing through the platform." : "這位合作夥伴目前發佈於平台上的內容。")}<div className="grid cards-2 spacer-lg">{partnerListings.map((entry) => listingCard(locale, entry))}</div></div></section>;
      })()}

      {current === "guides" && slug[1] && (() => {
        const item = guides.find((entry) => entry.slug === slug[1]);
        if (!item) return notFound();
        return <article className="shell spacer-lg"><div className="panel" style={{ padding: 28 }}><div className="chip">{locale === "en" ? "Guide article" : "指南文章"}</div><div className="hero-title" style={{ fontSize: "3.5rem" }}>{t(item.title, locale)}</div><p className="muted" style={{ fontSize: 18 }}>{t(item.summary, locale)}</p><p className="muted">{t(item.body, locale)}</p></div></article>;
      })()}

      {!["", "today", "this-week", "all", "search", "guides", "apply", "account", "admin", "listing", "partner"].includes(current) && (() => {
        const category = categories.find((entry) => entry.slug === current);
        if (!category) return notFound();
        const items = listings.filter((entry) => entry.category === category.slug);
        return <section className="shell spacer-lg">{section(locale === "en" ? "Category" : "分類", t(category.name, locale), t(category.description, locale))}<div className="grid cards-3 spacer-lg">{items.map((entry) => listingCard(locale, entry))}</div></section>;
      })()}

      {footer(locale)}
    </>
  );

  return page;
}
