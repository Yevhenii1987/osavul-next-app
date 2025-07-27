import ButtonArrow from './ButtonArrow';

export default function Pagination({ current, pagesCount, onPrev, onNext }) {
  return (
    <div className="pagination flex justify-center items-center">
      <ButtonArrow
        classes={`${current > 1 ? 'active' : ''
          } pagination-button pagination-button--prev`}
        name="Previous page button"
        onClick={onPrev}
      ></ButtonArrow>
      <div className="pages-counter flex items-center justify-center">
        <span className="page-current">{current}</span>&nbsp;/&nbsp;
        <span className="pages-count">{pagesCount}</span>
      </div>
      <ButtonArrow
        classes={`${current < pagesCount ? 'active' : ''
          } pagination-button pagination-button--next`}
        name="Next page button"
        onClick={onNext}
      ></ButtonArrow>
    </div>
  );
}
