import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.242 4.625a.43.43 0 0 0-.383.219l-.41.656h4.102l-.41-.656a.43.43 0 0 0-.383-.219zM9.59 5.5h2.598q.41.027.437.438-.027.41-.437.437h-.493l-.71 9.762a1.72 1.72 0 0 1-.547 1.148q-.493.438-1.204.465H3.766q-.711-.027-1.203-.465a1.72 1.72 0 0 1-.547-1.148l-.711-9.762H.813q-.411-.027-.438-.437.027-.411.438-.438H3.41l.711-1.121q.41-.601 1.121-.629h2.516q.71.027 1.12.629zm1.23.875H2.18l.71 9.68a.82.82 0 0 0 .274.574.82.82 0 0 0 .602.246h5.468a.82.82 0 0 0 .602-.246.82.82 0 0 0 .273-.574z' />
    </g>
    <defs>
      <clipPath id='e595d3c484b921f75662ca317be71d9e__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashSmRegularIcon);
export default ForwardRef;
