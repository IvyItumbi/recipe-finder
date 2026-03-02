import RecipeCard from './RecipeCard.jsx'

export default function RecipeList({ recipes, onRecipeSelect }) {
    if (recipes.length === 0) {
        return (
            <div className="recipe-grid">
                <div className="empty-state">
                    <div className="empty-state-emoji">🍽️</div>
                    <h3>No recipes found</h3>
                    <p>Try a different keyword or remove some filters.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="recipe-grid" role="list">
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onDoubleClick={() => onRecipeSelect(recipe)}
                />
            ))}
        </div>
    )
}
