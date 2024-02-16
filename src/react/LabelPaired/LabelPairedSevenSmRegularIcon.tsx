import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.125 5.063q.027-.411.438-.438h7.875q.246 0 .382.219a.47.47 0 0 1 0 .437l-7 11.375q-.246.329-.601.164-.329-.246-.137-.601L7.645 5.5H.563q-.411-.027-.438-.437' />
    </g>
    <defs>
      <clipPath id='fdcce6b5b2f99612eaab67fa9ceea4c5__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenSmRegularIcon);
export default ForwardRef;
