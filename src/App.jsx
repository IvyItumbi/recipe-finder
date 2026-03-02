import './App.css'
import { useState } from 'react'
import LandingPage from './components/LandingPage.jsx'
import SearchBar from './components/SearchBar.jsx'
import RecipeList from './components/RecipeList.jsx'
import RecipeDetails from './components/RecipeDetails.jsx'
import { recipes } from './data/recipes.js'

function App() {
    const [view, setView] = useState('landing')
    const [searchQuery, setSearchQuery] = useState('')
    const [activeFilters, setActiveFilters] = useState([])
    const [selectedRecipe, setSelectedRecipe] = useState(null)

    const toggleFilter = (filter) => {
        setActiveFilters(prev =>
            prev.includes(filter)
                ? prev.filter(f => f !== filter)
                : [...prev, filter]
        )
    }

    const filteredRecipes = recipes.filter(recipe => {
        const q = searchQuery.toLowerCase()
        const matchesSearch = !q || [
            recipe.name,
            recipe.cuisine,
            recipe.description,
            ...recipe.ingredients,
            ...recipe.dietary
        ].some(field => field.toLowerCase().includes(q))

        const matchesFilters = activeFilters.length === 0 ||
            activeFilters.every(f => recipe.dietary.includes(f))

        return matchesSearch && matchesFilters
    })

    return (
        <div className="app">
            {view === 'landing' ? (
                <LandingPage onStart={() => setView('dashboard')} />
            ) : (
                <div className="dashboard">
                    <nav className="dashboard-nav">
                        <div className="nav-logo">
                            <span>🍽️</span>
                            <span>Recipe<em>Finder</em></span>
                        </div>
                        <button className="nav-back-btn" onClick={() => setView('landing')}>
                            ← Back to Home
                        </button>
                    </nav>

                    <SearchBar
                        query={searchQuery}
                        onQueryChange={setSearchQuery}
                        activeFilters={activeFilters}
                        onFilterToggle={toggleFilter}
                    />

                    <div className="results-header">
                        <p className="results-count">
                            Showing <strong>{filteredRecipes.length}</strong> of {recipes.length} recipes
                        </p>
                        <p className="hint-text">💡 Double-click any card to see full details</p>
                    </div>

                    <RecipeList
                        recipes={filteredRecipes}
                        onRecipeSelect={setSelectedRecipe}
                    />
                </div>
            )}

            {selectedRecipe && (
                <RecipeDetails
                    recipe={selectedRecipe}
                    onClose={() => setSelectedRecipe(null)}
                />
            )}
        </div>
    )
}

export default App
