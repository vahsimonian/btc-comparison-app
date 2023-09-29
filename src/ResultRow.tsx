import paybisLogo from "./assets/paybis.png";

type ResultRowProps = {
  loading?: boolean;
  providerName?: string;
  btc?: string;
};

type Logo = { source: string; invert?: boolean };
const logos: { [keys: string]: Logo } = {
  paybis: { source: paybisLogo, invert: true },
  guardarian: { source: "https://guardarian.com/main-logo.svg" },
  moonpay: { source: "https://www.moonpay.com/assets/logo-full-white.svg" },
  transak: {
    source: "https://assets.transak.com/images/website/transak-logo.svg",
  },
};

function ResultRow({ loading, providerName, btc }: ResultRowProps) {
  return (
    <a href={`https://${providerName}.com`} target="_blank">
      <div className="block relative border min-h-[64px] border-white/10 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 my-2 overflow-hidden">
        <div className="flex gap-4">
          {providerName && (
            <div className="grow items-center flex">
              <img
                src={logos[providerName]?.source}
                className={logos[providerName]?.invert ? "invert" : ""}
                alt="bit"
                width={120}
              />
            </div>
          )}

          {btc && (
            <div className="flex gap-2">
              <span className="npmtext-xl text-purple-200/80">
                {new Intl.NumberFormat("sv-SE", {
                  minimumFractionDigits: 8,
                }).format(parseFloat(btc))}
              </span>
              <span className="text-xl text-purple-200/50">BTC</span>
            </div>
          )}
        </div>
        {loading && (
          <div className="inset-0 absolute bg-gradient-to-r from-transparent via-blue-800/50 to-transparent skeleton-animation" />
        )}
      </div>
    </a>
  );
}

export default ResultRow;
