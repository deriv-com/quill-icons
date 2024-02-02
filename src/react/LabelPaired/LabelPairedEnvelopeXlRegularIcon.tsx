import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 10.5q-.656 0-1.078.422Q1.5 11.343 1.5 12v1.875l9.188 6.703q1.312.891 2.624 0l9.188-6.703V12q0-.656-.422-1.078Q21.657 10.5 21 10.5zm-1.5 5.25V24q0 .657.422 1.078.421.422 1.078.422h18q.657 0 1.078-.422.422-.421.422-1.078v-8.25l-8.297 6.047q-.984.75-2.203.75t-2.203-.75zM0 12q.047-1.266.89-2.11Q1.735 9.048 3 9h18q1.266.047 2.11.89.843.844.89 2.11v12q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 25.265 0 24z' />
    </g>
    <defs>
      <clipPath id='9988f879415879d7__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeXlRegularIcon);
export default ForwardRef;
