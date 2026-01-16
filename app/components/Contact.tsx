import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contato"
      className="mx-auto max-w-6xl space-y-10 px-6 py-24"
    >
      <Reveal>
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-[#11100f] p-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cfc5b8]">
              Vamos conversar
            </p>
            <h2 className="font-playfair text-3xl text-[#f6f2ed] md:text-4xl">
              Transforme sua ideia em um espaço icônico.
            </h2>
            <p className="text-sm leading-relaxed text-[#d8cfc2]">
              Conte sobre seu projeto e receba uma proposta personalizada com
              cronograma, investimento e direção criativa sob medida.
            </p>
          </div>
          <div className="space-y-4">
            <a
              href="mailto:contato@atelier.com"
              data-cursor="interactive"
              className="flex items-center justify-between rounded-full border border-[#f6f2ed] px-6 py-4 text-xs uppercase tracking-[0.3em] text-[#f6f2ed] transition hover:bg-[#f6f2ed] hover:text-[#0a0a0a]"
            >
              contato@atelier.com
              <span>↗</span>
            </a>
            <div className="rounded-2xl border border-white/10 bg-[#0f0e0d] p-5 text-sm text-[#cfc5b8]">
              <p className="uppercase tracking-[0.3em] text-xs text-[#a99f92]">
                Atendimento exclusivo
              </p>
              <p className="mt-2">
                Três Pontas - MG · CEP 37190-000
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
