import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchRotateCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.625 5.375c0-1.031.82-1.875 1.875-1.875H7a1.88 1.88 0 0 1 1.875 1.875v2.906c-.117.047-.234.117-.352.164a1.2 1.2 0 0 0-.773-.422V5.375a.77.77 0 0 0-.75-.75h-.75V5c0 .21-.187.375-.375.375h-2.25A.37.37 0 0 1 3.25 5v-.375H2.5a.755.755 0 0 0-.75.75v8.25c0 .422.328.75.75.75h4.406c.235.375.54.703.867.96A1.8 1.8 0 0 1 7 15.5H2.5a1.85 1.85 0 0 1-1.875-1.875zM7 9.313c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563v.304a3.32 3.32 0 0 1 2.25-.867c1.383 0 2.555.844 3.094 2.04a.56.56 0 0 1-.305.726c-.281.14-.61 0-.726-.282a2.27 2.27 0 0 0-2.063-1.359c-.68 0-1.266.305-1.687.75h.75a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H7.562A.54.54 0 0 1 7 11.188zm.281 4.171c-.14-.28 0-.609.282-.75.28-.117.609.024.75.305.328.797 1.124 1.336 2.062 1.336.656 0 1.266-.281 1.664-.75h-.726a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563h1.874a.57.57 0 0 1 .563.563v1.874a.555.555 0 0 1-.562.563.54.54 0 0 1-.563-.562v-.282c-.61.54-1.406.844-2.25.844a3.33 3.33 0 0 1-3.094-2.016' />
    </g>
    <defs>
      <clipPath id='5c9fbcab322dba903576d247088400c3__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchRotateCaptionBoldIcon);
export default ForwardRef;
