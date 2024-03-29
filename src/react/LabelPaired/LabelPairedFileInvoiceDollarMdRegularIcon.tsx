import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11 18v-8H7.5A1.48 1.48 0 0 1 6 8.5V5H2c-.562 0-1 .469-1 1v12c0 .563.438 1 1 1h8c.531 0 1-.437 1-1m-.031-9c-.031-.062-.063-.156-.125-.219L7.219 5.156c-.063-.062-.157-.093-.219-.125V8.5c0 .281.219.5.5.5zM0 6c0-1.094.875-2 2-2h4.875c.375 0 .781.188 1.063.469l3.593 3.593c.281.282.469.688.469 1.063V18c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm2 .5c0-.25.219-.5.5-.5h2c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-2a.494.494 0 0 1-.5-.5m0 2c0-.25.219-.5.5-.5h2c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-2a.494.494 0 0 1-.5-.5m4.5 3.125v.438c.25.03.5.062.719.124a.494.494 0 0 1 .375.594.494.494 0 0 1-.594.375c-.344-.062-.687-.125-1.031-.125-.25-.031-.563.031-.75.156-.188.094-.219.188-.219.282 0 .062 0 .125.188.219.218.124.53.187.937.312.344.094.781.219 1.125.406.375.188.719.563.75 1.125 0 .594-.344.969-.75 1.219-.219.125-.5.188-.75.25v.406c0 .282-.25.5-.5.5a.494.494 0 0 1-.5-.5v-.437a7 7 0 0 1-.969-.25c-.062-.032-.125-.032-.187-.063-.25-.062-.407-.343-.344-.625.094-.25.375-.406.625-.343.094.03.156.062.219.093.437.125.781.219 1.156.219a1.47 1.47 0 0 0 .781-.125c.157-.094.219-.219.219-.344 0-.062-.031-.156-.219-.25-.218-.125-.531-.219-.937-.312l-.032-.031c-.343-.094-.75-.188-1.093-.376-.344-.187-.719-.53-.719-1.093 0-.594.375-.969.75-1.188.25-.125.5-.187.75-.219v-.437c0-.281.219-.5.5-.5s.5.219.5.5' />
    </g>
    <defs>
      <clipPath id='d48b90032380819487b3eba5c71002f0__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarMdRegularIcon);
export default ForwardRef;
