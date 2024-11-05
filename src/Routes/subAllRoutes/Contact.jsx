export const Contact = () => {


    return (
        <>
            <form action="">

                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter Your Name" name="name" />
                <br />
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter your Email" name="email" />
                <br />
                <label htmlFor="">Phone Number</label>
                <input type="number" placeholder="Enter Your Number" name="phone" />

                <button type="submit" name="submit">Submit</button>
            </form>

        </>
    )
}