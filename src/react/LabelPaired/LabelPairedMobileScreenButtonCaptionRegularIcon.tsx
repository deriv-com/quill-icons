import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonCaptionRegularIcon = (
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
      <path d='M6.75 4.25h-4.5A.755.755 0 0 0 1.5 5v6h6V5a.77.77 0 0 0-.75-.75m.75 7.5h-6V14c0 .422.328.75.75.75h4.5c.398 0 .75-.328.75-.75zM2.25 3.5h4.5c.82 0 1.5.68 1.5 1.5v9c0 .844-.68 1.5-1.5 1.5h-4.5A1.48 1.48 0 0 1 .75 14V5c0-.82.656-1.5 1.5-1.5m1.125 9.75c0-.187.164-.375.375-.375h1.5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-1.5a.37.37 0 0 1-.375-.375' />
    </g>
    <defs>
      <clipPath id='b9baff48958d8809665ff33c023c065c__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonCaptionRegularIcon);
export default ForwardRef;
