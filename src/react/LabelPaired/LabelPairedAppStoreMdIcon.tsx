import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.969 7.781-.25-.468a.67.67 0 0 0-.875-.25.66.66 0 0 0-.25.875l.656 1.125-2.094 3.624H3.531a.627.627 0 0 0-.625.626c0 .343.281.624.625.624h5.813c.281-.5-.094-1.25-.719-1.25h-2l2.75-4.75c.188-.312.063-.687-.25-.875-.281-.156-.687-.062-.844.25zM5.53 14.594c-.343-.375-.75-.5-1.281-.344l-.437.781a.623.623 0 0 0 .218.875c.313.156.719.063.875-.25zm5.282-1.906c-.844-1.47-1.47-2.532-1.876-3.25-.406.312-.78 1.218-.25 2.156.532.906 1.313 2.25 2.376 4.062.156.313.562.406.874.25.282-.187.407-.562.22-.875l-.626-1.094h.938a.627.627 0 0 0 .625-.624.627.627 0 0 0-.625-.626zM8 4.25A7.75 7.75 0 0 1 15.75 12 7.75 7.75 0 0 1 8 19.75 7.75 7.75 0 0 1 .25 12 7.75 7.75 0 0 1 8 4.25M14.75 12c0-3.719-3.062-6.75-6.75-6.75-3.75 0-6.75 3.063-6.75 6.75 0 3.75 3.031 6.75 6.75 6.75s6.75-3.031 6.75-6.75' />
    </g>
    <defs>
      <clipPath id='c3d655fe1e1a2c61b56ef1f4dca29bb9__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreMdIcon);
export default ForwardRef;
