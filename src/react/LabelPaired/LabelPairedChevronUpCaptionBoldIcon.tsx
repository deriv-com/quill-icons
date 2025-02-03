import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronUpCaptionBoldIcon = (
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
      <path d='M5.602 6.102c.21-.211.562-.211.773 0l4.523 4.5c.211.234.211.585 0 .796-.234.235-.585.235-.796 0L6 7.297l-4.102 4.101c-.234.235-.585.235-.796 0a.513.513 0 0 1 0-.773z' />
    </g>
    <defs>
      <clipPath id='e1d5ddc7f27c823183d015c765c37f38__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpCaptionBoldIcon);
export default ForwardRef;
