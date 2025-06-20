import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleXmarkMdFillIcon = (
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
      <path d='M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M5.469 9.469c-.313.312-.313.781 0 1.062L6.937 12 5.47 13.469c-.313.312-.313.781 0 1.062a.684.684 0 0 0 1.031 0l1.469-1.469 1.468 1.47c.313.312.782.312 1.063 0 .313-.282.313-.75 0-1.063L9.031 12l1.469-1.469c.313-.281.313-.75 0-1.062-.281-.281-.75-.281-1.062 0l-1.47 1.469L6.5 9.468a.736.736 0 0 0-1.031 0' />
    </g>
    <defs>
      <clipPath id='7e54afb82cb981eb687064ba52828345__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleXmarkMdFillIcon);
export default ForwardRef;
