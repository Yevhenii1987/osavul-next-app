import ButtonArrow from '../UI/ButtonArrow';

export default function Pagination({ current, pagesCount, onPrev, onNext }) {
  return (
    <div className="pagination flex justify-center items-center">
      <ButtonArrow
        classes={`${current > 1 ? 'active' : ''
          } pagination-button pagination-button--prev embla__prev`}
        onClick={onPrev}
      ></ButtonArrow>
      <div className="pages-counter flex items-center justify-center">
        <span className="page-current">{current}</span>&nbsp;/&nbsp;
        <span className="pages-count">{pagesCount}</span>
      </div>
      <ButtonArrow
        classes={`${current < pagesCount ? 'active' : ''
          } pagination-button pagination-button--next embla__next`}
        onClick={onNext}
      ></ButtonArrow>
    </div>
  );
}
