import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-black mb-6">Ready to scale?</h2>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            Stop guessing and start growing. Our team is ready to map out your
            12-month growth trajectory today.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center border border-white/10">
                ✉️
              </div>
              <span>hello@auragrowth.ai</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center border border-white/10">
                📍
              </div>
              <span>Gangnam, Seoul, South Korea</span>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-white/10">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Work Email
              </label>
              <input
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
