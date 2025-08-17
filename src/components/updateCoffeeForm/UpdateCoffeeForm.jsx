export default function UpdateCoffeeForm() {
  return (
    <>
      <form className="">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          <fieldset className="fieldset min-w-xs">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter coffee name"
            />
            <p className="label"></p>
          </fieldset>
          <fieldset className="fieldset min-w-xs">
            <legend className="fieldset-legend">Chef</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter coffee chef"
            />
            <p className="label"></p>
          </fieldset>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          <fieldset className="fieldset min-w-xs">
            <legend className="fieldset-legend">Supplier</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter coffee supplier"
            />
            <p className="label"></p>
          </fieldset>
          <fieldset className="fieldset min-w-xs">
            <legend className="fieldset-legend">Taste</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter coffee taste"
            />
            <p className="label"></p>
          </fieldset>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          <fieldset className="fieldset min-w-xs">
            <legend className="fieldset-legend">Category</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter coffee category"
            />
            <p className="label"></p>
          </fieldset>
          <fieldset className="fieldset min-w-xs">
            <legend className="fieldset-legend">Details</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter coffee details"
            />
            <p className="label"></p>
          </fieldset>
        </div>
        <div className="flex justify-center">
          <fieldset className="fieldset min-w-xs lg:min-w-2xl">
            <legend className="fieldset-legend">Photo</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter photo URL"
            />
            <p className="label"></p>
          </fieldset>
        </div>
        <div className="flex justify-center">
          <button className="btn min-w-xs lg:min-w-2xl bg-[#D2B48C]">
            Update Coffee Details
          </button>
        </div>
      </form>
    </>
  )
}
