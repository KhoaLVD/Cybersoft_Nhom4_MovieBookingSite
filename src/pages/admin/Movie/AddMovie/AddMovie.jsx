import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { addMovie } from "./reducer";
import { useState } from "react";

export default function AddMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const props = useSelector((state) => state.adminAddMovieReducer);
  const [imgSrc, setImgSrc] = useState("");

  const formik = useFormik({
    initialValues: {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: {},
      moTa: "",
      maNhom: "GP03",
      ngayKhoiChieu: "",
      danhGia: 0,
      hot: false,
      dangChieu: false,
      sapChieu: false,
    },
    validationSchema: Yup.object({
      maPhim: Yup.string().required("Movie ID is required"),
      tenPhim: Yup.string().required("Movie title is required"),
      biDanh: Yup.string().required("Movie slug is required"),
      trailer: Yup.string().required("Trailer URL is required"),
      moTa: Yup.string().required("Description is required"),
      ngayKhoiChieu: Yup.date().required("Release date is required"),
      danhGia: Yup.number().required("Rating is required"),
    }),
    onSubmit: (values) => {
      dispatch(addMovie(values));
      // navigate("/admin/list-movie");
    },
  });

  const handleChangeFile = (e) => {
    let file = e.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImgSrc(e.target.result);
    };
    formik.setFieldValue("hinhAnh", file);
    console.log("file", file);
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 md:p-5 space-y-4">
        <form
          onSubmit={formik.handleSubmit}
          id="addMovieForm"
          className="max-w-sm mx-auto"
        >
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Mã phim
            </label>
            <input
              type="text"
              name="maPhim"
              value={formik.values.maPhim}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.maPhim && formik.errors.maPhim && (
              <div
                class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span class="font-medium">{formik.errors.maPhim}</span>
              </div>
            )}
          </div>
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
                class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span class="font-medium">{formik.errors.tenPhim}</span>
              </div>
            )}
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Bí danh
            </label>
            <input
              type="text"
              name="biDanh"
              value={formik.values.biDanh}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.biDanh && formik.errors.biDanh && (
              <div
                class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span class="font-medium">{formik.errors.biDanh}</span>
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
                class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span class="font-medium">{formik.errors.trailer}</span>
              </div>
            )}
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Hình ảnh
            </label>
            <input
              classname="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              onChange={handleChangeFile}
              type="file"
              accept="image/png, image/jpeg, image/jpg"
            />
            <img className="w-24 h-36 mt-2" src={imgSrc} alt="" />
            {/* {formik.touched.hinhAnh && formik.errors.hinhAnh && (
              <div
                class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span class="font-medium">{formik.errors.hinhAnh}</span>
              </div>
            )} */}
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
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            />
            {formik.touched.moTa && formik.errors.moTa && (
              <div
                class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span class="font-medium">{formik.errors.moTa}</span>
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
                class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span class="font-medium">{formik.errors.ngayKhoiChieu}</span>
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
                class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span class="font-medium">{formik.errors.danhGia}</span>
              </div>
            )}
          </div>
          <div className="mb-5 flex items-center">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="hot"
                onChange={formik.handleChange}
                checked={formik.values.hot == true}
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
                checked={formik.values.dangChieu == true}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Đang chiếu
              </span>
            </label>
          </div>
          {/* <div className="mb-5">
            <input
              name="dangChieu"
              type="checkbox"
              onChange={formik.handleChange}
              checked={formik.values.dangChieu == true}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Đang chiếu
            </label>
          </div> */}
          {/* <div className="mb-5">
            <input
              name="sapChieu"
              type="checkbox"
              onChange={formik.handleChange}
              checked={formik.values.sapChieu == true}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Sắp chiếu
            </label>
          </div> */}
          <div className="mb-5 flex items-center">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="sapChieu"
                onChange={formik.handleChange}
                checked={formik.values.sapChieu == true}
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
      </div>
    </div>
  );
}
