import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.563 9.922-4.126 3.937c-.234.211-.585.211-.796-.023s-.211-.586.023-.797l3.117-2.976H.812A.54.54 0 0 1 .25 9.5c0-.305.234-.562.563-.562H8.78L5.664 5.983a.56.56 0 0 1-.023-.796.56.56 0 0 1 .797-.024l4.125 3.938a.58.58 0 0 1 .187.398c0 .164-.07.305-.187.422' />
    </g>
    <defs>
      <clipPath id='6573febd626bb1cd215a575b368e0115__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightCaptionBoldIcon);
export default ForwardRef;
