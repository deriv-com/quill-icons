import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFiveSmBoldIcon = (
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
        d='M1 5.172c.091-.346.31-.529.656-.547h5.688c.4.036.62.255.656.656-.036.401-.255.62-.656.657h-5.14l-.63 3.718h3.692c1.02.018 1.868.374 2.543 1.067.692.674 1.048 1.522 1.066 2.543-.018 1.02-.374 1.868-1.066 2.543-.675.692-1.523 1.048-2.543 1.066H2.668a2.63 2.63 0 0 1-1.395-.383 2.47 2.47 0 0 1-.957-1.066l-.136-.219c-.128-.383-.028-.684.3-.902.383-.128.675-.028.875.3l.137.22c.255.473.647.72 1.176.738h2.598c.656-.019 1.194-.247 1.613-.684.437-.42.665-.957.684-1.613-.019-.657-.247-1.194-.684-1.614-.42-.437-.957-.665-1.613-.683H.78a.597.597 0 0 1-.492-.246.666.666 0 0 1-.164-.52z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveSmBoldIcon);
export default ForwardRef;
