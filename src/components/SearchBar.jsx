const dietaryFilters = [
    { label: '🥦 Vegetarian', value: 'Vegetarian' },
    { label: '🌱 Vegan', value: 'Vegan' },
    { label: '🌾 Gluten-Free', value: 'Gluten-Free' },
]

const timeFilters = [
    { label: '⚡ Under 15 min', value: 'under15' },
    { label: '🕐 Under 30 min', value: 'under30' },
]

export default function SearchBar({ query, onQueryChange, activeFilters, onFilterToggle }) {
    return (
        <div className="search-container">
            <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input
                    id="recipe-search"
                    type="text"
                    className="search-input"
                    placeholder="Search by name, ingredient, or cuisine..."
                    value={query}
                    onChange={e => onQueryChange(e.target.value)}
                    aria-label="Search recipes"
                />
                {query && (
                    <button className="clear-btn" onClick={() => onQueryChange('')} aria-label="Clear search">
                        ✕
                    </button>
                )}
            </div>

            <div className="filter-row" role="group" aria-label="Recipe filters">
                <span className="filter-label">Filters:</span>
                {dietaryFilters.map(f => (
                    <button
                        key={f.value}
                        className={`filter-pill ${activeFilters.includes(f.value) ? 'active' : ''}`}
                        onClick={() => onFilterToggle(f.value)}
                        aria-pressed={activeFilters.includes(f.value)}
                    >
                        {f.label}
                    </button>
                ))}
                {timeFilters.map(f => (
                    <button
                        key={f.value}
                        className={`filter-pill ${activeFilters.includes(f.value) ? 'active' : ''}`}
                        onClick={() => onFilterToggle(f.value)}
                        aria-pressed={activeFilters.includes(f.value)}
                    >
                        {f.label}
                    </button>
                ))}
            </div>
        </div>
    )
}
