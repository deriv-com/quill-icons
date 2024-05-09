import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.422 5.828a.463.463 0 0 1 0-.629.463.463 0 0 1 .629 0L7 10.15l4.922-4.95a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .63l-5.25 5.25a.463.463 0 0 1-.63 0zm0 5.25a.463.463 0 0 1 0-.629.463.463 0 0 1 .629 0L7 15.4l4.922-4.95a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .63l-5.25 5.25a.463.463 0 0 1-.63 0z' />
    </g>
    <defs>
      <clipPath id='a16e37e8ac30c91965aeaf085e7eb034__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownSmRegularIcon);
export default ForwardRef;
