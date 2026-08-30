"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

interface DemoFormModalProps {
  open: boolean;
  onClose: () => void;
}

const TEAM_SIZES = ["1", "2-5", "6-10", "11-25", "26+"];

export function DemoFormModal({ open, onClose }: DemoFormModalProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await axios.post(`${API_BASE_URL}/api/demo-request`, {
        name,
        phone,
        email,
        company,
        teamSize,
      });
      onClose();
      router.push("/thank-you");
    } catch {
      setError(
        "Something went wrong while submitting your request. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-[480px] mx-4 bg-white rounded-xl shadow-2xl">
        <div className="flex items-center justify-between p-6 pb-0">
          <div>
            <h2 className="text-[24px] font-medium text-[#1a1a1a]">
              Book a Free Demo
            </h2>
            <p className="text-sm text-[#666] mt-1">
              See how Leadist can transform your sales process.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#f5f5f5] transition-colors"
          >
            <X className="w-5 h-5 text-[#666]" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#3a3a3a]">Full Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Rahul Sharma"
              className="h-11 px-3 rounded-md border border-[#e4e5e6] text-sm text-[#1a1a1a] placeholder:text-[#999] focus:outline-none focus:border-[#2462ff] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#3a3a3a]">Phone</label>
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="h-11 px-3 rounded-md border border-[#e4e5e6] text-sm text-[#1a1a1a] placeholder:text-[#999] focus:outline-none focus:border-[#2462ff] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#3a3a3a]">Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="rahul@company.com"
              className="h-11 px-3 rounded-md border border-[#e4e5e6] text-sm text-[#1a1a1a] placeholder:text-[#999] focus:outline-none focus:border-[#2462ff] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#3a3a3a]">Company Name</label>
            <input
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="ABC Pvt. Ltd."
              className="h-11 px-3 rounded-md border border-[#e4e5e6] text-sm text-[#1a1a1a] placeholder:text-[#999] focus:outline-none focus:border-[#2462ff] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#3a3a3a]">Team Size</label>
            <select
              required
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              className={cn(
                "h-11 px-3 rounded-md border border-[#e4e5e6] text-sm focus:outline-none focus:border-[#2462ff] transition-colors appearance-none bg-[#fff]",
                teamSize ? "text-[#1a1a1a]" : "text-[#999]"
              )}
            >
              <option value="" disabled>
                Select team size
              </option>
              {TEAM_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size} {size === "1" ? "person" : "people"}
                </option>
              ))}
            </select>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="mt-2 h-12 rounded-md bg-[#1a1a1a] text-white font-medium text-sm hover:bg-[#333] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Book Demo"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
