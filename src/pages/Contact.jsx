import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Contact() {
  const mapRef = useRef(null);
  const [inquiryType, setInquiryType] = useState("Sponsor");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { scrollYProgress: mapProgress } = useScroll({
    target: mapRef,
    offset: ['start end', 'end start']
  });

  const mapY = useTransform(mapProgress, [0, 1], ['-10%', '10%']);

  const handlePillClick = (type) => {
    setInquiryType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Stagger reveal animations for the form elements
  const formContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen pt-32 pb-12 overflow-x-hidden selection:bg-primary/20 selection:text-primary">

      {/* SPLIT HERO SECTION */}
      <section className="max-w-[95%] lg:max-w-[1380px] mx-auto px-4 relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_rgba(15,23,42,0.1)] border border-slate-200/50 bg-slate-950 grid grid-cols-1 lg:grid-cols-12 min-h-[640px] p-2"
        >
          {/* Continuous Architectural Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
              alt="Clinical Headquarters"
              className="w-full h-full object-cover opacity-40"
            />
            {/* Shading overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
            {/* Extra dark overlay on mobile to ensure content readability */}
            <div className="absolute inset-0 bg-slate-950/50 lg:hidden" />
          </div>

          {/* Left Panel: Information & Contacts */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col justify-between z-10 relative text-white">

            {/* Top Text Details */}
            <div className="space-y-6 max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.1] text-white">
                  You Have Questions,<br />We Have Answers
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-lg text-slate-300 font-medium leading-relaxed"
              >
                Optimize retention and streamline operations. Reach out to learn how we can help.
              </motion.p>
            </div>

            {/* Bottom Contact Details Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-16 lg:mt-0"
            >
              {/* Location */}
              <div className="space-y-2">
                <h4 className="font-bold text-white uppercase tracking-wider text-xs opacity-60">Location</h4>
                <p className="text-sm leading-relaxed text-slate-300 font-medium">
                  Clinical Innovation District<br />
                  100 Clinical Way<br />
                  Boston, MA 02110
                </p>
                <span className="block text-[11px] text-slate-400 font-semibold mt-1">Monday–Friday | 08:00 - 18:00 (EST)</span>
              </div>

              {/* Social Media */}
              <div className="space-y-2">
                <h4 className="font-bold text-white uppercase tracking-wider text-xs opacity-60">Social Media</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-300 font-medium">
                  <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                  <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                  <a href="#" className="hover:text-primary transition-colors">Facebook</a>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <h4 className="font-bold text-white uppercase tracking-wider text-xs opacity-60">Email</h4>
                <a href="mailto:hello@clinilink-os.app" className="text-sm font-semibold text-slate-300 hover:text-primary transition-colors">
                  hello@clinilink-os.app
                </a>
              </div>

              {/* Contact */}
              <div className="space-y-2">
                <h4 className="font-bold text-white uppercase tracking-wider text-xs opacity-60">Contact</h4>
                <a href="tel:+18005550199" className="text-sm font-semibold text-slate-300 hover:text-primary transition-colors">
                  +1 (800) 555-0199
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Panel: Floating Form Card */}
          <div className="lg:col-span-5 p-4 flex items-center justify-center z-10 relative">
            <motion.div
              variants={formContainerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(15,23,42,0.15)] border border-slate-100 w-full"
            >
              <motion.div variants={formItemVariants} className="mb-6">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-1">Tell Us What You Need</h2>
                <p className="text-xs text-slate-500 font-medium">Our team is ready to assist you with every detail, big or small.</p>
              </motion.div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">✓</div>
                  <h3 className="text-xl font-bold text-slate-900">Request Submitted</h3>
                  <p className="text-sm text-slate-500 max-w-xs mx-auto font-medium">Thank you! A specialist will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Name Fields */}
                  <motion.div variants={formItemVariants} className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-sm focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-sm focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                  </motion.div>

                  {/* Email & Phone Fields */}
                  <motion.div variants={formItemVariants} className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-sm focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-sm focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                  </motion.div>

                  {/* Inquiry Type Select Pills */}
                  <motion.div variants={formItemVariants} className="space-y-2">
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Type of Inquiry</span>
                    <div className="flex flex-wrap gap-2 pt-0.5">
                      {["Sponsor", "CRO", "Site", "Others"].map((type) => {
                        const isActive = inquiryType === type;
                        return (
                          <div
                            key={type}
                            onClick={() => handlePillClick(type)}
                            className={`px-4 py-2 rounded-xl border text-xs font-bold cursor-pointer transition-all duration-300 ${isActive
                              ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300"
                              }`}
                          >
                            {type}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div variants={formItemVariants} className="space-y-1">
                    <textarea
                      rows={3}
                      required
                      placeholder="Message"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none font-medium text-slate-800 placeholder:text-slate-400 h-[100px]"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div variants={formItemVariants} className="pt-1">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full border border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white hover:shadow-xl hover:shadow-slate-950/10 transition-all duration-300 text-xs tracking-wide"
                    >
                      Submit
                    </button>
                  </motion.div>

                </form>
              )}
            </motion.div>
          </div>

        </motion.div>
      </section>

      {/* MAP SECTION */}
      <section className="w-full relative py-12" ref={mapRef}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center md:text-left mb-8 space-y-2">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Our Headquarters</h2>
            <p className="text-slate-500 font-medium text-sm md:text-base">Visit us in Boston's clinical innovation sector.</p>
          </div>

          <div className="h-[550px] w-full rounded-[2.5rem] overflow-hidden relative shadow-xl border border-slate-200/50 bg-slate-100">
            {/* Google Map iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.138407421867!2d-71.06208572421375!3d42.36008247119047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3708a514d232b%3A0xe54e60fc7986968c!2sMassachusetts%20General%20Hospital!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(70%) contrast(95%) opacity(90%)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />

            {/* Floating Marker Card */}
            <div className="absolute top-6 left-6 z-10 p-2 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="bg-white/95 backdrop-blur-md p-5 rounded-3xl shadow-2xl flex items-center gap-5 border border-white/50 max-w-sm pointer-events-auto"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-lg shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-black text-lg text-slate-900 leading-tight">Boston HQ</p>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1">Clinical Innovation District</p>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5">100 Clinical Way, Boston, MA</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
