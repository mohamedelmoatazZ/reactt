import React from "react";
/* eslint-disable */
const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <a href="https://activ.eg/">
        <img src="./Logo.webp" alt="Logo" className="Logo" />
      </a>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5>عنا</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">عن الشركة</a></li>
              <li><a href="#" className="text-dark">تواصل معنا</a></li>
              <li><a href="#" className="text-dark">فروعنا</a></li>
              <li><a href="#" className="text-dark">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-dark">سياسة الاستخدام</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>الأكثر رواجاً</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">افضل الصفقات</a></li>
              <li><a href="#" className="text-dark">صفقات اليوم</a></li>
              <li><a href="#" className="text-dark">رجالي</a></li>
              <li><a href="#" className="text-dark">نسائي</a></li>
              <li><a href="#" className="text-dark">أطفال</a></li>
              <li><a href="#" className="text-dark">شنط وحقائب</a></li>
              <li><a href="#" className="text-dark">العلامات التجارية</a></li>
              <li><a href="#" className="text-dark">اكسسوارات</a></li>
              <li><a href="#" className="text-dark">جديد</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>اتصل بنا</h5>
            <p>العنوان:<br /> القاهرة، مصر</p>
            <p>الهاتف:<br /> 01007428999</p>
            <p>البريد الإلكتروني:<br /> info@activnew.co</p>
            <p>أيام / ساعات العمل:<br /> من السبت إلى الخميس من 9 صباحاً حتى 5 مساءً</p>
          </div>
          <div className="col-md-3 mb-4 text-center">
            <h5>البريد الاليكترونى</h5>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="البريد الإلكتروني" />
              </div>
              <button type="submit" className="btn btn-primary mt-2">اشترك</button>
            </form>
            <div className="social-icons mt-4">
              <a href="https://www.instagram.com">
                <i className="fab fa-instagram fa-2x mx-2"></i>
              </a>
              <a href="https://www.facebook.com/login">
                <i className="fab fa-facebook fa-2x mx-2"></i>
              </a>
              <a href="https://www.linkedin.com/login/ar">
                <i className="fab fa-linkedin fa-2x mx-2"></i>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 text-md-end">
            <p className="mb-0">&copy; 2024. Activ All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
