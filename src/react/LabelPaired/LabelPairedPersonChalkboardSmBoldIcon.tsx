import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPersonChalkboardSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.5 6.375c-.492-.018-.875-.237-1.148-.656a1.395 1.395 0 0 1 0-1.313c.273-.419.656-.638 1.148-.656.492.018.875.237 1.148.656.22.438.22.875 0 1.313-.273.419-.656.638-1.148.656Zm-.383 2.188h-.054v3.5h.875v-3.5h-.82Zm-.054 8.53c-.037.402-.256.62-.657.657-.4-.037-.62-.255-.656-.656V9.875l-1.176 2.078c-.237.328-.538.41-.902.246-.328-.237-.41-.537-.246-.902L3.039 8.48c.219-.382.51-.683.875-.902a2.295 2.295 0 0 1 1.203-.328H9V5.062c.018-.364.146-.674.383-.93.255-.236.565-.364.93-.382h6.124c.365.018.675.146.93.383.237.255.365.565.383.93v6.125a1.427 1.427 0 0 1-.383.93 1.427 1.427 0 0 1-.93.382h-6.125a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.382-.93V9.876h1.313v1.313h6.124V5.061h-6.125V7.25h.657c.4.036.62.255.656.656-.037.401-.255.62-.656.657H7.25v8.53c-.036.402-.255.62-.656.657-.401-.037-.62-.255-.657-.656v-3.719h-.875v3.719Z'
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
