import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 3.75q.41.027.438.438v2.187q-.029.41-.438.438-.41-.029-.437-.438V4.188Q6.59 3.777 7 3.75m-7 7q.027-.41.438-.437h2.187q.41.027.438.437-.029.41-.438.438H.438Q.027 11.16 0 10.75m10.938 0q.027-.41.437-.437h2.188q.41.027.437.437-.027.41-.437.438h-2.188q-.41-.028-.437-.438M7 14.688q.41.027.438.437v2.188q-.029.41-.438.437-.41-.027-.437-.437v-2.188q.027-.41.437-.437M2.05 5.8q.3-.246.63 0l1.53 1.558q.247.3 0 .602-.3.273-.6 0L2.05 6.43q-.245-.33 0-.63m0 9.898q-.245-.3 0-.629l1.56-1.53q.3-.247.6 0 .274.3 0 .6L2.68 15.7q-.33.245-.63 0m7.74-7.738q-.247-.3 0-.602l1.53-1.558q.33-.246.63 0 .245.3 0 .629l-1.56 1.53q-.3.247-.6 0m0 5.578q.3-.246.6 0l1.56 1.531q.245.33 0 .63-.3.245-.63 0l-1.53-1.56q-.247-.3 0-.6m-.602-2.789Q9.16 9.52 8.094 8.863q-1.095-.6-2.188 0-1.065.657-1.093 1.887.027 1.23 1.093 1.887 1.095.6 2.188 0 1.065-.657 1.094-1.887m-5.25 0q0-.82.41-1.531a3 3 0 0 1 1.12-1.121q.712-.41 1.532-.41t1.531.41 1.121 1.12q.41.712.41 1.532t-.41 1.531a3 3 0 0 1-1.12 1.121q-.712.41-1.532.41a3 3 0 0 1-1.531-.41 3 3 0 0 1-1.121-1.12 3 3 0 0 1-.41-1.532' />
    </g>
    <defs>
      <clipPath id='f9862d55c9cb33ceb0e852e55a1d1815__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightSmRegularIcon);
export default ForwardRef;
