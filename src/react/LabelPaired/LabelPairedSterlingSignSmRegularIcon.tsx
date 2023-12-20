import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSterlingSignSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.313 7.906v2.844h4.374c.274.018.42.164.438.438-.018.273-.164.419-.437.437H2.313A10.705 10.705 0 0 1 1.273 16h7.165c.273.018.419.164.437.438-.018.273-.164.419-.437.437H.561a.428.428 0 0 1-.382-.219.465.465 0 0 1 0-.437l.027-.055a10.184 10.184 0 0 0 1.23-4.539H.564c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438h.875V7.906c.018-.93.337-1.704.957-2.324.62-.62 1.394-.939 2.324-.957h.191c.365 0 .711.055 1.04.164l2.187.738c.237.11.328.292.273.547-.11.255-.292.347-.547.274l-2.187-.711A2.263 2.263 0 0 0 4.91 5.5H4.72c-.675.018-1.24.255-1.696.71-.455.457-.692 1.022-.71 1.696'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignSmRegularIcon);
export default ForwardRef;
