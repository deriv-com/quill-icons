import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserXlFillIcon = (
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
      <path d='M0 10.5c0-1.64 1.313-3 3-3h15c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zM3 12v9c0 .844.656 1.5 1.5 1.5h.75c0-1.64 1.313-3 3-3h4.5c1.64 0 3 1.36 3 3h.75c.797 0 1.5-.656 1.5-1.5v-9c0-.797-.703-1.5-1.5-1.5h-12c-.844 0-1.5.703-1.5 1.5m4.5 3c0-1.031.563-2.016 1.5-2.578.89-.516 2.063-.516 3 0 .89.562 1.5 1.547 1.5 2.578 0 1.078-.61 2.063-1.5 2.625-.937.516-2.11.516-3 0A3.05 3.05 0 0 1 7.5 15' />
    </g>
    <defs>
      <clipPath id='8ee000b244a6374f2e86b8b4dedad956__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserXlFillIcon);
export default ForwardRef;
