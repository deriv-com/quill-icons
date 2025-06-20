import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketCaptionBoldIcon = (
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
      <path d='m5.898 3.664 2.977 3c.234.234.234.586 0 .797-.21.234-.562.234-.797 0L6.04 5.42v5.767a.54.54 0 0 1-.562.562.555.555 0 0 1-.563-.562V5.422L2.875 7.46a.513.513 0 0 1-.773 0c-.235-.211-.235-.563 0-.797l3-3c.21-.21.562-.21.796 0m-4.523 7.899v1.874c0 .54.398.938.938.938h6.374a.925.925 0 0 0 .938-.937v-1.876c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563v1.874A2.066 2.066 0 0 1 8.688 15.5H2.311A2.05 2.05 0 0 1 .25 13.438v-1.876c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563' />
    </g>
    <defs>
      <clipPath id='00dc8bc84819ee2a6634420f09311f33__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketCaptionBoldIcon);
export default ForwardRef;
