import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleZeroXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m0-18a4.5 4.5 0 0 0-4.5 4.5v3a4.501 4.501 0 0 0 9 0v-3c0-2.484-2.016-4.5-4.5-4.5m-2.25 4.5A2.25 2.25 0 0 1 12 14.25c1.219 0 2.25 1.031 2.25 2.25v3A2.25 2.25 0 0 1 12 21.75a2.22 2.22 0 0 1-2.25-2.25z' />
    </g>
    <defs>
      <clipPath id='f7efc54e2028631736bc4426051f5b11__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleZeroXlFillIcon);
export default ForwardRef;
