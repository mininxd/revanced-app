import {fetchGms} from "./js/gmsCore.js";
import {fetchVanced} from "./js/vanced.js";
import './js/modal.js';
  fetchGms();
  fetchVanced();

document.addEventListener('DOMContentLoaded', () => { 
  setTimeout(function() { $('.loadingContainer').addClass("is-hidden");
  },5000);
})


