import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzleLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.5 5.5h5C18.867 5.5 20 6.633 20 8v4.375c0 .703-.586 1.25-1.25 1.25H17.5c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875H12.5c-.703 0-1.25-.547-1.25-1.25v-.937c0-.665.547-1.25 1.25-1.25h.625a.64.64 0 0 0 .625-.626c0-.312-.312-.624-.625-.624H12.5c-.703 0-1.25-.547-1.25-1.25V6.75c0-.664.547-1.25 1.25-1.25m0 1.25v.938h.625c1.016 0 1.875.859 1.875 1.875 0 1.054-.86 1.874-1.875 1.874H12.5v.938h1.875c.313 0 .625.313.625.625v.625c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625V13c0-.312.273-.625.625-.625h1.875V8c0-.664-.586-1.25-1.25-1.25zM2.5 8h5.625c.664 0 1.25.586 1.25 1.25v6.875h1.25c.664 0 1.25.586 1.25 1.25V18c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625v-.625c0-.664.547-1.25 1.25-1.25h1.875c.664 0 1.25.586 1.25 1.25V23c0 1.406-1.133 2.5-2.5 2.5H2.5A2.47 2.47 0 0 1 0 23V10.5C0 9.133 1.094 8 2.5 8m5.625 1.25H2.5c-.703 0-1.25.586-1.25 1.25v5.625h1.875V15.5c0-1.016.82-1.875 1.875-1.875 1.016 0 1.875.86 1.875 1.875v.625h1.25zm-5 8.125H1.25V23c0 .703.547 1.25 1.25 1.25h5.625v-1.875H7.5A1.85 1.85 0 0 1 5.625 20.5c0-1.016.82-1.875 1.875-1.875h.625v-1.25h-1.25c-.703 0-1.25-.547-1.25-1.25V15.5c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v.625c0 .703-.586 1.25-1.25 1.25m6.25 5v1.875H15c.664 0 1.25-.547 1.25-1.25v-5.625h-1.875V18c0 1.055-.86 1.875-1.875 1.875A1.85 1.85 0 0 1 10.625 18v-.625h-1.25v1.25c0 .703-.586 1.25-1.25 1.25H7.5a.64.64 0 0 0-.625.625c0 .352.273.625.625.625h.625c.664 0 1.25.586 1.25 1.25' />
    </g>
    <defs>
      <clipPath id='54fcc26c4235b7ae1ad1d9185d8677fb__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzleLgRegularIcon);
export default ForwardRef;
