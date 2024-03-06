import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.371 10.559A3.6 3.6 0 0 0 9 8.563q-.027-1.477-1.012-2.489Q6.977 5.09 5.5 5.063q-1.476.027-2.488 1.011Q2.027 7.086 2 8.563a3.6 3.6 0 0 0 .629 1.996q.137.218.355.492.575.738 1.067 1.613.41.793.52 1.586H3.23a3.1 3.1 0 0 0-.329-.957 13 13 0 0 0-.93-1.395l-.437-.601Q.714 10.12.688 8.562q.054-2.05 1.421-3.39Q3.45 3.804 5.5 3.75q2.05.054 3.39 1.422 1.368 1.34 1.422 3.39-.027 1.56-.847 2.735-.219.3-.438.574v.027q-.519.684-.93 1.395a3.1 3.1 0 0 0-.327.957H6.43a4.9 4.9 0 0 1 .52-1.586q.519-.875 1.093-1.613.192-.275.328-.492M5.5 7.25a1.43 1.43 0 0 0-.93.383 1.43 1.43 0 0 0-.383.93q-.027.41-.437.437-.41-.027-.437-.437.027-.93.628-1.56.63-.6 1.559-.628.41.027.438.438-.029.41-.438.437m0 10.5q-.93-.027-1.559-.629-.6-.63-.628-1.558v-.438h4.374v.438q-.027.93-.628 1.558-.63.601-1.559.629' />
    </g>
    <defs>
      <clipPath id='8f78efe266115665b048fdca4c57de6e__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbSmBoldIcon);
export default ForwardRef;
