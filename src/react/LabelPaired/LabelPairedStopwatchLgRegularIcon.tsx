import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.25 6.125c0-.312.273-.625.625-.625h6.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-2.5v2.54a8.1 8.1 0 0 1 4.96 2.226l1.446-1.446a.66.66 0 0 1 .899 0c.234.235.234.625 0 .899l-1.485 1.484a8.06 8.06 0 0 1 1.68 4.922c0 4.492-3.672 8.125-8.125 8.125a8.12 8.12 0 0 1-8.125-8.125 8.1 8.1 0 0 1 7.5-8.086V6.75h-2.5a.617.617 0 0 1-.625-.625m-3.125 11.25c0 2.46 1.29 4.727 3.438 5.977 2.109 1.21 4.726 1.21 6.875 0 2.109-1.25 3.437-3.516 3.437-5.977 0-2.422-1.328-4.687-3.437-5.937-2.149-1.211-4.766-1.211-6.876 0a6.87 6.87 0 0 0-3.437 5.937m7.5-3.75V18a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-4.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625' />
    </g>
    <defs>
      <clipPath id='2e8aeb2b43a459a7b0c002ec3a678095__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchLgRegularIcon);
export default ForwardRef;
