import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightSmRegularIcon = (
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
      <path d='m12.488 11.078-4.812 4.813a.463.463 0 0 1-.63 0 .463.463 0 0 1 0-.63l4.075-4.073H.813a.43.43 0 0 1-.438-.438.45.45 0 0 1 .438-.437H11.12L7.047 6.266a.463.463 0 0 1 0-.63.463.463 0 0 1 .629 0l4.812 4.813a.463.463 0 0 1 0 .63' />
    </g>
    <defs>
      <clipPath id='ce7e798e098e4b0abcf9bfcc9c780409__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightSmRegularIcon);
export default ForwardRef;
