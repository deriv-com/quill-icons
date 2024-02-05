import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 4.813q.047-.516.563-.563h6.375q.327 0 .492.281a.6.6 0 0 1 0 .563l-5.625 9.375q-.304.422-.774.21-.421-.303-.187-.773l5.11-8.531H.812Q.297 5.328.25 4.813' />
    </g>
    <defs>
      <clipPath id='a59d20f1a9208ddd2a19daec946e9f93__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenCaptionBoldIcon);
export default ForwardRef;
