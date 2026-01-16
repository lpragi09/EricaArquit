import { Reveal } from "./Reveal";

export function Studio() {
  return (
    <section
      id="estudio"
      className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.1fr]"
    >
      <Reveal>
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#cfc5b8]">
            Estúdio
          </p>
          <h2 className="font-playfair text-3xl text-[#f6f2ed] md:text-4xl">
            Uma assinatura feminina, precisa e profundamente humana.
          </h2>
          <p className="text-sm leading-relaxed text-[#d8cfc2]">
            Inspirado em estúdios premiados de arquitetura autoral, o estúdio
            combina rigor técnico, sensibilidade artística e acompanhamento
            próximo em todas as etapas.
          </p>
          <div className="grid gap-6 pt-4 md:grid-cols-3">
              {[
              { label: "Projetos autorais", value: "60+" },
              { label: "Anos de prática", value: "2" },
              { label: "Clientes premium", value: "40+" },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-[#a99f92]">
                  {item.label}
                </p>
                <p className="font-playfair text-2xl text-[#f6f2ed]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center p-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-transparent" />
          <div className="relative grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[#cfc5b8]">
                Método de trabalho
              </p>
              <h3 className="font-playfair text-2xl text-[#f6f2ed]">
                Curadoria estética e gestão precisa de cada etapa.
              </h3>
              <p className="text-sm leading-relaxed text-[#d8cfc2]">
                Uma metodologia autoral que combina pesquisa, engenharia de
                custos e experiência sensorial para entregar obras impecáveis.
              </p>
            </div>
            <div className="rounded-2xl bg-[#0a0a0a]/75 p-6 backdrop-blur">
              <ul className="space-y-4 text-sm text-[#f6f2ed]">
                <li>Briefing imersivo e diagnóstico estratégico</li>
                <li>Anteprojeto com narrativa visual editorial</li>
                <li>Compatibilização, obra e curadoria final</li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
