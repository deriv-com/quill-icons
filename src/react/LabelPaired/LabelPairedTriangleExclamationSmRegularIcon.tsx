import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTriangleExclamationSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.957 15.234a.527.527 0 0 0-.082.274c.036.31.2.474.492.492h11.266c.292-.018.456-.182.492-.492a.73.73 0 0 0-.055-.274L7.574 5.828C7.428 5.61 7.237 5.5 7 5.5c-.237 0-.42.11-.547.328zm-.766-.437L5.688 5.39c.31-.493.747-.748 1.312-.766.565.018 1.003.273 1.313.766l5.496 9.406c.127.219.191.456.191.71a1.397 1.397 0 0 1-.41.958 1.397 1.397 0 0 1-.957.41H1.367A1.397 1.397 0 0 1 0 15.508c0-.255.064-.492.191-.711M7 8.125c.273.018.42.164.438.438v3.5c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.437-.437v-3.5c.018-.274.164-.42.437-.438m-.656 6.125c.036-.401.255-.62.656-.656.401.036.62.255.656.656-.036.401-.255.62-.656.656-.401-.036-.62-.255-.656-.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationSmRegularIcon);
export default ForwardRef;
