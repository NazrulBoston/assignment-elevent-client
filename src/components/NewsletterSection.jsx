import swal from "sweetalert";

const NewsletterSection = () => {

    const handleSubmitNewNewsletter = (e) => {
        e.preventDefault();
        swal("Success", "Thank you for Subscribing to our Newsletter", "success");

    }
    

  return (
    <div>
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-semibold ">From my newsletter subscribers</h1>
        <h1 className="text-gray-500 text-xl font-medium">
          Ready to learn more about blogs? Sign-up for our
          newsletter 
        </h1>
        <div className="flex justify-center">
        <form
          className="border-2 border-gray-200 my-2 md:my-4 p-1 rounded-md flex w-full  md:w-1/2"
        >
          <input
            type="email"
            name="email"
            placeholder="Inter Your Email Here"
            className="pl-4  w-2/3  border-none"
          />
          <input value="Submit" onClick={handleSubmitNewNewsletter} className="btn-group btn border-none border-l-2 w-1/3 border-gray-200 rounded-r-md"/>
        </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
