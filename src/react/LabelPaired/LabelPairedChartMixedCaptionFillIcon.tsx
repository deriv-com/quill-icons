import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedCaptionFillIcon = (
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
      <path d='m11.719 5.586-3.75 3a.74.74 0 0 1-.938.023L4.5 6.711 1.219 9.336a.747.747 0 0 1-1.055-.117.75.75 0 0 1 .117-1.055l3.75-3a.74.74 0 0 1 .914 0l2.532 1.899 3.304-2.649c.305-.258.797-.187 1.055.117a.77.77 0 0 1-.117 1.055M3.75 9.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75V14c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75zm-3 2.25c0-.398.328-.75.75-.75.398 0 .75.352.75.75V14c0 .422-.352.75-.75.75A.74.74 0 0 1 .75 14zm6.75-1.5c.398 0 .75.352.75.75v3c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-3c0-.398.328-.75.75-.75m2.25-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75V14c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75z' />
    </g>
    <defs>
      <clipPath id='537259498b1533d9fe0b1b08fefa5bc0__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedCaptionFillIcon);
export default ForwardRef;
