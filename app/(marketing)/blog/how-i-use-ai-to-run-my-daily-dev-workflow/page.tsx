import type { Metadata } from 'next';
import { Blog } from '@/layouts/Blog';

const skillExamples = [
  {
    title: 'Session Setup',
    eyebrow: 'Workflow',
    description: 'Open the right repository, pick the right branch, and start from a predictable setup instead of rebuilding context by hand.',
  },
  {
    title: 'Pull Request Review',
    eyebrow: 'Quality',
    description:
      'Run through the same checks for correctness, conventions, and test coverage every time, then classify findings as P1, P2, or P3 with a clear summary.',
  },
  {
    title: 'Business Admin',
    eyebrow: 'Operations',
    description: 'Handle recurring records with the right structure and formatting without stopping to remember every detail.',
  },
  {
    title: 'Architecture Cleanup',
    eyebrow: 'Codebase',
    description: 'Apply the same architectural rules across edits so refactors feel intentional rather than improvised.',
  },
];

const environmentPrinciples = [
  'Predictable workspace root',
  'Plain-text instructions near the code',
  'Shared command folders wired into the assistant',
  'Dynamic paths that travel well between machines',
  'Worktrees for clean branch isolation',
  'Fast access to a new focused session',
];

const workProjectExamples = [
  'Start in the right repository, branch, and local environment',
  'Follow team-specific review and testing expectations',
  'Apply architectural patterns consistently across changes',
  'Reduce the overhead of switching between active projects',
  'Make handoffs cleaner because more of the workflow is documented',
];

const commandExamples = [
  { name: '/start-workspace', label: 'Bootstrap', description: 'Sync the workspace and get oriented quickly.' },
  { name: '/open-repo', label: 'Context', description: 'Choose a repo, fetch branches, and open a focused worktree.' },
  { name: '/review-changes', label: 'Review', description: 'Run a structured review flow instead of an ad hoc pass.' },
  { name: '/clean-architecture', label: 'Refine', description: 'Apply the project’s preferred architecture rules consistently.' },
];

const rolePanels = [
  {
    title: 'Orchestration',
    label: 'Claude',
    accent: 'from-red-500/15 via-red-100 to-white',
    border: 'border-red-200',
    items: ['Choose where I am working', 'Pull in the right context', 'Load the right instructions', 'Start the session without repetition'],
  },
  {
    title: 'Execution',
    label: 'Codex',
    accent: 'from-gray-900/8 via-gray-100 to-white',
    border: 'border-gray-200',
    items: ['Work close to the code', 'Read the repository carefully', 'Make changes and run checks', 'Tighten up the final result'],
  },
];

