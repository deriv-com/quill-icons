import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.016 7.04 5.555 9.5l2.46 2.484a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.054 0L4.5 10.58l-2.484 2.46a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055L3.42 9.5.962 7.04a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.055 0L4.5 8.445l2.46-2.46a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.054' />
    </g>
    <defs>
      <clipPath id='e77cdabb0ee1ab2b7f73f81ea1e4dfb0__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkCaptionFillIcon);
export default ForwardRef;
