import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardStepSmRegularIcon = (
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
        d='M1.875 5.938v3.718L6.77 5.664a.69.69 0 0 1 .464-.164c.22 0 .401.073.547.219A.742.742 0 0 1 8 6.266v8.968a.742.742 0 0 1-.219.547.742.742 0 0 1-.547.219.69.69 0 0 1-.464-.164l-4.895-3.992v3.719c-.018.273-.164.419-.437.437-.274-.018-.42-.164-.438-.437V5.937c.018-.273.164-.419.438-.437.273.018.419.164.437.438m5.25.574L1.902 10.75l5.223 4.238z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepSmRegularIcon);
export default ForwardRef;
