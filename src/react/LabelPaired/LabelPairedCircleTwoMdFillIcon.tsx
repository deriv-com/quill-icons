import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoMdFillIcon = (
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
      <path d='M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M6.938 9.781c.25-.156.5-.25.812-.25h.094c.625 0 1.156.531 1.156 1.156 0 .313-.156.626-.375.844L5.219 14.72a.79.79 0 0 0-.188.812.79.79 0 0 0 .719.469h4.5a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75H7.625l2.031-1.875c.531-.5.813-1.187.813-1.937A2.66 2.66 0 0 0 7.875 8.03H7.75c-.625 0-1.219.188-1.719.563l-.75.562c-.343.25-.406.75-.156 1.063.25.344.75.406 1.063.156z' />
    </g>
    <defs>
      <clipPath id='e4219157c0869c12d1ce604c62bc774a__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoMdFillIcon);
export default ForwardRef;
