import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGoogleCaptionIcon = (
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
      <path d='M11.719 9.64c0 3.329-2.274 5.672-5.625 5.672A5.78 5.78 0 0 1 .28 9.5a5.797 5.797 0 0 1 5.813-5.812c1.547 0 2.883.585 3.89 1.523L8.391 6.734C6.328 4.742 2.484 6.242 2.484 9.5c0 2.04 1.618 3.68 3.61 3.68 2.297 0 3.164-1.64 3.281-2.508H6.094V8.68h5.531c.047.304.094.586.094.96' />
    </g>
    <defs>
      <clipPath id='d0ae178eced70da8d513db7ee0f167c6__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGoogleCaptionIcon);
export default ForwardRef;
