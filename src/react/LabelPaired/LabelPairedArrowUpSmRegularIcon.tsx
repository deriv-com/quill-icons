import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m5.8 4.762 4.813 4.812a.463.463 0 0 1 0 .63.463.463 0 0 1-.629 0L5.938 6.128v10.308a.45.45 0 0 1-.438.438.43.43 0 0 1-.437-.437V6.127L.987 10.204a.463.463 0 0 1-.629 0 .463.463 0 0 1 0-.629l4.813-4.812a.463.463 0 0 1 .629 0' />
    </g>
    <defs>
      <clipPath id='b1c67ff8898e7dd1cd165b4ad7e70540__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpSmRegularIcon);
export default ForwardRef;
