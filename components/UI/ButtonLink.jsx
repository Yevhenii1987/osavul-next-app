import Link from 'next/link';

export default function ButtonLink({ path, isActive = false, children }) {
  return (
    <div className={`button-link ${isActive ? 'active' : ''}`}>
      <Link href={`${path}`}>{children}</Link>
    </div>
  );
}
