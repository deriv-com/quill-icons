import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashSmBoldIcon = (
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
      <path d='M5.215 5.063q-.11 0-.164.109l-.52.766h3.965l-.52-.766q-.082-.11-.19-.11zm4.84.875h1.914q.601.054.656.656-.055.601-.656.656h-.328l-.657 8.887a1.72 1.72 0 0 1-.546 1.148q-.493.438-1.176.465H3.738a1.83 1.83 0 0 1-1.175-.465 1.72 1.72 0 0 1-.547-1.148L1.359 7.25h-.328Q.43 7.196.375 6.594q.054-.601.656-.657h1.914l1.012-1.503q.466-.657 1.258-.684h2.57q.793.027 1.285.684zm.273 1.312H2.672l.629 8.777q.081.384.437.41h5.524q.356-.027.437-.41z' />
    </g>
    <defs>
      <clipPath id='37fb853301858e127f22ff24e4c46d2e__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashSmBoldIcon);
export default ForwardRef;
