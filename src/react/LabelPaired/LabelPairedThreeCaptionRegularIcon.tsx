import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeCaptionRegularIcon = (
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
      <path d='M.25 4.625q.023-.352.375-.375H7q.258 0 .352.234a.42.42 0 0 1-.094.422L3.086 8.75H4.75q1.266.024 2.133.867.843.868.867 2.133-.024 1.266-.867 2.133-.868.843-2.133.867H2.336q-.633 0-1.172-.328a2.1 2.1 0 0 1-.82-.914l-.047-.094q-.141-.328.164-.492.305-.141.492.164L1 13.18q.445.796 1.336.82H4.75q.96-.024 1.594-.656.632-.633.656-1.594-.024-.96-.656-1.594Q5.71 9.523 4.75 9.5H2.125q-.259 0-.352-.234a.42.42 0 0 1 .094-.422L6.04 5H.625Q.273 4.977.25 4.625' />
    </g>
    <defs>
      <clipPath id='d56878db078cd843__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeCaptionRegularIcon);
export default ForwardRef;
