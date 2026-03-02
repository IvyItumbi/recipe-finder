const floatingEmojis = [
    { emoji: '🍕', style: { top: '10%', left: '8%', animationDelay: '0s' } },
    { emoji: '🍣', style: { top: '20%', right: '10%', animationDelay: '1s' } },
    { emoji: '🌮', style: { top: '60%', left: '5%', animationDelay: '2s' } },
    { emoji: '🍜', style: { bottom: '20%', right: '8%', animationDelay: '0.5s' } },
    { emoji: '🥗', style: { top: '40%', left: '3%', animationDelay: '3s' } },
    { emoji: '🍰', style: { top: '15%', left: '40%', animationDelay: '1.5s' } },
    { emoji: '🥘', style: { bottom: '30%', left: '15%', animationDelay: '2.5s' } },
    { emoji: '🍱', style: { top: '70%', right: '12%', animationDelay: '4s' } },
]

const features = [
    {
        icon: '🔍',
        title: 'Smart Search',
        desc: 'Search by recipe name, ingredient, or cuisine. Find exactly what you want to cook in seconds.'
    },
    {
        icon: '🥦',
        title: 'Dietary Filters',
        desc: 'Filter by vegetarian, vegan, or gluten-free options. Eat exactly the way you want.'
    },
    {
        icon: '👆',
        title: 'Instant Details',
        desc: 'Double-tap any recipe card to instantly unlock the full ingredients list and step-by-step cooking guide.'
    }
]

const cuisines = [
    { emoji: '🍝', name: 'Italian' },
    { emoji: '🍛', name: 'Indian' },
    { emoji: '🍜', name: 'Asian' },
    { emoji: '🌮', name: 'Mexican' },
    { emoji: '🥗', name: 'Mediterranean' },
    { emoji: '🍔', name: 'American' },
    { emoji: '🥘', name: 'African' },
]

const steps = [
    { icon: '🔍', title: 'Search or Browse', desc: 'Type a keyword or browse 26+ curated recipes from 7 global cuisines including African favorites.' },
    { icon: '🎯', title: 'Filter Your Way', desc: 'Apply dietary filters and time constraints to find the perfect recipe for you.' },
    { icon: '👨‍🍳', title: 'Start Cooking!', desc: 'Double-click any recipe to reveal the full ingredients list and step-by-step cooking instructions.' },
]

const testimonials = [
    {
        text: "RecipeFinder completely transformed my weeknight cooking. I can find a delicious recipe in under a minute!",
        name: "Sarah K.",
        role: "Home Chef",
        avatar: "👩‍🍳"
    },
    {
        text: "As a professional chef, I love how organized and detailed the instructions are. This is my go-to reference.",
        name: "Chef Marcus",
        role: "Restaurant Chef",
        avatar: "👨‍🍳"
    },
    {
        text: "The dietary filters are a lifesaver. I'm vegan and I can instantly find recipes that work for me.",
        name: "Emma L.",
        role: "Food Blogger",
        avatar: "🌱"
    }
]

