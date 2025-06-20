import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartOhlcLgFillIcon = (
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
      <path d='M12.5 5.5c.664 0 1.25.586 1.25 1.25V8H15c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-1.25v11.25c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V20.5H10c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h1.25V6.75c0-.664.547-1.25 1.25-1.25M4.375 13c.664 0 1.25.586 1.25 1.25v6.25h1.25c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-1.25v1.25c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V18h-1.25c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h1.25v-1.25c0-.664.547-1.25 1.25-1.25m16.25-5c.664 0 1.25.586 1.25 1.25v6.25h1.25c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-1.25v1.25c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V13h-1.25c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h1.25V9.25c0-.664.547-1.25 1.25-1.25' />
    </g>
    <defs>
      <clipPath id='2e913ca65c356adb9061bd7b86d07202__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcLgFillIcon);
export default ForwardRef;
