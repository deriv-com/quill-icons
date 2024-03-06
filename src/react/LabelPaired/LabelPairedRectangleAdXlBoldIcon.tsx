import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9.75q-.703.047-.75.75v15q.046.704.75.75h21q.704-.046.75-.75v-15q-.046-.703-.75-.75zm-3 .75q.047-1.266.89-2.11.844-.843 2.11-.89h21q1.266.047 2.11.89.843.844.89 2.11v15q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11zm10.781 3.61 3.375 6.75q.328.984-.515 1.546-.985.328-1.5-.515l-.282-.516H7.641l-.282.516q-.514.843-1.5.468-.89-.515-.468-1.5l3.375-6.75q.328-.609.984-.609.704 0 1.031.61M9.75 17.155l-.984 1.969h1.968zm8.625.844q-1.03.094-1.125 1.125.094 1.032 1.125 1.125 1.032-.093 1.125-1.125-.093-1.03-1.125-1.125m1.125-2.062v-1.313q.094-1.03 1.125-1.125 1.032.095 1.125 1.125v6.75q-.093 1.032-1.125 1.125-.468 0-.797-.328a3.2 3.2 0 0 1-1.453.328q-1.454-.047-2.39-.984-.939-.937-.985-2.391.047-1.454.984-2.39.938-.939 2.391-.985.609 0 1.125.188' />
    </g>
    <defs>
      <clipPath id='14401eb505bfe1efb5c2843d5ee8c061__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdXlBoldIcon);
export default ForwardRef;
