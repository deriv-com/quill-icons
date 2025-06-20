import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileXlBoldIcon = (
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
      <path d='M6 8.25c-.422 0-.75.375-.75.75v12H16.5v3H2.25A2.22 2.22 0 0 1 0 21.75c0-.375.328-.75.75-.75H3V9c0-1.64 1.313-3 3-3h15c1.64 0 3 1.36 3 3v1.5h-2.25V9c0-.375-.375-.75-.75-.75zm12 6A2.25 2.25 0 0 1 20.25 12h7.5c1.219 0 2.25 1.031 2.25 2.25v13.5A2.25 2.25 0 0 1 27.75 30h-7.5A2.22 2.22 0 0 1 18 27.75zm2.25 0v13.5h7.5v-13.5z' />
    </g>
    <defs>
      <clipPath id='db439ebfef21917dfccfbd0185e0af7c__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileXlBoldIcon);
export default ForwardRef;
