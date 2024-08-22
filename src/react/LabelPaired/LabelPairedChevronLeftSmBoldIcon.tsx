import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronLeftSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.535 10.285 5.25-5.222c.246-.274.656-.274.93 0a.644.644 0 0 1 0 .902L1.902 10.75l4.786 4.813a.6.6 0 0 1 0 .902.6.6 0 0 1-.903 0l-5.25-5.25c-.273-.246-.273-.656 0-.93' />
    </g>
    <defs>
      <clipPath id='aee93cee701f59695d6d80802bca4cc9__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftSmBoldIcon);
export default ForwardRef;
