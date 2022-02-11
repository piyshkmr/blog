tinymce.init({
  selector: "textarea#my-expressjs-tinymce-app",
  height: 500,
  menubar: true,
  codesample_global_prismjs: true,
  plugins: [
    "advlist autolink lists link image charmap print preview anchor",
    "searchreplace visualblocks code fullscreen",
    "insertdatetime media table paste code help codesample wordcount ",
  ],
  toolbar:
    "undo redo | formatselect | " +
    "bold italic backcolor | alignleft aligncenter " +
    "alignright alignjustify | bullist numlist codesample outdent indent | " +
    "removeformat | help ",
});
