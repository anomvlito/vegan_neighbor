import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'Tienda',
      links: [
        { label: 'Productos', href: '/productos' },
        { label: 'Colecciones', href: '/colecciones' },
        { label: 'Buscar', href: '/buscar' },
      ],
    },
    {
      title: 'Información',
      links: [
        { label: 'Sobre Nosotros', href: '/sobre' },
        { label: 'Contacto', href: '/contacto' },
        { label: 'Términos', href: '/terminos' },
      ],
    },
  ]

  const socialLinks = [
    { icon: '🎵', label: 'TikTok', href: 'https://tiktok.com' },
    { icon: '📷', label: 'Instagram', href: 'https://instagram.com' },
    { icon: '👨‍💻', label: 'LinkedIn', href: 'https://linkedin.com' },
  ]

  return (
    <footer className="bg-vn-black text-vn-white border-t-2 border-vn-natural">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo variant="UNALINEA" version="POSITIVO" size="sm" />
            </div>
            <p className="font-mono text-sm text-vn-white/70">
              rico, casero, vegan
            </p>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-bold text-sm tracking-wider uppercase mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-mono text-sm text-vn-white/70 hover:text-vn-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider uppercase mb-4">
              Síguenos
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="text-xl hover:opacity-70 transition-opacity"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-vn-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="font-mono text-xs text-vn-white/60">
              © {currentYear} Vegan Neighbor. Todos los derechos reservados.
            </p>
            <p className="font-mono text-xs text-vn-white/60">
              Hecho con ❤️ por{' '}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-vn-white transition-colors"
              >
                @veganneighbor
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
