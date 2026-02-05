import { useState } from 'preact/hooks';

interface Props {
  posts: any[];
  allPosts: any[];
}

export default function BlogList({ posts, allPosts }: Props) {
  const [activeFilter, setActiveFilter] = useState('All Posts');
  const filters = ['All Posts', 'Development', 'Design', 'Infrastructure', 'Career', 'Engineering'];

  const filteredPosts = activeFilter === 'All Posts'
    ? allPosts
    : allPosts.filter(post => post.data.category === activeFilter);

  return (
    <div className="w-full">
      <section className="mb-12">
        <div className="flex flex-wrap gap-3">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full border text-sm transition-colors cursor-pointer ${
                activeFilter === filter
                  ? 'bg-primary text-background-dark border-primary'
                  : 'border-primary/20 text-primary hover:border-primary/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="flex flex-col">
        <div className="flex flex-col">
          {filteredPosts.map(post => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group py-10 border-b border-primary/10 flex flex-col md:flex-row md:items-baseline justify-between gap-4 cursor-pointer no-underline"
            >
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest opacity-50 font-bold text-primary">
                  {post.data.date} • {post.data.category}
                </span>
                <h3 className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                  {post.data.title}
                </h3>
                <p className="text-primary/60 max-w-2xl mt-2">
                  {post.data.description}
                </p>
              </div>
              <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                arrow_forward
              </span>
            </a>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-3 border border-primary/20 hover:bg-primary/5 transition-colors font-medium text-primary cursor-pointer">
            Load More Articles
          </button>
        </div>
      </section>
    </div>
  );
}
