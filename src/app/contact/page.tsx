// /app/contact/page.tsx

export const metadata = {
    title: "Contact | Grey White Space Designs",
    description: "Get in touch with Grey White Space Designs for collaborations and inquiries.",
  };
  
  export default function ContactPage() {
    return (
      <div className="bg-background py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-heading text-text-primary">Get in Touch</h1>
            <p className="mt-6 text-lg font-sans text-text-primary/90">
              We are always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
  
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form action="#" method="POST" className="space-y-6 font-sans">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    className="mt-1 block w-full px-3 py-2 bg-background border border-border-accent focus:outline-none focus:ring-1 focus:ring-text-primary focus:border-text-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    className="mt-1 block w-full px-3 py-2 bg-background border border-border-accent focus:outline-none focus:ring-1 focus:ring-text-primary focus:border-text-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary">Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={5}
                    className="mt-1 block w-full px-3 py-2 bg-background border border-border-accent focus:outline-none focus:ring-1 focus:ring-text-primary focus:border-text-primary"
                    required
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit"
                    className="w-full py-3 px-4 bg-text-primary text-background font-medium hover:bg-opacity-80 transition-colors disabled:opacity-50"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
  
            {/* Contact Details */}
            <div className="font-sans">
              <h2 className="text-xl font-heading text-text-primary mb-4">Contact Details</h2>
              <div className="space-y-4 text-text-primary/90">
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>Anglo Indian Lane, Saudi, Kochi IN</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>
                    <a href="mailto:contact@gws.design" className="hover:underline">
                      contact@gws.design
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+91 987654321</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }