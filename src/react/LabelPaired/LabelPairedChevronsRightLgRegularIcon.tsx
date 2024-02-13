import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightLgRegularIcon = (
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
      <path d='M2.93 23.43q-.43.39-.86 0-.39-.43 0-.86l7.032-7.07L2.07 8.43q-.39-.43 0-.86.43-.39.86 0l7.5 7.5q.39.43 0 .86zm7.5 0q-.43.39-.86 0-.39-.43 0-.86l7.032-7.07L9.57 8.43q-.39-.43 0-.86.43-.39.86 0l7.5 7.5q.39.43 0 .86z' />
    </g>
    <defs>
      <clipPath id='1a0621819b61b724d8671407c983574b__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightLgRegularIcon);
export default ForwardRef;
