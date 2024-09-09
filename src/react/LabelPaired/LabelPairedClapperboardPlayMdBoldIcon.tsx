import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedClapperboardPlayMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 17c0 .281.219.5.5.5h12c.25 0 .5-.219.5-.5v-6.5h-13zm9-8h2l2-2c0-.25-.25-.5-.5-.5h-1zm-3 0L10 6.5H8L5.5 9zm-5 0L5 6.5H3L1.5 8v1zM16 7v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2h12c1.094 0 2 .906 2 2m-9.25 4.563c.156-.063.375-.063.5.03l3 2c.156.095.25.25.25.407a.5.5 0 0 1-.25.438l-3 2c-.125.093-.344.093-.5.03A.55.55 0 0 1 6.5 16v-4c0-.156.094-.344.25-.437' />
    </g>
    <defs>
      <clipPath id='0c7c5671b4f7300d3dce62cf2143b994__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedClapperboardPlayMdBoldIcon);
export default ForwardRef;
