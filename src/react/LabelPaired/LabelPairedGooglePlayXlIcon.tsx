import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedGooglePlayXlIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m15.234 16.969 2.813-2.813L4.922 6.61zM2.204 6 14.25 18 2.203 30c-.656-.344-1-.89-1.031-1.64V7.64c.031-.75.375-1.296 1.031-1.64m19.921 10.594c.469.343.703.812.703 1.406 0 .594-.219 1.063-.656 1.406l-2.813 1.64L16.312 18l3.047-3zM4.922 29.39l10.312-10.36 2.813 2.813z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlayXlIcon);
export default ForwardRef;
