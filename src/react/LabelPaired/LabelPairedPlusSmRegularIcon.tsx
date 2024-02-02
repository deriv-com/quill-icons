import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.938 5.5v4.813h4.812q.41.027.438.437-.028.41-.438.438H6.938V16q-.029.41-.438.438-.41-.028-.437-.438v-4.812H1.25q-.41-.028-.437-.438.027-.41.437-.437h4.813V5.5q.027-.41.437-.437.41.027.438.437' />
    </g>
    <defs>
      <clipPath id='6711c64c3a1076a7__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusSmRegularIcon);
export default ForwardRef;
