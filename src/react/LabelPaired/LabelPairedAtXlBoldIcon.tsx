import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 8.25c-5.39 0-9.75 4.406-9.75 9.75 0 5.39 4.36 9.75 9.75 9.75.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 12 30C5.344 30 0 24.656 0 18 0 11.39 5.344 6 12 6c6.61 0 12 5.39 12 12v1.313c0 2.39-1.969 4.312-4.312 4.312-1.5 0-2.766-.703-3.563-1.828A5.56 5.56 0 0 1 12 23.625 5.58 5.58 0 0 1 6.375 18 5.61 5.61 0 0 1 12 12.375c1.313 0 2.578.516 3.516 1.266.234-.282.562-.516.984-.516.61 0 1.125.516 1.125 1.125v5.063c0 1.171.89 2.062 2.063 2.062a2.05 2.05 0 0 0 2.062-2.062V18c0-5.344-4.406-9.75-9.75-9.75M15.375 18c0-1.172-.656-2.297-1.687-2.906-1.079-.61-2.344-.61-3.376 0A3.33 3.33 0 0 0 8.626 18c0 1.219.61 2.344 1.688 2.953 1.03.61 2.296.61 3.374 0A3.44 3.44 0 0 0 15.376 18' />
    </g>
    <defs>
      <clipPath id='33bd25c8d2652570e85adb0385f3c9ee__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtXlBoldIcon);
export default ForwardRef;
