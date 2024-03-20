import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 14.75h5.25c.398 0 .75-.328.75-.75v-1.5h.75V14c0 .844-.68 1.5-1.5 1.5H1.5A1.48 1.48 0 0 1 0 14V8.75c0-.82.656-1.5 1.5-1.5H3V8H1.5a.755.755 0 0 0-.75.75V14c0 .422.328.75.75.75M5.25 11h5.25c.398 0 .75-.328.75-.75V5a.77.77 0 0 0-.75-.75H5.25A.755.755 0 0 0 4.5 5v5.25c0 .422.328.75.75.75m-1.5-.75V5c0-.82.656-1.5 1.5-1.5h5.25c.82 0 1.5.68 1.5 1.5v5.25c0 .844-.68 1.5-1.5 1.5H5.25a1.48 1.48 0 0 1-1.5-1.5' />
    </g>
    <defs>
      <clipPath id='932dc395b04d1e6a0c0768b6f6e05064__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneCaptionRegularIcon);
export default ForwardRef;
