import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.25 13.547V16.5h5.25c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H5.25v2.11c0 1.359-.375 2.671-1.078 3.843l-.047.047H13.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-12c-.562 0-1.078-.281-1.312-.75a1.44 1.44 0 0 1 0-1.5l1.406-2.344a4.5 4.5 0 0 0 .656-2.297V19.5H1.5A1.48 1.48 0 0 1 0 18c0-.797.656-1.5 1.5-1.5h.75v-2.953c0-3.328 2.672-6.047 6-6.047.656 0 1.266.14 1.922.328l3.797 1.266c.797.281 1.219 1.125.937 1.922-.281.75-1.125 1.172-1.875.937l-3.844-1.265c-.28-.094-.609-.188-.937-.188-1.687 0-3 1.36-3 3.047' />
    </g>
    <defs>
      <clipPath id='6796b521e7f1ffd24c531f62c23e6edc__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignXlFillIcon);
export default ForwardRef;
