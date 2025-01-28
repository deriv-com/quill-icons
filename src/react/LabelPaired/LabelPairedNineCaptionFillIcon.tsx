import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineCaptionFillIcon = (
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
      <path d='M1.75 8c0 .82.422 1.547 1.125 1.969.68.398 1.547.398 2.25 0C5.805 9.547 6.25 8.82 6.25 8c0-.797-.445-1.523-1.125-1.945a2.27 2.27 0 0 0-2.25 0C2.172 6.477 1.75 7.203 1.75 8m2.04 3.75C1.82 11.656.25 10.016.25 8A3.746 3.746 0 0 1 4 4.25 3.76 3.76 0 0 1 7.75 8c0 .07-.023.14-.023.188-.024.843-.352 1.64-.891 2.296l-3.399 4.008c-.257.328-.75.352-1.054.094-.328-.258-.352-.75-.094-1.055z' />
    </g>
    <defs>
      <clipPath id='627d42d45f7f31cb7b52a95d7830d6be__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineCaptionFillIcon);
export default ForwardRef;
