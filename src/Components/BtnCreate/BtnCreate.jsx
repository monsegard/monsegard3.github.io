import React from "react";
import btnCreate from "./btnCreate.module.css";
import main from "../Main/main.module.css";
import CreateForm from "../CreateForm/CreateForm";

const BtnCreate = ({
   storage,
   setOpen,
   open,
   validFail,
   setValidFail,
   edit,
   setEdit,
}) => {
   return (
      <>
         <input
            onClick={() => setOpen(true)}
            className={main.btn + " " + btnCreate.btn}
            defaultValue="создать"
            type="button"
         ></input>
         {open === true && (
            <CreateForm
               storage={storage}
               setOpen={setOpen}
               open={open}
               validFail={validFail}
               setValidFail={setValidFail}
               edit={edit}
               setEdit={setEdit}
            />
         )}
      </>
   );
};

export default BtnCreate;
