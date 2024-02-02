import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.793 4.242 1.75 3.61 3.938.601a.86.86 0 0 1 .71.574.91.91 0 0 1-.218.903l-2.844 2.816.656 3.992q.082.52-.355.848a.815.815 0 0 1-.903.055L8 15.78l-3.5 1.86q-.492.246-.93-.055a.9.9 0 0 1-.355-.848l.683-3.992L1.055 9.93a.835.835 0 0 1-.22-.903q.165-.492.685-.574l3.937-.601 1.75-3.61q.274-.465.793-.492.547.027.793.492' />
    </g>
    <defs>
      <clipPath id='4a3856912c57e4c1c2eeb342a9eb525f__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarSmFillIcon);
export default ForwardRef;
