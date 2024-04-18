import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4 4.5c0-.25.219-.5.5-.5h5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-2v2.031a6.48 6.48 0 0 1 3.969 1.782l1.156-1.157a.53.53 0 0 1 .719 0c.187.188.187.5 0 .719l-1.188 1.188A6.45 6.45 0 0 1 13.5 13.5c0 3.594-2.937 6.5-6.5 6.5a6.495 6.495 0 0 1-6.5-6.5 6.48 6.48 0 0 1 6-6.469V5h-2a.494.494 0 0 1-.5-.5m-2.5 9a5.51 5.51 0 0 0 2.75 4.781c1.688.969 3.781.969 5.5 0 1.688-1 2.75-2.812 2.75-4.781 0-1.937-1.062-3.75-2.75-4.75-1.719-.969-3.812-.969-5.5 0A5.5 5.5 0 0 0 1.5 13.5m6-3V14c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-3.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5' />
    </g>
    <defs>
      <clipPath id='9ba35e8a1927933afd5c4acb20b4c50c__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchMdRegularIcon);
export default ForwardRef;
