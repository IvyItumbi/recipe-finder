import { useEffect } from 'react'

export default function RecipeDetails({ recipe, onClose }) {
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose() }
        document.addEventListener('keydown', handleKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleKey)
            document.body.style.overflow = ''
        }
    }, [onClose])

    const tagClass = (tag) => tag.toLowerCase().replace('-', '-')

    return (
        <div
            className="modal-overlay"
            onClick={e => { if (e.target === e.currentTarget) onClose() }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div className="modal-content">
                {/* Hero Image */}
                <div className="modal-image-wrap">
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="modal-image"
                        onError={e => {
                            e.target.parentElement.style.background = 'var(--bg-card-hover)'
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                        }}
                    />
                    <div className="modal-image-fallback" style={{ display: 'none' }}>
                        {recipe.emoji}
                    </div>
                    <button className="modal-close" onClick={onClose} aria-label="Close recipe details">✕</button>
                    <div className="modal-image-overlay">
                        <span className="modal-cuisine-badge">{recipe.emoji} {recipe.cuisine}</span>
                    </div>
                </div>

                {/* Header */}
                <div className="modal-header">
                    <h2 className="modal-title" id="modal-title">{recipe.name}</h2>

                    <div className="modal-meta">
                        <span className="modal-meta-item">⏱️ {recipe.cookTime} min</span>
                        <span className="modal-meta-item">📊 {recipe.difficulty}</span>
                        <span className="modal-meta-item">🥘 {recipe.ingredients.length} ingredients</span>
                    </div>

                    {recipe.dietary.length > 0 && (
                        <div className="modal-dietary">
                            {recipe.dietary.map(tag => (
                                <span key={tag} className={`dietary-tag ${tagClass(tag)}`}>{tag}</span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Body */}
                <div className="modal-body">
                    <p className="modal-description">{recipe.description}</p>

                    <h3 className="modal-section-title">🛒 Ingredients</h3>
                    <ul className="ingredients-list">
                        {recipe.ingredients.map((ing, i) => (
                            <li key={i}>{ing}</li>
                        ))}
                    </ul>

                    <h3 className="modal-section-title">👨‍🍳 Instructions</h3>
                    <ol className="steps-list">
                        {recipe.steps.map((step, i) => (
                            <li key={i}>
                                <span className="step-number">{i + 1}</span>
                                <span>{step}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}
