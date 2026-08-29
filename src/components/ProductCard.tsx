import type { Product } from '../data/products'
import { photo } from '../lib/photo'

interface ProductCardProps {
  product: Product
  onOpenModal?: () => void
  size?: 'default' | 'tall'
}

/**
 * Premium specialty card with balanced proportions,
 * crisp imagery, and perfectly aligned actions.
 */
export default function ProductCard({ product, onOpenModal }: ProductCardProps) {
  return (
    <article className="pc-card">
      <div className="pc-media">
        <img
          {...photo(product.image, 600)}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
          alt={`${product.name} an der Theke von Bulut & Wolke`}
          className="pc-img"
          loading="lazy"
          decoding="async"
        />
        <div className="pc-media-shade" aria-hidden="true" />
        
        {/* Category Pill - Top Left */}
        <span className="pc-category-tag">
          {product.category}
        </span>

        {/* Highlight Badge - Top Right */}
        <span className="pc-badge">
          {product.badge}
        </span>
      </div>

      <div className="pc-body">
        <div className="pc-content-top">
          <h3 className="pc-name font-heading">{product.name}</h3>
          <p className="pc-desc">{product.description}</p>
        </div>

        <div className="pc-foot">
          <span className="pc-note">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            100% Manufaktur
          </span>
          <button
            type="button"
            onClick={onOpenModal}
            className="pc-action"
            aria-label={`${product.name} anfragen`}
          >
            <span>Anfragen</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}

