import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtCaptionFillIcon = (
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
      <path d='M6 5a4.501 4.501 0 0 0 0 9c.398 0 .75.352.75.75 0 .422-.352.75-.75.75-3.328 0-6-2.672-6-6 0-3.305 2.672-6 6-6 3.305 0 6 2.695 6 6v.75a2.25 2.25 0 0 1-2.25 2.25 2.32 2.32 0 0 1-1.734-.773C7.5 12.219 6.773 12.5 6 12.5a2.99 2.99 0 0 1-3-3c0-1.64 1.336-3 3-3 .633 0 1.242.21 1.734.586.141-.117.305-.211.516-.211.398 0 .75.352.75.75v2.625c0 .422.328.75.75.75.398 0 .75-.328.75-.75V9.5C10.5 7.016 8.484 5 6 5m1.5 4.5c0-.516-.305-1.008-.75-1.29a1.55 1.55 0 0 0-1.5 0c-.469.282-.75.774-.75 1.29 0 .54.281 1.031.75 1.313a1.55 1.55 0 0 0 1.5 0c.445-.282.75-.774.75-1.313' />
    </g>
    <defs>
      <clipPath id='05cfea0383d3fc54aa54afb2be0212d5__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtCaptionFillIcon);
export default ForwardRef;
