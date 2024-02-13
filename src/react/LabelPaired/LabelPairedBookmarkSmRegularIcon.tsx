import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkSmRegularIcon = (
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
      <path d='M.25 5.063q.027-.547.383-.93.382-.356.93-.383h7.875q.546.027.93.383.355.383.382.93v12.085q-.055.548-.602.602a.5.5 0 0 1-.328-.11L5.5 14.77l-4.32 2.87a.5.5 0 0 1-.328.11q-.548-.055-.602-.602zm1.313-.438q-.411.027-.438.438v11.566l4.129-2.735a.41.41 0 0 1 .492 0l4.129 2.735V5.062q-.027-.41-.437-.437z' />
    </g>
    <defs>
      <clipPath id='0c14224503719694045537c29d7dac1d__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkSmRegularIcon);
export default ForwardRef;
