import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getBlogPostBySlug, getRelatedBlogPosts, blogCategories } from '../../data/blog';
import SEOHead, { articleSchema, breadcrumbSchema, faqSchema, organizationSchema } from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import RFQForm from '../../components/RFQForm';
import Icon from '../../components/Icon';

// ── Minimal markdown renderer ───────────────────────────────────────────────
const renderMarkdown = (content: string): React.ReactNode[] => {
  const blocks = content.split(/\n\n+/);
  return blocks.map((block, i) => {
    // H2
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="text-2xl font-display font-bold text-brandNavy dark:text-white mt-10 mb-4">
          {block.replace('## ', '')}
        </h2>
      );
    }
    // H3
    if (block.startsWith('### ')) {
      return (
        <h3 key={i} className="text-xl font-bold text-brandNavy dark:text-white mt-8 mb-3">
          {block.replace('### ', '')}
        </h3>
      );
    }
    // Unordered list
    if (block.split('\n').every((l) => l.trimStart().startsWith('- '))) {
      const items = block.split('\n').map((l) => l.replace(/^-\s*/, ''));
      return (
        <ul key={i} className="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-300 mb-4 ml-2">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    }
    // Ordered list
    if (block.split('\n').every((l) => /^\d+\.\s/.test(l.trimStart()))) {
      const items = block.split('\n').map((l) => l.replace(/^\d+\.\s*/, ''));
      return (
        <ol key={i} className="list-decimal list-inside space-y-1.5 text-slate-600 dark:text-slate-300 mb-4 ml-2">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ol>
      );
    }
    // Blockquote
    if (block.startsWith('> ')) {
      return (
        <blockquote key={i} className="border-l-4 border-primary pl-5 py-1 my-6 italic text-slate-500 dark:text-slate-400">
          {block.replace(/^>\s*/gm, '')}
        </blockquote>
      );
    }
    // Normal paragraph
    return (
      <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
        {renderInline(block)}
      </p>
    );
  });
};

const renderInline = (text: string): React.ReactNode => {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**')) return <strong key={i}>{part.replace(/\*\*/g, '')}</strong>;
        if (part.startsWith('*')) return <em key={i}>{part.replace(/\*/g, '')}</em>;
        return part;
      })}
    </>
  );
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug ?? '');

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedBlogPosts(post);
  const categoryName = blogCategories.find((c) => c.slug === post.category)?.name ?? post.category;

  const schema = [
    organizationSchema(),
    articleSchema({
      title: post.title,
      description: post.excerpt,
      image: post.coverImage,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      author: post.author,
      url: `/blog/${post.slug}`,
    }),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: post.title, url: `/blog/${post.slug}` },
    ]),
    ...(post.faqs && post.faqs.length > 0 ? [faqSchema(post.faqs)] : []),
  ];

  return (
    <>
      <SEOHead
        title={post.seoTitle ?? post.title}
        description={post.seoDescription ?? post.excerpt}
        keywords={post.tags}
        schema={schema}
      />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="bg-brandNavy text-white pt-28 pb-0 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Breadcrumbs
            className="mb-6 text-white/60"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-primary/20 border border-primary/40 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {categoryName}
            </span>
            <span className="text-white/50 text-xs">{post.readTime} min read</span>
            <span className="text-white/50 text-xs">·</span>
            <span className="text-white/50 text-xs">{post.publishedAt}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-white/70 mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
              {post.author.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{post.author}</div>
              {post.authorTitle && (
                <div className="text-xs text-white/50">{post.authorTitle}</div>
              )}
            </div>
          </div>
        </div>

        {/* Cover image */}
        {post.coverImage && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-t-2xl overflow-hidden aspect-[16/7]">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </section>

      {/* ── Article body ────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-brandNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Article content */}
            <article className="lg:col-span-2 prose-article">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Body */}
              <div>{renderMarkdown(post.content)}</div>

              {/* In-article FAQ */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-12 pt-10 border-t border-slate-200 dark:border-slate-700">
                  <h2 className="text-2xl font-display font-bold text-brandNavy dark:text-white mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="divide-y divide-slate-200 dark:divide-slate-700">
                    {post.faqs.map((faq, i) => (
                      <div key={i} className="py-5">
                        <div className="font-bold text-brandNavy dark:text-white mb-2">
                          {faq.question}
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Author box */}
              <div className="mt-12 bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-brandNavy dark:text-white">{post.author}</div>
                  {post.authorTitle && (
                    <div className="text-sm text-slate-500 mb-2">{post.authorTitle}</div>
                  )}
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Export specialist at Ideal Deal Vietnam with expertise in Vietnamese agricultural products and international trade documentation.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* RFQ form */}
              <RFQForm compact />

              {/* Related posts */}
              {related.length > 0 && (
                <div>
                  <h3 className="font-bold text-brandNavy dark:text-white mb-4 text-sm uppercase tracking-wider">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {related.map((rp) => (
                      <Link
                        key={rp.slug}
                        to={`/blog/${rp.slug}`}
                        className="group block bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-primary transition-all"
                      >
                        {rp.coverImage && (
                          <div className="aspect-[16/9] bg-slate-200 dark:bg-slate-700 overflow-hidden">
                            <img
                              src={rp.coverImage}
                              alt={rp.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="p-4">
                          <p className="text-xs text-primary font-bold mb-1">{rp.readTime} min read</p>
                          <h4 className="font-bold text-brandNavy dark:text-white text-sm group-hover:text-primary transition-colors line-clamp-2">
                            {rp.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              <div>
                <h3 className="font-bold text-brandNavy dark:text-white mb-4 text-sm uppercase tracking-wider">
                  Categories
                </h3>
                <div className="space-y-2">
                  {blogCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to="/blog"
                      className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors py-1"
                    >
                      <span>{cat.name}</span>
                      <Icon name="chevron_right" size={16} aria-hidden />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Back to blog ────────────────────────────────────── */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900 text-center">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
        >
          <Icon name="arrow_back" aria-hidden />
          Back to All Articles
        </Link>
      </section>
    </>
  );
};

export default BlogPost;
