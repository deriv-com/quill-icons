import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardStepSmRegularIcon = (
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
        d='M7.125 5.938c.018-.274.164-.42.438-.438.273.018.419.164.437.438v9.625c-.018.273-.164.419-.437.437-.274-.018-.42-.164-.438-.437v-3.72L2.23 15.837a.69.69 0 0 1-.464.164.742.742 0 0 1-.547-.219.742.742 0 0 1-.219-.547V6.266c0-.22.073-.401.219-.547a.742.742 0 0 1 .547-.219.69.69 0 0 1 .464.164l4.895 3.992zm-5.25.574v8.476l5.223-4.238z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepSmRegularIcon);
export default ForwardRef;
