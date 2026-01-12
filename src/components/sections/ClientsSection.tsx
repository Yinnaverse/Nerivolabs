const clientTypes = [
  "Startups & founders",
  "Early-stage product teams",
  "Brands ready to scale",
];

const ClientsSection = () => {
  return (
    <section className="section-padding border-t border-divider">
      <div className="container-narrow">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div>
            <span className="label-mono">Who we work with</span>
            <h2 className="heading-section mt-4">
              Partners building the future.
            </h2>
          </div>

          <div className="space-y-4">
            {clientTypes.map((type, index) => (
              <div
                key={type}
                className="flex items-center gap-4 py-4 border-b border-divider last:border-0"
              >
                <span className="text-xs font-medium text-muted-foreground w-6">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg text-hero">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
