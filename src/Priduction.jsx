import React, { Component } from 'react'
/* eslint-disable */
export default class MyNav extends Component {
  render() {
    return (
        <React.Fragment>
         <div className="container text-center">
      <h2 className="text-end" style={{ fontSize: "50px", color: "rgb(10, 10, 238)" }}>
        الاقسام الرئيسية
      </h2>
      <section className="main-sections py-5">
        <div className="d-flex justify-content-center flex-wrap">
          <div className="text-center m-2">
            <img
              src="./images/mainn/sales.webp"
              className="rounded-circle"
              alt="تخفيضات"
              width="200"
              height="200"
            />
            <p>تخفيضات</p>
          </div>
          <div className="text-center m-2">
            <a href="">
              <img
                src="./images/mainn/bages.webp"
                className="rounded-circle"
                alt="شنط وحقائب"
                width="200"
                height="200"
              />
            </a>
            <p>شنط وحقائب</p>
          </div>
          <div className="text-center m-2">
            <a href="">
              <img
                src="./images/mainn/swim.webp"
                className="rounded-circle"
                alt="سباحة"
                width="200"
                height="200"
              />
            </a>
            <p>سباحة</p>
          </div>
          <div className="text-center m-2">
            <a href="">
              <img
                src="./images/mainn/woman.webp"
                className="rounded-circle"
                alt="نسائي"
                width="200"
                height="200"
              />
            </a>
            <p>نسائي</p>
          </div>
          <div className="text-center m-2">
            <a href="">
              <img
                src="./images/mainn/man.webp"
                className="rounded-circle"
                alt="رجالي"
                width="200"
                height="200"
              />
            </a>
            <p>رجالي</p>
          </div>
          <div className="text-center m-2">
            <a href="">
              <img
                src="./images/mainn/child.webp"
                className="rounded-circle"
                alt="أطفال"
                width="200"
                height="200"
              />
            </a>
            <p>أطفال</p>
          </div>
          <div className="text-center m-2">
            <a href="">
              <img
                src="./images/mainn/10_9ed2129b-a2c1-43fc-8c9e-3225a9dae6a8.webp"
                className="rounded-circle"
                alt="مستلزمات مدرسية"
                width="200"
                height="200"
              />
            </a>
            <p>مستلزمات مدرسية</p>
          </div>
          <div className="text-center m-2">
            <a href="">
              <img
                src="./images/mainn/less100.webp"
                className="rounded-circle"
                alt="أقل من 100 جنيه"
                width="200"
                height="200"
              />
            </a>
            <p>أقل من 100 جنيه</p>
          </div>
        </div>
      </section>
    </div>
      </React.Fragment>
    )
  }
}
