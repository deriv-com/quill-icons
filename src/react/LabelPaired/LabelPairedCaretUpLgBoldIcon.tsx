import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpLgBoldIcon = (
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
      <path d='m6.5 12.648-3.516 3.477h6.993zm-.898-1.757a1.205 1.205 0 0 1 1.757 0l5 5c.352.351.47.898.274 1.367A1.19 1.19 0 0 1 11.5 18h-10c-.508 0-.977-.273-1.172-.742a1.26 1.26 0 0 1 .274-1.367z' />
    </g>
    <defs>
      <clipPath id='4cd2b37021b93df56fc5e5ddb435960b__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpLgBoldIcon);
export default ForwardRef;
