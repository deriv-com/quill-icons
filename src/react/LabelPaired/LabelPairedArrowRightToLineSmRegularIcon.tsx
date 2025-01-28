import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineSmRegularIcon = (
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
      <path d='M12.625 5.938v9.625a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V5.938a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438m-2.762 5.14-3.5 3.5a.463.463 0 0 1-.629 0 .463.463 0 0 1 0-.629l2.762-2.761H.813a.43.43 0 0 1-.438-.438.45.45 0 0 1 .438-.437h7.683L5.734 7.578a.463.463 0 0 1 0-.629.463.463 0 0 1 .63 0l3.5 3.5a.463.463 0 0 1 0 .63' />
    </g>
    <defs>
      <clipPath id='b2570db2540732911140dcc1731dda77__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineSmRegularIcon);
export default ForwardRef;
