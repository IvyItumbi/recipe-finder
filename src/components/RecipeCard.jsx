export default function RecipeCard({ recipe, onDoubleClick }) {
    const tagClass = (tag) => tag.toLowerCase().replace('-', '-')

    return (
        <article
            className="recipe-card"
            onDoubleClick={onDoubleClick}
            role="listitem"
            aria-label={`${recipe.name} — double-click to view details`}
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter') onDoubleClick() }}
        >
            <span className="card-double-hint">Double-click</span>

            {/* Real image with emoji fallback */}
            <div className="card-image-wrap">
                <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="card-image"
                    loading="lazy"
                    onError={e => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                    }}
                />
                <div className="card-image-fallback" style={{ display: 'none' }}>
                    {recipe.emoji}
                </div>
            </div>

            <div className="card-body">
                <h3 className="card-name">{recipe.name}</h3>
                <p className="card-cuisine">{recipe.cuisine} Cuisine</p>

                <div className="card-meta">
                    <span className="card-meta-item">⏱️ {recipe.cookTime} min</span>
                    <span className="card-meta-item">📊 {recipe.difficulty}</span>
                    <span className="card-meta-item">🥘 {recipe.ingredients.length} ingredients</span>
                </div>

                {recipe.dietary.length > 0 && (
                    <div className="card-dietary">
                        {recipe.dietary.map(tag => (
                            <span key={tag} className={`dietary-tag ${tagClass(tag)}`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </article>
    )
}
