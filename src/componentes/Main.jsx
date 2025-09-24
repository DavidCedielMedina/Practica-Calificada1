

export default function Main(props) {
  return (
    <div className="flex sm:even:pt-20 md:even:pt-0 justify-center">
        <div className="flex flex-col  h-full">
            <img className="h-[220px]  sm:h-[270px] w-[200px]" src={props.src} alt={props.alt} />
            <h3><strong>{props.name}</strong></h3>
        </div>
        <h3 className="font-serif" style={{writingMode: "vertical-rl"}}>{props.job}</h3>
    </div>
  )
}
