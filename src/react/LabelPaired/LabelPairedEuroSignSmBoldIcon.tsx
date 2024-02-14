import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignSmBoldIcon = (
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
      <path d='M1.465 10.313H.78q-.601-.056-.656-.657Q.179 9.055.781 9h.903q.6-1.94 2.187-3.145 1.586-1.203 3.692-1.23h.656q.601.054.656.656-.054.601-.656.657h-.656q-1.56.027-2.735.847A4.87 4.87 0 0 0 3.078 9h4.266q.601.054.656.656-.054.602-.656.656H2.777a3.5 3.5 0 0 0 0 .876h4.567q.601.054.656.656-.054.601-.656.656H3.078q.547 1.368 1.75 2.215 1.176.82 2.734.848h.657q.601.054.656.656-.054.601-.656.656h-.656q-2.106-.027-3.692-1.23T1.684 12.5H.78q-.601-.055-.656-.656.054-.602.656-.656h.684a3.5 3.5 0 0 1 0-.876' />
    </g>
    <defs>
      <clipPath id='b98d5c8a06ef368657e538fcf45c7127__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignSmBoldIcon);
export default ForwardRef;
