"use client";

import { useTheme } from "next-themes";

export default function Page() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full text-center py-20 bg-primary text-white">
        <h1 className="text-5xl font-bold mb-4">
          Organize Your Work, Simplify Your Life
        </h1>
        <p className="text-lg mb-6">
          A smarter way to manage tasks, boost productivity, and stay on track.
        </p>
        <button className="bg-secondary text-white px-6 py-3 rounded-xl">
          Get Started Free
        </button>
      </section>

      {/* Problem Section */}
      <section className="w-full max-w-5xl py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-primary">The Problem</h2>
        <p className="text-muted-dark">
          Too many tasks, missed deadlines, and constant stress from
          disorganization. Without the right tools, productivity takes a hit.
        </p>
      </section>

      {/* Solution Section */}
      <section className="w-full max-w-5xl py-16 px-6 bg-muted rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-primary">Our Solution</h2>
        <p>
          TaskFlow brings clarity to your workflow — organize tasks, collaborate
          with teammates, and hit your goals with ease.
        </p>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-primary">Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="p-4 border rounded-xl">✔ Task Organization</li>
          <li className="p-4 border rounded-xl">✔ Prioritization</li>
          <li className="p-4 border rounded-xl">✔ Team Collaboration</li>
          <li className="p-4 border rounded-xl">✔ Integrations</li>
          <li className="p-4 border rounded-xl">✔ Customization</li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="w-full max-w-5xl py-16 px-6 bg-accent text-white rounded-2xl">
        <h2 className="text-3xl font-bold mb-6">Benefits</h2>
        <ul className="space-y-3">
          <li>🚀 Boost your productivity</li>
          <li>😌 Reduce stress</li>
          <li>🤝 Improve collaboration</li>
          <li>📂 Stay organized effortlessly</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-5xl py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-primary">
          What Our Users Say
        </h2>
        <blockquote className="border-l-4 pl-4 italic text-muted-dark">
          “TaskFlow changed the way my team works. Deadlines are no longer a
          nightmare.” – Sarah L.
        </blockquote>
      </section>

      {/* Pricing Section */}
      <section className="w-full max-w-5xl py-16 px-6 bg-muted rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-primary">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl text-center">
            <h3 className="font-bold text-lg">Free</h3>
            <p className="mt-2">Basic features, forever free</p>
            <button className="mt-4 bg-primary text-white">Start Free</button>
          </div>
          <div className="p-6 border rounded-xl text-center">
            <h3 className="font-bold text-lg">Pro</h3>
            <p className="mt-2">$9/mo – Advanced tools</p>
            <button className="mt-4 bg-secondary text-white">Get Pro</button>
          </div>
          <div className="p-6 border rounded-xl text-center">
            <h3 className="font-bold text-lg">Enterprise</h3>
            <p className="mt-2">Custom solutions for teams</p>
            <button className="mt-4 bg-accent text-white">Contact Us</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-5xl py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-primary">FAQ</h2>
        <details className="mb-4">
          <summary className="cursor-pointer font-semibold">
            Is there a free plan?
          </summary>
          <p className="mt-2">Yes, we offer a forever free plan.</p>
        </details>
        <details>
          <summary className="cursor-pointer font-semibold">
            Can I cancel anytime?
          </summary>
          <p className="mt-2">Absolutely, you can cancel at any time.</p>
        </details>
      </section>

      {/* CTA Section */}
      <section className="w-full text-center py-16 bg-primary text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <button className="bg-secondary text-white px-6 py-3 rounded-xl">
          Start Free Trial
        </button>
      </section>

      {/* Footer Section */}
      <footer className="w-full py-10 text-center text-sm text-muted-dark">
        <p>© 2025 TaskFlow. All rights reserved.</p>
        <p className="mt-2">Terms · Privacy · Contact</p>
        <button
          className="mt-4 underline"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Toggle {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </footer>
    </main>
  );
}
