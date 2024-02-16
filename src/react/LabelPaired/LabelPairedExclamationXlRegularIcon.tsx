import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={36}
    viewBox='0 0 3 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 8.25V22.5q-.046.704-.75.75-.703-.046-.75-.75V8.25q.047-.703.75-.75.704.046.75.75M1.5 28.125Q.47 28.032.375 27 .47 25.97 1.5 25.875q1.032.094 1.125 1.125-.093 1.032-1.125 1.125' />
    </g>
    <defs>
      <clipPath id='474f623e57729cbe4c7b5dcc24f24416__a'>
        <path d='M0 0h3v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationXlRegularIcon);
export default ForwardRef;
