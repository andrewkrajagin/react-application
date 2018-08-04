
export const btn = 'btn';
export const btnDanger = 'btn-danger';
export const btnOutlinePrimary = 'btn-outline-primary';
export const btnPrimary = 'btn-primary';
export const btnSecondary = 'btn-secondary';
export const btnSuccess = 'btn-success';
export const col = {
  lg: [''],
  md: [''],
  sm: [''],
  xs: [''],
};
Object.keys(col).forEach((key) => {
  col[key].length = 13;
  col[key].forEach((el, i) => {
    col[key][i + 1] = `col-${key}-${i + 1}`;
  });
});
export const container = 'container';
export const controlLabel = 'control-label';
export const customSelect = 'custom-select';
export const formControl = 'form-control';
export const formGroup = 'form-group';
export const row = 'row';
export const table = 'table';
export const tableBordered = 'table-bordered';
export const tableHover = 'table-hover';
