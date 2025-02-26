import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareNodesSmBoldIcon = (
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
      <path d='M12.625 7.25A2.626 2.626 0 0 1 10 9.875a2.6 2.6 0 0 1-1.996-.902l-2.461 1.23c.055.192.082.383.082.547q0 .287-.082.574l2.46 1.203A2.69 2.69 0 0 1 10 11.625a2.626 2.626 0 1 1-2.625 2.625c0-.164 0-.355.055-.547l-2.461-1.23A2.58 2.58 0 0 1 3 13.375a2.626 2.626 0 0 1 0-5.25c.766 0 1.477.355 1.969.902l2.46-1.203c-.054-.191-.054-.383-.054-.574a2.626 2.626 0 0 1 5.25 0M3 12.063c.465 0 .875-.247 1.121-.657.246-.383.246-.902 0-1.312-.246-.383-.656-.656-1.121-.656-.492 0-.902.273-1.148.656-.247.41-.247.93 0 1.312.246.41.656.656 1.148.656m8.313-4.813c0-.465-.274-.875-.657-1.121-.41-.246-.93-.246-1.312 0-.41.246-.656.656-.656 1.121 0 .492.246.902.656 1.148.383.247.902.247 1.312 0 .383-.246.656-.656.656-1.148M10 15.563c.465 0 .875-.247 1.121-.657.246-.383.246-.902 0-1.312-.246-.383-.656-.656-1.121-.656-.492 0-.902.273-1.148.656-.247.41-.247.93 0 1.312.246.41.656.656 1.148.656' />
    </g>
    <defs>
      <clipPath id='a8105dbf0a8441c2558d2519211376f8__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareNodesSmBoldIcon);
export default ForwardRef;
