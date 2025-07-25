import Link from 'next/link';

export default function ButtonLink({ path, isActive = false, label, children }) {
  return (
    <div className={`button-link ${isActive ? 'active' : ''}`}>
      <Link href={`${path}`} aria-label={label}>{children}</Link>
    </div>
  );
}
