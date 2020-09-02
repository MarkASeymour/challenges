<template>
  <div class="home">
    <div class="container-fluid" id="adopt-now-section">
      <img class="img-fluid" id="adopt-img" src="../assets/img/dogs.jpg" alt="Three young dogs" />
      <div
        class="card-img-overlay h-100 d-flex flex-column justify-content-end"
        id="adopt-now-content"
      >
        <div id="adopt-now-stripe">
          <h1 class="display-4">This is your new family!</h1>
          <a href class="btn" id="adopt-now-btn">ADOPT NOW</a>
        </div>
      </div>
    </div>
    <div id="inset-body">
      <div class="row">
        <Volunteers class="col-sm-4" id="volunteers-tab" />
        <Testimonial class="col-sm-8" id="testimonial-tab" />
      </div>
      <div class="row">
        <div class="container col-sm-7" id="program-company-selection">
          <div class="card pmd-card">
            <div class="pmd-tabs">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="programs-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="home"
                    href="#programs"
                  >PROGRAMS</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="companies-tab"
                    data-toggle="tab"
                    role="tab"
                    href="#companies"
                  >ASSOCIATED COMPANIES</a>
                </li>
              </ul>
              <div class="tab-content">
                <div id="programs" class="tab-pane active">
                  <br />
                  <program-tab />
                </div>
                <div id="companies" class="tab-pane fade">
                  <br />
                  <company-tab />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container col-sm-4 align-bottom" id="adopt-me-dog-container">
          <img
            id="adopt-me-dog"
            src="../assets/img/adopt-me.png"
            alt="Dog with vest that says 'Adopt Me'."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyTab from "../components/CompanyTab.vue";
import ProgramTab from "../components/ProgramTab.vue";
import Testimonial from "../components/Testimonial.vue";
import Volunteers from "../components/Volunteers.vue";

export default {
  name: "home",
  components: {
    CompanyTab,
    ProgramTab,
    Testimonial,
    Volunteers,
  }
};
</script>