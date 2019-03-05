import $ from 'jquery';

import Swal from 'sweetalert2'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'bootstrap';
import Swal from 'sweetalert2'


//Import Kiểu 1
import '../css/chitiet.css';
//Import Kiểu 2
// import { NguoiDung, hoTen } from '../models/nguoidung';
//Import Kiểu 3
import iuyiyiy from '../models/nguoidung';

iuyiyiy.ht
function getParamsFromURL() {
    var params = window.location.search.substr(1).split('=');
    console.log(params)
    var courseId = params[1];
}
getParamsFromURL();

Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    type: 'error',
    confirmButtonText: 'Cool'
})
Swal.fire({
    title: '<strong>HTML <u>example</u></strong>',
    type: 'info',
    html:
      'You can use <b>bold text</b>, ' +
      '<a href="//github.com">links</a> ' +
      'and other HTML tags',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down',
  })