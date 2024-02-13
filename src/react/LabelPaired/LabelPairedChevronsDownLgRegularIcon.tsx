import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownLgRegularIcon = (
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
      <path d='M2.07 8.43q-.39-.43 0-.86.43-.39.86 0L10 14.602l7.07-7.032q.43-.39.86 0 .39.43 0 .86l-7.5 7.5q-.43.39-.86 0zm0 7.5q-.39-.43 0-.86.43-.39.86 0L10 22.102l7.07-7.032q.43-.39.86 0 .39.43 0 .86l-7.5 7.5q-.43.39-.86 0z' />
    </g>
    <defs>
      <clipPath id='7ace6d9de1c8a7161729c6704b13537e__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownLgRegularIcon);
export default ForwardRef;
