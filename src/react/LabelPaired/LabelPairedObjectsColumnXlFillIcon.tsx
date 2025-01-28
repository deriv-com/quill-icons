import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsColumnXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 7.5h4.5C7.969 7.5 9 8.531 9 9.75v7.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 17.25v-7.5A2.25 2.25 0 0 1 2.25 7.5m12 9h4.5c1.219 0 2.25 1.031 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 12 26.25v-7.5a2.25 2.25 0 0 1 2.25-2.25M0 24.75a2.25 2.25 0 0 1 2.25-2.25h4.5C7.969 22.5 9 23.531 9 24.75v1.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 26.25zM14.25 7.5h4.5C19.969 7.5 21 8.531 21 9.75v1.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 12 11.25v-1.5a2.25 2.25 0 0 1 2.25-2.25' />
    </g>
    <defs>
      <clipPath id='d370d8181a51c00065bb106e76d7045f__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsColumnXlFillIcon);
export default ForwardRef;
