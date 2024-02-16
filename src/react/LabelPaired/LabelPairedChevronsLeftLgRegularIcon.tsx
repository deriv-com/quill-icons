import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftLgRegularIcon = (
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
      <path d='m2.07 15.07 7.5-7.5q.43-.39.86 0 .39.43 0 .86L3.398 15.5l7.032 7.07q.39.43 0 .86-.43.39-.86 0l-7.5-7.5q-.39-.43 0-.86m15-7.5q.43-.39.86 0 .39.43 0 .86l-7.032 7.07 7.032 7.07q.39.43 0 .86-.43.39-.86 0l-7.5-7.5q-.39-.43 0-.86z' />
    </g>
    <defs>
      <clipPath id='945e7094c4de24581a9a1566d727575f__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftLgRegularIcon);
export default ForwardRef;
