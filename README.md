![MDB Logo](https://mdbootstrap.com/img/Marketing/general/logo/medium/mdb-react.png)

# MDB React 5

Responsive React To Do Lists built with the latest Bootstrap 5. Many tasklist templates, various variants of design and functionality.

Check out [React To Do List Documentation](https://mdbootstrap.com/docs/react/extended/to-do-list) for detailed instructions & even more examples.

## Basic example
![Basic example](https://user-images.githubusercontent.com/108793661/187208809-230cc81e-61ba-4339-8bec-51304b3c322e.png)
```js
import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBSelect,
  MDBTooltip,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard
            id="list1"
            style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
          >
            <MDBCardBody className="py-4 px-4 px-md-5">
              <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                <MDBIcon fas icon="check-square" className="me-1" />
                <u>My Todo-s</u>
              </p>
              <div className="pb-2">
                <MDBCard>
                  <MDBCardBody>
                    <div className="d-flex flex-row align-items-center">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Add new..."
                      />
                      <MDBTooltip
                        tag="a"
                        wrapperProps={{ href: "#!" }}
                        title="Set due date"
                      >
                        <MDBIcon
                          fas
                          icon="calendar-alt"
                          size="lg"
                          className="me-3"
                        />
                      </MDBTooltip>
                      <div>
                        <MDBBtn>Add</MDBBtn>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <hr className="my-4" />

              <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                <p className="small mb-0 me-2 text-muted">Filter</p>
                <MDBSelect
                  data={[
                    { text: "All", value: 1 },
                    { text: "Completed", value: 2 },
                    { text: "Active", value: 3 },
                    { text: "Has due date", value: 4 },
                  ]}
                />
                <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
                <MDBSelect
                  data={[
                    { text: "Added date", value: 1 },
                    { text: "Due date", value: 2 },
                  ]}
                />
                <MDBTooltip
                  tag="a"
                  wrapperProps={{ href: "#!" }}
                  title="Ascending"
                >
                  <MDBIcon
                    fas
                    icon="sort-amount-down-alt"
                    className="ms-2"
                    style={{ color: "#23af89" }}
                  />
                </MDBTooltip>
              </div>
              <MDBListGroup horizontal className="rounded-0 bg-transparent">
                <MDBListGroupItem className="d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckChecked"
                    defaultChecked
                  />
                </MDBListGroupItem>
                <MDBListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                  {" "}
                  <p className="lead fw-normal mb-0">
                    Buy groceries for next week
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                  <div className="d-flex flex-row justify-content-end mb-1">
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Edit todo"
                    >
                      <MDBIcon
                        fas
                        icon="pencil-alt"
                        className="me-3"
                        color="info"
                      />
                    </MDBTooltip>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Delete todo"
                    >
                      <MDBIcon fas icon="trash-alt" color="danger" />
                    </MDBTooltip>
                  </div>
                  <div className="text-end text-muted">
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Created date"
                    >
                      <p className="small text-muted mb-0">
                        <MDBIcon fas icon="info-circle" className="me-2" />
                        28th Jun 2020
                      </p>
                    </MDBTooltip>
                  </div>
                </MDBListGroupItem>
              </MDBListGroup>
              <MDBListGroup horizontal className="rounded-0 bg-transparent">
                <MDBListGroupItem className="d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                  <MDBCheckbox name="flexCheck" value="" id="flexCheck" />
                </MDBListGroupItem>
                <MDBListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                  {" "}
                  <p className="lead fw-normal mb-0">Renew car insurance</p>
                </MDBListGroupItem>
                <MDBListGroupItem className="px-3 py-1 d-flex align-items-center border-0 bg-transparent">
                  <div className="py-2 px-3 me-2 border border-warning rounded-3 d-flex align-items-center bg-light">
                    <p className="small mb-0">
                      <MDBTooltip
                        tag="a"
                        wrapperProps={{ href: "#!" }}
                        title="Due on date"
                      >
                        <MDBIcon
                          fas
                          icon="hourglass-half"
                          color="warning"
                          className="me-2"
                        />
                      </MDBTooltip>
                      28th Jun 2020
                    </p>
                  </div>
                </MDBListGroupItem>
                <MDBListGroupItem className="ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                  <div className="d-flex flex-row justify-content-end mb-1">
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Edit todo"
                    >
                      <MDBIcon
                        fas
                        icon="pencil-alt"
                        className="me-3"
                        color="info"
                      />
                    </MDBTooltip>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Delete todo"
                    >
                      <MDBIcon fas icon="trash-alt" color="danger" />
                    </MDBTooltip>
                  </div>
                  <div className="text-end text-muted">
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Created date"
                    >
                      <p className="small text-muted mb-0">
                        <MDBIcon fas icon="info-circle" className="me-2" />
                        28th Jun 2020
                      </p>
                    </MDBTooltip>
                  </div>
                </MDBListGroupItem>
              </MDBListGroup>
              <MDBListGroup horizontal className="rounded-0 bg-transparent">
                <MDBListGroupItem className="d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                  <MDBCheckbox name="flexCheck" value="" id="flexCheck" />
                </MDBListGroupItem>
                <MDBListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                  {" "}
                  <p className="lead fw-normal mb-0 bg-light w-100 ms-n2 ps-2 py-1 rounded">
                    Sign up for online course
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                  <div className="d-flex flex-row justify-content-end mb-1">
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Delete todo"
                    >
                      <MDBIcon fas icon="trash-alt" color="danger" />
                    </MDBTooltip>
                  </div>
                  <div className="text-end text-muted">
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Created date"
                    >
                      <p className="small text-muted mb-0">
                        <MDBIcon fas icon="info-circle" className="me-2" />
                        28th Jun 2020
                      </p>
                    </MDBTooltip>
                  </div>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
```

```css
#list1 .form-control {
  border-color: transparent;
}
#list1 .form-control:focus {
  border-color: transparent;
  box-shadow: none;
}
#list1 .select-input.form-control[readonly]:not([disabled]) {
  background-color: #fbfbfb;
}
```


## How to use?

1. Download MDB 5 - REACT UI KIT

2. Choose your favourite customized component and click on the image

3. Copy & paste the code into your MDB project

[▶️ Subscribe to YouTube channel for web development tutorials & resources](https://www.youtube.com/MDBootstrap?sub_confirmation=1)


## More examples (click on the image to see a live demo)
### To Do List Example #2:
[![React To Do List #1](https://user-images.githubusercontent.com/108793661/187209113-30bee87c-0d4e-4714-9707-a8e13aa3832b.png)](https://mdbootstrap.com/docs/react/extended/to-do-list/#section-2)

### To Do List Example #3:
[![React To Do List #2](https://user-images.githubusercontent.com/108793661/187209301-486688d6-5cbc-437f-8652-9c03d7a4ce75.png)](https://mdbootstrap.com/docs/react/extended/to-do-list/#section-3)

### To Do List Example #4:
[![React To Do List #3](https://user-images.githubusercontent.com/108793661/187209414-6002f8cb-26b8-4865-a611-d76b81ef860e.png)](https://mdbootstrap.com/docs/react/extended/to-do-list/#section-4)

### To Do List Example #5:
[![React To Do List #4](https://user-images.githubusercontent.com/108793661/187209550-423d7690-ac10-425a-b2ab-5fb9528afcc7.png)](https://mdbootstrap.com/docs/react/extended/to-do-list/#section-5)

You can find other examples [here](https://mdbootstrap.com/docs/react/extended/to-do-list).

<hr />

## More extended React documentation
<ul>
<li><a href="https://mdbootstrap.com/docs/react/extended/code/">React Bootstrap Code</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/gallery/">React Bootstrap Gallery</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/hamburger-menu/">React Bootstrap Hamburger Menu</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/jumbotron/">React Bootstrap Jumbotron</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/maps/">React Bootstrap Maps</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/mega-menu//">React Bootstrap Mega Menu</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/media-object/">React Bootstrap Media object</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/multiselect/">React Bootstrap Multiselect</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/masonry/">React Bootstrap Masonry</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/contact/">React Bootstrap Contact form</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/gradients/">React Bootstrap Gradients</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/pagination/">React Bootstrap Pagination</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/panels/">React Bootstrap Panels</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/social-media/">React Bootstrap Social Media icons & buttons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/search/">React Bootstrap Search</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-sort/">React Bootstrap Table sort</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-responsive/">React Bootstrap Table responsive</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-scroll/">React Bootstrap Table scroll</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-search/">React Bootstrap Table search</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/textarea/">React Bootstrap Textarea</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/sidebar/">React Bootstrap Sidebar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/profiles/">React Bootstrap Profiles</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/dropdown-multilevel/">React Bootstrap Nested Dropdown</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/bootstrap-address-form/">React Bootstrap Address Form</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/back-to-top">React Scroll Back to Top button</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/product-cards">React Product Cards</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/avatar">React Avatar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/carousel-with-thumbnails">React Carousel Slider with Thumbnails</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/chat">React Chat</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/comparison-table">React Comparison table</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/comments">React Comments</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/drawer">React Drawer</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/faq">React FAQ component / section</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/invoice">React Invoice</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/news-feed">React News feed</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/offcanvas">React Offcanvas</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/order-details">React Order details</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/page-transitions">React Page transitions</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/quotes">React Quotes</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/payment-forms">React Payment forms</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/select-with-custom-input">React Select with custom Input</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/square-buttons">React Square Buttons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/testimonial-slider">React Testimonial Slider</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/testimonials">React Testimonials / Reviews</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/bootstrap-survey-form">React Survey form</a></li>
</ul>
