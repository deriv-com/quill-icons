import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.563 4.063V5.21q.984.117 1.687.305.492.164.398.68-.164.491-.656.421-.562-.141-1.289-.258a7 7 0 0 0-1.383-.046q-.68.046-1.078.304-.35.21-.469.703-.069.399.047.586.095.188.399.399.704.374 1.922.656h.046q.563.14 1.125.328.587.165 1.055.445.516.306.82.868.282.562.141 1.289-.304 1.242-1.5 1.64-.585.234-1.266.258v1.149q-.045.514-.562.562-.516-.047-.562-.562v-1.172H3.32a.3.3 0 0 0-.117-.024q-.469-.07-1.101-.234a7.6 7.6 0 0 1-1.149-.375q-.445-.235-.281-.727.258-.468.75-.304.399.187.96.328.564.14.985.21 1.266.165 2.04-.14.726-.305.82-.82.069-.399-.047-.586-.094-.188-.399-.399-.703-.374-1.922-.656h-.046q-.563-.14-1.126-.328a4.3 4.3 0 0 1-1.054-.445 2.2 2.2 0 0 1-.82-.868Q.53 7.836.672 7.11q.21-.984.984-1.453a3.5 3.5 0 0 1 1.57-.468h.212V4.063Q3.483 3.547 4 3.5q.516.047.563.563' />
    </g>
    <defs>
      <clipPath id='0c7c7bcd39d643edd0e503024de6e6ee__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignCaptionBoldIcon);
export default ForwardRef;
