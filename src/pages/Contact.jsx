import { MapPin, Mail, Phone, Printer, ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import MagneticButton from '../components/ui/MagneticButton'

export default function Contact() {
  const mapRef = useRef(null)
  
  const MAP_IMG = "https://images.unsplash.com/photo-1501979034433-4bb7d2abf48a?auto=format&fit=crop&w=1600&q=80" // Boston skyline at night
  const QR_IMG = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://clinilink-os.app&color=0ea5e9" // QR code for website

  const { scrollYProgress: mapProgress } = useScroll({
    target: mapRef,
    offset: ['start end', 'end start']
  })
  
  const mapY = useTransform(mapProgress, [0, 1], ['-10%', '10%'])

  return (
    <main className="bg-slate-50 min-h-screen overflow-hidden selection:bg-primary/20 selection:text-primary">
      
      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          <div className="space-y-16">
            <div className="space-y-6">
              <RevealLine>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9]">
                  Get in touch
                </h1>
              </RevealLine>
              <FadeIn delay={0.2}>
                <p className="text-2xl text-slate-600 font-medium leading-relaxed max-w-lg">
                  Reach out to our team to learn how CliniLink can help improve participant retention in your clinical trials.
                </p>
              </FadeIn>
            </div>

            <div className="grid sm:grid-cols-2 gap-12">
              <FadeIn delay={0.3} className="space-y-6 group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm border border-blue-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Headquarters</h3>
                  <p className="text-lg text-slate-600 font-medium">100 Clinical Way<br/>Boston, MA 02110</p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4} className="space-y-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Email</h3>
                  <p className="text-lg text-slate-600 font-medium group-hover:text-primary transition-colors">hello@clinilink-os.app</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5} className="space-y-6 group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm border border-violet-100">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Telephone</h3>
                  <p className="text-lg text-slate-600 font-medium">+1 (800) 555-0199</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.6} className="space-y-6 group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm border border-amber-100">
                  <Printer size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Fax</h3>
                  <p className="text-lg text-slate-600 font-medium">+1 (800) 555-0198</p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.7} className="pt-12 border-t border-slate-200 flex items-center gap-8">
              <img src={QR_IMG} alt="Scan to visit website" className="w-32 h-32 rounded-2xl border-2 border-slate-200 bg-white p-3 shadow-lg hover:scale-105 transition-transform duration-300" />
              <div>
                <p className="font-black text-2xl text-slate-900 mb-2">Scan for our website</p>
                <p className="text-lg text-slate-500 font-medium">Quickly share CliniLink with your team</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="bg-white rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
            <h2 className="text-4xl font-black text-slate-900 mb-10">Send a Message</h2>
            <form className="space-y-8 relative z-10">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white transition-all duration-300" placeholder="John" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white transition-all duration-300" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Work Email</label>
                <input type="email" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white transition-all duration-300" placeholder="john@cro.com" />
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Organization Type</label>
                <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white transition-all duration-300 text-slate-600 appearance-none font-medium">
                  <option>Select an option</option>
                  <option>CRO</option>
                  <option>Sponsor</option>
                  <option>Research Site</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white transition-all duration-300 resize-none font-medium" placeholder="How can we help?"></textarea>
              </div>

              <MagneticButton className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-primary transition-colors shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 mt-4">
                Submit Request <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </MagneticButton>
            </form>
          </FadeIn>
          
        </div>
      </section>

      {/* PARALLAX MAP SECTION */}
      <section className="h-[600px] w-full relative overflow-hidden" ref={mapRef}>
        <motion.img style={{ y: mapY }} src={MAP_IMG} alt="Boston Map" className="absolute -top-[20%] left-0 w-full h-[140%] object-cover grayscale opacity-80 will-change-transform transform-gpu" />
        <div className="absolute inset-0 bg-slate-900/10" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex items-center gap-6 animate-bounce border border-white/50">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <MapPin size={28} />
            </div>
            <div>
              <p className="font-black text-2xl text-slate-900">Boston HQ</p>
              <p className="text-lg text-slate-600 font-medium">Clinical Innovation District</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
