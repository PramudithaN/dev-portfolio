import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaFacebook, 
  FaPinterest, 
  FaBehance, 
  FaEnvelope 
} from 'react-icons/fa'

function Contact() {
  const socials = [
    {
      name: 'Gmail',
      url: 'mailto:pramudithanadun@gmail.com',
      icon: <FaEnvelope className="text-xl" />,
      color: 'hover:text-red-500 hover:border-red-500/30 hover:bg-red-500/5',
      shadowColor: 'group-hover:shadow-red-500/20',
      label: 'Email me directly'
    },
    {
      name: 'LinkedIn',
      url: 'http://www.linkedin.com/in/pramuditha-nadun-612b1b204',
      icon: <FaLinkedin className="text-xl" />,
      color: 'hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-500/5',
      shadowColor: 'group-hover:shadow-blue-500/20',
      label: 'Connect professionally'
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/pramudithanadun1',
      icon: <FaBehance className="text-xl" />,
      color: 'hover:text-cyan-500 hover:border-cyan-500/30 hover:bg-cyan-500/5',
      shadowColor: 'group-hover:shadow-cyan-500/20',
      label: 'View my designs'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/pramx.psd?igsh=MWNtaXF2cWw2ajEwcg==',
      icon: <FaInstagram className="text-xl" />,
      color: 'hover:text-pink-500 hover:border-pink-500/30 hover:bg-pink-500/5',
      shadowColor: 'group-hover:shadow-pink-500/20',
      label: 'Follow my visuals'
    },
    {
      name: 'Pinterest',
      url: 'https://pin.it/Lb92N4TnM',
      icon: <FaPinterest className="text-xl" />,
      color: 'hover:text-red-600 hover:border-red-600/30 hover:bg-red-600/5',
      shadowColor: 'group-hover:shadow-red-600/20',
      label: 'See my inspirations'
    },
    {
      name: 'Facebook',
      url: 'https://web.facebook.com/pramuditha.nadun',
      icon: <FaFacebook className="text-xl" />,
      color: 'hover:text-blue-600 hover:border-blue-600/30 hover:bg-blue-600/5',
      shadowColor: 'group-hover:shadow-blue-600/20',
      label: 'Connect on social'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/PramudithaN',
      icon: <FaGithub className="text-xl" />,
      color: 'hover:text-foreground hover:border-foreground/30 hover:bg-foreground/5',
      shadowColor: 'group-hover:shadow-foreground/20',
      label: 'Explore my code'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center py-6 w-full max-w-4xl mx-auto">
      <section className="w-full text-center">
        <h2
          id="contact-title"
          className="font-custom text-foreground text-3xl font-bold mb-3"
          title="contact"
          aria-label="contact"
          role="heading"
        >
          Let's Connect
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-10" aria-label="contact description">
          Interested in working together or have a question? Feel free to reach out on any of these platforms!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto px-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center justify-center p-5 bg-card border border-border rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.color}`}
            >
              <div className={`p-3 rounded-full bg-background border border-border transition-all duration-300 group-hover:scale-110 shadow-sm ${social.shadowColor}`}>
                {social.icon}
              </div>
              <span className="font-semibold text-sm mt-3 text-foreground transition-colors group-hover:text-primary">
                {social.name}
              </span>
              <span className="text-[10px] text-muted-foreground mt-1 text-center opacity-80 group-hover:opacity-100 transition-opacity">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Contact