const FeatureCardGrid = ({ items }: { items: { title: string; eyebrow: string; description: string }[] }) => {
  return (
    <div className="not-prose grid gap-4 md:grid-cols-2 my-8">
      {items.map(item => (
        <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_12px_32px_rgba(0,0,0,0.05)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600">{item.eyebrow}</p>
          <h3 className="mt-3 text-xl font-semibold text-black">{item.title}</h3>
          <p className="mt-3 text-base leading-7 text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

const PillGrid = ({ items }: { items: string[] }) => {
  return (
    <div className="not-prose flex flex-wrap gap-3 my-8">
      {items.map(item => (
        <div key={item} className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
          {item}
        </div>
      ))}
    </div>
  );
};

const CommandGrid = () => {
  return (
    <div className="not-prose my-8 overflow-hidden rounded-[28px] border border-gray-900 bg-neutral-950 text-white shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="text-xs uppercase tracking-[0.3em] text-red-400">Command Layer</p>
        <h3 className="mt-2 text-2xl font-semibold">Fast paths for common flows</h3>
      </div>
      <div className="grid gap-px bg-white/10 md:grid-cols-2">
        {commandExamples.map(command => (
          <div key={command.name} className="bg-neutral-950 p-5">
            <div className="flex items-center justify-between gap-4">
              <code className="text-sm text-red-300">{command.name}</code>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60">{command.label}</span>
            </div>
            <p className="mt-4 text-base leading-7 text-white/75">{command.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const FavoriteSkillHighlight = () => {
  return (
    <div className="not-prose my-8 overflow-hidden rounded-[28px] border border-red-200 bg-gradient-to-br from-red-50 via-white to-orange-50 shadow-[0_18px_50px_rgba(220,38,38,0.12)]">
      <div className="border-b border-red-100 px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">Favorite Skill</p>
        <h3 className="mt-2 text-3xl font-semibold text-black">Structured PR Review</h3>
      </div>
      <div className="grid gap-px bg-red-100 md:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4 bg-white px-6 py-6">
          <p className="text-base leading-7 text-gray-700">
            This is probably my favorite part of the whole setup. The review skill reads the pull request, checks the implementation carefully, classifies
            findings with priority badges, and leaves a summary that is actually useful.
          </p>
          <div className="flex flex-wrap gap-3">
            <img src="https://img.shields.io/badge/P1-critical-red" alt="P1 critical badge" className="h-6 w-auto" />
            <img src="https://img.shields.io/badge/P2-major-orange" alt="P2 major badge" className="h-6 w-auto" />
            <img src="https://img.shields.io/badge/P3-minor-blue" alt="P3 minor badge" className="h-6 w-auto" />
          </div>
          <p className="text-base leading-7 text-gray-700">
            It turns review into a repeatable system instead of a fuzzy vibe check. That matters a lot on work projects where consistency is part of the job.
          </p>
          <p className="text-base leading-7 text-gray-700">
            When everything looks good, it can also approve the pull request with a simple checkmark and <code>LGTM</code>, which keeps the clean cases fast
            without losing the structure.
          </p>
        </div>
        <div className="space-y-3 bg-neutral-950 px-6 py-6 text-white">
          <div className="rounded-2xl border border-red-500/30 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.22em] text-red-300">Priority Model</p>
            <p className="mt-2 text-sm leading-6 text-white/80">
              Critical issues rise to the top, substantial fixes are clear, and lighter improvements stay lightweight.
            </p>
          </div>
          <div className="rounded-2xl border border-red-500/30 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.22em] text-red-300">Review Output</p>
            <p className="mt-2 text-sm leading-6 text-white/80">
              Inline comments where needed, a summary that explains the overall state of the PR, and a quick ✅ <code>LGTM</code> approval when the review is
              clean.
            </p>
          </div>
          <div className="rounded-2xl border border-red-500/30 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.22em] text-red-300">Team Signal</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-lg">👍</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-red-400/30 bg-red-500/10 text-lg">👎</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Valid comments get a positive reaction before the fix is made and resolved. Invalid comments get a negative reaction, a short explanation, and
              then the thread is closed.
            </p>
          </div>
          <div className="rounded-2xl border border-red-500/30 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.22em] text-red-300">AI Signature</p>
            <p className="mt-2 text-sm leading-6 text-white/80">
              All AI comments are signed so they are easy to distinguish from manual human feedback in the pull request conversation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ToolStack = () => {
  return (
    <div className="not-prose my-8 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[28px] border border-red-200 bg-gradient-to-br from-red-50 via-white to-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600">Planning Tool</p>
        <div className="mt-4 flex items-end justify-between gap-4">
          <h3 className="text-3xl font-semibold text-black">Claude</h3>
          <span className="rounded-full border border-red-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-red-700">Pro</span>
        </div>
        <p className="mt-4 text-base leading-7 text-gray-700">
          I use Claude for shaping the session before code starts moving. It is the tool I reach for when I want to load instructions, navigate a workspace,
          reason through the next move, or kick off one of my command-driven flows.
        </p>
      </div>
      <div className="rounded-[28px] border border-gray-200 bg-neutral-950 p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-400">Implementation Tool</p>
        <h3 className="mt-4 text-3xl font-semibold">Codex</h3>
        <p className="mt-4 text-base leading-7 text-white/75">
          I use Codex when I want a tool that stays closer to the repository. It is where I want careful file reads, code edits, checks, and a tighter loop
          between implementation and verification.
        </p>
      </div>
    </div>
  );
};

const CrossReviewDiagram = () => {
  return (
    <div className="not-prose my-8 rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.07)]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-600">Cross-Check</p>
          <h3 className="mt-2 text-2xl font-semibold text-black">Sometimes the tools review each other in a loop</h3>
        </div>
        <p className="max-w-md text-sm leading-6 text-gray-600">
          The point is not ceremony. It is a fast second perspective that can keep cycling until the change is clean enough to approve.
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:grid-rows-[auto_auto_auto] md:items-center">
        <div className="rounded-[24px] border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5 md:col-start-1 md:row-start-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Implementation</p>
          <p className="mt-3 text-2xl font-semibold text-black">Codex</p>
          <p className="mt-2 text-sm leading-6 text-gray-600">Implements the change</p>
        </div>
        <div className="flex items-center justify-center md:col-start-2 md:row-start-1">
          <div className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">Review</div>
        </div>
        <div className="rounded-[24px] border border-red-200 bg-gradient-to-br from-red-50 to-white p-5 md:col-start-3 md:row-start-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">Reviewer</p>
          <p className="mt-3 text-2xl font-semibold text-black">Claude</p>
          <p className="mt-2 text-sm leading-6 text-gray-600">Reviews the pull request</p>
        </div>
        <div className="hidden md:flex md:col-start-3 md:row-start-2 md:justify-center">
          <div className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700">Feedback loop</div>
        </div>
        <div className="rounded-[24px] border border-red-200 bg-gradient-to-br from-red-50 to-white p-5 md:col-start-1 md:row-start-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">Workflow</p>
          <p className="mt-3 text-2xl font-semibold text-black">Claude</p>
          <p className="mt-2 text-sm leading-6 text-gray-600">Can also drive the workflow</p>
        </div>
        <div className="flex items-center justify-center md:col-start-2 md:row-start-3">
          <div className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700">Inspect</div>
        </div>
        <div className="rounded-[24px] border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5 md:col-start-3 md:row-start-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Verifier</p>
          <p className="mt-3 text-2xl font-semibold text-black">Codex</p>
          <p className="mt-2 text-sm leading-6 text-gray-600">Checks the implementation</p>
        </div>
      </div>
      <div className="mt-4 rounded-2xl border border-sky-200 bg-sky-50 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sky-300 bg-white text-sky-700">i</div>
          <p className="text-sm leading-6 text-sky-900">
            Either tool can make the first move, the other can review it, and the loop keeps going until the PR is clean enough to approve.
          </p>
        </div>
      </div>
    </div>
  );
};

const EvolvingWorkflowSummary = () => {
  return (
    <div className="not-prose my-8 rounded-[28px] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-red-50 p-6 shadow-[0_18px_50px_rgba(245,158,11,0.12)]">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">Current Snapshot</p>
      <h3 className="mt-2 text-3xl font-semibold text-black">This is my workflow right now</h3>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-gray-500">As of March 14, 2026</p>
      <p className="mt-4 text-base leading-7 text-gray-700">
        This setup is what works for me at the moment, but I do not expect it to stay frozen. AI tooling is moving quickly, the strengths of each product keep
        shifting, and my habits will keep evolving with them.
      </p>
      <p className="mt-4 text-base leading-7 text-gray-700">
        The important part is not memorizing this exact stack. It is building a workflow that can adapt as the tools change.
      </p>
    </div>
  );
};

const IntroSnapshot = () => {
  return (
    <div className="not-prose my-8 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-600">Current Setup</p>
        <h2 className="mt-2 text-3xl font-semibold text-black">Two tools, shared CLI, reusable skills</h2>
        <p className="mt-4 text-base leading-7 text-gray-700">
          My current workflow is simple to describe: I usually lean on one tool more for orchestration and the other more for implementation, but I can swap
          them depending on the task. Both sit on top of a shared command line and a library of repeatable skills.
        </p>
      </div>
      <div className="rounded-[28px] border border-red-200 bg-gradient-to-br from-red-50 via-white to-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600">Why It Works</p>
        <div className="mt-4 space-y-3">
          <div className="rounded-2xl bg-white/90 px-4 py-3">
            <p className="flex items-center gap-3 text-sm font-semibold text-black">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
              <span>Less repeated setup</span>
            </p>
          </div>
          <div className="rounded-2xl bg-white/90 px-4 py-3">
            <p className="flex items-center gap-3 text-sm font-semibold text-black">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
              <span>Better review consistency</span>
            </p>
          </div>
          <div className="rounded-2xl bg-white/90 px-4 py-3">
            <p className="flex items-center gap-3 text-sm font-semibold text-black">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
              <span>Faster context switching</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoleSplit = () => {
  return (
    <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
      {rolePanels.map(role => (
        <div key={role.title} className={`rounded-[24px] border ${role.border} bg-gradient-to-br ${role.accent} p-6 shadow-[0_14px_40px_rgba(0,0,0,0.06)]`}>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600">{role.label}</p>
          <h3 className="mt-3 text-2xl font-semibold text-black">{role.title}</h3>
          <div className="mt-5 space-y-3">
            {role.items.map(item => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 backdrop-blur-sm">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                </div>
                <p className="m-0 text-base leading-7 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const metadata: Metadata = {
  title: 'How I Use AI to Run My Daily Dev Workflow | Jes Anub',
  description: 'A practical look at the AI-assisted workflow I use on jes.ph.',
  openGraph: {
    images: [
      {
        url: '/jes-code.png',
        width: 1200,
        height: 630,
        alt: 'How I Use AI to Run My Daily Dev Workflow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/jes-code.png'],
  },
};

const BlogPost = () => {
  return (
    <Blog title="How I Use AI to Run My Daily Dev Workflow" date="March 14, 2026">
      <section className="space-y-5">
        <p>
          I do not use AI as a replacement for thinking. I use it as structure. The biggest shift in my workflow happened when I stopped opening a blank chat
          window and started building a repeatable system around the kind of work I do every day.
        </p>
        <IntroSnapshot />
        <p>
          That system now helps me move from idea to implementation faster. It also reduces context switching, removes a lot of repeated setup, and gives me a
          cleaner handoff between planning and shipping.
        </p>
      </section>

      <section className="space-y-5 bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">I Use Two Different AI Roles</h2>
        <p>
          I currently pay for Claude and Codex, and my workflow got much better once I stopped treating them as interchangeable. I give each one a job that
          matches the way I actually like to work.
        </p>
        <RoleSplit />
        <p>Separating those roles sounds small, but it changes the feel of the day. One side helps me get oriented. The other helps me finish the work.</p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold mb-4">The Tools I Actually Use</h2>
        <p>
          I have been lucky to join a genuinely AI-first company, so at work we lean into AI properly and I have broad access to the tools I need. On the
          personal side, I keep pro subscriptions for the tools I use most. In both cases, having access to Claude and Codex does not feel like duplication. It
          feels like a useful split between planning and execution.
        </p>
        <ToolStack />
        <p>
          One thing I like is that both parts of the setup can lean on the same command-line foundation. In both apps, I use the GitHub CLI heavily, which means
          repository operations, pull request review, and follow-up actions can all stay close to the terminal instead of turning into browser work.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold mb-4">Skills Beat Repeated Prompts</h2>
        <p>
          The most useful part of my setup is not a model. It is the layer of small written instructions I keep around the work. I treat those instructions like
          lightweight skills. Each one is focused on a specific task and describes the steps clearly enough that I do not need to reconstruct the process every
          time.
        </p>
        <p>
          I keep these as plain markdown files because I want them to be easy to read, easy to update, and close enough to the codebase that they evolve with
          the work instead of becoming stale documentation.
        </p>
        <p>That might look more like a small system than a prompt:</p>
        <FeatureCardGrid items={skillExamples} />
        <p>
          This gives me a much better result than relying on memory. Instead of writing a clever prompt over and over, I write the workflow down once and let
          the assistant follow it.
        </p>
        <FavoriteSkillHighlight />
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold mb-4">Commands Are Where the Momentum Comes From</h2>
        <p>
          I also keep a small set of commands around the workspace so I can start common flows quickly. These are not fancy. That is the point. They exist to
          remove friction.
        </p>
        <p>
          One command helps me start a workspace session. Another helps me pick a repository, fetch branches, create or reuse a worktree, and open the right
          environment.
        </p>
        <p>
          When the command layer is doing its job, I spend less time remembering setup steps and more time deciding what actually matters. That makes AI feel
          less like an interruption and more like part of the operating system of the project.
        </p>
        <CommandGrid />
        <p>The exact command names are less important than the idea behind them. I want common actions to be short, obvious, and easy to trust.</p>
        <p>
          I also like wiring those commands into the assistants directly instead of keeping them in a separate mental drawer. When the commands are exposed
          through the tool I am already using, I reach for them more often and the workflow stays fast.
        </p>
        <p>
          The GitHub CLI is a big part of that. It is the shared layer I use across both apps for PR inspection, diffs, metadata, and the follow-up work that
          happens after review.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold mb-4">A Good AI Workflow Is Mostly Good Environment Design</h2>
        <p>
          A lot of people talk about AI workflow as if the magic is all in the model. My experience has been the opposite. The quality comes from environment
          design.
        </p>
        <p>For me, that means a few things:</p>
        <PillGrid items={environmentPrinciples} />
        <p>
          None of this is flashy, but it compounds. Once the environment starts carrying some of the load, the assistant can be more useful because it is
          entering a system instead of a blank room.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold mb-4">Why It Matters More on Work Projects</h2>
        <p>
          Work projects are where this kind of setup really pays off. There are more services, more conventions, more review expectations, and usually more
          hidden knowledge that slows people down.
        </p>
        <p>
          In that kind of environment, the orchestration side helps load the right project context, branch strategy, and team instructions before any code gets
          touched. The execution side can then work inside those constraints instead of guessing.
        </p>
        <p>In practice, that means AI becomes much more useful for things like:</p>
        <PillGrid items={workProjectExamples} />
        <p>
          A good example is code review. If the review flow already knows to check correctness, convention drift, test coverage, and whether feedback belongs as
          inline comments or a higher-level summary, the assistant can behave much more like a reliable teammate and much less like a generic assistant.
        </p>
        <p>
          I also have a follow-up skill for handling review comments after they land. It reads through the open pull request comments, decides whether each one
          is valid, reacts to it, and then takes the next step with intention.
        </p>
        <p>
          This works as a loop. If the comment is valid, the workflow reacts positively, updates the code, pushes the change, and resolves the thread. If the
          comment is not worth acting on, it reacts negatively, explains why it can be skipped, and resolves the thread without wasting time. The loop closes
          once the review is clean and the pull request is approved.
        </p>
        <CrossReviewDiagram />
        <p>
          The bigger the project gets, the less I want to rely on memory. That is why I keep coming back to skills, commands, and project-local instructions.
          They make AI more predictable, which is what I want when the work is shared with other people.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold mb-4">My Goal Is Not More AI</h2>
        <p>
          The goal is not to add AI to every possible step. The goal is to remove avoidable friction, keep context intact, and create enough structure that I
          can stay in motion.
        </p>
        <p>
          That is the workflow I keep coming back to: default roles for planning and shipping, the freedom to swap tools when the task calls for it, and a layer
          of reusable skills and commands in the middle that makes the whole thing feel reliable.
        </p>
        <EvolvingWorkflowSummary />
      </section>
    </Blog>
  );
};

export default BlogPost;
