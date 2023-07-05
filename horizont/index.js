import {
  getDatabase,
  ref,
  onValue,
} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js';

class Model {
  init(view, container) {
    this.myView = view;
    this.myContainer = container;
    this.fetchData();
  }

  fetchData() {
    try {
      const db = getDatabase();
      const pictures = ref(db, 'pictures/');

      onValue(pictures, (snapshot) => {
        this.arrWithPictures = snapshot.val();

        if (this.arrWithPictures) {
          this.arrWithPictures = Object.entries(this.arrWithPictures);
          this.myView.createLayout(this.arrWithPictures);
          controllerApp.init(modelApp, container);
        } else {
          this.myView.showErrorApp();
        }
      });
    } catch (err) {
      this.myView.showErrorApp();
      console.log(err);
    }
  }

  filteredTypesPictures(type) {
    switch (type) {
      case 'planets':
        this.myView.createLayout(
          this.arrWithPictures.filter((item) => item[1].type === type)
        );
        break;
      case 'nature':
        this.myView.createLayout(
          this.arrWithPictures.filter((item) => item[1].type === type)
        );
        break;
      default:
        this.myView.createLayout(this.arrWithPictures);
    }
  }

  selectImage(id) {
    const selectedImage = this.arrWithPictures.find((item) => item[1].id == id);
    this.myView.showDetailedInformation(selectedImage);
  }

  closeModal() {
    this.myView.closeModal();
  }
}

class View {
  init(container) {
    this.myContainer = container;
    this.myContainer.innerHTML = `
      <svg class="spinner" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
      </svg>
      <main class="image__gallery">
        <header class="image__gallery_header">
          <h1>Image Gallery</h1>
          <select class="image__gallery_select">
            <option>Select type picture</option>
            <option>planets</option>
            <option>nature</option>
          </select>
        </header>

        <section class="image__gallery_section"></section>

        <div class="overlay" data-close=""></div>
          <div class="dlg-modal dlg-modal-slide">
            <span class="closer" data-close=""></span>
            <img 
              class='image__gallery_modal_picture' 
              alt="picture"
              title="picture"
              >
              <strong><span class='image__gallery_modal_name'></span></strong>
              <span class='image__gallery_modal_description'></span>
          </div>
      </main>`;

    this.spinner = document.querySelector('.spinner');
    this.imageGallerySection = this.myContainer.querySelector(
      '.image__gallery_section'
    );
    this.overlay = this.myContainer.querySelector('.overlay');
    this.modal = this.myContainer.querySelector('.dlg-modal');
    this.mClose = this.myContainer.querySelector('[data-close]');
    this.modalName = this.myContainer.querySelector(
      '.image__gallery_modal_name'
    );
    this.modalPicture = this.myContainer.querySelector(
      '.image__gallery_modal_picture'
    );
    this.modalDescription = this.myContainer.querySelector(
      '.image__gallery_modal_description'
    );
  }

  createLayout(data) {
    this.imageGallerySection.innerHTML = '';

    data.map((item) => {
      this.imageGallerySection.insertAdjacentHTML(
        'beforeend',
        `<article class="image__gallery_article">
          <img 
            data-id='${item[1].id}'
            class='image__gallery_section_preview_picture' 
            src="${item[1].url}" 
            alt="picture"
            title="please select an image"
          >
          <strong><span class='image__gallery_title_cart_picture'>${item[1].name}</span></strong>
          <span class='image__gallery_title_cart_picture'>${item[1].type}</span>
        </article>`
      );
    });

    this.spinner.classList.add('hidden');
  }

  showDetailedInformation(obj) {
    document.body.classList.add('scrollOff');
    this.modalPicture.setAttribute('src', obj[1].url);
    this.modalName.textContent = obj[1].name;
    this.modalDescription.textContent = obj[1].description;

    this.mStatus = false;
    this.overlay.classList.remove('fadeOut');
    this.overlay.classList.add('fadeIn');
    this.modal.classList.remove('slideOutUp');
    this.modal.classList.add('slideInDown');
    this.mStatus = true;
  }

  closeModal() {
    document.body.classList.remove('scrollOff');
    this.modal.classList.remove('slideInDown');
    this.modal.classList.add('slideOutUp');
    this.overlay.classList.remove('fadeIn');
    this.overlay.classList.add('fadeOut');
    this.mStatus = false;
  }

  showErrorApp() {
    this.imageGallerySection.textContent =
      'Возникли неполадки. Попробуйте обновить страницу или зайти позже';
    this.spinner.classList.add('hidden');
  }
}

class Controller {
  init(model, container) {
    this.myModel = model;
    this.myContainer = container;
    this.nodeListData = this.myContainer.querySelectorAll(
      '.image__gallery_section_preview_picture'
    );
    this.arrayData = Array.from(this.nodeListData);
    this.select = this.myContainer.querySelector('.image__gallery_select');
    this.overlay = document.querySelector('.overlay');
    this.modals = document.querySelector('.dlg-modal');
    this.mClose = document.querySelectorAll('[data-close]');
    this.arrayItemsClosed = Array.from(this.mClose);

    this.arrayData.map((item) => {
      item.addEventListener('click', this.selectImage);
    });
    this.arrayItemsClosed.map((item) => {
      item.addEventListener('click', this.closeModal);
    });
    this.select.addEventListener('change', this.filteredTypesPictures);
  }

  selectImage = (e) => {
    this.myModel.selectImage(e.target.dataset.id);
  };

  closeModal = () => {
    this.myModel.closeModal();
  };

  filteredTypesPictures = (e) => {
    this.myModel.filteredTypesPictures(e.target.value);
    this.clearEventListeners();
  };

  clearEventListeners() {
    this.arrayData.map((item) => {
      item.removeEventListener('click', this.selectImage);
    });
    this.arrayItemsClosed.map((item) => {
      item.removeEventListener('click', this.closeModal);
    });
    this.select.removeEventListener('change', this.filteredTypesPictures);
    controllerApp.init(modelApp, container);
  }
}

const container = document.querySelector('#app');
const viewApp = new View();
const modelApp = new Model();
const controllerApp = new Controller();

viewApp.init(container);
modelApp.init(viewApp, container);