export default function LandingPage({ onStart }) {
    return (
        <div className="landing">
            {/* ===== HERO ===== */}
            <section className="hero">
                <div className="floating-emojis" aria-hidden="true">
                    {floatingEmojis.map((item, i) => (
                        <span key={i} className="float-item" style={item.style}>{item.emoji}</span>
                    ))}
                </div>

                <div className="hero-badge">
                    ✨ Your Personal Recipe Assistant
                </div>

                <h1 className="hero-title">
                    Discover Recipes You'll<br />
                    <span className="highlight">Absolutely Love</span>
                </h1>

                <p className="hero-subtitle">
                    Search thousands of recipes by ingredient, cuisine, or cooking time.
                    Built for home cooks and professional chefs alike.
                </p>

                <div className="hero-cta">
                    <button className="btn-primary" onClick={onStart} id="start-cooking-btn">
                        🍴 Start Cooking
                    </button>
                    <button className="btn-secondary" onClick={onStart}>
                        Browse Recipes →
                    </button>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-value">26+</span>
                        <span className="stat-label">Recipes</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">7</span>
                        <span className="stat-label">Cuisines</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">3</span>
                        <span className="stat-label">Diet Options</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">Free</span>
                        <span className="stat-label">Always</span>
                    </div>
                </div>
            </section>

            {/* ===== FEATURES ===== */}
            <section className="section">
                <div>
                    <p className="section-tag">✦ Why RecipeFinder</p>
                    <h2 className="section-title">Everything You Need to<br />Cook with Confidence</h2>
                    <p className="section-subtitle">
                        Designed for real cooks — whether you're a beginner trying something new or a seasoned chef exploring global flavors.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((f, i) => (
                        <div className="feature-card" key={i}>
                            <span className="feature-icon">{f.icon}</span>
                            <h3 className="feature-title">{f.title}</h3>
                            <p className="feature-desc">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== HOW IT WORKS ===== */}
            <div className="how-it-works-bg">
                <section className="section">
                    <p className="section-tag">✦ Simple Process</p>
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-subtitle">
                        Getting from hungry to cooking takes just three easy steps.
                    </p>

                    <div className="steps-row">
                        {steps.map((s, i) => (
                            <div className="step-item" key={i}>
                                <div className="step-circle">
                                    <span>{s.icon}</span>
                                    <span className="step-num">{i + 1}</span>
                                </div>
                                <h3 className="step-title">{s.title}</h3>
                                <p className="step-desc">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* ===== POPULAR CUISINES ===== */}
            <section className="section">
                <p className="section-tag">✦ Global Flavors</p>
                <h2 className="section-title">Popular Cuisines</h2>
                <p className="section-subtitle">
                    Explore recipes from around the world, curated to inspire your next cooking adventure.
                </p>

                <div className="cuisines-grid">
                    {cuisines.map((c, i) => (
                        <div className="cuisine-card" key={i}>
                            <span className="cuisine-emoji">{c.emoji}</span>
                            <p className="cuisine-name">{c.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <div className="testimonials-bg">
                <section className="section">
                    <p className="section-tag">✦ Loved by Cooks</p>
                    <h2 className="section-title">What People Are Saying</h2>
                    <p className="section-subtitle">
                        Join thousands of home cooks and professional chefs who use RecipeFinder every day.
                    </p>

                    <div className="testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div className="testimonial-card" key={i}>
                                <div className="testimonial-stars">★★★★★</div>
                                <p className="testimonial-text">"{t.text}"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">{t.avatar}</div>
                                    <div>
                                        <p className="author-name">{t.name}</p>
                                        <p className="author-role">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* ===== FOOTER ===== */}
            <footer className="footer">
                <div className="footer-inner">
                    <div className="footer-top">
                        <div>
                            <div className="footer-logo">🍽️ Recipe<em>Finder</em></div>
                            <p className="footer-tagline">
                                Your personal recipe assistant for discovering and cooking delicious meals from around the world.
                            </p>
                        </div>
                        <div>
                            <p className="footer-heading">Quick Links</p>
                            <ul className="footer-links">
                                <li><a href="#" onClick={onStart}>Browse Recipes</a></li>
                                <li><a href="#" onClick={onStart}>Search by Ingredient</a></li>
                                <li><a href="#" onClick={onStart}>Vegetarian Recipes</a></li>
                                <li><a href="#" onClick={onStart}>Quick Meals</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className="footer-heading">Cuisines</p>
                            <ul className="footer-links">
                                {cuisines.map(c => (
                                    <li key={c.name}><a href="#" onClick={onStart}>{c.emoji} {c.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="footer-copy">© 2026 RecipeFinder. Built with ❤️ for food lovers everywhere.</p>
                        <div className="footer-socials" aria-label="Social links">
                            <a href="#" className="social-btn" aria-label="Twitter">🐦</a>
                            <a href="#" className="social-btn" aria-label="Instagram">📸</a>
                            <a href="#" className="social-btn" aria-label="YouTube">▶️</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
