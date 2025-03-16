import React from "react";

function Contact() {
  return (
    <div className="flex flex-col h-[89vh] justify-center items-center text-2xl">
      <div className="flex justify-center w-full pb-20">
        <div className="w-full max-w-lg">
          <div className="flex items-center">
            <img
              className="w-[2rem] mr-2"
              src="https://cdn-icons-png.flaticon.com/512/3686/3686930.png"
              alt="profile"
            />
            <p className="break-words">นายชารีฟ หะยีนิเงาะ</p>
          </div>
          <div className="flex items-center my-5">
            <img
              className="w-[2rem] mr-2"
              src="https://help.ruk-com.in.th/wp-content/uploads/2022/11/blue-email-box-circle-png-transparent-icon-2.png"
              alt="email"
            />
            <p className="break-all">charif.h@rmutsvmail.com</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-[2rem] mr-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1200px-2023_Facebook_icon.svg.png"
              alt="facebook"
            />
            <a
              href="https://www.facebook.com/nong.charif.846"
              target="_blank"
              className="text-blue-400 hover:underline break-all"
            >
              Nong Charif
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full border-t-3 pt-20 border-blue-500">
        <div className="w-full max-w-lg">
          <div className="flex items-center">
            <img
              className="w-[2rem] mr-2"
              src="https://cdn-icons-png.flaticon.com/512/3686/3686930.png"
              alt="profile"
            />
            <p className="break-words">นางสาวกัญจน์รัตน์ ผ่องอำไพ</p>
          </div>
          <div className="flex items-center my-5">
            <img
              className="w-[2rem] mr-2"
              src="https://help.ruk-com.in.th/wp-content/uploads/2022/11/blue-email-box-circle-png-transparent-icon-2.png"
              alt="email"
            />
            <p className="break-all">kancharat.p@rmutsvmail.com</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-[2rem] mr-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1200px-2023_Facebook_icon.svg.png"
              alt="facebook"
            />
            <a
              href="https://www.facebook.com/kunjarut.pongampai"
              target="_blank"
              className="text-blue-400 hover:underline break-all"
            >
              Kunjarut Pongampai
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
