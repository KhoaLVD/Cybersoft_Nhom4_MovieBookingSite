import { useDispatch, useSelector } from "react-redux";
import { updateMovie } from "./reducer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { fetchDetailMovie } from "../MovieDetail/reducer";

export default function UpdateMovie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, error } = useSelector((state) => state.adminDetailMovieReducer);
  const [image, setImage] = useState(null);

  useEffect(() => {
    dispatch(fetchDetailMovie(id));
  }, []);

  const validationRules = Yup.object({
    tenPhim: Yup.string().required("Movie title is required"),
    trailer: Yup.string().required("Trailer URL is required"),
    moTa: Yup.string().required("Description is required"),
    ngayKhoiChieu: Yup.date().required("Release date is required"),
    danhGia: Yup.number().required("Rating is required"),
    hinhAnh: Yup.mixed()
      .required("Image is required")
      .test("fileSize", "File size must be less than 1MB", (value) => {
        if (value) {
          return value.size <= 1048576;
        }
        return true;
      }),
  });

  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      hinhAnh: null,
      moTa: "",
      maNhom: "GP03",
      ngayKhoiChieu: "",
      danhGia: 0,
      hot: false,
      dangChieu: false,
      sapChieu: false,
    },
    validationSchema: validationRules,
    onSubmit: (values) => {
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          if (key === "ngayKhoiChieu") {
            let date = new Date(values.ngayKhoiChieu);
            const yyyy = date.getFullYear();
            let mm = date.getMonth() + 1;
            let dd = date.getDate();

            if (dd < 10) dd = "0" + dd;
            if (mm < 10) mm = "0" + mm;

            const formattedToday = dd + "/" + mm + "/" + yyyy;
            formData.append(key, formattedToday);
          } else {
            formData.append(key, values[key]);
          }
        } else {
          formData.append("File", values.hinhAnh);
        }
      }
      dispatch(updateMovie(formData)).then(() => {
        // navigate("/admin/list-movie");
      });
    },
  });

  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    formik.setFieldTouched("hinhAnh");
    formik.setFieldValue("hinhAnh", file);
    URL.revokeObjectURL(image);
  };

  useEffect(() => {
    if (data) {
      formik.setValues({
        tenPhim: data.tenPhim,
        trailer: data.trailer,
        // hinhAnh: data.hinhAnh,
        moTa: data.moTa,
        maNhom: data.maNhom,
        ngayKhoiChieu: new Date(data.ngayKhoiChieu),
        danhGia: data.danhGia,
        hot: data.hot,
        dangChieu: data.dangChieu,
        sapChieu: data.sapChieu,
      });
    }
  }, [data]);

  return (
    <div className="p-4 sm:ml-64">
      <h1 className="text-4xl font-bold mt-8 mb-8">Update phim</h1>
      <div className="p-4 md:p-5 space-y-4">
        <form
          onSubmit={formik.handleSubmit}
          id="updateMovieForm"
          className="max-w-sm mx-auto"
        >
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tên phim
            </label>
            <input
              type="text"
              name="tenPhim"
              value={formik.values.tenPhim}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.tenPhim && formik.errors.tenPhim && (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">{formik.errors.tenPhim}</span>
              </div>
            )}
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Trailer
            </label>
            <input
              name="trailer"
              type="text"
              value={formik.values.trailer}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.trailer && formik.errors.trailer && (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">{formik.errors.trailer}</span>
              </div>
            )}
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Hình ảnh
            </label>
            <input
              name="hinhAnh"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              onChange={handleChangeFile}
              type="file"
              accept="image/png, image/jpeg, image/jpg"
            />
            {formik.touched.hinhAnh && formik.errors.hinhAnh && (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">{formik.errors.hinhAnh}</span>
              </div>
            )}
            {image ? (
              <img src={image} className="w-60 h-72 mt-2" alt="preview" />
            ) : null}
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Mô tả
            </label>
            <textarea
              name="moTa"
              rows="4"
              value={formik.values.moTa}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            />
            {formik.touched.moTa && formik.errors.moTa && (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">{formik.errors.moTa}</span>
              </div>
            )}
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Ngày khởi chiếu
            </label>
            <input
              name="ngayKhoiChieu"
              type="date"
              value={formik.values.ngayKhoiChieu}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.ngayKhoiChieu && formik.errors.ngayKhoiChieu && (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">
                  {formik.errors.ngayKhoiChieu}
                </span>
              </div>
            )}
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Đánh giá
            </label>
            <input
              name="danhGia"
              type="number"
              value={formik.values.danhGia}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              min={1}
              max={10}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.danhGia && formik.errors.danhGia && (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">{formik.errors.danhGia}</span>
              </div>
            )}
          </div>
          <div className="mb-5 flex items-center">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="hot"
                onChange={formik.handleChange}
                checked={formik.values.hot === true}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Hot
              </span>
            </label>
          </div>
          <div className="mb-5 flex items-center">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="dangChieu"
                onChange={formik.handleChange}
                checked={formik.values.dangChieu === true}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Đang chiếu
              </span>
            </label>
          </div>
          <div className="mb-5 flex items-center">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="sapChieu"
                onChange={formik.handleChange}
                checked={formik.values.sapChieu === true}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Sắp chiếu
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Thêm
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </div>
  );
}
