import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.578 14.25H.875q-.585-.039-.625-.625.039-.585.625-.625h.977q.858-2.773 3.125-4.492Q7.242 6.789 10.25 6.75h1.914q.586.039.625.625-.039.585-.625.625H10.25q-2.5.04-4.375 1.406Q4 10.774 3.18 13h7.695q.585.039.625.625-.039.585-.625.625H2.867a6.8 6.8 0 0 0 0 2.5h8.008q.585.039.625.625-.039.585-.625.625H3.18q.82 2.226 2.695 3.594T10.25 23h1.914q.586.039.625.625-.039.585-.625.625H10.25q-3.008-.039-5.273-1.758Q2.71 20.773 1.852 18H.875q-.585-.039-.625-.625.039-.585.625-.625h.703a10 10 0 0 1 0-2.5' />
    </g>
    <defs>
      <clipPath id='cbd05c261accbe1ca350a4f34dbec29a__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignLgRegularIcon);
export default ForwardRef;
