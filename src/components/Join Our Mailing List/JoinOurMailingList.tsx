const JoinOurMailingList = () => {
  return (
    <div className="bg-[#F2F5FF]  py-14">
      <div className="text-center space-y-3">
        <p className="text-[32px] font-[700]">Join Our Mailing List</p>
        <p className="text-[20px] leading-[39px] text-[#666]">
          Sign up to receive inspiration, product updates <br /> , and special
          offers from our team.
        </p>
        <div className=" flex flex-col gap-2 md:gap-0 md:flex-row pt-10 justify-center items-center">
          <input
            placeholder="example@gmail.com"
            className=" md:rounded-l-md border-blue-500 md:w-2/6  md:border-r-0 border-2 py-[12px] lg:py-[23px] px-[50px] lg:px-[50px]"
            type="email"
            name="email"
            id="email"
          />
          <button className="px-[40px] lg:px-[50px] py-[14px] lg:py-[25px] font-[700] uppercase  text-white bg-[#054C73] ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinOurMailingList;
