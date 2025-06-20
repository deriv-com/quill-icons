import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 25.5c0 .422.328.75.75.75h15c.375 0 .75-.328.75-.75v-2.25H2.25zM15.656 21h3.094V10.5c0-.375-.375-.75-.75-.75H3c-.422 0-.75.375-.75.75V21h3.094a3.02 3.02 0 0 1 2.906-2.25h4.5c1.36 0 2.531.984 2.906 2.25M21 10.5v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3h15c1.64 0 3 1.36 3 3M7.5 14.25c0-1.031.563-2.016 1.5-2.578.89-.516 2.063-.516 3 0 .89.562 1.5 1.547 1.5 2.578 0 1.078-.61 2.063-1.5 2.625-.937.516-2.11.516-3 0a3.05 3.05 0 0 1-1.5-2.625' />
    </g>
    <defs>
      <clipPath id='da1bf05221175631d4b7c468849659ec__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserXlBoldIcon);
export default ForwardRef;
