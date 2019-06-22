import Quill from "quill";
import SimpleBar from "simplebar";

/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2019-06-22 15:08:21
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2019-06-22 18:44:49
 */

 window.onload = () => {
     let editorContainerId = "editor-container";
     let editorContainer = document.getElementById(editorContainerId);

     editorContainer.style.height = window.innerHeight.toString() + "px";
     let toolbarOptions = [
         ["bold", "italic", "underline", "strike"],        // toggled buttons
         ["blockquote", "code-block"],

         [{ "header": 1 }, { "header": 2 }],               // custom button values
         [{ "list": "ordered" }, { "list": "bullet" }],

         [{ "size": ["small", false, "large", "huge"] }],  // custom dropdown

         [{ "color": [] }, { "background": [] }],          // dropdown with defaults from theme
         [{ "font": [] }],
         [{ "align": [] }],

     ];
     let quill = new Quill("#" + editorContainerId, {
         modules: {
             toolbar: toolbarOptions,
         },
         placeholder: "Focus and write something great.",
         theme: "snow",
     });
 };
