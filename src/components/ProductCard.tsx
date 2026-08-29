import type { Product } from '../data/products'
import { photo } from '../lib/photo'

interface ProductCardProps {
  product: Product
  onOpenModal?: () => void
  /** Taller art for the two-column layouts. */
  size?: 'default' | 'tall'
}

/**
 * One specialty, framed like the jars on the counter: arched top, photo
 * filling the arch, the name on cream underneath.
 */
export default function ProductCard({ product, onOpenModal, size = 'default' }: ProductCardProps) {
  return (
    <article className={`pc-card ${size === 'tall' ? 'pc-card-tall' : ''}`}>
      <div className="pc-media">
        <img
          {...photo(product.image, 600)}
          sizes="(max-width: 640px) 90vw, (max-width: 1100px) 45vw, 22vw"
          alt={`${product.name} an der Theke von Bulut & Wolke`}
          className="pc-img"
          loading="lazy"
          decoding="async"
        />
        <div className="pc-media-shade" aria-hidden="true" />
        <span className="pc-badge">{product.badge}</span>
        <span className="pc-category">{product.category}</span>
      </div>

      <div className="pc-body">
        <h3 className="pc-name font-heading">{product.name}</h3>
        <p className="pc-desc">{product.description}</p>

        <div className="pc-foot">
          <span className="pc-note">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Manufaktur
          </span>
          <button type="button" onClick={onOpenModal} className="pc-action">
            <span>Anfragen</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}
