import NavLinks from '@/components/NavLinks';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <NavLinks
        label="Projects"
        links={[
          { href: '/projects', label: 'Overview', exact: true },
          { href: '/projects/settings', label: 'Settings' },
          { href: '/projects/opensource', label: 'Open Source' },
          { href: '/projects/school', label: 'School' },
        ]}
      />
      {children}
    </section>
  );
}