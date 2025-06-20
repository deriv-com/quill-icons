import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightXlRegularIcon = (
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
      <path d='M22.5 18c0-3.75-2.016-7.172-5.25-9.047-3.281-1.922-7.266-1.922-10.5 0A10.36 10.36 0 0 0 1.5 18c0 3.797 1.969 7.219 5.25 9.094 3.234 1.922 7.219 1.922 10.5 0A10.48 10.48 0 0 0 22.5 18M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m12.563-6c1.734 0 3.187 1.453 3.187 3.188 0 .984-.422 1.828-1.078 2.39.844.656 1.453 1.688 1.453 2.86A3.56 3.56 0 0 1 12.563 24h-1.126a3.56 3.56 0 0 1-3.562-3.562 3.62 3.62 0 0 1 1.406-2.86c-.656-.562-1.031-1.406-1.031-2.39A3.19 3.19 0 0 1 11.438 12zm-1.126 4.875h1.126c.89 0 1.687-.75 1.687-1.687 0-.891-.797-1.688-1.687-1.688h-1.126c-.937 0-1.687.797-1.687 1.688 0 .937.75 1.687 1.688 1.687m1.126 1.5h-1.126a2.05 2.05 0 0 0-2.062 2.063c0 1.171.89 2.062 2.063 2.062h1.124a2.05 2.05 0 0 0 2.063-2.062 2.08 2.08 0 0 0-2.062-2.063' />
    </g>
    <defs>
      <clipPath id='01a5682288a1cd5bf060a70bf45def4f__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightXlRegularIcon);
export default ForwardRef;
