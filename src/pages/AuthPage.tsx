import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function AuthPage({ mode }: { mode: "login" | "signup" }) {
  const isLogin = mode === "login";
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 justify-center mb-8">
          <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="font-semibold text-lg tracking-tight">FocusFlow</div>
        </div>
        <div
          className="rounded-3xl border border-border/60 p-8 backdrop-blur-xl"
          style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-soft)" }}
        >
          <h1 className="text-2xl font-semibold tracking-tight">{isLogin ? "Welcome back" : "Create your account"}</h1>
          <p className="text-sm text-muted-foreground mt-1 mb-6">
            {isLogin ? "Sign in to continue your flow." : "Start your productivity journey today."}
          </p>

          <div className="space-y-4">
            {!isLogin && (
              <Field label="Full Name" type="text" placeholder="Alex Carter" />
            )}
            <Field label="Email" type="email" placeholder="you@focusflow.com" />
            <Field label="Password" type="password" placeholder="••••••••" />

            <button
              className="w-full py-2.5 rounded-xl text-sm font-medium text-primary-foreground transition hover:opacity-90"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              {isLogin ? "Sign in" : "Create account"}
            </button>

            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border/60" /></div>
              <div className="relative flex justify-center"><span className="px-2 text-[11px] uppercase tracking-widest text-muted-foreground bg-card">or</span></div>
            </div>

            <button className="w-full py-2.5 rounded-xl text-sm font-medium border border-border/60 hover:bg-secondary/60 transition">
              Continue with Google
            </button>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-6">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Link to={isLogin ? "/signup" : "/login"} className="text-primary hover:underline">
              {isLogin ? "Sign up" : "Sign in"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground mb-1.5 block">{label}</span>
      <input
        {...rest}
        className="w-full px-3 py-2.5 text-sm rounded-xl bg-input border border-border/60 outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground"
      />
    </label>
  );
}