import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSmRegularIcon = (
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
      <path d='M7 3.75q.41.027.438.438v1.34q1.942.19 3.28 1.503 1.313 1.34 1.505 3.282h1.34q.41.027.437.437-.027.41-.437.438h-1.34q-.193 1.94-1.504 3.28-1.34 1.313-3.281 1.505v1.34q-.029.41-.438.437-.41-.027-.437-.437v-1.34Q4.62 15.78 3.28 14.469q-1.312-1.34-1.504-3.281H.437Q.028 11.16 0 10.75q.027-.41.438-.437h1.34Q1.967 8.37 3.28 7.03q1.34-1.312 3.282-1.504v-1.34q.027-.41.437-.437m-4.375 7q0 1.176.574 2.188a4.56 4.56 0 0 0 1.614 1.613 4.46 4.46 0 0 0 4.375 0 4.56 4.56 0 0 0 1.613-1.614 4.36 4.36 0 0 0 .574-2.187q0-1.176-.574-2.187a4.56 4.56 0 0 0-1.614-1.614 4.46 4.46 0 0 0-4.374 0 4.56 4.56 0 0 0-1.614 1.614 4.36 4.36 0 0 0-.574 2.187m6.125 0q-.027-.985-.875-1.504-.875-.492-1.75 0-.848.52-.875 1.504.027.985.875 1.504.875.492 1.75 0 .848-.52.875-1.504m-4.375 0q0-.71.355-1.312t.957-.958A2.63 2.63 0 0 1 7 8.125a2.63 2.63 0 0 1 2.27 1.313q.355.6.355 1.312 0 .711-.355 1.313-.356.6-.957.957A2.63 2.63 0 0 1 7 13.375a2.63 2.63 0 0 1-2.27-1.312 2.53 2.53 0 0 1-.355-1.313' />
    </g>
    <defs>
      <clipPath id='1d7965f99a8aafced0477f8dd6187234__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSmRegularIcon);
export default ForwardRef;
