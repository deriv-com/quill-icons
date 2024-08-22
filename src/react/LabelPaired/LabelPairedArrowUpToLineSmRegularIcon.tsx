import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineSmRegularIcon = (
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
      <path d='M.688 4.625h9.625a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H.688a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438M5.8 7.387l3.5 3.5a.463.463 0 0 1 0 .629.463.463 0 0 1-.63 0L5.939 8.754v7.684a.45.45 0 0 1-.438.437.43.43 0 0 1-.437-.437V8.754L2.3 11.516a.463.463 0 0 1-.63 0 .463.463 0 0 1 0-.63l3.5-3.5a.463.463 0 0 1 .63 0' />
    </g>
    <defs>
      <clipPath id='0d4dc29f1c0e61ee91187aacb2851a63__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineSmRegularIcon);
export default ForwardRef;
