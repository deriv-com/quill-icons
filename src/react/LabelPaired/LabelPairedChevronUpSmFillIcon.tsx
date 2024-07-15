import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronUpSmFillIcon = (
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
      <path d='M6.371 6.648a.843.843 0 0 1 1.23 0l5.25 5.25a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0L7 8.509l-4.648 4.62a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23z' />
    </g>
    <defs>
      <clipPath id='337bf357a96ab7f2ab1779e4ebe94810__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpSmFillIcon);
export default ForwardRef;
