import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.75 10.125v4.922l8.297-5.813Q12.375 9 12.844 9q.609 0 .984.422.422.375.422.984v15.188q0 .609-.422.984-.375.422-.984.422-.422 0-.797-.234L3.75 20.953v4.922Q3.657 26.907 2.625 27q-1.03-.093-1.125-1.125v-15.75Q1.595 9.095 2.625 9q1.032.095 1.125 1.125m0 8.063L12 24V12.047l-8.25 5.765z' />
    </g>
    <defs>
      <clipPath id='fff1e7fada6d6a61be2b82ccad0a909f__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepXlBoldIcon);
export default ForwardRef;
