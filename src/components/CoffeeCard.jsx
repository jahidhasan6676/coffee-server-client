import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee,coffees,setCoffee }) => {

    const {_id, name, chef, supplier, taste, category, details, photo } = coffee;


    const handleDeleteCoffee = id =>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addCoffee/${_id}`,{
                    method:"DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Coffee Successfully deleted.",
                            icon: "success"
                          });

                          const remaining = coffees.filter(coff => coff._id !== id);
                          setCoffee(remaining);
                    }
                });

               
            }
          });
    }
    return (
        <div className=" flex bg-base-100 shadow-xl p-10">
            <figure className="">
                <img className="h-[200px] w-full"
                    src={photo}
                    alt="photo" />
            </figure>
            <div className="flex justify-around items-center gap-6">
                <div>
                    <h2 className="card-title">{name}</h2>

                    <h3>{supplier}</h3>
                    <h3>{taste}</h3>
                    <h3>{category}</h3>
                </div>

                <div className="card-actions">
                    <div className="join join-vertical space-y-2">
                        <button className="btn btn-accent join-item">View</button>
                        <Link to={`/update/${_id}`}><button className="btn btn-success text-white join-item">Edit</button></Link>
                        <button onClick={()=>handleDeleteCoffee(_id)} className="btn btn-info text-white join-item">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;