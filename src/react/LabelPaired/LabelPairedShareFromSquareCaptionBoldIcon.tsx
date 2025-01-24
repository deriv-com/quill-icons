import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareFromSquareCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m9.625 9.5 2.484-2.25-2.484-2.227v1.102c0 .21-.187.375-.375.375H7a2.636 2.636 0 0 0-2.625 2.625c0 .281.023.54.117.75A2.65 2.65 0 0 1 7.023 8H9.25c.188 0 .375.188.375.375V9.5m-1.5-.375H7.023c-.843 0-1.523.703-1.523 1.547 0 .21.023.375.094.515.047.07.07.141.117.211.023.024.047.047.047.07.023.024.047.024.07.048.047.046.07.07.117.093 0 .024.024.024.024.024.14.117.281.281.281.469 0 .21-.187.398-.422.398h-.07c-.047 0-.117 0-.164-.023-.047-.024-.117-.047-.188-.094a1.6 1.6 0 0 0-.281-.14c-.117-.095-.258-.165-.398-.282-.68-.492-1.477-1.406-1.477-2.836A3.746 3.746 0 0 1 7 5.375h1.5V4.32a.81.81 0 0 1 .797-.82c.21 0 .398.094.539.21l3.258 2.93c.164.165.281.376.281.61a.89.89 0 0 1-.281.633l-3.258 2.93c-.14.14-.328.187-.516.187h-.07a.74.74 0 0 1-.75-.75V9.125zM1.938 4.25h1.5A.57.57 0 0 1 4 4.813a.555.555 0 0 1-.562.562h-1.5a.555.555 0 0 0-.563.563v7.875c0 .328.234.562.563.562h7.875a.555.555 0 0 0 .562-.562v-1.5c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563v1.5c0 .937-.773 1.687-1.687 1.687H1.936A1.68 1.68 0 0 1 .25 13.813V5.937c0-.914.75-1.687 1.688-1.687' />
    </g>
    <defs>
      <clipPath id='46948724337d83419e899c541fc1eaef__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareFromSquareCaptionBoldIcon);
export default ForwardRef;
