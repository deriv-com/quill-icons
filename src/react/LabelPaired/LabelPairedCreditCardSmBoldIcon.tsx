import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardSmBoldIcon = (
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
      <path d='M14.125 5.938H1.875q-.41.027-.437.437v.875h13.125v-.875q-.028-.41-.438-.437m.438 3.937H1.438v5.25q.027.41.437.438h12.25q.41-.028.438-.438zM1.874 4.625h12.25q.738.027 1.23.52.493.492.52 1.23v8.75q-.027.738-.52 1.23-.492.493-1.23.52H1.875q-.738-.027-1.23-.52-.493-.492-.52-1.23v-8.75q.027-.738.52-1.23.492-.493 1.23-.52m1.531 8.313H4.72q.601.054.656.656-.054.601-.656.656H3.406q-.601-.055-.656-.656.054-.602.656-.656m3.5 0H9.97q.601.054.656.656-.055.601-.656.656H6.906q-.601-.055-.656-.656.054-.602.656-.656' />
    </g>
    <defs>
      <clipPath id='be2f80fb05f2a7588a472ae4b4bd0fb3__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardSmBoldIcon);
export default ForwardRef;
