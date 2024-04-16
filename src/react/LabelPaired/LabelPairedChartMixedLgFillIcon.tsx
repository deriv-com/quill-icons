import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m19.531 8.977-6.25 5c-.469.39-1.094.39-1.562.039L7.5 10.852l-5.469 4.375a1.245 1.245 0 0 1-1.758-.196c-.43-.508-.351-1.328.196-1.758l6.25-5c.43-.351 1.054-.351 1.523 0l4.219 3.165 5.508-4.415c.508-.43 1.328-.312 1.758.196.43.547.312 1.328-.196 1.758M6.25 15.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25V23c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25zm-5 3.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25V23c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25zm11.25-2.5c.664 0 1.25.586 1.25 1.25v5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-5c0-.664.547-1.25 1.25-1.25m3.75-1.25c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25V23c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25z' />
    </g>
    <defs>
      <clipPath id='6fd14413640625cb998986ce0b882d53__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedLgFillIcon);
export default ForwardRef;
