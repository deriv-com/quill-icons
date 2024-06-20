import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarCaptionBoldIcon = (
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
      <path d='M6.977 3.5c.234 0 .421.14.515.328L9.11 7.133l3.586.539c.211.023.375.164.446.375.07.21.023.422-.141.586l-2.602 2.578.61 3.633a.56.56 0 0 1-.211.562.63.63 0 0 1-.61.047l-3.21-1.734-3.188 1.734a.63.63 0 0 1-.61-.047.58.58 0 0 1-.21-.562l.61-3.633L.976 8.633a.55.55 0 0 1-.141-.586c.07-.188.234-.352.445-.375l3.586-.54 1.617-3.304a.57.57 0 0 1 .493-.328m0 1.852-1.22 2.554c-.093.164-.234.282-.421.305l-2.766.398 1.993 1.993c.14.14.21.328.164.492l-.47 2.812 2.462-1.312a.55.55 0 0 1 .539 0l2.46 1.312-.468-2.789a.49.49 0 0 1 .164-.492l1.992-2.016-2.765-.398c-.188-.024-.328-.14-.422-.305z' />
    </g>
    <defs>
      <clipPath id='a77f1fc0a726466edd4153d22c068fea__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarCaptionBoldIcon);
export default ForwardRef;
