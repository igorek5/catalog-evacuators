import {Form} from './form-validate/form';

export const initFormValidate = () => {
  const form = new Form();
  window.form = form;
  form.init();
};
