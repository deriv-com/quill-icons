import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineXlFillIcon = (
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
      <path d='M3 15c0 1.64.844 3.094 2.25 3.938 1.36.796 3.094.796 4.5 0C11.11 18.094 12 16.64 12 15c0-1.594-.89-3.047-2.25-3.89-1.406-.797-3.14-.797-4.5 0C3.844 11.952 3 13.405 3 15m4.078 7.5C3.141 22.313 0 19.031 0 15c0-4.125 3.328-7.5 7.5-7.5 4.125 0 7.5 3.375 7.5 7.5 0 .14-.047.281-.047.375-.047 1.688-.703 3.281-1.781 4.594l-6.797 8.015c-.516.657-1.5.703-2.11.188-.656-.516-.702-1.5-.187-2.11z' />
    </g>
    <defs>
      <clipPath id='f7e8326bf931d36011ac765943d0992b__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineXlFillIcon);
export default ForwardRef;
