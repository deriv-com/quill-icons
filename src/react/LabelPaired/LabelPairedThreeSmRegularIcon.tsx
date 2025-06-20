import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeSmRegularIcon = (
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
      <path d='M.125 5.063a.45.45 0 0 1 .438-.438H8c.164 0 .328.11.383.3a.38.38 0 0 1-.11.466L3.406 9.875h1.969c1.914 0 3.5 1.586 3.5 3.5 0 1.941-1.586 3.5-3.5 3.5H2.559c-.985 0-1.914-.547-2.352-1.45l-.055-.081a.45.45 0 0 1 .192-.602.45.45 0 0 1 .601.192l.055.109c.3.602.902.957 1.559.957h2.816a2.626 2.626 0 0 0 0-5.25H2.313a.42.42 0 0 1-.41-.273.38.38 0 0 1 .109-.465L6.879 5.5H.563a.43.43 0 0 1-.438-.437' />
    </g>
    <defs>
      <clipPath id='873328c603dad1ee501564234a70d285__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeSmRegularIcon);
export default ForwardRef;
