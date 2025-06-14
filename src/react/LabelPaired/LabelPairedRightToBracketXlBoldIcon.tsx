import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketXlBoldIcon = (
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
      <path d='M9 23.156 14.156 18 9 12.89v2.485A1.11 1.11 0 0 1 7.875 16.5H2.25v3h5.625c.61 0 1.125.516 1.125 1.125zM16.5 18c0 .563-.234 1.078-.61 1.453l-5.437 5.438c-.422.422-.984.609-1.547.609a2.12 2.12 0 0 1-2.156-2.156V21.75h-4.5A2.22 2.22 0 0 1 0 19.5v-3a2.25 2.25 0 0 1 2.25-2.25h4.5v-1.547c0-1.219.938-2.203 2.156-2.203.563 0 1.125.234 1.547.656l5.438 5.438c.375.375.609.89.609 1.406m-.375 8.25h3.75a1.85 1.85 0 0 0 1.875-1.875v-12.75a1.88 1.88 0 0 0-1.875-1.875h-3.75C15.469 9.75 15 9.281 15 8.625c0-.61.469-1.125 1.125-1.125h3.75C22.125 7.5 24 9.375 24 11.625v12.75a4.13 4.13 0 0 1-4.125 4.125h-3.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='8341d1c8d6805f61aa5f640982f9e745__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketXlBoldIcon);
export default ForwardRef;
