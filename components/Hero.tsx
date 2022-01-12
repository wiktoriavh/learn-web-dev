export function Hero(): JSX.Element {
  return (
    <div className="h-[36rem] py-28 px-6 mb-6 bg-gradient-radial-top from-[#581C87] via-[#5B1535] to-dark">
      <div className="md:container mx-auto">
        <h1 className="text-6xl text-pink-50 text-center font-light ">
          Learn Web Development from Scratch
        </h1>
        <h2 className="text-2xl md:text-center text-pink-50 my-20 md:w-3/5 mx-auto">
          A compilation of resources from entry level coding to advanced development
          techniques, curated by one of the largest web development communities on Discord.
        </h2>
      </div>
    </div>
  );
}
