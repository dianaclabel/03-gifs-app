import type { FC } from "react";



interface Props {
  searches: string[];
  onLabelcliked: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({ searches, onLabelcliked }) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas previas</h2>
      <ul className="previous-searches-list">
        {
          searches.map((term) => (
            <li key={term} onClick={() => onLabelcliked(term)}>
              {term}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
