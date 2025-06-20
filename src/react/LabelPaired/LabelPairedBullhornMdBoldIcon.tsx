import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m13.5 6.313-.344.343A9.72 9.72 0 0 1 6.5 9.5v4.031c2.5.031 4.875 1.063 6.656 2.844l.344.344zM5 8h1.25a8.23 8.23 0 0 0 5.844-2.406l1.187-1.188C13.906 3.781 15 4.22 15 5.125v4.5c.563.281 1 1.031 1 1.875 0 .875-.437 1.625-1 1.906v4.5c0 .907-1.094 1.344-1.719.719l-1.187-1.187c-1.5-1.5-3.5-2.375-5.594-2.407v3.219c0 .969-.812 1.75-1.75 1.75h-1C2.781 20 2 19.219 2 18.25V15c-1.125 0-2-.875-2-2v-3c0-1.094.875-2 2-2zm-1.5 7v3.25c0 .156.094.25.25.25h1c.125 0 .25-.094.25-.25V15zM2 9.5c-.281 0-.5.25-.5.5v3c0 .281.219.5.5.5h3v-4z' />
    </g>
    <defs>
      <clipPath id='1a5ed92ae780122b77ea47895c4760cb__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornMdBoldIcon);
export default ForwardRef;
