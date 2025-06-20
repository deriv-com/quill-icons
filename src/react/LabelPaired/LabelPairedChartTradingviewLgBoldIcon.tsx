import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTradingviewLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.375 5.5a.95.95 0 0 1 .938.938v16.601c0 .352.234.586.585.586h14.375c.547 0 .938.43.938.938 0 .546-.39.937-.938.937H5.195a1.75 1.75 0 0 1-1.758-1.758V6.438c0-.508.391-.938.938-.938m16.563 7.813c.39.351.39.937 0 1.328l-6.094 6.093a1.556 1.556 0 0 1-2.227 0l-1.367-1.406-2.46 2.461c-.392.39-.977.39-1.33 0-.39-.352-.39-.937 0-1.328l2.657-2.656a1.556 1.556 0 0 1 2.227 0l1.406 1.406 5.86-5.898c.39-.391.976-.391 1.328 0M14.18 8.898c0 .47-.43.86-.899.86-.508 0-.937-.39-.937-.86 0-.468.43-.859.937-.859.469 0 .899.39.899.86M14.883 8h1.367l-1.836 5h-1.367zM8.75 8h3.164v5h-1.21V9.133H8.75z' />
    </g>
    <defs>
      <clipPath id='79cffd1b083228661288116783e48b92__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTradingviewLgBoldIcon);
export default ForwardRef;
