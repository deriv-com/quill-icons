import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.25 5.75c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75A.76.76 0 0 0 6 5a.74.74 0 0 0-.75.75m2.5 0a1.76 1.76 0 0 1-.875 1.531c-.562.313-1.219.313-1.75 0-.562-.312-.875-.875-.875-1.531 0-.625.313-1.187.875-1.5.531-.312 1.188-.312 1.75 0 .531.313.875.875.875 1.5M5.594 9c-.219 0-.407.063-.594.125V14h2V9zM5 19.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-9.156L2.438 13.25a.513.513 0 0 1-.688.219c-.25-.156-.344-.438-.219-.688l1.844-3.437A2.53 2.53 0 0 1 5.594 8H10V5.5A1.5 1.5 0 0 1 11.5 4h7c.813 0 1.5.688 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-7a1.48 1.48 0 0 1-1.5-1.5V10h1v2.5c0 .281.219.5.5.5h7c.25 0 .5-.219.5-.5v-7c0-.25-.25-.5-.5-.5h-7c-.281 0-.5.25-.5.5V8h1.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H8v10.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V15H5z' />
    </g>
    <defs>
      <clipPath id='73449df324a1ec1685aa7a4e7db46215__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardMdRegularIcon);
export default ForwardRef;
