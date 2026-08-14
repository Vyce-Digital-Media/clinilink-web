import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "114282aa-cf34-4e12-bcd7-0d6b5f122e99");
    formData.append("subject", "New Contact Request from CliniLink");
    formData.append("Organization Type", inquiryType);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col justify-center z-10 relative text-white">

            {/* Top Text Details */}
            <div className="space-y-6 max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">
                  Contact CliniLink
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.1] text-white">
                  Let’s Talk About Trial Retention
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-lg text-slate-300 font-medium leading-relaxed"
              >
                Interested in improving participant retention, reducing dropout risk, or exploring a pilot? We’d be glad to connect.
              </motion.p>
            </div>



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
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-1">Send Us a Message</h2>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">Tell us a little about your organization and what you’d like to discuss.</p>
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
                        name="First Name"
                        required
                        placeholder="First Name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-sm focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <input
                        type="text"
                        name="Last Name"
                        required
                        placeholder="Last Name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-sm focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                  </motion.div>

                  {/* Email & Company Fields */}
                  <motion.div variants={formItemVariants} className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <input
                        type="email"
                        name="Email"
                        required
                        placeholder="Work email"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-sm focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <input
                        type="text"
                        name="Company"
                        required
                        placeholder="Company"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-sm focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                  </motion.div>

                  {/* Organization Type Select Pills */}
                  <motion.div variants={formItemVariants} className="space-y-2">
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Organization type</span>
                    <div className="flex flex-wrap gap-2 pt-0.5">
                      {["Sponsor", "CRO", "Research site", "Site network", "Partner", "Other"].map((type) => {
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
                      name="Message"
                      required
                      placeholder="Message"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none font-medium text-slate-800 placeholder:text-slate-400 h-[100px]"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div variants={formItemVariants} className="pt-1">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full border border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white hover:shadow-xl hover:shadow-slate-950/10 transition-all duration-300 text-xs tracking-wide uppercase"
                    >
                      Contact Us
                    </button>
                  </motion.div>

                </form>
              )}
            </motion.div>
          </div>

        </motion.div>
      </section>

      {/* HOW CAN WE HELP SECTION */}
      <section className="w-full relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">How Can We Help?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Explore a Pilot",
                desc: "For sponsors, CROs, or research sites interested in testing CliniLink in a real trial workflow."
              },
              {
                title: "Request a Demo",
                desc: "See how CliniLink helps teams identify retention risk and coordinate follow-up."
              },
              {
                title: "Partner With Us",
                desc: "For sites, CROs, advisors, or technology partners interested in collaboration."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECT CONTACT & MAP SECTION */}
      <section className="w-full relative py-24 bg-slate-50 border-t border-slate-100" ref={mapRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Contact Info */}
            <div className="flex flex-col justify-center h-full py-8 lg:py-0">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight uppercase">Address</h2>
                <div className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed space-y-3">
                  <p>59 Lowe’s Way, Ste 104-B</p>
                  <p>Lowell, MA 01851</p>
                  <p className="pt-4">Tel : <a href="tel:8574128030" className="hover:text-blue-600 transition-colors">857.412.8030</a></p>
                  <p>Email : <a href="mailto:info@clinilinkhealth.com" className="text-blue-600 hover:text-blue-700 transition-colors">info@clinilinkhealth.com</a></p>
                </div>
              </div>
            </div>

            {/* Right: Map */}
            <div className="h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-slate-200/50 bg-slate-100">
              <iframe
                src="https://maps.google.com/maps?q=59%20Lowe's%20Way,%20Lowell,%20MA%2001851&t=&z=14&ie=UTF8&iwloc=&output=embed"
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
                <div
                  className="bg-white/95 backdrop-blur-md p-5 rounded-3xl shadow-2xl flex items-center gap-5 border border-white/50 max-w-xs pointer-events-auto"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-lg shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-black text-lg text-slate-900 leading-tight">CliniLink</p>
                    <p className="text-[11px] text-slate-500 font-semibold mt-1">59 Lowe’s Way, Ste 104-B</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
