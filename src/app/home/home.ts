import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcAccordionComponent, IgcAvatarComponent, IgcButtonComponent, IgcCardComponent, IgcExpansionPanelComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcNavbarComponent, IgcRatingComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcNavbarComponent, IgcIconComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcCardComponent, IgcAvatarComponent, IgcRatingComponent, IgcListComponent, IgcListItemComponent, IgcAccordionComponent, IgcExpansionPanelComponent);

@customElement('app-home')
export default class Home extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 0;
    }
    .landing-page-navigation-1 {
      background-color: var(--ig-surface-500);
      z-index: 1;
      position: sticky;
      height: max-content;
      min-width: min-content;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 1rem;
      overflow: hidden;
    }
    .site-logo-and-title {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .hero-section-1 {
      background-color: theme:Surface-500;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      padding: 48px 32px;
      min-width: 50px;
      min-height: 400px;
      flex-shrink: 0;
    }
    .hero-section-container {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      max-width: 1400px;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .hero-section-content-column {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 320px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .hero-action-group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .hero-buttons-row {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .features-section {
      background-color: theme:Gray-100;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      padding: 48px 32px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .features-content-column {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      max-width: 1400px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .features-header {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .feature-cards-row {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .building-management-card {
      height: max-content;
      min-width: 240px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .building-management-content {
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .testimonials-section {
      background-color: theme:Surface-500;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      padding: 48px 32px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .testimonial-card-1 {
      height: max-content;
      min-width: 320px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .testimonial-1-user-info {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .testimonial-1-user-details {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 0;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .secondary-call-to-action-section {
      background-color: theme:Secondary-800;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      padding: 48px 32px;
      min-width: 50px;
      min-height: 400px;
      flex-shrink: 0;
    }
    .row-reverse-layout {
      display: flex;
      flex-direction: row-reverse;
    }
    .secondary-call-to-action-button-group {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .secondary-call-to-action-buttons-row {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .starter-package-titles {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .faq-accordion {
      overflow-y: auto;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .footer-section {
      background-color: var(--ig-gray-100);
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 0;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .footer-content-row {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      padding: 32px;
      min-width: 50px;
      min-height: 50px;
    }
    .footer-links-and-social {
      background-color: transparent;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      min-width: 320px;
      max-width: 1200px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .company-info-column {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 240px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .company-logo-and-name {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      height: max-content;
      min-width: min-content;
    }
    .social-icons-row {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 4px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .customer-support-row {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      width: max-content;
      height: max-content;
    }
    .copyright-row {
      background-color: transparent;
      border-color: var(--ig-gray-400);
      border-width: 1px 0px 0px;
      border-style: solid;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 0;
      position: relative;
      padding: 0 32px;
      min-height: 64px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .site-icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: var(--ig-secondary-500);
    }
    .content_4 {
      height: max-content;
      min-width: min-content;
    }
    .content {
      color: var(--ig-gray-900);
      height: max-content;
      min-width: min-content;
    }
    .hero-subtitle {
      color: var(--ig-gray-800);
      height: max-content;
      min-width: min-content;
    }
    .content_5 {
      color: var(--ig-gray-700);
      height: max-content;
      min-width: min-content;
    }
    .hero-image {
      object-fit: cover;
      border-radius: 8px;
      min-width: 200px;
      min-height: 0;
      max-height: 350px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .content_3 {
      text-align: center;
      color: var(--ig-gray-900);
      height: max-content;
      min-width: min-content;
    }
    .features-subtitle {
      text-align: center;
      color: var(--ig-gray-700);
      height: max-content;
      min-width: min-content;
    }
    .building-management-icon-avatar {
      --ig-size: var(--ig-size-medium);
    }
    .icon {
      color: var(--ig-secondary-800);
    }
    .testimonial-1-user-avatar {
      --ig-size: var(--ig-size-small);
    }
    .content_1 {
      color: var(--ig-surface-500);
      height: max-content;
    }
    .starter-package-price {
      text-align: center;
      color: var(--ig-primary-500);
      height: max-content;
      min-width: min-content;
    }
    .starter-package-key-attribute {
      text-align: center;
      height: max-content;
      min-width: min-content;
    }
    .icon_1 {
      color: var(--ig-primary-500);
    }
    .twitter-icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: var(--ig-gray-600);
    }
    .mail-icon {
      --size: 18px;
      font-size: 18px;
      width: 18px;
      height: 18px;
      color: var(--ig-gray-600);
    }
    .customer-support-link {
      color: var(--ig-gray-700);
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .building-management-icon-avatar_1::part(base) {
      color: var(--ig-secondary-800);
      background-color: var(--ig-secondary-100);
    }
    .building-management-icon-avatar_2::part(base) {
      color: var(--ig-secondary-800);
      background-color: var(--ig-secondary-100);
    }
    .building-management-icon-avatar_3::part(base) {
      color: var(--ig-secondary-800);
      background-color: var(--ig-secondary-100);
    }
    .building-management-icon-avatar_4::part(base) {
      color: var(--ig-secondary-800);
      background-color: var(--ig-secondary-100);
    }
    .building-management-icon-avatar_5::part(base) {
      color: var(--ig-secondary-800);
      background-color: var(--ig-secondary-100);
    }
    .building-management-icon-avatar_6::part(base) {
      color: var(--ig-secondary-800);
      background-color: var(--ig-secondary-100);
    }
    .testimonial-1-user-avatar_1::part(base) {
      color: var(--ig-secondary-700);
      background-color: var(--ig-secondary-100);
    }
    .testimonial-1-user-avatar_2::part(base) {
      color: var(--ig-secondary-700);
      background-color: var(--ig-secondary-100);
    }
    .testimonial-1-user-avatar_3::part(base) {
      color: var(--ig-secondary-700);
      background-color: var(--ig-secondary-100);
    }
    .testimonial-1-user-avatar_4::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .testimonial-1-user-avatar_5::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .testimonial-1-user-avatar_6::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .testimonial-1-user-avatar_7::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .testimonial-1-user-avatar_8::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .testimonial-1-user-avatar_9::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .how-it-works-button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
    .sign-up-button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .testimonial-1-rating {
      --ig-size: var(--ig-size-medium);
      width: max-content;
      height: max-content;
    }
    .how-it-works-button_1::part(base) {
      color: var(--ig-primary-900);
      background-color: var(--ig-surface-500);
    }
    .how-it-works-button_2::part(base) {
      color: var(--ig-surface-500);
    }
    .starter-package-benefits {
      height: max-content;
    }
  `;

  @state()
  private value: number = 5;

  @state()
  private value1: number = 4;

  @state()
  private value2: number = 5;

  render() {
    return html`
      <link href='node_modules/@igniteui/material-icons-extended/styles/sprite.css' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <igc-navbar class="landing-page-navigation-1">
        <div class="row-layout group">
          <div class="row-layout site-logo-and-title">
            <span class="material-icons site-icon">
              construction
            </span>
            <h6 class="content_4">
              BuildCo
            </h6>
          </div>
          <igc-button variant="flat" type="button" class="how-it-works-button">
            How it Works
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" type="button" class="how-it-works-button">
            Features
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" type="button" class="how-it-works-button">
            Pricing
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" type="button" class="how-it-works-button">
            FAQ
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <igc-icon-button variant="flat" slot="end">
          <span class="material-icons">
            search
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-button type="button" slot="end" class="sign-up-button">
          Sign Up
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="flat" type="button" slot="end" class="sign-up-button">
          Login
          <igc-ripple></igc-ripple>
        </igc-button>
      </igc-navbar>
      <div class="row-layout hero-section-1">
        <div class="row-layout hero-section-container">
          <div class="column-layout hero-section-content-column">
            <h2 class="content">
              Building Tomorrow, Today.
            </h2>
            <h6 class="hero-subtitle">
              Leading the way in innovative construction solutions for your projects.
            </h6>
            <div class="column-layout hero-action-group">
              <div class="row-layout hero-buttons-row">
                <igc-button type="button" class="how-it-works-button">
                  Get a Free Quote
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button variant="outlined" type="button" class="how-it-works-button">
                  Download Android
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
              <p class="typography__body-2 content_5">
                Body 1
              </p>
            </div>
          </div>
          <img src="/src/assets/Auto%20generated%20image%20for%205bd9fbbe-0e70-4b08-be8e-13d7ebb089ec-917399e2-50e5-4075-a336-8ad7b416e52a.png" class="hero-image" />
        </div>
      </div>
      <div class="row-layout features-section">
        <div class="column-layout features-content-column">
          <div class="column-layout features-header">
            <h4 class="content_3">
              Our Services
            </h4>
            <h6 class="features-subtitle">
              Heading
            </h6>
          </div>
          <div class="row-layout feature-cards-row">
            <igc-card class="building-management-card">
              <igc-card-header>
                <h3 slot="title">
              </h3>
                <h5 slot="subtitle">
              </h5>
              </igc-card-header>
              <igc-card-content class="body-content">
                <div class="column-layout building-management-content">
                  <igc-avatar shape="circle" class="building-management-icon-avatar building-management-icon-avatar_1">
                    <span class="material-icons icon">
                      business
                    </span>
                  </igc-avatar>
                  <h6 class="content">
                    Building Management
                  </h6>
                  <p class="typography__body-1 content_4">
                    Comprehensive management services to ensure optimal performance and longevity of your properties.
                  </p>
                </div>
              </igc-card-content>
              <igc-card-actions class="actions-content">
                <igc-button variant="flat" type="button" slot="start" class="sign-up-button">
                  <span>Learn more</span>
                  <span class="material-icons">
                    arrow_right_alt
                  </span>
                  <igc-ripple></igc-ripple>
                </igc-button>
              </igc-card-actions>
            </igc-card>
            <igc-card class="building-management-card">
              <igc-card-header>
                <h3 slot="title">
              </h3>
                <h5 slot="subtitle">
              </h5>
              </igc-card-header>
              <igc-card-content class="body-content">
                <div class="column-layout building-management-content">
                  <igc-avatar shape="circle" class="building-management-icon-avatar building-management-icon-avatar_2">
                    <span class="material-icons icon">
                      handyman
                    </span>
                  </igc-avatar>
                  <h6 class="content">
                    Repair Services
                  </h6>
                  <p class="typography__body-1 content_4">
                    Prompt and reliable repair solutions to keep your facilities in top condition.
                  </p>
                </div>
              </igc-card-content>
              <igc-card-actions class="actions-content">
                <igc-button variant="flat" type="button" slot="start" class="sign-up-button">
                  <span>Learn more</span>
                  <span class="material-icons">
                    arrow_right_alt
                  </span>
                  <igc-ripple></igc-ripple>
                </igc-button>
              </igc-card-actions>
            </igc-card>
            <igc-card class="building-management-card">
              <igc-card-header>
                <h3 slot="title">
              </h3>
                <h5 slot="subtitle">
              </h5>
              </igc-card-header>
              <igc-card-content class="body-content">
                <div class="column-layout building-management-content">
                  <igc-avatar shape="circle" class="building-management-icon-avatar building-management-icon-avatar_3">
                    <span class="material-icons icon">
                      construction
                    </span>
                  </igc-avatar>
                  <h6 class="content">
                    Project Management
                  </h6>
                  <p class="typography__body-1 content_4">
                    Expert oversight for your construction projects, ensuring timely and budget-friendly completion.
                  </p>
                </div>
              </igc-card-content>
              <igc-card-actions class="actions-content">
                <igc-button variant="flat" type="button" slot="start" class="sign-up-button">
                  <span>Learn more</span>
                  <span class="material-icons">
                    arrow_right_alt
                  </span>
                  <igc-ripple></igc-ripple>
                </igc-button>
              </igc-card-actions>
            </igc-card>
          </div>
        </div>
      </div>
      <div class="row-layout testimonials-section">
        <div class="column-layout features-content-column">
          <div class="column-layout features-header">
            <h4 class="content_3">
              What Our Clients Say
            </h4>
            <h6 class="features-subtitle">
              Hear from those who have built with us.
            </h6>
          </div>
          <div class="row-layout feature-cards-row">
            <igc-card class="testimonial-card-1">
              <igc-card-header>
                <h3 slot="title">
              </h3>
                <h5 slot="subtitle">
              </h5>
              </igc-card-header>
              <igc-card-content class="body-content">
                <div class="column-layout building-management-content">
                  <p class="typography__body-1 content_4">
                    "BuildCo exceeded our expectations with their professionalism and quality work. Our project was completed on time and within budget."
                  </p>
                  <igc-rating .value=${this.value} @igcChange=${(e: CustomEvent<number>) => this.value = e.detail} class="testimonial-1-rating"></igc-rating>
                  <div class="row-layout testimonial-1-user-info">
                    <igc-avatar initials="JD" shape="circle" class="testimonial-1-user-avatar testimonial-1-user-avatar_1"></igc-avatar>
                    <div class="column-layout testimonial-1-user-details">
                      <p class="typography__subtitle-2 content_4">
                        Jane Doe
                      </p>
                      <p class="typography__body-2 content_4">
                        New York, NY
                      </p>
                    </div>
                  </div>
                </div>
              </igc-card-content>
            </igc-card>
            <igc-card class="testimonial-card-1">
              <igc-card-header>
                <h3 slot="title">
              </h3>
                <h5 slot="subtitle">
              </h5>
              </igc-card-header>
              <igc-card-content class="body-content">
                <div class="column-layout building-management-content">
                  <p class="typography__body-1 content_4">
                    "The repair services were swift and efficient. BuildCo saved us a lot of trouble and potential damage."
                  </p>
                  <igc-rating .value=${this.value1} @igcChange=${(e: CustomEvent<number>) => this.value1 = e.detail} class="testimonial-1-rating"></igc-rating>
                  <div class="row-layout testimonial-1-user-info">
                    <igc-avatar initials="SM" shape="circle" class="testimonial-1-user-avatar testimonial-1-user-avatar_2"></igc-avatar>
                    <div class="column-layout testimonial-1-user-details">
                      <p class="typography__subtitle-2 content_4">
                        Sam Miller
                      </p>
                      <p class="typography__body-2 content_4">
                        Chicago, IL
                      </p>
                    </div>
                  </div>
                </div>
              </igc-card-content>
            </igc-card>
            <igc-card class="testimonial-card-1">
              <igc-card-header>
                <h3 slot="title">
              </h3>
                <h5 slot="subtitle">
              </h5>
              </igc-card-header>
              <igc-card-content class="body-content">
                <div class="column-layout building-management-content">
                  <p class="typography__body-1 content_4">
                    "The project management team at BuildCo made our complex renovation project seem effortless. Highly recommend!"
                  </p>
                  <igc-rating .value=${this.value2} @igcChange=${(e: CustomEvent<number>) => this.value2 = e.detail} class="testimonial-1-rating"></igc-rating>
                  <div class="row-layout testimonial-1-user-info">
                    <igc-avatar initials="AL" shape="circle" class="testimonial-1-user-avatar testimonial-1-user-avatar_3"></igc-avatar>
                    <div class="column-layout testimonial-1-user-details">
                      <p class="typography__subtitle-2 content_4">
                        Alex Lee
                      </p>
                      <p class="typography__body-2 content_4">
                        Los Angeles, CA
                      </p>
                    </div>
                  </div>
                </div>
              </igc-card-content>
            </igc-card>
          </div>
        </div>
      </div>
      <div class="row-layout secondary-call-to-action-section">
        <div class="row-reverse-layout hero-section-container">
          <div class="column-layout hero-section-content-column">
            <h4 class="content_1">
              Ready to Start Your Project?
            </h4>
            <h6 class="content_1">
              Contact us today for a consultation.
            </h6>
            <div class="column-layout secondary-call-to-action-button-group">
              <div class="row-layout secondary-call-to-action-buttons-row">
                <igc-button type="button" class="how-it-works-button how-it-works-button_1">
                  Request a Consultation
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button variant="flat" type="button" class="how-it-works-button how-it-works-button_2">
                  View Portfolio
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
            </div>
          </div>
          <img src="/src/assets/Auto%20generated%20image%20for%20411a0c00-1f37-4526-b5b5-5bcb50f118c5-3cbdc014-9c82-487e-a78c-0cd1c184c329.png" class="hero-image" />
        </div>
      </div>
      <div class="row-layout features-section">
        <div class="column-layout features-content-column">
          <div class="column-layout features-header">
            <h4 class="content_3">
              Our Project Packages
            </h4>
            <h6 class="features-subtitle">
              Flexible options for every construction need.
            </h6>
          </div>
          <div class="row-layout feature-cards-row">
            <igc-card class="building-management-card">
              <igc-card-header>
                <h3 slot="title">
              </h3>
                <h5 slot="subtitle">
              </h5>
              </igc-card-header>
              <igc-card-content class="body-content">
                <div class="column-layout hero-buttons-row">
                  <div class="column-layout features-header">
                    <igc-avatar shape="circle" class="building-management-icon-avatar building-management-icon-avatar_4">
                      <span class="material-icons icon">
                        av_timer
                      </span>
                    </igc-avatar>
                    <div class="column-layout starter-package-titles">
                      <h5 class="content_3">
                        Starter Package
                      </h5>
                      <h2 class="starter-package-price">
                        $999
                      </h2>
                    </div>
                  </div>
                  <p class="typography__body-1 starter-package-key-attribute">
                    Ideal for small renovations.
                  </p>
                  <igc-list class="starter-package-benefits">
                    <igc-list-item>
                      <igc-avatar slot="start" shape="circle" class="testimonial-1-user-avatar testimonial-1-user-avatar_4">
                        <span class="material-icons icon_1">
                          check
                        </span>
                      </igc-avatar>
                      <div slot="title">Basic design consultation</div>
                    </igc-list-item>
                    <igc-list-item>
                      <igc-avatar slot="start" shape="circle" class="testimonial-1-user-avatar testimonial-1-user-avatar_5">
                        <span class="material-icons icon_1">
                          check
                        </span>
                      </igc-avatar>
                      <div slot="title">Material selection assistance</div>
                    </igc-list-item>
                  </igc-list>
                  <igc-button type="button" class="sign-up-button">
                    Get Started
                    <igc-ripple></igc-ripple>
                  </igc-button>
                </div>
              </igc-card-content>
            </igc-card>
            <igc-card class="building-management-card">
              <igc-card-header>
                <h3 slot="title">
              </h3>
                <h5 slot="subtitle">
              </h5>
              </igc-card-header>
              <igc-card-content class="body-content">
                <div class="column-layout hero-buttons-row">
                  <div class="column-layout features-header">
                    <igc-avatar shape="circle" class="building-management-icon-avatar building-management-icon-avatar_5">
                      <span class="material-icons icon">
                        av_timer
                      </span>
                    </igc-avatar>
                    <div class="column-layout starter-package-titles">
                      <h5 class="content_3">
                        Standard Package
                      </h5>
                      <h2 class="starter-package-price">
                        $2499
                      </h2>
                    </div>
                  </div>
                  <p class="typography__body-1 starter-package-key-attribute">
                    Perfect for medium-sized projects.
                  </p>
                  <igc-list class="starter-package-benefits">
                    <igc-list-item>
                      <igc-avatar slot="start" shape="circle" class="testimonial-1-user-avatar testimonial-1-user-avatar_6">
                        <span class="material-icons icon_1">
                          check
                        </span>
                      </igc-avatar>
                      <div slot="title">Detailed project planning</div>
                    </igc-list-item>
                    <igc-list-item>
                      <igc-avatar slot="start" shape="circle" class="testimonial-1-user-avatar testimonial-1-user-avatar_7">
                        <span class="material-icons icon_1">
                          check
                        </span>
                      </igc-avatar>
                      <div slot="title">On-site supervision</div>
                    </igc-list-item>
                  </igc-list>
                  <igc-button type="button" class="sign-up-button">
                    Choose Plan
                    <igc-ripple></igc-ripple>
                  </igc-button>
                </div>
              </igc-card-content>
            </igc-card>
            <igc-card class="building-management-card">
              <igc-card-header>
                <h3 slot="title">
              </h3>
                <h5 slot="subtitle">
              </h5>
              </igc-card-header>
              <igc-card-content class="body-content">
                <div class="column-layout hero-buttons-row">
                  <div class="column-layout features-header">
                    <igc-avatar shape="circle" class="building-management-icon-avatar building-management-icon-avatar_6">
                      <span class="material-icons icon">
                        av_timer
                      </span>
                    </igc-avatar>
                    <div class="column-layout starter-package-titles">
                      <h5 class="content_3">
                        Premium Package
                      </h5>
                      <h2 class="starter-package-price">
                        $4999
                      </h2>
                    </div>
                  </div>
                  <p class="typography__body-1 starter-package-key-attribute">
                    For large-scale and complex builds.
                  </p>
                  <igc-list class="starter-package-benefits">
                    <igc-list-item>
                      <igc-avatar slot="start" shape="circle" class="testimonial-1-user-avatar testimonial-1-user-avatar_8">
                        <span class="material-icons icon_1">
                          check
                        </span>
                      </igc-avatar>
                      <div slot="title">Full project lifecycle management</div>
                    </igc-list-item>
                    <igc-list-item>
                      <igc-avatar slot="start" shape="circle" class="testimonial-1-user-avatar testimonial-1-user-avatar_9">
                        <span class="material-icons icon_1">
                          check
                        </span>
                      </igc-avatar>
                      <div slot="title">Dedicated project manager</div>
                    </igc-list-item>
                  </igc-list>
                  <igc-button type="button" class="sign-up-button">
                    Go Premium
                    <igc-ripple></igc-ripple>
                  </igc-button>
                </div>
              </igc-card-content>
            </igc-card>
          </div>
        </div>
      </div>
      <div class="row-layout testimonials-section">
        <div class="column-layout features-content-column">
          <div class="column-layout features-header">
            <h4 class="content_3">
              Frequently Asked Questions
            </h4>
            <h6 class="features-subtitle">
              Answers to common inquiries about our services.
            </h6>
          </div>
          <igc-accordion ?single-expand=${true} class="faq-accordion">
            <igc-expansion-panel indicator-position="end">
              <p class="typography__body-2 content_4">
                We specialize in commercial, residential, and industrial construction projects, including new builds, renovations, and structural repairs.
              </p>
              <span slot="title">What types of construction projects does BuildCo handle?</span>
            </igc-expansion-panel>
            <igc-expansion-panel indicator-position="end">
              <p class="typography__body-2 content_4">
                BuildCo adheres to stringent quality control standards and implements comprehensive safety protocols on all job sites, with regular inspections and certified personnel.
              </p>
              <span slot="title">How do you ensure project quality and safety?</span>
            </igc-expansion-panel>
            <igc-expansion-panel indicator-position="end">
              <p class="typography__body-2 content_4">
                Absolutely! We offer personalized consultations and custom quotes tailored to the unique requirements and scope of your project.
              </p>
              <span slot="title">Can I get a custom quote for my specific project needs?</span>
            </igc-expansion-panel>
            <igc-expansion-panel indicator-position="end">
              <p class="typography__body-2 content_4">
                Project timelines vary depending on complexity and scale. We provide a detailed schedule after the initial planning phase, ensuring transparency and realistic expectations.
              </p>
              <span slot="title">What is your typical project timeline?</span>
            </igc-expansion-panel>
            <igc-expansion-panel indicator-position="end">
              <p class="typography__body-2 content_4">
                Yes, BuildCo stands by its work with comprehensive post-construction support and warranties on all completed projects, ensuring your peace of mind.
              </p>
              <span slot="title">Do you offer post-construction support or warranty?</span>
            </igc-expansion-panel>
          </igc-accordion>
        </div>
      </div>
      <div class="column-layout footer-section">
        <div class="row-layout footer-content-row">
          <div class="row-layout footer-links-and-social">
            <div class="column-layout company-info-column">
              <div class="row-layout company-logo-and-name">
                <span class="material-icons site-icon">
                  construction
                </span>
                <p class="typography__subtitle-2 content_4">
                  BuildCo
                </p>
              </div>
              <p class="typography__body-2 content_5">
                BuildCo: Your City, On Demand.
              </p>
              <div class="row-layout social-icons-row">
                <span class="imx-icon imx-twitter twitter-icon"></span>
                <span class="imx-icon imx-facebook twitter-icon"></span>
                <span class="imx-icon imx-instagram twitter-icon"></span>
              </div>
            </div>
            <div class="column-layout company-info-column">
              <p class="typography__subtitle-2 content_4">
                Services
              </p>
              <a class="typography__body-2 content_5">
                Building Management
              </a>
              <a class="typography__body-2 content_5">
                Repair Services
              </a>
              <a class="typography__body-2 content_5">
                Project Management
              </a>
              <a class="typography__body-2 content_5">
                Consultation
              </a>
            </div>
            <div class="column-layout company-info-column">
              <p class="typography__subtitle-2 content_4">
                Projects
              </p>
              <a class="typography__body-2 content_5">
                Commercial Projects
              </a>
              <a class="typography__body-2 content_5">
                Residential Projects
              </a>
              <a class="typography__body-2 content_5">
                Renovations
              </a>
              <a class="typography__body-2 content_5">
                Infrastructure
              </a>
            </div>
            <div class="column-layout company-info-column">
              <p class="typography__subtitle-2 content_4">
                Contact Us
              </p>
              <div class="row-layout customer-support-row">
                <span class="material-icons mail-icon">
                  mail_outline
                </span>
                <a class="typography__body-2 customer-support-link">
                  Customer Support
                </a>
              </div>
              <div class="row-layout customer-support-row">
                <span class="material-icons mail-icon">
                  phone
                </span>
                <p class="typography__body-2 content_5">
                  +598 99 123 456
                </p>
              </div>
              <div class="row-layout customer-support-row">
                <span class="material-icons mail-icon">
                  business
                </span>
                <p class="typography__body-2 content_5">
                  1234 Central St., Montevideo UY
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row-layout copyright-row">
          <p class="typography__body-2 content_5">
            © 2025 BuildCo - All Rights Reserved
          </p>
        </div>
      </div>
    `;
  }
}
