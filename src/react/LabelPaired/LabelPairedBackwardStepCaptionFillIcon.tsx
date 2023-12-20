import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardStepCaptionFillIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m6.531 13.836-4.5-3.75-.281-.234v3.398a.73.73 0 0 1-.21.54A.73.73 0 0 1 1 14a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54v-7.5a.73.73 0 0 1 .21-.54A.73.73 0 0 1 1 5a.73.73 0 0 1 .54.21c.14.142.21.321.21.54v3.398l.281-.234 4.5-3.75c.235-.187.5-.219.797-.094.266.14.406.367.422.68v7.5c-.016.313-.156.54-.422.68-.297.125-.562.093-.797-.094'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepCaptionFillIcon);
export default ForwardRef;
