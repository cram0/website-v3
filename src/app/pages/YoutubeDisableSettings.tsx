import { Link } from "react-router";

export default function YoutubeDisableSettings() {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-yellow-200/10 p-6 backdrop-blur-lg">
      <div className="flex items-center gap-4">
        <img
          src="/projects/youtube-disable-settings.png"
          alt="YouTube Disable Settings"
          className="h-16 w-16"
        />
        <h1 className="font-oxanium text-3xl text-yellow-200">
          YouTube Disable Settings
        </h1>
      </div>
      <p className="leading-relaxed text-gray-200">
        A Chrome extension that automatically turns off Stable volume, Voice
        boost, Annotations and Ambient mode in the YouTube player. Each feature
        can be switched on or off from the extension's popup.
      </p>

      <section className="mb-8">
        <h2 className="font-oxanium mb-4 border-b-2 border-yellow-200 pb-2 text-2xl font-bold text-white">
          Privacy Policy
        </h2>
        <p className="mb-3 text-sm text-gray-300 italic">
          Last updated: November 5, 2026
        </p>
        <p className="mb-3 leading-relaxed text-gray-200">
          YouTube Disable Settings does not collect, sell or transmit any
          personal data, and does not store anything on a server.
        </p>
        <ul className="mb-4 ml-6 list-disc space-y-2">
          <li className="leading-relaxed text-gray-200">
            It runs only on YouTube pages, to turn off the player options chosen
            by the user.
          </li>
          <li className="leading-relaxed text-gray-200">
            The only information saved is these on/off preferences, using
            Chrome's built-in storage (chrome.storage.sync). They stay in the
            user's Chrome account and are never sent to the developer or any
            third party.
          </li>
          <li className="leading-relaxed text-gray-200">
            The extension uses no cookies, analytics, advertising or remote
            code.
          </li>
          <li className="leading-relaxed text-gray-200">
            Uninstalling the extension removes all of its saved preferences.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-oxanium mb-4 border-b-2 border-yellow-200 pb-2 text-2xl font-bold text-white">
          Contact
        </h2>
        <p className="leading-relaxed text-gray-200">
          Questions about this policy? See the{" "}
          <Link to="/support" className="text-yellow-200 underline">
            Support
          </Link>{" "}
          page.
        </p>
      </section>
    </div>
  );
}
