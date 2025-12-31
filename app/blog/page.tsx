"use client";
import React, { useState } from 'react';

// 1. Data Structure - Easy to expand
const ALL_POSTS = [
    { id: 1, category: "Engineering", title: "Micro-Frontends in 2025", excerpt: "Moving beyond monoliths: How to scale your team and codebase using fragmented architecture.", date: "Dec 28, 2024", color: "text-[#E63946] bg-[#EFEBE0]" },
    { id: 2, category: "UI/UX", title: "The Death of the Hamburger Menu", excerpt: "Why bottom navigation and tab bars are winning the war for mobile user engagement.", date: "Dec 24, 2024", color: "text-[#FFB703] bg-[#EFEBE0]" },
    { id: 3, category: "AI", title: "Prompt Engineering vs. Fine-Tuning", excerpt: "Which approach is actually better for your enterprise LLM implementation?", date: "Dec 20, 2024", color: "text-[#E63946] bg-[#F9F7F2]" },
    { id: 4, category: "Career", title: "The 10x Engineer Myth", excerpt: "Why soft skills and documentation are more valuable than writing code 10 hours a day.", date: "Dec 15, 2024", color: "text-[#FFB703] bg-[#F9F7F2]" },
    { id: 5, category: "Backend", title: "Rust for Node.js Developers", excerpt: "A guide to transitioning into systems programming without losing your mind.", date: "Dec 10, 2024", color: "text-[#E63946] bg-[#EFEBE0]" },
    { id: 6, category: "Philosophy", title: "Minimalism in Software", excerpt: "The art of deleting code. Why less is almost always more in a production environment.", date: "Dec 05, 2024", color: "text-[#2D2D2D] bg-[#EFEBE0]" },
    { id: 7, category: "Security", title: "Zero Trust Architecture", excerpt: "Never trust, always verify. How to secure modern cloud-native applications.", date: "Nov 30, 2024", color: "text-[#E63946] bg-[#F9F7F2]" },
    { id: 8, category: "Testing", title: "TDD is Not Dead", excerpt: "Revisiting Test-Driven Development in the age of AI-assisted coding tools.", date: "Nov 25, 2024", color: "text-[#FFB703] bg-[#EFEBE0]" },
];

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = ALL_POSTS.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#F9F7F2] text-[#2D2D2D]">
            {/* Navigation */}


            {/* Hero Section */}
            <header className="pt-20 pb-12 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-6xl font-extrabold tracking-tight mb-6">
                        Write. Code. <span className="text-[#E63946] italic">Repeat.</span>
                    </h1>
                    <p className="text-lg text-[#2D2D2D] mb-8">
                        A collection of technical thoughts, architecture deep-dives, and industry insights. No trackers, no ads, just text.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="Search topics or categories..."
                            className="w-full px-6 py-3 rounded-full border border-[#EFEBE0] focus:outline-none focus:ring-2 focus:ring-[#FFB703] transition-all bg-[#EFEBE0] text-[#2D2D2D]"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </header>

            {/* Blog List Section */}
            <main className="max-w-6xl mx-auto py-12 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <article key={post.id} className="group cursor-pointer">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded ${post.color}`}>
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-[#2D2D2D] font-medium">{post.date}</span>
                                    </div>

                                    <h2 className="text-3xl font-bold leading-tight mb-4 group-hover:text-[#E63946] transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-[#2D2D2D] text-lg leading-relaxed mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center text-sm font-bold text-[#E63946] group-hover:gap-2 transition-all">
                                        READ STORY <span className="ml-1">→</span>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-[#2D2D2D] text-xl">No blogs found matching "{searchQuery}"</p>
                        </div>
                    )}
                </div>
            </main>

        </div>
    );
}