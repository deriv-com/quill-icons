import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCirclePlusCaptionFillIcon = (
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
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m-.562-3.937c0 .328.234.562.562.562a.555.555 0 0 0 .563-.562v-1.5h1.5a.555.555 0 0 0 .562-.563.57.57 0 0 0-.562-.562h-1.5v-1.5A.57.57 0 0 0 6 6.875a.555.555 0 0 0-.562.563v1.5h-1.5a.555.555 0 0 0-.563.562c0 .328.234.563.563.563h1.5z' />
    </g>
    <defs>
      <clipPath id='440034080ca1c49e131de248be750cf4__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCirclePlusCaptionFillIcon);
export default ForwardRef;
