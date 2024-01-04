import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLinkSimpleSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.125 10.75C.161 9.51.59 8.48 1.41 7.66c.82-.82 1.85-1.249 3.09-1.285h2.188c.273.018.419.164.437.438-.018.273-.164.419-.438.437H4.5c-.984.018-1.814.355-2.488 1.012-.657.674-.994 1.504-1.012 2.488.018.984.355 1.814 1.012 2.488.674.657 1.504.994 2.488 1.012h2.188c.273.018.419.164.437.438-.018.273-.164.419-.438.437H4.5c-1.24-.037-2.27-.465-3.09-1.285-.82-.82-1.249-1.85-1.285-3.09Zm15.75 0c-.037 1.24-.465 2.27-1.285 3.09-.82.82-1.85 1.248-3.09 1.285H9.312c-.273-.018-.419-.164-.437-.438.018-.273.164-.419.438-.437H11.5c.984-.018 1.814-.355 2.488-1.012.657-.674.994-1.504 1.012-2.488-.018-.984-.355-1.814-1.012-2.488-.674-.657-1.504-.994-2.488-1.012H9.312c-.273-.018-.419-.164-.437-.438.018-.273.164-.419.438-.437H11.5c1.24.036 2.27.465 3.09 1.285.82.82 1.248 1.85 1.285 3.09Zm-11.594-.438h7.438c.273.019.419.165.437.438-.018.273-.164.42-.437.438H4.28c-.273-.019-.419-.165-.437-.438.018-.273.164-.42.437-.438Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleSmRegularIcon);
export default ForwardRef;
