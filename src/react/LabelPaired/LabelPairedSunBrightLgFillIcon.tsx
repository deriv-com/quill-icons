import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 5.5a.95.95 0 0 1 .938.938v2.5c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-2.5c0-.508.39-.938.937-.938m0 15.625a.95.95 0 0 1 .938.938v2.5c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-2.5c0-.508.39-.938.937-.938m9.063-4.687h-2.5c-.547 0-.938-.391-.938-.938 0-.508.39-.937.938-.937h2.5A.95.95 0 0 1 20 15.5c0 .547-.43.938-.937.938M4.374 15.5c0 .547-.43.938-.937.938h-2.5C.39 16.438 0 16.047 0 15.5c0-.508.39-.937.938-.937h2.5a.95.95 0 0 1 .937.937M17.07 9.758l-1.797 1.797c-.351.351-.937.351-1.328 0-.351-.39-.351-.977 0-1.328l1.797-1.797c.352-.352.938-.352 1.328 0 .352.39.352.976 0 1.328M6.016 19.484c.351.391.351.977 0 1.328L4.219 22.57a.856.856 0 0 1-1.29 0 .856.856 0 0 1 0-1.289l1.759-1.797c.351-.351.937-.351 1.328 0m9.726 3.086-1.797-1.758c-.351-.351-.351-.937 0-1.328.39-.351.977-.351 1.328 0l1.797 1.797a.92.92 0 0 1 0 1.29c-.39.39-.976.39-1.328 0M6.016 11.555c-.391.351-.977.351-1.328 0L2.93 9.758c-.39-.352-.39-.938 0-1.328a.92.92 0 0 1 1.289 0l1.797 1.797c.351.351.351.937 0 1.328M10 19.875c-1.602 0-3.008-.82-3.79-2.187-.82-1.329-.82-3.008 0-4.375.782-1.329 2.188-2.188 3.79-2.188 1.563 0 2.969.86 3.75 2.188.82 1.367.82 3.046 0 4.374A4.29 4.29 0 0 1 10 19.876' />
    </g>
    <defs>
      <clipPath id='82146103a7a545989f7d5d91dae7845d__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightLgFillIcon);
export default ForwardRef;
