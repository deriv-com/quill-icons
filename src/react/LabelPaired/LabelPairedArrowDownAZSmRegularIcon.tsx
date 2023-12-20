import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownAZSmRegularIcon = (
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
        d='M7.426 14.113 4.8 16.738c-.2.183-.401.183-.602 0l-2.625-2.625c-.182-.2-.182-.4 0-.601.2-.183.401-.183.602 0l1.886 1.86V5.061c.019-.273.165-.419.438-.437.273.018.42.164.438.438V15.37l1.886-1.86c.2-.182.401-.182.602 0 .182.201.182.402 0 .602m4.457-9.242 1.75 3.473v.027l.437.875c.11.237.046.428-.191.574-.255.11-.447.046-.574-.191L12.977 9h-2.954l-.328.629c-.146.237-.337.3-.574.191-.237-.127-.3-.319-.191-.574l.41-.875h.027l1.75-3.5a.387.387 0 0 1 .383-.246c.182 0 .31.082.383.246M11.5 6.047l-1.04 2.078h2.08zm-1.75 5.578h3.5c.182 0 .31.082.383.246a.47.47 0 0 1-.027.465L10.651 16h2.598c.273.018.42.164.438.438-.019.273-.165.419-.438.437h-3.5a.387.387 0 0 1-.383-.246.433.433 0 0 1 .055-.465l2.926-3.664H9.75c-.273-.018-.42-.164-.437-.437.018-.274.164-.42.437-.438'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZSmRegularIcon);
export default ForwardRef;
