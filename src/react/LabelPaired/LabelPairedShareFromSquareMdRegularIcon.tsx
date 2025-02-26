import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareFromSquareMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.5 12.75c0 .156.094.25.25.25.063 0 .125 0 .156-.062l4.031-3.813c.032-.031.032-.062.032-.125 0-.031 0-.062-.032-.094l-4.03-3.812A.17.17 0 0 0 12.75 5a.247.247 0 0 0-.25.25V7c0 .281-.25.5-.5.5H9c-2.219 0-4 1.813-4 4 0 1.125.469 1.938 1.031 2.531C6 13.875 6 13.72 6 13.562 6 11.876 7.344 10.5 9.031 10.5H12c.25 0 .5.25.5.5v1.75m-1-1.25H9.031C7.906 11.5 7 12.438 7 13.563c0 .468.438.968.719 1.25.156.124.281.312.281.53v.032c0 .344-.312.625-.656.625-.063 0-.157 0-.219-.031C6.563 15.719 4 14.438 4 11.5c0-2.75 2.219-5 5-5h2.5V5.25c0-.687.563-1.25 1.25-1.25.313 0 .625.125.844.344l4.031 3.812c.219.219.375.531.375.844 0 .344-.156.625-.375.844l-4.031 3.812c-.219.25-.531.344-.844.344-.687 0-1.25-.531-1.25-1.25V11.5M2 5h1.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H2c-.562 0-1 .469-1 1v11c0 .563.438 1 1 1h11c.531 0 1-.437 1-1v-1.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5V18c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2' />
    </g>
    <defs>
      <clipPath id='697e8fd5f5ee999829b2e7ade02bda1b__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareFromSquareMdRegularIcon);
export default ForwardRef;
