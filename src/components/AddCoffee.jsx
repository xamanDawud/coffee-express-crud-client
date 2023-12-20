import { Link } from "react-router-dom";
import swal from "sweetalert";

const AddCoffee = () => {
  let addBtnHandler = (e) => {
    e.preventDefault();
    let form = e.target;
    let name = form.name.value;
    let chef = form.chef.value;
    let supplier = form.supplier.value;
    let taste = form.taste.value;
    let category = form.category.value;
    let details = form.details.value;
    let photo = form.photo.value;
    let user = { name, chef, supplier, taste, category, details, photo };

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("Good job!", "Your coffee product is added!", "success");
        }
      })
      .catch((e) => console.log(e));
    form.reset();
  };
  return (
    <div className="bg-[#F4F3F0] p-10">
      <div className="form-upper-content">
        <h1 className="text-3xl text-black my-4">
          Add New{" "}
          <Link className="text-blue-500" to={"/"}>
            Coffee
          </Link>
        </h1>
        <p className="text-center w-2/3 mx-auto my-4 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam
          eaque nemo numquam harum unde repellendus dolorum neque, commodi ex?
        </p>
      </div>
      <form onSubmit={addBtnHandler}>
        {/* Name and Chef textBox */}
        <div className="textBox-wrapper flex gap-6">
          <div className="text-black w-full">
            <p className="text-left ml-2">Name</p>
            <input
              type="text"
              placeholder="Coffee Name"
              className="bg-white input input-bordered w-full "
              name="name"
            />
          </div>
          <div className="text-black w-full">
            <p className="text-left ml-2">Chef</p>
            <input
              type="text"
              placeholder="Chef"
              className="bg-white input input-bordered w-full "
              name="chef"
            />
          </div>
        </div>
        {/* Supplier and Taste textBox */}
        <div className="textBox-wrapper flex gap-6">
          <div className="text-black w-full">
            <p className="text-left ml-2">Supplier</p>
            <input
              type="text"
              placeholder="Enter Supplier"
              className="bg-white input input-bordered w-full "
              name="supplier"
            />
          </div>
          <div className="text-black w-full">
            <p className="text-left ml-2">Taste</p>
            <input
              type="text"
              placeholder="Enter Taste"
              className="bg-white input input-bordered w-full "
              name="taste"
            />
          </div>
        </div>
        {/* Category and Details TextBox */}
        <div className="textBox-wrapper flex gap-6">
          <div className="text-black w-full">
            <p className="text-left ml-2">Category</p>
            <input
              type="text"
              placeholder="Enter Category"
              className="bg-white input input-bordered w-full "
              name="category"
            />
          </div>
          <div className="text-black w-full">
            <p className="text-left ml-2">Details</p>
            <input
              type="text"
              placeholder="Enter Details"
              className="bg-white input input-bordered w-full "
              name="details"
            />
          </div>
        </div>
        {/* Photo textBox */}
        <div className="textBox-wrapper flex gap-6">
          <div className="text-black w-full">
            <p className="text-left ml-2">Photo</p>
            <input
              type="text"
              placeholder="Enter Photo URL"
              className="bg-white input input-bordered w-full "
              name="photo"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="btn bg-[#D2B48C] w-full my-6 text-black"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
