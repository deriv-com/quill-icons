import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.898 9.102q.33.397 0 .796l-4.5 4.5q-.397.33-.796 0-.33-.397 0-.796L9.703 9.5 5.602 5.398q-.33-.397 0-.796.397-.33.796 0zm-9-4.5 4.5 4.5q.33.397 0 .796l-4.5 4.5q-.397.33-.796 0-.33-.397 0-.796L5.203 9.5 1.102 5.398q-.33-.397 0-.796.397-.33.796 0' />
    </g>
    <defs>
      <clipPath id='d9200e7c9daf0d103b9fd786b9c64efa__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightCaptionBoldIcon);
export default ForwardRef;
