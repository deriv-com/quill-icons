import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardCaptionFillIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.781 13.836 6.75 10.484V8.516l4.031-3.352c.235-.187.5-.219.797-.094.266.14.406.367.422.68v7.5c-.016.313-.156.54-.422.68-.297.125-.562.093-.797-.094M6 11.75v1.5c-.016.313-.156.54-.422.68-.297.125-.562.093-.797-.094l-4.5-3.75A.732.732 0 0 1 0 9.5c0-.234.094-.43.281-.586l4.5-3.75c.235-.187.5-.219.797-.094.266.14.406.367.422.68V9.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardCaptionFillIcon);
export default ForwardRef;
