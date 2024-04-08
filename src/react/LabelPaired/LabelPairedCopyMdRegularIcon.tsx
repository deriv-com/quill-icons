import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 15c.531 0 1-.437 1-1V7.625a.5.5 0 0 0-.156-.344l-2.125-2.125A.5.5 0 0 0 10.375 5H7c-.562 0-1 .469-1 1v8c0 .563.438 1 1 1zm1.531-8.437c.281.28.469.687.469 1.062V14c0 1.125-.906 2-2 2H7c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h3.375c.375 0 .781.188 1.063.469zM2 8h2v1H2c-.562 0-1 .469-1 1v8c0 .563.438 1 1 1h5c.531 0 1-.437 1-1v-1h1v1c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2v-8c0-1.094.875-2 2-2' />
    </g>
    <defs>
      <clipPath id='ac608f7c1a549f0289c3787390d2bf4f__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyMdRegularIcon);
export default ForwardRef;
