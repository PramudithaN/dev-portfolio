import { buttonVariants } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa'

function Contact({ }) {

  return (
    <div>
      <section>
        <h2
          id="contact-title"
          className="font-custom text-foreground text-2xl font-bold mb-2"
          title="contact"
          aria-label="contact"
          role="heading"
        >
          Contact Me
        </h2>
        <p className="text-muted-foreground text-sm mb-6" aria-label="contact description">
          Interested in working together or have a question? Feel free to reach out!
        </p>
        <form
          className="bg-card border border-border rounded-xl p-6 shadow-lg max-w-3xl w-full flex flex-col gap-4 items-center"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="w-full">
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1 text-left">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded border border-border px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1 text-left">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded border border-border px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="w-full">
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1 text-left">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full rounded border border-border px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            className={buttonVariants({ variant: 'default' }) + ' w-full mt-2'}
          >
            Send Message
          </button>
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="to" value="pramudithanadun@gmail.com" />
        </form>
        <div className="flex justify-center gap-4 mt-6">
          <a href="mailto:pramudithanadun@gmail.com" className="text-primary hover:underline text-sm">
            pramudithanadun@gmail.com
          </a>
          <a href="https://github.com/PramudithaN" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm flex items-center gap-1">
            <FaGithub /> GitHub
          </a>
        </div>

      </section>
    </div>
  )
}

export default Contact
