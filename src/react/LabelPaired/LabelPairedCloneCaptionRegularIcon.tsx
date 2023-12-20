import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCloneCaptionRegularIcon = (
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
        d='M1.5 14.75h5.25a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-1.5h.75V14a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445H1.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 0 14V8.75c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445H3V8H1.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54V14c0 .219.07.398.21.54.142.14.321.21.54.21M5.25 11h5.25a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21H5.25a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v5.25c0 .219.07.398.21.54.142.14.321.21.54.21m-1.5-.75V5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h5.25c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v5.25a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445H5.25a1.515 1.515 0 0 1-1.055-.445 1.515 1.515 0 0 1-.445-1.055'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneCaptionRegularIcon);
export default ForwardRef;
