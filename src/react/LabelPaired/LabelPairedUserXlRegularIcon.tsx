import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserXlRegularIcon = (
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
      <path d='M15 12c0-1.594-.89-3.047-2.25-3.89-1.406-.797-3.14-.797-4.5 0C6.844 8.952 6 10.405 6 12c0 1.64.844 3.094 2.25 3.938 1.36.796 3.094.796 4.5 0C14.11 15.094 15 13.64 15 12M4.5 12a5.95 5.95 0 0 1 3-5.156c1.828-1.078 4.125-1.078 6 0 1.828 1.078 3 3.047 3 5.156 0 2.156-1.172 4.125-3 5.203-1.875 1.078-4.172 1.078-6 0A5.97 5.97 0 0 1 4.5 12m-3 16.5h18c-.094-3.703-3.14-6.75-6.89-6.75H8.343c-3.75 0-6.797 3.047-6.844 6.75m-1.5.14c0-4.64 3.703-8.39 8.344-8.39h4.265C17.25 20.25 21 24 21 28.64c0 .75-.656 1.36-1.406 1.36H1.359C.61 30 0 29.39 0 28.64' />
    </g>
    <defs>
      <clipPath id='d174032e211fad1c762a96e3676d3568__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserXlRegularIcon);
export default ForwardRef;
