export default function ImageUploader({ onImageChange, formik }) {
    return (
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Hình ảnh
            </label>
            <input
                name="hinhAnh"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                onChange={(e) => {
                    let file = e.target.files[0];

                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = (e) => {
                        setImgSrc(e.target.result);
                    };
                    formik.setFieldTouched("hinhAnh");
                    formik.setFieldValue("hinhAnh", file);
                }}
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
            <img className="w-24 h-36 mt-2" src={imgSrc} alt="" />
        </>
    );
}
