import { CIS_FEEDBACK_FORM_URL } from "@/lib/config";

export function CisFeedback() {
  return (
    <section id="cis-feedback" className="mx-auto max-w-4xl px-6 pb-16 sm:pb-20">
      <div className="border-t border-rule pt-8">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-2 font-medium">
          For the CIS Evaluation Team
        </p>
        <h2 className="font-serif text-2xl text-brand">Share Your Feedback</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-foreground max-w-prose">
          Members of the CIS team are warmly invited to leave reflections, questions, or
          observations on this portfolio. Your input is read by the school's accreditation team.
        </p>

        {CIS_FEEDBACK_FORM_URL ? (
          <div className="mt-6 overflow-hidden rounded-md border border-rule">
            <iframe
              src={CIS_FEEDBACK_FORM_URL}
              title="CIS feedback form"
              className="h-[75vh] w-full"
              loading="lazy"
            >
              Loading form…
            </iframe>
          </div>
        ) : (
          <div className="mt-6 rounded-md border border-dashed border-rule bg-neutral-50 px-5 py-10 text-center text-sm text-foreground/60">
            The feedback form will appear here once it has been linked.
          </div>
        )}
      </div>
    </section>
  );
}
