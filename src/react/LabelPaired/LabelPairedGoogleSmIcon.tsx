import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGoogleSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.672 10.914c0 3.883-2.652 6.617-6.563 6.617A6.745 6.745 0 0 1 .33 10.75a6.763 6.763 0 0 1 6.78-6.781c1.805 0 3.364.683 4.54 1.777l-1.86 1.777C7.383 5.2 2.9 6.95 2.9 10.75c0 2.379 1.886 4.293 4.21 4.293 2.68 0 3.692-1.914 3.829-2.926H7.108V9.793h6.454c.054.355.109.684.109 1.121' />
    </g>
    <defs>
      <clipPath id='0aab9fca471edc4352d4fc9fd53da9f4__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGoogleSmIcon);
export default ForwardRef;
