'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkItem = {
  href: string;
  label: string;
  exact?: boolean;
};

const primaryLinks: NavLinkItem[] = [
  { href: '/', label: 'Home', exact: true },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

type NavLinksProps = {
  links?: NavLinkItem[];
  label?: string;
};

export default function NavLinks({
  links = primaryLinks,
  label = 'Primary',
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className="max-w-4xl mx-auto px-4">
      <ul className="flex gap-6">
        {links.map(({ href, label: linkLabel, exact }) => {
          const isActive = exact
            ? pathname === href
            : pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

          return (
            <li key={href}>
              <Link
                href={href}
                className={`rounded-md px-3 py-2 transition-colors ${
                  isActive
                    ? 'font-semibold underline decoration-2 underline-offset-4'
                    : 'hover:underline hover:underline-offset-4'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {linkLabel}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}