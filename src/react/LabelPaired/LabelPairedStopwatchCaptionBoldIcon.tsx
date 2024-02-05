import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchCaptionBoldIcon = (
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
      <path d='M3.625 4.063q.047-.516.563-.563h2.625q.514.047.562.563-.047.514-.562.562h-.75v1.148q1.546.212 2.671 1.196l.68-.68q.399-.328.797 0 .329.399 0 .797l-.727.726q.868 1.219.891 2.813-.047 2.062-1.43 3.445T5.5 15.5q-2.062-.047-3.445-1.43t-1.43-3.445q.046-1.922 1.242-3.258 1.22-1.335 3.07-1.594V4.625h-.75q-.514-.047-.562-.562M5.5 14.375q1.008 0 1.875-.492A3.9 3.9 0 0 0 8.758 12.5a3.82 3.82 0 0 0 0-3.75 3.9 3.9 0 0 0-1.383-1.383A3.74 3.74 0 0 0 5.5 6.875q-1.008 0-1.875.492A3.9 3.9 0 0 0 2.242 8.75a3.82 3.82 0 0 0 0 3.75q.516.868 1.383 1.383a3.74 3.74 0 0 0 1.875.492m.563-5.812V11q-.048.515-.563.563-.516-.048-.562-.563V8.563Q4.983 8.047 5.5 8q.516.047.563.563' />
    </g>
    <defs>
      <clipPath id='31496ac69321b511e360dc2bb10c4b36__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchCaptionBoldIcon);
export default ForwardRef;
