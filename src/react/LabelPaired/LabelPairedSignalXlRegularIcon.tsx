import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M27.75 6.75v22.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V6.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75M21 10.5c.375 0 .75.375.75.75v18c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-18c0-.375.328-.75.75-.75m-5.25 5.25v13.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-13.5c0-.375.328-.75.75-.75.375 0 .75.375.75.75M9 19.5c.375 0 .75.375.75.75v9c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-9c0-.375.328-.75.75-.75M3 24c.375 0 .75.375.75.75v4.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-4.5c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='aa1f7bd66963de3537521ed20e686c3e__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalXlRegularIcon);
export default ForwardRef;
