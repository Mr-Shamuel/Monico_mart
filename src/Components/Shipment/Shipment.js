import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import swal from 'sweetalert';
import { CartDetails, UserContext } from '../../App';
import shipimg from '../../Img/hd regimg.png';
import Zoom from 'react-reveal/Zoom';
const Shipment = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        swal({
            title: "Thanks For Your Order",
            text: "Your Order is successfully Placed",
            icon: "success",
            button: "ok",
        });
    };

    const [loggedInUser] = useContext(UserContext);
    const [cartData] = useContext(CartDetails);

    return (

        <div className="container mb-5">
            <Zoom top>
                <h3 className="text-center">Please Complete your order by filling up this form</h3>
            </Zoom>

            <Zoom>
                <div className="row">
                    <div className="col-md-6">
                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                            <input className="bg-warning" defaultValue={" total Order: $" + cartData}   {...register("cart", { required: true })} placeholder="Enter your email" />



                            <input defaultValue={loggedInUser.displayName}  {...register("name", { required: true })} placeholder="Enter Your name" />
                            {errors.name && <span className="error  ">Name is required</span>}

                            <input defaultValue={loggedInUser.email}   {...register("email", { required: true })} placeholder="Enter your email" />
                            {errors.email && <span className="error">Email is required</span>}

                            <input   {...register("address", { required: true })} placeholder="Your Address" />
                            {errors.address && <span className="error">Addressr is required</span>}
                            <input   {...register("phone", { required: true })} placeholder="Your Phone Number" />
                            {errors.phone && <span className="error">Phone Number is required</span>}

                            <input className="btn btn-primary " type="submit" />


                        </form>
                    </div>
                    <div className="col-md-6">
                        <img style={{ width: '50%', display: "block", margin: "30px auto" }} src={shipimg} alt="" />
                    </div>
                </div>

            </Zoom>


        </div>
    );
};

export default Shipment;