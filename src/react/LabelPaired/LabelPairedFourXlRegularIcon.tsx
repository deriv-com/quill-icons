import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.156 8.625 1.922 21H13.5v-8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75V21h2.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H15v5.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-5.203H.703c-.234 0-.469-.14-.61-.375a.85.85 0 0 1-.046-.75l6.75-13.5a.77.77 0 0 1 1.031-.328.77.77 0 0 1 .328 1.031' />
    </g>
    <defs>
      <clipPath id='9400f6e55cb870c37273ad6e7ad90a53__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourXlRegularIcon);
export default ForwardRef;
