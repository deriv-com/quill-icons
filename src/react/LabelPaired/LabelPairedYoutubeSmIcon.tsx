import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedYoutubeSmIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M15.164 7.14c.091.42.164.903.219 1.45.036.565.064 1.066.082 1.504v1.34c-.018.437-.046.93-.082 1.476a12.892 12.892 0 0 1-.219 1.477c-.219.674-.665 1.112-1.34 1.312-.437.091-1.112.164-2.023.219-.912.036-1.76.064-2.543.082H6.742c-.784-.018-1.631-.046-2.543-.082-.911-.055-1.586-.128-2.023-.219-.675-.2-1.121-.638-1.34-1.312-.091-.42-.164-.912-.219-1.477a59.898 59.898 0 0 1-.082-1.476v-1.34c.018-.438.046-.939.082-1.504.055-.547.128-1.03.219-1.45.219-.674.665-1.12 1.34-1.34.437-.09 1.112-.163 2.023-.218.912-.036 1.76-.064 2.543-.082h2.516c.784.018 1.631.046 2.543.082.911.055 1.586.128 2.023.219.675.219 1.121.665 1.34 1.34M6.47 12.993l3.91-2.242-3.91-2.215z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedYoutubeSmIcon);
export default ForwardRef;
