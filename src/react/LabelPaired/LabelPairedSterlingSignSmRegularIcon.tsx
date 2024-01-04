import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSterlingSignSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.313 7.906v2.844h4.374c.274.018.42.164.438.438-.018.273-.164.419-.438.437H2.313A10.705 10.705 0 0 1 1.274 16h7.165c.273.018.419.164.437.438-.018.273-.164.419-.438.437H.564a.428.428 0 0 1-.383-.219.465.465 0 0 1 0-.437l.027-.055a10.184 10.184 0 0 0 1.23-4.539H.563c-.273-.018-.419-.164-.437-.438.018-.273.164-.419.438-.437h.875V7.906c.018-.93.337-1.704.957-2.324.62-.62 1.394-.939 2.324-.957h.191c.365 0 .711.055 1.04.164l2.187.738c.237.11.328.292.273.547-.11.255-.292.347-.547.274l-2.187-.711A2.263 2.263 0 0 0 4.91 5.5H4.72c-.675.018-1.24.255-1.696.71-.455.457-.692 1.022-.71 1.696Z'
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
