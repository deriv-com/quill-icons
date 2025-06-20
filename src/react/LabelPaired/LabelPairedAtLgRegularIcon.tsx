import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtLgRegularIcon = (
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
      <path d='M10 6.75c-4.844 0-8.75 3.945-8.75 8.75A8.736 8.736 0 0 0 10 24.25c.313 0 .625.313.625.625A.64.64 0 0 1 10 25.5a9.97 9.97 0 0 1-10-10c0-5.508 4.453-10 10-10 5.508 0 10 4.492 10 10v.938a3.443 3.443 0 0 1-3.437 3.437c-1.329 0-2.461-.703-3.047-1.797A4.31 4.31 0 0 1 10 19.875 4.37 4.37 0 0 1 5.625 15.5c0-2.383 1.953-4.375 4.375-4.375 1.21 0 2.305.508 3.125 1.328v-.078c0-.312.273-.625.625-.625.313 0 .625.313.625.625v4.063c0 1.21.977 2.187 2.188 2.187 1.171 0 2.187-.977 2.187-2.187V15.5c0-4.805-3.945-8.75-8.75-8.75m3.125 8.75c0-1.094-.625-2.11-1.562-2.695-.977-.547-2.188-.547-3.126 0-.976.586-1.562 1.601-1.562 2.695 0 1.133.586 2.148 1.563 2.734.937.547 2.148.547 3.124 0 .938-.586 1.563-1.601 1.563-2.734' />
    </g>
    <defs>
      <clipPath id='5e6de9739e5f6cbc30e9b1ec80e331a7__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtLgRegularIcon);
export default ForwardRef;
