import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 5.363c.082-.41.438-.738.875-.738h5.25A.9.9 0 0 1 8 5.5c0 .492-.41.875-.875.875h-4.54L2.04 9.438h3.117a3.723 3.723 0 0 1 3.719 3.718 3.705 3.705 0 0 1-3.719 3.719H2.86a2.87 2.87 0 0 1-2.543-1.559l-.109-.218a.867.867 0 0 1 .383-1.176.866.866 0 0 1 1.176.383l.109.218c.191.383.574.602.984.602h2.297a1.98 1.98 0 0 0 1.969-1.969c0-1.066-.902-1.969-1.969-1.969H1a.89.89 0 0 1-.684-.3.84.84 0 0 1-.191-.711z' />
    </g>
    <defs>
      <clipPath id='24807992f79d1d1b746f192eb3df149b__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveSmFillIcon);
export default ForwardRef;
