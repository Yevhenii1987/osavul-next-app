'use client';

export default function ArticleNav({ navData }) {

  function handleNavClick(id, event) {
    event.preventDefault();
    const scrollToElement = document.getElementById(id);
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = scrollToElement.getBoundingClientRect();
    const offset = elemRect.top - bodyRect.top - 115;

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }

  return (
    <nav className="article-nav">
      <h3>Navigation</h3>
      <ul>
        {navData.map((item) => (
          <li key={item.name}>
            <a
              href={`#${item.id}`}
              onClick={(event) => handleNavClick(item.id, event)}
            >{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
