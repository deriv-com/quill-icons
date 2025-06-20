import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleXmarkMdBoldIcon = (
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
      <path d='M8 5.5c-2.344 0-4.469 1.25-5.656 3.25a6.52 6.52 0 0 0 0 6.5A6.51 6.51 0 0 0 8 18.5c2.313 0 4.438-1.219 5.625-3.25a6.52 6.52 0 0 0 0-6.5C12.438 6.75 10.313 5.5 8 5.5M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M5.469 9.469a.736.736 0 0 1 1.031 0l1.469 1.469 1.468-1.47c.313-.28.782-.28 1.063 0 .313.313.313.782 0 1.063L9.031 12l1.469 1.469c.313.312.313.781 0 1.062-.281.313-.75.313-1.062 0l-1.47-1.469-1.468 1.47a.684.684 0 0 1-1.031 0c-.313-.282-.313-.75 0-1.063L6.937 12 5.47 10.531c-.313-.281-.313-.75 0-1.062' />
    </g>
    <defs>
      <clipPath id='1d0f9b2bbfaa6b2099d0bcb05f867176__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleXmarkMdBoldIcon);
export default ForwardRef;
