import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.43 7.57 7.5 7.5q.39.43 0 .86-.43.39-.86 0L10 8.898 2.93 15.93q-.43.39-.86 0-.39-.43 0-.86l7.5-7.5q.43-.39.86 0m7.5 15q.39.43 0 .86-.43.39-.86 0L10 16.398 2.93 23.43q-.43.39-.86 0-.39-.43 0-.86l7.5-7.5q.43-.39.86 0z' />
    </g>
    <defs>
      <clipPath id='01be56d58186f4aa4c5d386595738feb__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpLgRegularIcon);
export default ForwardRef;
