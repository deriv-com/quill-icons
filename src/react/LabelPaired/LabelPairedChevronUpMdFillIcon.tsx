import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronUpMdFillIcon = (
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
      <path d='M7.281 7.313a.964.964 0 0 1 1.407 0l6 6a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.407 0L8 9.438l-5.312 5.28a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.405z' />
    </g>
    <defs>
      <clipPath id='2dd6b654afd831c737bff1ee8d8425e8__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpMdFillIcon);
export default ForwardRef;
