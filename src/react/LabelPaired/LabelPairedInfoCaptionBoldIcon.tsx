import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedInfoCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 5 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.563 5.188a.965.965 0 0 1 .468-.82.996.996 0 0 1 .938 0c.297.187.453.46.469.82a.965.965 0 0 1-.47.82.996.996 0 0 1-.937 0 .965.965 0 0 1-.469-.82m-.938 3c.031-.344.219-.532.563-.563H2.5c.344.031.531.219.563.563v6.187h1.124c.344.031.532.219.563.563-.031.343-.219.53-.562.562H.813c-.344-.031-.532-.219-.563-.562.031-.344.219-.532.563-.563h1.125V8.75h-.75c-.344-.031-.532-.219-.563-.562'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h5v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoCaptionBoldIcon);
export default ForwardRef;
