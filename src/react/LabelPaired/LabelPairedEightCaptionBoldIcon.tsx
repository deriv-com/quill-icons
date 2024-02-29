import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightCaptionBoldIcon = (
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
      <path d='M7.375 7.156q-.046 1.36-1.008 2.203.633.399 1.008 1.032.375.656.375 1.453-.024 1.242-.844 2.062t-2.062.844H3.156q-1.242-.024-2.062-.844T.25 11.844q0-.797.375-1.453a3 3 0 0 1 1.008-1.032Q.673 8.516.625 7.156q.024-1.242.844-2.062T3.53 4.25h.938q1.242.024 2.062.844t.844 2.062m-2.906 2.907H3.156q-.75.023-1.265.515-.492.516-.516 1.266.024.75.516 1.265.515.493 1.265.516h1.688q.75-.023 1.265-.516.493-.515.516-1.265a1.85 1.85 0 0 0-.516-1.266 1.85 1.85 0 0 0-1.265-.515zm0-1.126q.75-.023 1.265-.515.493-.516.516-1.266a1.85 1.85 0 0 0-.516-1.265 1.85 1.85 0 0 0-1.265-.516H3.53q-.75.024-1.265.516-.492.515-.516 1.265.024.75.516 1.266.515.492 1.265.515z' />
    </g>
    <defs>
      <clipPath id='e0a7e744ffcc27717a8941c6c585328a__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightCaptionBoldIcon);
export default ForwardRef;
