import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.125 10.5c0-1.094-.625-2.11-1.562-2.695-.977-.547-2.188-.547-3.126 0-.976.586-1.562 1.601-1.562 2.695 0 1.133.586 2.148 1.563 2.734.937.547 2.148.547 3.125 0 .937-.586 1.562-1.601 1.562-2.734M4 10.5c0-1.758.938-3.398 2.5-4.297 1.523-.898 3.438-.898 5 0 1.523.899 2.5 2.54 2.5 4.297 0 1.797-.977 3.438-2.5 4.336-1.562.898-3.477.898-5 0A4.97 4.97 0 0 1 4 10.5M2.164 23.625h13.633c-.352-2.46-2.461-4.375-5.04-4.375H7.204c-2.578 0-4.687 1.914-5.039 4.375m-1.914.742c0-3.867 3.086-6.992 6.953-6.992h3.555a6.985 6.985 0 0 1 6.992 6.992c0 .625-.547 1.133-1.172 1.133H1.383A1.134 1.134 0 0 1 .25 24.367' />
    </g>
    <defs>
      <clipPath id='9231a1c8dfdb6421bfd53bd8f78ce886__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserLgBoldIcon);
export default ForwardRef;
