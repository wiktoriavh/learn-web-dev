export function Hero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}): JSX.Element {
  return (
    <div className="min-h-96 max-h-screen py-28 px-6 mb-6 bg-gradient-radial-top from-[#581C87] via-[#5B1535] to-dark">
      <div className="md:container mx-auto">
        <h1 className="text-5xl text-pink-50 text-center font-light ">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-2xl md:text-center text-pink-50 my-20 md:w-3/5 mx-auto">
            {subtitle}
          </h2>
        )}
      </div>
    </div>
  );
}
