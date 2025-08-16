export default function FeatureItem({ img, title, description }) {
  return (
    <>
      <div className="m-5">
        <img src={img} alt="" />
        <h1 className="text-4xl">{title}</h1>
        <p>{description}</p>
      </div>
    </>
  )
}
