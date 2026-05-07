import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '../../data/blog';
import SEOHead, { organizationSchema } from '../../components/SEOHead';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered =
    activeCategory === 'all'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const schema = [
    organizationSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Ideal Deal Vietnam Export Insights Blog',
      url: 'https://idealdealvn.com/blog',
      description:
        'Expert guides on Vietnamese food exports, trade documentation, market insights for GCC, Africa, and Europe.',
      publisher: {
        '@type': 'Organization',
        name: 'Ideal Deal Vietnam',
        logo: 'https://idealdealvn.com/ideal-deal-vn-logo.png',
      },
    },
  ];

  return (
    <>
      <SEOHead
        title="Export Insights Blog | Vietnam Food Trade Guides & Market Intelligence"
        description="Expert articles on Vietnamese food exports: cashew nuts, coffee, rice, seafood, and spices. Trade guides for Saudi Arabia, UAE, Egypt, and Europe importers."
        keywords={[
          'vietnam food export blog',
          'vietnamese export insights',
          'vietnam trade guide',
          'food export from vietnam',
          'halal food vietnam export',
          'cashew nut export guide',
        ]}
        schema={schema}
      />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="bg-brandNavy text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              Export Intelligence
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Vietnam Export Insights
            </h1>
            <p className="text-xl text-white/70">
              Market intelligence, trade guides, and product deep-dives for international buyers sourcing from Vietnam.
            </p>
          </div>
        </div>
      </section>

      {/* ── Category filter ─────────────────────────────────── */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                activeCategory === 'all'
                  ? 'bg-brandNavy text-white dark:bg-white dark:text-brandNavy'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              All Articles
            </button>
            {blogCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat.slug
                    ? 'bg-brandNavy text-white dark:bg-white dark:text-brandNavy'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Blog grid ───────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-slate-500 text-center py-20">No articles in this category yet.</p>
          ) : (
            <>
              {/* Featured post (first item) */}
              {activeCategory === 'all' && filtered.length > 0 && (
                <Link
                  to={`/blog/${filtered[0].slug}`}
                  className="group block bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-primary transition-all mb-12"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-[4/3] md:aspect-auto bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      {filtered[0].coverImage && (
                        <img
                          src={filtered[0].coverImage}
                          alt={filtered[0].title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                          {blogCategories.find((c) => c.slug === filtered[0].category)?.name ?? filtered[0].category}
                        </span>
                        <span className="text-slate-400 text-xs">{filtered[0].readTime} min read</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-brandNavy dark:text-white mb-3 group-hover:text-primary transition-colors">
                        {filtered[0].title}
                      </h2>
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                        {filtered[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-slate-400">{filtered[0].publishedAt}</div>
                        <span className="flex items-center gap-1 text-primary font-bold text-sm">
                          Read Article
                          <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Grid of remaining posts */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {(activeCategory === 'all' ? filtered.slice(1) : filtered).map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-primary transition-all"
                  >
                    <div className="aspect-[16/9] bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      {post.coverImage && (
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                          {blogCategories.find((c) => c.slug === post.category)?.name ?? post.category}
                        </span>
                        <span className="text-slate-400 text-xs">{post.readTime} min</span>
                      </div>
                      <h3 className="font-bold text-brandNavy dark:text-white group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>{post.publishedAt}</span>
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-16 bg-brandNavy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Start Sourcing from Vietnam?</h2>
          <p className="text-white/70 mb-8">
            Our team of export specialists is ready to help you find the right products, handle documentation, and ship to your door.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/products"
              className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-amber-500 transition-colors"
            >
              Browse Products
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 text-white font-medium px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
