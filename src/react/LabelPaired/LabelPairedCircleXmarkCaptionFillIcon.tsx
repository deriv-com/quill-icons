import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleXmarkCaptionFillIcon = (
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
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3M4.102 7.602c-.235.234-.235.585 0 .796L5.203 9.5l-1.101 1.102c-.235.234-.235.585 0 .796.21.235.562.235.773 0l1.102-1.101 1.101 1.101c.234.235.586.235.797 0 .234-.21.234-.562 0-.796L6.773 9.5l1.102-1.102c.234-.21.234-.562 0-.796-.21-.211-.562-.211-.797 0L5.977 8.703 4.875 7.602a.55.55 0 0 0-.773 0' />
    </g>
    <defs>
      <clipPath id='1e723fe26fcf6cd29871adccd8e1a3b7__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleXmarkCaptionFillIcon);
export default ForwardRef;
