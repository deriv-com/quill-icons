import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPersonChalkboardSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.5 6.375c-.492-.018-.875-.237-1.148-.656a1.395 1.395 0 0 1 0-1.313c.273-.419.656-.638 1.148-.656.492.018.875.237 1.148.656.22.438.22.875 0 1.313-.273.419-.656.638-1.148.656m-.383 2.188h-.054v3.5h.875v-3.5zm-.054 8.53c-.037.402-.256.62-.657.657-.4-.037-.62-.255-.656-.656V9.875l-1.176 2.078c-.237.328-.538.41-.902.246-.328-.237-.41-.537-.246-.902L3.039 8.48c.219-.382.51-.683.875-.902a2.295 2.295 0 0 1 1.203-.328H9V5.063c.018-.365.146-.675.383-.93.255-.237.565-.365.93-.383h6.124c.365.018.675.146.93.383.237.255.365.565.383.93v6.125a1.427 1.427 0 0 1-.383.93 1.427 1.427 0 0 1-.93.382h-6.125a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.382-.93V9.876h1.313v1.313h6.124V5.062h-6.125V7.25h.657c.4.036.62.255.656.656-.037.401-.255.62-.656.657H7.25v8.53c-.036.402-.255.62-.656.657-.401-.037-.62-.255-.657-.656v-3.719h-.875z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardSmBoldIcon);
export default ForwardRef;
