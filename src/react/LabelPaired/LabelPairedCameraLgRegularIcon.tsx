import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraLgRegularIcon = (
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
      <path d='M7.46 6.75h5.04c.82 0 1.523.547 1.797 1.29l.39 1.21H17.5c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5v-10c0-1.367 1.094-2.5 2.5-2.5h2.773l.391-1.21c.274-.743.977-1.29 1.797-1.29m-.624 1.68-.547 1.68c-.078.234-.312.39-.586.39H2.5c-.703 0-1.25.586-1.25 1.25v10c0 .703.547 1.25 1.25 1.25h15c.664 0 1.25-.547 1.25-1.25v-10c0-.664-.586-1.25-1.25-1.25h-3.242a.59.59 0 0 1-.586-.43l-.547-1.64c-.117-.235-.352-.43-.625-.43H7.46c-.272 0-.507.195-.624.43M10 21.125c-1.602 0-3.008-.82-3.79-2.187-.82-1.329-.82-3.008 0-4.375.782-1.329 2.188-2.188 3.79-2.188 1.563 0 2.969.86 3.75 2.188.82 1.367.82 3.046 0 4.374A4.29 4.29 0 0 1 10 21.126M6.875 16.75c0 1.133.586 2.148 1.563 2.734.937.547 2.148.547 3.124 0 .938-.586 1.563-1.601 1.563-2.734 0-1.094-.625-2.11-1.562-2.695-.977-.547-2.188-.547-3.126 0-.976.586-1.562 1.601-1.562 2.695' />
    </g>
    <defs>
      <clipPath id='ab4fae817e79d73475206b7c127123a4__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraLgRegularIcon);
export default ForwardRef;
