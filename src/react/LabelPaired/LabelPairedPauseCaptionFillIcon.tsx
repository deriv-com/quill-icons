import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.375 5h.75q.469.024.797.328.304.328.328.797v6.75a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-.75a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797v-6.75q.024-.468.328-.797.329-.304.797-.328m4.5 0h.75q.469.024.797.328.304.328.328.797v6.75a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-.75a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797v-6.75q.024-.468.328-.797.328-.304.797-.328' />
    </g>
    <defs>
      <clipPath id='98dc61976aedd1f21a7169615dc8acad__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseCaptionFillIcon);
export default ForwardRef;
