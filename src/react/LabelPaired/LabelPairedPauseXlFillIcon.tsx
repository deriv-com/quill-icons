import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseXlFillIcon = (
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
      <path d='M2.25 9h1.5C4.969 9 6 10.031 6 11.25v13.5A2.25 2.25 0 0 1 3.75 27h-1.5A2.22 2.22 0 0 1 0 24.75v-13.5A2.25 2.25 0 0 1 2.25 9m9 0h1.5C13.969 9 15 10.031 15 11.25v13.5A2.25 2.25 0 0 1 12.75 27h-1.5A2.22 2.22 0 0 1 9 24.75v-13.5A2.25 2.25 0 0 1 11.25 9' />
    </g>
    <defs>
      <clipPath id='a74f1b3611c7aaa4ddb2b52bf7516c09__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseXlFillIcon);
export default ForwardRef;
