import { PiEnvelope } from "react-icons/pi";

export default function Support() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-xl bg-yellow-200/10 p-6 backdrop-blur-lg">
        <div className="mb-4 flex items-center gap-3">
          <PiEnvelope className="h-6 w-6 text-yellow-200" />
          <h1 className="font-oxanium text-3xl">Support</h1>
        </div>
        <p className="text-gray-200">
          Have a question or need help? Send me an email at{" "}
          <a
            href="mailto:j.augugliaro@proton.me"
            className="text-yellow-200 underline"
          >
            j.augugliaro@proton.me
          </a>
        </p>
      </div>
    </div>
  );
}
