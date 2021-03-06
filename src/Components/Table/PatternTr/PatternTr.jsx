import React from "react";
import patternTr from "./patternTr.module.css";
import View from "../View/View";
import EditForm from "../Edit/EditForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreView from "../View/PreView";
import PreEdit from "../Edit/PreEdit";

const PatternTr = ({
   storage,
   setStorage,
   index,
   id,
   author,
   track,
   album,
   dataRelease,
}) => {
   return (
      <tr>
         <td className={patternTr.id}>{id}</td>
         <td>{author}</td>
         <td>{track}</td>
         <td>{album}</td>
         <td>{dataRelease}</td>
         <BrowserRouter>
            <Routes>
               <Route
                  path="/monsegard3.github.io/"
                  element={
                     <>
                        <td>
                           <PreView track={track} />
                        </td>
                        <td>
                           <PreEdit track={track} />
                        </td>
                     </>
                  }
               >
                  <Route
                     path="View/:lang"
                     element={
                        <View
                           id={id}
                           author={author}
                           track={track}
                           album={album}
                           dataRelease={dataRelease}
                        />
                     }
                  ></Route>
                  <Route
                     path="Edit/:lang"
                     element={
                        <EditForm
                           storage={storage}
                           setStorage={setStorage}
                           index={index}
                           author={author}
                           dataRelease={dataRelease}
                           track={track}
                           album={album}
                        />
                     }
                  ></Route>
               </Route>
            </Routes>
         </BrowserRouter>
      </tr>
   );
};
export default PatternTr;
