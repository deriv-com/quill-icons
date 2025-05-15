import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m4.898 4.438 3.938 4.125c.21.234.21.585-.024.796s-.585.211-.796-.023L5.063 6.219v7.969a.555.555 0 0 1-.563.562.54.54 0 0 1-.562-.562v-7.97L.96 9.337c-.211.234-.563.234-.797.023a.56.56 0 0 1-.023-.796l3.937-4.126A.59.59 0 0 1 4.5 4.25c.14 0 .281.07.398.188' />
    </g>
    <defs>
      <clipPath id='bd8e2553b163c33c72e32d461a3ea1cd__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpCaptionBoldIcon);
export default ForwardRef;
