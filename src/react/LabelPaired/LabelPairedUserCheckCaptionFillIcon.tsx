import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserCheckCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 6.5c0-1.055.563-2.04 1.5-2.578a2.99 2.99 0 0 1 3 0c.914.539 1.5 1.523 1.5 2.578a3.03 3.03 0 0 1-1.5 2.602c-.937.539-2.086.539-3 0A2.98 2.98 0 0 1 2.25 6.5M0 14.82a4.17 4.17 0 0 1 4.172-4.195h2.133A4.19 4.19 0 0 1 10.5 14.82c0 .375-.328.68-.703.68H.68a.68.68 0 0 1-.68-.68m14.648-7.172-3 3c-.234.235-.585.235-.796 0l-1.5-1.5a.513.513 0 0 1 0-.773c.21-.234.562-.234.796 0l1.102 1.102 2.602-2.625c.21-.211.562-.211.773 0 .234.234.234.585 0 .796z' />
    </g>
    <defs>
      <clipPath id='4a0f6eb81e04c707e1f877e489bc94be__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserCheckCaptionFillIcon);
export default ForwardRef;
