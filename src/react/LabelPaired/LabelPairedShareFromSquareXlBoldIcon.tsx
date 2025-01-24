import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareFromSquareXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m18.75 18 4.969-4.5-4.969-4.453v2.203c0 .422-.375.75-.75.75h-4.5c-2.906 0-5.25 2.39-5.25 5.25 0 .563.047 1.078.234 1.5A5.3 5.3 0 0 1 13.547 15H18c.375 0 .75.375.75.75V18m-3-.75h-2.203c-1.688 0-3.047 1.406-3.047 3.094 0 .422.047.75.188 1.031.093.14.14.281.234.422.047.047.094.094.094.14.046.047.093.047.14.094.094.094.14.14.235.188 0 .047.046.047.046.047.282.234.563.562.563.937 0 .422-.375.797-.844.797h-.14c-.094 0-.235 0-.328-.047s-.235-.094-.376-.187a3 3 0 0 0-.562-.282c-.234-.187-.516-.328-.797-.562C7.593 21.937 6 20.109 6 17.25c0-4.125 3.328-7.5 7.5-7.5h3V7.64c0-.89.703-1.64 1.594-1.64.422 0 .797.188 1.078.422l6.515 5.86c.329.327.563.75.563 1.218 0 .516-.234.938-.562 1.266l-6.516 5.859c-.281.281-.656.375-1.031.375H18a1.48 1.48 0 0 1-1.5-1.5v-2.25zM3.375 7.5h3c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 6.375 9.75h-3a1.11 1.11 0 0 0-1.125 1.125v15.75c0 .656.469 1.125 1.125 1.125h15.75a1.11 1.11 0 0 0 1.125-1.125v-3c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v3C22.5 28.5 20.953 30 19.125 30H3.375A3.36 3.36 0 0 1 0 26.625v-15.75C0 9.047 1.5 7.5 3.375 7.5' />
    </g>
    <defs>
      <clipPath id='a83e184e6ef324feb65e11e3318159c3__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareFromSquareXlBoldIcon);
export default ForwardRef;
