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
      <path d='M3.75 10.125v4.969L12 9.28c.234-.187.516-.281.797-.281a1.46 1.46 0 0 1 1.453 1.453v15.14A1.41 1.41 0 0 1 12.844 27c-.328 0-.61-.047-.844-.234l-8.25-5.813v4.922A1.11 1.11 0 0 1 2.625 27c-.656 0-1.125-.469-1.125-1.125v-15.75C1.5 9.515 1.969 9 2.625 9c.61 0 1.125.516 1.125 1.125m0 8.11L12 24V12.047l-8.25 5.765z' />
    </g>
    <defs>
      <clipPath id='a4fd715103b500ce513b48adfe9d7787__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepXlBoldIcon);
export default ForwardRef;
